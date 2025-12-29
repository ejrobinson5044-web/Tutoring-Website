export interface LevelConfig {
  levelId: string;
  gameId: 'deadline-lab' | 'distraction-budget' | 'heat-check';
  title: string;
  primarySkill: string;
  secondarySkills: string[];
  scenario: string;
  options: string[];
  scoringRules: string;
  difficulty: { pacing: 'calm' | 'standard' | 'fast'; interruptions: number; timePressure: number };
  standardsMapping: { CASEL: string[]; ISTE: string[]; CCSS?: string[] };
  reflectionPrompt: string;
  teacherNotes: string;
}

export const levelConfigs: LevelConfig[] = [
  {
    levelId: 'deadline-lab-1',
    gameId: 'deadline-lab',
    title: 'First Week Juggle',
    primarySkill: 'planning-prioritization',
    secondarySkills: ['time-management', 'task-initiation'],
    scenario: 'You have math homework, an English outline, a soccer practice, and a family dinner. Drag tasks onto a two-day calendar.',
    options: ['Schedule math first with a 30-minute focus block', 'Place English outline after dinner', 'Add buffer before practice'],
    scoringRules: 'Plan quality score rewards balanced load, buffer time, and early starts; penalties for conflicts and no buffers.',
    difficulty: { pacing: 'calm', interruptions: 0, timePressure: 2 },
    standardsMapping: {
      CASEL: ['Self-Management', 'Responsible Decision-Making'],
      ISTE: ['1.1 Empowered Learner', '1.3 Knowledge Constructor'],
      CCSS: ['CCSS.ELA-LITERACY.W.9-10.5']
    },
    reflectionPrompt: 'How did you handle the conflict between practice and homework? Where will you use this plan style this week?',
    teacherNotes: 'Ask students to justify why they placed buffer time; encourage sharing non-graded planning strategies.'
  },
  {
    levelId: 'deadline-lab-2',
    gameId: 'deadline-lab',
    title: 'Shift Change',
    primarySkill: 'time-management',
    secondarySkills: ['planning-prioritization', 'organization-systems'],
    scenario: 'A job shift is added and a friend invites you to a movie. Rearrange the week without missing the lab report deadline.',
    options: ['Move lab research earlier', 'Decline movie or reschedule', 'Use shorter bursts after shift'],
    scoringRules: 'Score favors on-time start, realistic workload, and protecting sleep; penalties for risky overlaps.',
    difficulty: { pacing: 'standard', interruptions: 1, timePressure: 3 },
    standardsMapping: {
      CASEL: ['Self-Management', 'Relationship Skills'],
      ISTE: ['1.4 Innovative Designer'],
      CCSS: ['CCSS.ELA-LITERACY.W.11-12.5']
    },
    reflectionPrompt: 'What tradeoff felt toughest? Where will you block time before a real deadline this week?',
    teacherNotes: 'Invite students to discuss how they balanced social plans with commitments without judgment.'
  },
  {
    levelId: 'deadline-lab-3',
    gameId: 'deadline-lab',
    title: 'Crunch Week',
    primarySkill: 'task-initiation',
    secondarySkills: ['time-management', 'self-monitoring'],
    scenario: 'Multiple deadlines converge with fatigue. Choose starter steps and decide what to defer.',
    options: ['Start with a 10-minute starter', 'Defer low-impact tasks', 'Add checkpoints'],
    scoringRules: 'Higher scores for quick starts and checkpoints; penalties for overcommitting late nights.',
    difficulty: { pacing: 'fast', interruptions: 2, timePressure: 4 },
    standardsMapping: {
      CASEL: ['Self-Management', 'Self-Awareness'],
      ISTE: ['1.6 Creative Communicator'],
      CCSS: ['CCSS.ELA-LITERACY.RI.9-10.8']
    },
    reflectionPrompt: 'How did starter steps change your stress? Where can you use a starter in the next 3 days?',
    teacherNotes: 'Model how to pick a starter task and pause after 5 minutes to reassess energy.'
  },
  {
    levelId: 'distraction-budget-1',
    gameId: 'distraction-budget',
    title: 'Notification Storm',
    primarySkill: 'inhibitory-control',
    secondarySkills: ['sustained-attention'],
    scenario: 'Study session with phone buzzing, group chat, and music suggestions.',
    options: ['Enable focus mode', 'Silence group chat', 'Plan a break after 20 minutes'],
    scoringRules: 'Score uses focus streak length and correct handling of planned vs unplanned interruptions.',
    difficulty: { pacing: 'calm', interruptions: 2, timePressure: 2 },
    standardsMapping: {
      CASEL: ['Self-Management'],
      ISTE: ['1.2 Digital Citizen'],
      CCSS: []
    },
    reflectionPrompt: 'Which distraction was hardest to ignore? Where will you place your phone during your next study block?',
    teacherNotes: 'Discuss digital boundaries and celebrate strategies instead of screen-time shaming.'
  },
  {
    levelId: 'distraction-budget-2',
    gameId: 'distraction-budget',
    title: 'Multitask Trap',
    primarySkill: 'sustained-attention',
    secondarySkills: ['inhibitory-control', 'working-memory'],
    scenario: 'You need to finish a problem set while friends send memes and a sibling interrupts.',
    options: ['Queue replies for break', 'Use noise blockers', 'Summarize task before returning from interruption'],
    scoringRules: 'Rewards intact streaks and accurate resumption after distractions; penalties for context loss.',
    difficulty: { pacing: 'standard', interruptions: 3, timePressure: 3 },
    standardsMapping: {
      CASEL: ['Self-Management', 'Social Awareness'],
      ISTE: ['1.1 Empowered Learner'],
      CCSS: []
    },
    reflectionPrompt: 'How did you recover after interruptions? Where will you post a “resume note” next study block?',
    teacherNotes: 'Practice writing a one-line resume note before pausing to model recovery.'
  },
  {
    levelId: 'distraction-budget-3',
    gameId: 'distraction-budget',
    title: 'Deep Work Window',
    primarySkill: 'inhibitory-control',
    secondarySkills: ['sustained-attention', 'self-monitoring'],
    scenario: 'You planned a 40-minute deep work block before practice. Unexpected call + app pings arrive.',
    options: ['Decline call with pre-written text', 'Move to quieter space', 'Schedule micro-break checkpoints'],
    scoringRules: 'High scores for protecting the block and intentional break use; penalties for reactive app switching.',
    difficulty: { pacing: 'fast', interruptions: 4, timePressure: 3 },
    standardsMapping: {
      CASEL: ['Self-Management'],
      ISTE: ['1.7 Global Collaborator'],
      CCSS: []
    },
    reflectionPrompt: 'What did you do when the call came in? Where will you create a deep work window this week?',
    teacherNotes: 'Have students script a polite boundary text; discuss respectful communication.'
  },
  {
    levelId: 'heat-check-1',
    gameId: 'heat-check',
    title: 'Group Chat Spike',
    primarySkill: 'emotional-regulation',
    secondarySkills: ['cognitive-flexibility'],
    scenario: 'Group chat criticizes your project idea. Choose how to respond and whether to wait.',
    options: ['Pause and draft a calm reply', 'Ask clarifying question', 'Delay send for 10 minutes'],
    scoringRules: 'Scores de-escalation, perspective-taking, and delayed responses when upset.',
    difficulty: { pacing: 'calm', interruptions: 1, timePressure: 1 },
    standardsMapping: {
      CASEL: ['Self-Awareness', 'Relationship Skills'],
      ISTE: ['1.2 Digital Citizen'],
      CCSS: ['CCSS.ELA-LITERACY.SL.9-10.1']
    },
    reflectionPrompt: 'How did delaying change your response? Where will you try a pause-before-send this week?',
    teacherNotes: 'Practice “type, breathe, reread” routine; avoid judgment about emotions.'
  },
  {
    levelId: 'heat-check-2',
    gameId: 'heat-check',
    title: 'Teacher Feedback Pivot',
    primarySkill: 'cognitive-flexibility',
    secondarySkills: ['emotional-regulation', 'working-memory'],
    scenario: 'Teacher suggests a new direction the night before presentation. Decide how to adapt.',
    options: ['Reframe feedback as support', 'Prioritize key slides to adjust', 'Communicate scope to group'],
    scoringRules: 'Rewards flexible re-planning and calm communication; penalties for panic or ignoring feedback.',
    difficulty: { pacing: 'standard', interruptions: 2, timePressure: 3 },
    standardsMapping: {
      CASEL: ['Responsible Decision-Making'],
      ISTE: ['1.4 Innovative Designer'],
      CCSS: ['CCSS.ELA-LITERACY.SL.11-12.4']
    },
    reflectionPrompt: 'What small change had biggest impact? Where can you stay flexible when plans shift this week?',
    teacherNotes: 'Facilitate discussion on prioritizing under time pressure; highlight flexible mindsets.'
  },
  {
    levelId: 'heat-check-3',
    gameId: 'heat-check',
    title: 'Unexpected Absence',
    primarySkill: 'emotional-regulation',
    secondarySkills: ['cognitive-flexibility', 'planning-prioritization'],
    scenario: 'A teammate is out on presentation day. Choose responses that keep the group steady.',
    options: ['Redistribute roles calmly', 'Adjust scope to fit time', 'Check-in on teammate later'],
    scoringRules: 'Scores de-escalation and adaptive planning; penalties for blame-heavy reactions.',
    difficulty: { pacing: 'fast', interruptions: 2, timePressure: 4 },
    standardsMapping: {
      CASEL: ['Relationship Skills', 'Self-Management'],
      ISTE: ['1.7 Global Collaborator'],
      CCSS: ['CCSS.ELA-LITERACY.SL.9-10.1']
    },
    reflectionPrompt: 'How did you keep the team steady? Where will you use a quick regroup script this week?',
    teacherNotes: 'Model a 2-minute regroup agenda: roles, scope, message.'
  }
];
