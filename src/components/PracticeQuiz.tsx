import React, { useState, useMemo } from 'react';
import { ExamQuestion, QuestionType } from '../types';
import { obcaTopics } from '../data/topics';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Eye, 
  EyeOff, 
  Sparkles,
  BookOpen,
  ChevronDown,
  RotateCcw
} from 'lucide-react';

interface PracticeQuizProps {
  questions: ExamQuestion[];
}

export function PracticeQuiz({ questions }: PracticeQuizProps) {
  const [selectedType, setSelectedType] = useState<string>('全部');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [userSelections, setUserSelections] = useState<Record<number, string[]>>({});

  // 筛选过滤
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // 类型过滤
      if (selectedType !== '全部' && q.type !== selectedType) {
        return false;
      }
      // 模块过滤
      if (selectedTopic !== 'all' && q.topicId !== selectedTopic) {
        return false;
      }
      // 搜索词过滤
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesText = q.question.toLowerCase().includes(query);
        const matchesAnalysis = q.analysis.toLowerCase().includes(query);
        const matchesTags = q.tags?.some(tag => tag.toLowerCase().includes(query));
        const matchesOptions = q.options?.some(opt => opt.toLowerCase().includes(query));
        if (!matchesText && !matchesAnalysis && !matchesTags && !matchesOptions) {
          return false;
        }
      }
      return true;
    });
  }, [questions, selectedType, selectedTopic, searchQuery]);

  // 答案揭示切换
  const toggleAnswer = (id: number) => {
    setRevealedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 全部显示/隐藏
  const toggleAllAnswers = (show: boolean) => {
    const newState: Record<number, boolean> = {};
    filteredQuestions.forEach(q => {
      newState[q.id] = show;
    });
    setRevealedAnswers(newState);
  };

  // 用户点击选项选择
  const handleSelectOption = (questionId: number, optionKey: string, type: QuestionType) => {
    setUserSelections(prev => {
      const current = prev[questionId] || [];
      if (type === '单选题' || type === '判断题') {
        return { ...prev, [questionId]: [optionKey] };
      } else {
        // 多选题
        if (current.includes(optionKey)) {
          return { ...prev, [questionId]: current.filter(k => k !== optionKey) };
        } else {
          return { ...prev, [questionId]: [...current, optionKey].sort() };
        }
      }
    });
  };

  // 重置做题状态
  const resetPractice = () => {
    setUserSelections({});
    setRevealedAnswers({});
  };

  return (
    <div className="space-y-5 sm:space-y-6 min-w-0 max-w-full">
      {/* 顶部控制栏 */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-sm shadow-xl space-y-4 min-w-0 max-w-full overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="搜索真题关键词 (如: 2PC, 2881, UNIT_NUM, ASH, LSM-Tree, 隔离级别...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => toggleAllAnswers(true)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              展开全部
            </button>
            <button
              onClick={() => toggleAllAnswers(false)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
            >
              <EyeOff className="w-3.5 h-3.5 text-slate-400" />
              收起解析
            </button>
            <button
              onClick={resetPractice}
              title="清空答题选择"
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 筛选标签栏 */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/60">
          {/* 题型切换 */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-xs text-slate-400 mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3" /> 题型:
            </span>
            {['全部', '单选题', '多选题', '判断题'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  selectedType === type
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* 模块分类选择 */}
          <div className="flex items-center gap-2 text-xs w-full sm:w-auto">
            <span className="text-slate-400 shrink-0">模块:</span>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-cyan-500/50 text-xs w-full sm:w-auto"
            >
              <option value="all">全部考点模块 ({questions.length} 题)</option>
              {obcaTopics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.shortTitle || t.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 题目列表 */}
      <div className="space-y-4 min-w-0 max-w-full">
        <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-slate-400 px-1">
          <span>共找到 <strong className="text-cyan-400">{filteredQuestions.length}</strong> 道真题</span>
          <span className="text-[11px] sm:text-xs">点击选项自测，右上角展开解析</span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 text-center text-slate-400">
            <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-sm sm:text-base font-semibold text-slate-300">没有找到匹配的题目</p>
            <p className="text-xs text-slate-500 mt-1">请尝试更换搜索词或筛选条件</p>
          </div>
        ) : (
          filteredQuestions.map((q, index) => {
            const isRevealed = !!revealedAnswers[q.id];
            const currentSelection = userSelections[q.id] || [];
            
            // 判断是否回答正确
            const formatAns = (ans: string) => ans.replace(/\s+/g, '').replace(/，/g, ',');
            const isAnswered = currentSelection.length > 0;
            const isCorrect = isAnswered && (
              q.type === '判断题'
                ? currentSelection[0] === q.answer
                : currentSelection.sort().join(',') === formatAns(q.answer)
            );

            return (
              <div
                key={q.id}
                className="bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-sm shadow-lg transition-all min-w-0 max-w-full overflow-hidden"
              >
                {/* 题头元信息 */}
                <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs font-mono font-bold">
                      #{index + 1}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[11px] sm:text-xs font-semibold ${
                      q.type === '单选题'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : q.type === '多选题'
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {q.type}
                    </span>

                    {q.tags?.map((tag) => (
                      <span key={tag} className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 text-[10px] sm:text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleAnswer(q.id)}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors shrink-0 ml-1"
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span className="text-[11px] sm:text-xs">收起解析</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-cyan-400 text-[11px] sm:text-xs">查看解析</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 题干内容 */}
                <h4 className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed mb-4 break-words">
                  {q.question}
                </h4>

                {/* 选项列表 */}
                {q.type === '判断题' ? (
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-4 max-w-sm">
                    {['正确', '错误'].map((opt) => {
                      const isSelected = currentSelection.includes(opt);
                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelectOption(q.id, opt, q.type)}
                          className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-semibold text-center transition-all ${
                            isSelected
                              ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                              : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-2 mb-4">
                    {q.options?.map((option) => {
                      const optionKey = option.trim().charAt(0).toUpperCase();
                      const isSelected = currentSelection.includes(optionKey);
                      return (
                        <button
                          key={option}
                          onClick={() => handleSelectOption(q.id, optionKey, q.type)}
                          className={`w-full text-left p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 sm:gap-3 ${
                            isSelected
                              ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-200'
                              : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {optionKey}
                          </span>
                          <span className="leading-relaxed break-words flex-1 min-w-0">{option.replace(/^[A-Z][.、\s]*/, '')}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* 做题状态实时提示 */}
                {isAnswered && (
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px] sm:text-xs">
                        <CheckCircle2 className="w-4 h-4 shrink-0" /> 自测回答正确！
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-rose-400 font-semibold text-[11px] sm:text-xs break-words">
                        <XCircle className="w-4 h-4 shrink-0" /> 您的选择: {currentSelection.join(', ')}，请看下方解析
                      </span>
                    )}
                  </div>
                )}

                {/* 答案与深度解析区 */}
                {isRevealed && (
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800/80 bg-slate-950/60 rounded-xl p-3 sm:p-4 space-y-2 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">官方标准答案:</span>
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs sm:text-sm">
                        {q.answer}
                      </span>
                    </div>

                    <div className="text-xs text-slate-300 leading-relaxed break-words">
                      <span className="font-semibold text-cyan-400 mr-1">【考点解析】</span>
                      {q.analysis}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
