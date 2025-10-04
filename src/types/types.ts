export interface Station {
  id: string;
  title: string;
  description: string;
  clue: string;
  correctAnswer: string; // the exact answer
  answerHint?: string;
  answerMessage?: string;
  instruction: string;
}
