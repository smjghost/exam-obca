import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { FileText, Loader2, BookOpen, AlertCircle, CheckCircle2, ChevronRight, DownloadCloud, Database } from 'lucide-react';
import { getOBCAFiles, downloadFileAsBase64, DriveFile } from '../lib/drive';

export function Dashboard({ token }: { token: string }) {
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [analyzeError, setAnalyzeError] = useState<string | null>(null);

  useEffect(() => {
    getOBCAFiles(token)
      .then((foundFiles) => {
        setFiles(foundFiles);
        setLoadingFiles(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoadingFiles(false);
      });
  }, [token]);

  const handleAnalyze = async (file: DriveFile) => {
    setSelectedFile(file);
    setAnalyzing(true);
    setSummary(null);
    setAnalyzeError(null);
    
    try {
      // 1. 下载文件为 Base64
      const base64 = await downloadFileAsBase64(file.id, token);
      
      // 2. 发送到自定义后端，使用 Gemini 分析总结
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfBase64: base64, filename: file.name }),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || '解析失败，请检查网络或日志。');
      
      setSummary(data.summary);
    } catch (err: any) {
      setAnalyzeError(err.message);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full shadow-sm z-10 shrink-0">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-600" />
            OBCA 备考中心
          </h2>
          <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
            <DownloadCloud className="w-3.5 h-3.5" />
            已连接 Google Drive
          </p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {loadingFiles ? (
            <div className="flex flex-col items-center justify-center p-8 text-slate-400 mt-10">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-3" />
              <span className="text-sm font-medium">正在扫描 Documents/OBCA...</span>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          ) : files.length === 0 ? (
            <div className="p-6 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300 mt-4">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-600 text-sm font-medium">未找到资料</p>
              <p className="text-slate-400 text-xs mt-1">请在您的 Drive 的 OBCA 文件夹中放入 PDF 文件</p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">发现的学习资料</p>
              {files.map((file) => (
                <button
                  key={file.id}
                  onClick={() => handleAnalyze(file)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 ${
                    selectedFile?.id === file.id 
                      ? 'bg-blue-50 border-blue-200 shadow-sm ring-1 ring-blue-500/20' 
                      : 'bg-white hover:bg-slate-50 border-transparent hover:border-slate-200 border'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${selectedFile?.id === file.id ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm font-medium truncate ${selectedFile?.id === file.id ? 'text-blue-900' : 'text-slate-700'}`}>
                      {file.name.replace('.pdf', '')}
                    </h3>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${selectedFile?.id === file.id ? 'text-blue-500' : 'text-slate-300'}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 lg:p-12">
          {/* Header Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center ring-1 ring-blue-100">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">已接入资料库</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-slate-800">{files.length}</p>
                  <p className="text-sm text-slate-400 font-medium">份文件</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center ring-1 ring-emerald-100">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">AI 提炼状态</p>
                <p className="text-xl font-bold text-slate-800">
                  {summary ? '已生成考点总结' : analyzing ? '智能归纳中...' : '待选择提取'}
                </p>
              </div>
            </div>
          </div>

          {/* Reading Area */}
          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm min-h-[600px] overflow-hidden">
            {analyzing ? (
              <div className="flex flex-col items-center justify-center h-[600px] text-slate-500 bg-slate-50/50">
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-100 rounded-full animate-pulse absolute inset-0"></div>
                  <Loader2 className="w-10 h-10 animate-spin text-blue-600 relative z-10 m-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mt-6">Gemini 正在深度解析文档</h3>
                <p className="text-slate-500 mt-2">结合 OceanBase 官方知识库，提炼核心考点...</p>
              </div>
            ) : analyzeError ? (
              <div className="flex flex-col items-center justify-center h-[600px] text-red-500 bg-red-50/30">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <AlertCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">解析失败</h3>
                <p className="text-slate-600 mt-2 max-w-md text-center">{analyzeError}</p>
              </div>
            ) : summary ? (
              <div>
                <div className="bg-slate-50/80 px-8 py-5 border-b border-slate-100 flex items-center justify-between sticky top-0 z-10 backdrop-blur-xl">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">重点提炼</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{selectedFile?.name}</p>
                  </div>
                  <div className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-lg uppercase tracking-wider">
                    AI Generated
                  </div>
                </div>
                <div className="p-8 lg:p-12 prose prose-slate prose-blue max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:border-b prose-h2:pb-4 prose-h2:border-slate-100 prose-li:marker:text-blue-500">
                  <Markdown>{summary}</Markdown>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[600px] text-slate-400">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-10 h-10 text-slate-300" />
                </div>
                <p className="text-xl font-bold text-slate-600">请在左侧选择一份文档开始复习</p>
                <p className="text-sm mt-2 text-slate-400">AI 将自动为您提炼重点知识并生成网页</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
