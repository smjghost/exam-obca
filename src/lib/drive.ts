export interface DriveFile {
  id: string;
  name: string;
}

/**
 * 获取 OBCA 文件夹下的所有 PDF 文件
 */
export async function getOBCAFiles(accessToken: string): Promise<DriveFile[]> {
  // 1. 查找 OBCA 文件夹
  const folderQuery = encodeURIComponent("name='OBCA' and mimeType='application/vnd.google-apps.folder' and trashed=false");
  const folderRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=${folderQuery}`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  
  if (!folderRes.ok) {
    throw new Error('无法访问 Google Drive，可能是权限或网络问题。');
  }
  
  const folderData = await folderRes.json();
  
  if (!folderData.files || folderData.files.length === 0) {
    throw new Error("未能找到名为 'OBCA' 的文件夹。请确保您的 Google Drive 中存在该文件夹。");
  }
  
  const folderId = folderData.files[0].id;
  
  // 2. 获取该文件夹下的 PDF 文件
  const filesQuery = encodeURIComponent(`'${folderId}' in parents and mimeType='application/pdf' and trashed=false`);
  const filesRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=${filesQuery}&fields=files(id, name)`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  
  if (!filesRes.ok) {
    throw new Error('无法读取文件夹内容。');
  }
  
  const filesData = await filesRes.json();
  
  return filesData.files || [];
}

/**
 * 下载文件并转换为 Base64 编码
 */
export async function downloadFileAsBase64(fileId: string, accessToken: string): Promise<string> {
  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  
  if (!res.ok) {
    throw new Error("下载文件失败，可能是权限或文件过大。");
  }
  
  const blob = await res.blob();
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const base64data = result.split(',')[1];
      resolve(base64data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
