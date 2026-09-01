import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`markdown-content min-w-0 max-w-full overflow-hidden break-words ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ children }) => (
            <div className="w-full max-w-full my-4 rounded-xl border border-slate-700/70 bg-slate-950/80 shadow-lg overflow-hidden">
              <div className="px-3 py-1.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 sm:hidden">
                <span className="font-medium text-slate-300">📊 对比表格</span>
                <span className="text-cyan-400 font-mono">👈 左右滑动查看完整列 👉</span>
              </div>
              <div className="w-full overflow-x-auto custom-scrollbar">
                <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse min-w-[500px] sm:min-w-full">
                  {children}
                </table>
              </div>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-900/95 text-slate-200 border-b border-slate-700 font-semibold">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold text-cyan-300 tracking-wide border-b border-slate-700/80 whitespace-nowrap">
              {children}
            </th>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-slate-800/70">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-slate-800/40 transition-colors">
              {children}
            </tr>
          ),
          td: ({ children }) => (
            <td className="py-2.5 px-3 sm:px-4 text-xs sm:text-sm leading-relaxed border-b border-slate-800/40">
              {children}
            </td>
          ),
          p: ({ children }) => (
            <p className="my-2 leading-relaxed text-slate-300 text-xs sm:text-sm lg:text-base break-words">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-cyan-200">
              {children}
            </strong>
          ),
          code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800/90 font-mono text-cyan-400 text-xs break-words inline-block max-w-full overflow-x-auto">
              {children}
            </code>
          ),
          ul: ({ children }) => (
            <ul className="space-y-1.5 my-2.5 pl-4 sm:pl-5 list-disc marker:text-cyan-400 text-slate-300 text-xs sm:text-sm lg:text-base break-words">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-1.5 my-2.5 pl-4 sm:pl-5 list-decimal marker:text-cyan-400 text-slate-300 text-xs sm:text-sm lg:text-base break-words">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed break-words">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-cyan-500 pl-3 sm:pl-4 py-1.5 my-3 bg-cyan-500/5 rounded-r-lg text-slate-300 italic text-xs sm:text-sm break-words">
              {children}
            </blockquote>
          )
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

