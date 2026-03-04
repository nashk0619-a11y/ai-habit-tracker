import { create } from 'zustand';

export type Habit = {
  id: string;
  title: string;
  description?: string;
  frequency: 'daily' | 'weekly' | 'custom';
  color: string;
  icon: string;
  streak: number;
  completedDates: string[];
  createdAt: string;
};

type HabitStore = {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  updateHabit: (id: string, updates: Partial<Habit>) => void;
  deleteHabit: (id: string) => void;
  completeHabit: (id: string, date: string) => void;
};

export const useHabitStore = create<HabitStore>((set) => ({
  habits: [],
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
  updateHabit: (id, updates) => set((state) => ({ habits: state.habits.map((h) => (h.id === id ? { ...h, ...updates } : h)) })),
  deleteHabit: (id) => set((state) => ({ habits: state.habits.filter((h) => h.id !== id) })),
  completeHabit: (id, date) => set((state) => ({
    habits: state.habits.map((h) => h.id === id ? { ...h, completedDates: [...h.completedDates, date], streak: h.streak + 1 } : h),
  })),
}));
