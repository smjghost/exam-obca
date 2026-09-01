/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Database, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Award,
  Layers,
  Eye,
  ChevronRight,
  Menu,
  X,
  AlertTriangle,
  Lightbulb,
  Target,
  Search,
  Sparkles,
  Bookmark,
  CheckCircle2,
  Table,
  HelpCircle
} from 'lucide-react';
import { obcaTopics } from './data/topics';
import { examQuestions } from './data/mockQuestions';
import { PracticeQuiz } from './components/PracticeQuiz';
import { QuickReferenceView } from './components/QuickReferenceView';
import { ObcaTopic, TopicSection } from './types';

// Helper to render lucide icon dynamically based on topic iconName
const renderTopicIcon = (iconName: string, className: string = 'w-5 h-5') => {
  switch (iconName) {
    case 'Award': return <Award className={className} />;
    case 'Server': return <Server className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Eye': return <Eye className={className} />;
    default: return <Database className={className} />;
  }
};

type ViewMode = 'cards' | 'quiz' | 'reference';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [activeTopicId, setActiveTopicId] = useState<string>(obcaTopics[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cardSearchQuery, setCardSearchQuery] = useState<string>('');

  const activeTopic = useMemo(() => {
    return obcaTopics.find(t => t.id === activeTopicId) || obcaTopics[0];
  }, [activeTopicId]);

  // Knowledge card search filtering
  const filteredSections = useMemo(() => {
    if (!cardSearchQuery.trim()) {
      return activeTopic.sections;
    }
    const q = cardSearchQuery.toLowerCase();
    return activeTopic.sections.filter(sec => 
      sec.title.toLowerCase().includes(q) || 
      sec.content.toLowerCase().includes(q)
    );
  }, [activeTopic, cardSearchQuery]);

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-slate-950 text-slate-300 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 z-50 shadow-md">
        <div className="flex items-center gap-2.5 font-bold text-slate-100 text-lg">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Database className="w-5 h-5" />
          </div>
          <span>OBCA 备考中心</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">V4.0</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed lg:relative inset-y-0 left-0 z-40 w-72 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800/80 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:bg-slate-900/90 lg:z-10 flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0 pt-16' : '-translate-x-full lg:pt-0'}
      `}>
        {/* App Branding */}
        <div className="hidden lg:flex p-6 border-b border-slate-800/80 items-center gap-3.5">
          <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] text-cyan-400">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black text-slate-100 tracking-tight">OBCA 备考中心</h1>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">V4.0</span>
            </div>
            <p className="text-xs font-medium text-slate-400 mt-0.5">OceanBase 认证助理攻坚库</p>
          </div>
        </div>

        {/* Global Mode Switcher Tabs in Sidebar */}
        <div className="p-3 border-b border-slate-800/60 bg-slate-950/40">
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => {
                setViewMode('cards');
                setIsMobileMenuOpen(false);
              }}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'cards'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4 mb-1" />
              <span>考点卡</span>
            </button>

            <button
              onClick={() => {
                setViewMode('quiz');
                setIsMobileMenuOpen(false);
              }}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'quiz'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Target className="w-4 h-4 mb-1" />
              <span>真题库</span>
            </button>

            <button
              onClick={() => {
                setViewMode('reference');
                setIsMobileMenuOpen(false);
              }}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'reference'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Table className="w-4 h-4 mb-1" />
              <span>速查表</span>
            </button>
          </div>
        </div>

        {/* Topic Navigation (Active when in 'cards' mode) */}
        <div className="flex-1 p-3 space-y-1.5 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {viewMode === 'cards' ? '8 大核心考点模块' : '考点模块索引'}
            </span>
            <span className="text-[10px] text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded">
              8 Modules
            </span>
          </div>

          {obcaTopics.map((topic) => {
            const isActive = viewMode === 'cards' && activeTopic.id === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  setActiveTopicId(topic.id);
                  if (viewMode !== 'cards') {
                    setViewMode('cards');
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all group relative overflow-hidden ${
                  isActive 
                    ? `bg-slate-800/90 shadow-md ${topic.borderColor} border ring-1 ring-inset ring-slate-700` 
                    : 'bg-transparent hover:bg-slate-800/40 border-transparent border'
                }`}
              >
                {isActive && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${topic.bgColor.replace('/10', '/80')}`} />
                )}
                <div className={`p-1.5 rounded-lg transition-colors ${
                  isActive 
                    ? topic.bgColor + ' ' + topic.color 
                    : 'bg-slate-800/60 text-slate-400 group-hover:text-slate-200'
                }`}>
                  {renderTopicIcon(topic.iconName, 'w-4 h-4')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-xs truncate ${isActive ? 'text-slate-100' : 'text-slate-300 group-hover:text-slate-100'}`}>
                    {topic.shortTitle || topic.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {topic.sections.length} 个考点精炼
                  </div>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                  isActive ? `${topic.color} translate-x-0.5` : 'text-slate-400 group-hover:text-slate-400'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer Info */}
        <div className="p-4 border-t border-slate-800/60 bg-slate-950/60 text-xs text-slate-400 space-y-1">
          <div className="flex items-center justify-between">
            <span>收录真题</span>
            <strong className="text-cyan-400">{examQuestions.length} 道</strong>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>及格标准</span>
            <span>60 分 / 纯理论客观题</span>
          </div>
        </div>
      </nav>

      {/* Main Content Stage */}
      <main className="flex-1 h-[100dvh] overflow-y-auto bg-[#0a0f18] pt-16 lg:pt-0 relative custom-scrollbar w-full" style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 py-6 pb-24 lg:px-10 lg:py-10 relative z-10 min-h-full">
          
          {/* Top Mode Header / Tabs Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                  {viewMode === 'cards' && '📚 考点精炼卡'}
                  {viewMode === 'quiz' && '🎯 真题练习库'}
                  {viewMode === 'reference' && '⚡ 核心速查表'}
                </span>
                <span className="text-xs text-slate-400">OBCA V4.0 全真备考</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-slate-100 tracking-tight mt-2">
                {viewMode === 'cards' && activeTopic.title}
                {viewMode === 'quiz' && `真题速测与解析 (${examQuestions.length} 题)`}
                {viewMode === 'reference' && '核心端口、视图与架构速查表'}
              </h2>
              <p className="text-xs lg:text-sm text-slate-400 mt-1">
                {viewMode === 'cards' && activeTopic.description}
                {viewMode === 'quiz' && '支持单选/多选/判断题型筛选，支持选项模拟自测与即时查看官方权威考点解析'}
                {viewMode === 'reference' && '一键速查 OBServer 2881/2882、OBProxy 2883、OCP 8080、F/R/L 副本权限与常用性能视图'}
              </p>
            </div>

            {/* Quick Switch Buttons on Top Right */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'cards' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                考点卡
              </button>
              <button
                onClick={() => setViewMode('quiz')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'quiz' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                真题库 ({examQuestions.length})
              </button>
              <button
                onClick={() => setViewMode('reference')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'reference' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                速查清单
              </button>
            </div>
          </div>

          {/* VIEW 1: Knowledge Cards Mode */}
          {viewMode === 'cards' && (
            <div className="space-y-6">
              {/* Card Search Box */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={`在当前【${activeTopic.shortTitle || activeTopic.title}】模块内搜索考点...`}
                  value={cardSearchQuery}
                  onChange={(e) => setCardSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                />
              </div>

              {/* Sections List */}
              <div className="grid gap-6">
                {filteredSections.map((section, idx) => {
                  let cardStyle = '';
                  let iconNode = null;
                  let badgeText = '基础概念';

                  if (section.type === 'high-freq') {
                    cardStyle = 'border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-slate-900/60 shadow-[0_0_20px_rgba(245,158,11,0.05)]';
                    iconNode = <Target className="w-5 h-5 text-amber-400" />;
                    badgeText = '高频必考';
                  } else if (section.type === 'trap') {
                    cardStyle = 'border-rose-500/30 bg-gradient-to-br from-rose-500/10 to-slate-900/60 shadow-[0_0_20px_rgba(244,63,94,0.05)]';
                    iconNode = <AlertTriangle className="w-5 h-5 text-rose-400" />;
                    badgeText = '真题陷阱';
                  } else if (section.type === 'formula') {
                    cardStyle = 'border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-900/60 shadow-[0_0_20px_rgba(59,130,246,0.05)]';
                    iconNode = <Cpu className="w-5 h-5 text-blue-400" />;
                    badgeText = '计算公式';
                  } else if (section.type === 'comparison') {
                    cardStyle = 'border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-slate-900/60 shadow-[0_0_20px_rgba(99,102,241,0.05)]';
                    iconNode = <Layers className="w-5 h-5 text-indigo-400" />;
                    badgeText = '对比辨析';
                  } else {
                    cardStyle = 'border-slate-800 bg-slate-900/70 shadow-lg';
                    iconNode = <Lightbulb className="w-5 h-5 text-emerald-400" />;
                    badgeText = '核心知识';
                  }

                  return (
                    <article key={idx} className={`p-6 lg:p-7 rounded-2xl border backdrop-blur-sm ${cardStyle} transition-all duration-200`}>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                            {iconNode}
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-slate-100">{section.title}</h3>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-950/60 text-slate-300 border border-slate-800">
                          {badgeText}
                        </span>
                      </div>

                      <div className="text-slate-300 leading-relaxed text-sm lg:text-base space-y-3.5">
                        {section.content.split('\n').map((paragraph, i) => {
                          // Handle markdown tables
                          if (paragraph.startsWith('|')) {
                            return (
                              <div key={i} className="font-mono text-xs overflow-x-auto my-2 py-1 bg-slate-950/40 rounded-lg p-2 border border-slate-800/60">
                                {paragraph}
                              </div>
                            );
                          }

                          return (
                            <p key={i}>
                              {paragraph.split(/(\*\*.*?\*\*)/).map((part, j) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return (
                                    <strong key={j} className={`font-bold ${activeTopic.color}`}>
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return part;
                              })}
                            </p>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* VIEW 2: Interactive Practice Quiz Mode */}
          {viewMode === 'quiz' && (
            <PracticeQuiz questions={examQuestions} />
          )}

          {/* VIEW 3: Quick Reference Cheat Sheet Mode */}
          {viewMode === 'reference' && (
            <QuickReferenceView />
          )}
          
        </div>
      </main>
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
