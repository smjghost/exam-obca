import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ children }) => (
            <div className="w-full overflow-x-auto my-4 rounded-xl border border-slate-700/70 bg-slate-950/70 shadow-lg custom-scrollbar">
              <table className="w-full text-left text-xs lg:text-sm text-slate-300 border-collapse">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-900/90 text-slate-200 border-b border-slate-700 font-semibold">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="py-3 px-4 text-xs lg:text-sm font-bold text-cyan-300 tracking-wide border-b border-slate-700/80 whitespace-nowrap">
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
            <td className="py-2.5 px-4 text-xs lg:text-sm leading-relaxed border-b border-slate-800/40">
              {children}
            </td>
          ),
          p: ({ children }) => (
            <p className="my-2 leading-relaxed text-slate-300">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-cyan-200">
              {children}
            </strong>
          ),
          code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800/90 font-mono text-cyan-400 text-xs">
              {children}
            </code>
          ),
          ul: ({ children }) => (
            <ul className="space-y-1.5 my-2.5 pl-5 list-disc marker:text-cyan-400 text-slate-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-1.5 my-2.5 pl-5 list-decimal marker:text-cyan-400 text-slate-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-cyan-500 pl-4 py-1.5 my-3 bg-cyan-500/5 rounded-r-lg text-slate-300 italic">
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
