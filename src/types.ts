export type SectionType = 'high-freq' | 'knowledge' | 'trap' | 'formula' | 'comparison';

export interface TopicSection {
  type: SectionType;
  title: string;
  content: string;
  tags?: string[];
  keyPoints?: string[];
}

export interface ObcaTopic {
  id: string;
  title: string;
  shortTitle?: string;
  badge?: string;
  iconName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  sections: TopicSection[];
}

export type QuestionType = '单选题' | '多选题' | '判断题';

export interface ExamQuestion {
  id: number;
  questionNumber: number;
  type: QuestionType;
  question: string;
  options?: string[];
  answer: string;
  analysis: string;
  topicId: string;
  tags?: string[];
}
