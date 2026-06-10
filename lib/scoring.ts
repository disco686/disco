import type { Answer, Archetype, Dimension, Question } from "@/types/quiz";

export type DimensionScores = Record<Dimension, number>;

const dimensions: Dimension[] = [
  "initiative",
  "structure",
  "expression",
  "boundary",
  "stability",
  "empathy",
  "ambition",
  "reflection",
];

export function calculateScores(
  questions: Question[],
  answers: Answer[]
): DimensionScores {
  const raw: Record<Dimension, number[]> = {
    initiative: [],
    structure: [],
    expression: [],
    boundary: [],
    stability: [],
    empathy: [],
    ambition: [],
    reflection: [],
  };

  const answerMap = new Map(answers.map((answer) => [answer.questionId, answer.value]));

  for (const question of questions) {
    const answerValue = answerMap.get(question.id);

    if (!answerValue) continue;

    const score = question.reverse ? 8 - answerValue : answerValue;

    raw[question.dimension].push(score);
  }

  const result = {} as DimensionScores;

  for (const dimension of dimensions) {
    const values = raw[dimension];

    if (values.length === 0) {
      result[dimension] = 0;
      continue;
    }

    const average = values.reduce((sum, value) => sum + value, 0) / values.length;

    result[dimension] = Math.round(((average - 1) / 6) * 100);
  }

  return result;
}

function classifyScore(score: number): "low" | "mid" | "high" {
  if (score >= 67) return "high";
  if (score <= 33) return "low";
  return "mid";
}

export function findBestArchetype(
  scores: DimensionScores,
  archetypes: Archetype[]
): Archetype {
  let best = archetypes[0];
  let bestScore = -Infinity;

  for (const archetype of archetypes) {
    let matchScore = 0;

    for (const [dimension, expectedLevel] of Object.entries(archetype.match)) {
      const actualScore = scores[dimension as Dimension];
      const actualLevel = classifyScore(actualScore);

      if (actualLevel === expectedLevel) {
        matchScore += 2;
      } else {
        matchScore -= 1;
      }
    }

    if (matchScore > bestScore) {
      bestScore = matchScore;
      best = archetype;
    }
  }

  return best;
}

export function calculateConfidence(answers: Answer[]): number {
  if (answers.length === 0) return 0;

  const values = answers.map((answer) => answer.value);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;

  const variance =
    values.reduce((sum, value) => sum + Math.pow(value - average, 2), 0) /
    values.length;

  const uniqueValues = new Set(values).size;

  let confidence = 85;

  if (uniqueValues <= 2) confidence -= 20;
  if (variance < 0.4) confidence -= 20;
  if (answers.length < 10) confidence -= 20;

  return Math.max(30, Math.min(95, confidence));
}