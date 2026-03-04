# AI Habit Tracker & Daily Planner

A React Native + Expo mobile app for iOS and Android that helps users build better habits using AI-powered insights and daily planning.

## Stack

- **Framework:** React Native + Expo SDK 51 (Expo Router)
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind CSS for RN)
- **State:** Zustand
- **Data Fetching:** TanStack Query
- **Backend:** Supabase (Auth + PostgreSQL + Realtime)
- **AI:** OpenAI GPT-4o-mini
- **Forms:** React Hook Form + Zod

## Getting Started

### 1. Clone and install
```bash
git clone https://github.com/nashk0619-a11y/ai-habit-tracker.git
cd ai-habit-tracker
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
```
Fill in your Supabase URL, anon key, and OpenAI API key.

### 3. Run the app
```bash
npm start        # Expo Go
npm run ios      # iOS simulator
npm run android  # Android emulator
```

## Project Structure
```
app/
  (tabs)/         # Today, Habits, Planner, Insights, Profile
  (auth)/         # Login, Signup, Onboarding
components/       # Reusable UI components
hooks/            # Custom React hooks
lib/              # Supabase + OpenAI clients
store/            # Zustand state stores
types/            # TypeScript types
constants/        # Colors, icons, frequencies
```

## MVP Features
- [ ] Habit creation and tracking
- [ ] Daily planner with tasks
- [ ] AI-powered daily brief (OpenAI GPT-4o-mini)
- [ ] Streak tracking and insights
- [ ] Push notifications
- [ ] Supabase Auth (email/password)
- [ ] Cloud sync across devices
