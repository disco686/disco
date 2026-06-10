
import type { Question } from "@/types/quiz";

export const questions: Question[] = [
  {
    id: "q1",
    text: "任务没人说清楚时，我会忍不住先把“下一步是谁干、什么时候交”问出来。",
    dimension: "initiative",
  },
  {
    id: "q2",
    text: "比起开十次会讨论完美方案，我更想先做个能跑的版本看看。",
    dimension: "initiative",
  },
  {
    id: "q3",
    text: "如果没人给我明确指令，我会先进入“我再观望一下”的待机模式。",
    dimension: "initiative",
    reverse: true,
  },
  {
    id: "q4",
    text: "项目卡住时，我通常会主动推动一下，而不是等它自然死亡。",
    dimension: "initiative",
  },

  {
    id: "q5",
    text: "看到一团乱的信息，我的第一反应是：先建个表吧。",
    dimension: "structure",
  },
  {
    id: "q6",
    text: "没有文档、没有流程、没有负责人时，我会感觉这个项目已经开始玄学了。",
    dimension: "structure",
  },
  {
    id: "q7",
    text: "我可以接受边走边改，计划不完整也没关系，先冲再说。",
    dimension: "structure",
    reverse: true,
  },
  {
    id: "q8",
    text: "如果一个任务没有拆成步骤，我会觉得它还只是一个愿望。",
    dimension: "structure",
  },

  {
    id: "q9",
    text: "会议里如果大家开始绕圈子，我会想站出来把重点拉回来。",
    dimension: "expression",
  },
  {
    id: "q10",
    text: "群里吵得再热闹，我也经常只是默默看完，然后继续潜水。",
    dimension: "expression",
    reverse: true,
  },
  {
    id: "q11",
    text: "做出成果后，我会主动想怎么讲清楚、怎么展示出来。",
    dimension: "expression",
  },
  {
    id: "q12",
    text: "有时候我明明有想法，但会因为“不想显得太积极”而咽回去。",
    dimension: "expression",
    reverse: true,
  },

  {
    id: "q13",
    text: "别人临时加需求时，我会先问清楚：优先级、截止时间、谁来拍板。",
    dimension: "boundary",
  },
  {
    id: "q14",
    text: "别人一说“能不能顺手帮一下”，我的嘴已经答应了，我的大脑才刚上线。",
    dimension: "boundary",
    reverse: true,
  },
  {
    id: "q15",
    text: "当我手上已经很满时，我能直接说“这个我现在接不了”。",
    dimension: "boundary",
  },

  {
    id: "q16",
    text: "我更像每天推进一点的人，而不是靠 deadline 召唤灵魂归位的人。",
    dimension: "stability",
  },
  {
    id: "q17",
    text: "我不是拖延，我只是需要 deadline 帮我开机。",
    dimension: "stability",
    reverse: true,
  },
  {
    id: "q18",
    text: "如果没有外部压力，我也能保持一个基本稳定的工作节奏。",
    dimension: "stability",
  },

  {
    id: "q19",
    text: "别人一句“没事”，我能听出来他其实已经快有事了。",
    dimension: "empathy",
  },
  {
    id: "q20",
    text: "只要方案是对的，大家情绪上能不能接受，对我来说没那么重要。",
    dimension: "empathy",
    reverse: true,
  },
  {
    id: "q21",
    text: "团队气氛不对时，我会下意识想缓和一下，哪怕这不是我的正式工作。",
    dimension: "empathy",
  },

  {
    id: "q22",
    text: "做出东西之后，我希望它不要只躺在文件夹里，最好有人看见。",
    dimension: "ambition",
  },
  {
    id: "q23",
    text: "比起升职加速跑，我更想要一个稳定、可控、少惊吓的工作节奏。",
    dimension: "ambition",
    reverse: true,
  },
  {
    id: "q24",
    text: "如果一个机会能让我成长更快，就算有点压力，我也会想试试看。",
    dimension: "ambition",
  },

  {
    id: "q25",
    text: "项目结束后，我会忍不住复盘：这锅到底是目标的、流程的，还是沟通的。",
    dimension: "reflection",
  },
  {
    id: "q26",
    text: "事情做完就翻篇吧，复盘太多容易把自己盘焦虑。",
    dimension: "reflection",
    reverse: true,
  },
];