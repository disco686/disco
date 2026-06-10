export type Dimension =
  | "initiative"
  | "structure"
  | "expression"
  | "boundary"
  | "stability"
  | "empathy"
  | "ambition"
  | "reflection";

export type Question = {
  id: string;
  text: string;
  dimension: Dimension;
  reverse?: boolean;
};

export type Answer = {
  questionId: string;
  value: number;
};

export type Archetype = {
  id: string;
  name: string;
  englishName: string;
  emoji: string;
  title: string;
  description: string;

  traitSummary: string;
  workplacePattern: string;
  howOthersSeeYou: string;
  innerConflict: string;

  strengths: string[];
  risks: string[];
  advice: string[];

  match?: Partial<Record<Dimension, "high" | "mid" | "low">>;
  targetScores: Partial<Record<Dimension, number>>;
};