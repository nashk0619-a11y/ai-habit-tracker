export type { Habit } from '@/store/useHabitStore';
export type { Task } from '@/store/useTaskStore';

export type User = {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: string;
};

export type AIInsight = {
  id: string;
  type: 'daily_summary' | 'streak_alert' | 'suggestion';
  content: string;
  generatedAt: string;
};
