import { ExamQuestion } from '../types';
import { singleChoiceQuestions } from './questions/singleChoice';
import { multiChoiceQuestions } from './questions/multiChoice';
import { judgmentQuestions } from './questions/judgment';

// 聚合收录全部 3 套全真真题，共计 179 道权威真题（89 道单选 + 50 道多选 + 40 道判断）
export const examQuestions: ExamQuestion[] = [
  ...singleChoiceQuestions,
  ...multiChoiceQuestions,
  ...judgmentQuestions
];

export { singleChoiceQuestions, multiChoiceQuestions, judgmentQuestions };
