export type EfSkillKey =
  | 'inhibitory-control'
  | 'working-memory'
  | 'cognitive-flexibility'
  | 'planning-prioritization'
  | 'time-management'
  | 'task-initiation'
  | 'sustained-attention'
  | 'organization-systems'
  | 'emotional-regulation'
  | 'self-monitoring';

export interface EfSkill {
  id: EfSkillKey;
  name: string;
  definition: string;
  measurableBehaviors: string[];
  improvementSignals: string[];
  guardrails: string[];
}

export const efSkills: EfSkill[] = [
  {
    id: 'inhibitory-control',
    name: 'Inhibitory Control',
    definition: 'Ability to pause and choose responses that align with goals instead of impulses.',
    measurableBehaviors: ['Declines tempting distractions during a study block', 'Uses device focus modes proactively', 'Takes a breath before replying to heated messages'],
    improvementSignals: ['Higher focus streaks', 'Lower rate of off-task clicks', 'Fewer impulsive replies selected'],
    guardrails: ['No clinical claims or diagnostic interpretations', 'Metrics show practice patterns, not mental health outcomes']
  },
  {
    id: 'working-memory',
    name: 'Working Memory',
    definition: 'Holding and manipulating information to follow multi-step tasks.',
    measurableBehaviors: ['Tracks steps without re-checking instructions', 'Summarizes key points before acting', 'Updates plan when details change'],
    improvementSignals: ['More accurate multi-step completions', 'Fewer instruction reopens', 'Better recall of constraints in decisions'],
    guardrails: ['Do not infer IQ or academic placement', 'Use only in-app performance data']
  },
  {
    id: 'cognitive-flexibility',
    name: 'Cognitive Flexibility',
    definition: 'Shifting strategies when conditions or feedback change.',
    measurableBehaviors: ['Switches plan when new constraints arrive', 'Considers multiple perspectives before deciding', 'Uses alternate solutions after failed attempts'],
    improvementSignals: ['Faster recovery after changes', 'Higher flexibility score after new info', 'More diverse strategy selections'],
    guardrails: ['No claims about treating rigidity disorders', 'Not a diagnostic instrument']
  },
  {
    id: 'planning-prioritization',
    name: 'Planning & Prioritization',
    definition: 'Breaking work into parts, sequencing tasks, and making tradeoffs.',
    measurableBehaviors: ['Creates realistic timelines', 'Identifies critical tasks vs nice-to-have', 'Schedules buffer time before deadlines'],
    improvementSignals: ['Higher plan quality scores', 'Better deadline hit rate', 'Reduced last-minute rush events'],
    guardrails: ['Do not infer academic GPA or clinical planning deficits']
  },
  {
    id: 'time-management',
    name: 'Time Management',
    definition: 'Allocating and protecting time blocks to finish commitments.',
    measurableBehaviors: ['Starts tasks on planned time', 'Chooses appropriate session lengths', 'Adjusts when conflicts appear'],
    improvementSignals: ['Shorter procrastination delays', 'Consistent session completion', 'Reduced overdue tasks'],
    guardrails: ['No claims about curing procrastination disorders']
  },
  {
    id: 'task-initiation',
    name: 'Task Initiation',
    definition: 'Beginning a task without excessive delay when conditions are good enough.',
    measurableBehaviors: ['Starts within planned window', 'Uses starter steps to overcome friction', 'Avoids unnecessary prep loops'],
    improvementSignals: ['Lower start delay', 'Higher completion rates', 'More starter steps used effectively'],
    guardrails: ['Do not label medical procrastination or ADHD improvement']
  },
  {
    id: 'sustained-attention',
    name: 'Sustained Attention',
    definition: 'Maintaining focus across a work interval while handling interruptions.',
    measurableBehaviors: ['Keeps focus streaks intact', 'Uses recovery strategies after interruptions', 'Checks notifications at planned breaks'],
    improvementSignals: ['Longer uninterrupted streaks', 'Higher recovery accuracy', 'Intentional interruption handling'],
    guardrails: ['No claims about attention disorder treatment']
  },
  {
    id: 'organization-systems',
    name: 'Organization Systems',
    definition: 'Creating external systems to track commitments and materials.',
    measurableBehaviors: ['Keeps task lists tidy', 'Uses calendar with tags and priorities', 'Stores references in accessible spots'],
    improvementSignals: ['Consistent checklist usage', 'Lower misplaced item events', 'More organized plans in-game'],
    guardrails: ['Do not infer real-life room/locker organization health']
  },
  {
    id: 'emotional-regulation',
    name: 'Emotional Regulation',
    definition: 'Managing feelings under stress to respond intentionally.',
    measurableBehaviors: ['Chooses de-escalation responses', 'Uses delay-before-send when upset', 'Names emotions before acting'],
    improvementSignals: ['Higher escalation avoidance', 'Shorter recovery time', 'More reflective choices after feedback'],
    guardrails: ['Avoid therapeutic promises or mood disorder claims']
  },
  {
    id: 'self-monitoring',
    name: 'Self-Monitoring',
    definition: 'Checking progress against goals and adjusting habits.',
    measurableBehaviors: ['Reviews metrics after sessions', 'Sets micro-goals for next run', 'Completes reflections with transfer plans'],
    improvementSignals: ['Higher reflection completion', 'More accurate self-ratings vs performance', 'More targeted goal selections'],
    guardrails: ['Metrics are practice signals only; not psychological assessments']
  }
];
