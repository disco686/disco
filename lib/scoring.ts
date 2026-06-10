import type { Answer, Archetype, Dimension, Question } from "@/types/quiz";

export type DimensionScores = Record<Dimension, number>;

export function calculateScores(
  questions: Question[],
  answers: Answer[]
): DimensionScores {
  const initialScores: DimensionScores = {
    initiative: 0,
    structure: 0,
    expression: 0,
    boundary: 0,
    stability: 0,
    empathy: 0,
    ambition: 0,
    reflection: 0,
  };

  const counts: Record<Dimension, number> = {
    initiative: 0,
    structure: 0,
    expression: 0,
    boundary: 0,
    stability: 0,
    empathy: 0,
    ambition: 0,
    reflection: 0,
  };

  const answerMap = new Map<string, number>();

  for (const answer of answers) {
    answerMap.set(answer.questionId, answer.value);
  }

  for (const question of questions) {
    const answerValue = answerMap.get(question.id);

    if (!answerValue) continue;

    const score = question.reverse ? 8 - answerValue : answerValue;

    initialScores[question.dimension] += score;
    counts[question.dimension] += 1;
  }

  for (const dimension of Object.keys(initialScores) as Dimension[]) {
    const count = counts[dimension];

    if (count === 0) {
      initialScores[dimension] = 50;
      continue;
    }

    const average = initialScores[dimension] / count;

    initialScores[dimension] = Math.round(((average - 1) / 6) * 100);
  }

  return initialScores;
}

export function findBestArchetype(
  scores: DimensionScores,
  archetypes: Archetype[]
): Archetype {
  let best = archetypes[0];
  let bestDistance = Infinity;

  for (const archetype of archetypes) {
    let totalDistance = 0;
    let dimensionCount = 0;

    for (const [dimension, targetScore] of Object.entries(
      archetype.targetScores
    )) {
      const actualScore = scores[dimension as Dimension];
      const distance = Math.abs(actualScore - targetScore);

      totalDistance += distance;
      dimensionCount += 1;
    }

    if (dimensionCount === 0) continue;

    const averageDistance = totalDistance / dimensionCount;

    if (averageDistance < bestDistance) {
      bestDistance = averageDistance;
      best = archetype;
    }
  }

  return best;
}

export function calculateConfidence(answers: Answer[]): number {
  if (answers.length === 0) return 0;

  const answeredRatio = answers.length / 26;
  const rawConfidence = Math.round(answeredRatio * 100);

  return Math.max(30, Math.min(96, rawConfidence));
}