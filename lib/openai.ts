import OpenAI from 'openai';

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateDailySummary(habits: any[], tasks: any[]): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are an AI habit coach. Generate a brief, motivating daily summary based on the user\'s habits and tasks.' },
      { role: 'user', content: `Habits: ${JSON.stringify(habits)}\nTasks: ${JSON.stringify(tasks)}` },
    ],
    max_tokens: 150,
  });
  return completion.choices[0].message.content ?? '';
}
