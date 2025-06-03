export type Personality =
  | "physical"
  | "social"
  | "logical"
  | "creative"
  | "observational"
  | "emotional"
  | "independent"
  | "sensory";

const corePersonalities: Record<Personality, Personality> = {
  physical: "physical",
  social: "social",
  logical: "logical",
  creative: "creative",
  observational: "observational",
  emotional: "emotional",
  independent: "independent",
  sensory: "sensory",
};

type LearningProfile = {
  icon: string;
  description: string;
  traits: string[];
  activities: string[];
  ageGroup: AgeGroup;
};

type LearningProfileByPersonality = Partial<
  Record<Personality, LearningProfile>
>;

const infantLearningProfiles: LearningProfileByPersonality = {
  // Infant profiles (0-12 months)
  [corePersonalities.observational]: {
    icon: "🍼",
    description: "Watches and processes carefully before responding",
    traits: ["Careful observation", "Slow to warm up", "Thoughtful responses"],
    activities: [
      "Peek-a-boo games",
      "Mirror play",
      "Gentle face-to-face interaction",
      "Quiet observation time",
    ],
    ageGroup: "infant",
  },
  [corePersonalities.sensory]: {
    icon: "⚡",
    description: "Learns through rich sensory experiences",
    traits: ["Active exploration", "Sensory seeking", "Strong reactions"],
    activities: [
      "Textured toys",
      "Musical instruments",
      "Different fabrics",
      "Sensory bottles",
    ],
    ageGroup: "infant",
  },
  [corePersonalities.social]: {
    icon: "🤗",
    description: "Lights up during social interaction",
    traits: ["Face seeking", "Social responsiveness", "Interaction loving"],
    activities: [
      "Singing together",
      "Social peek-a-boo",
      "Face games",
      "Talking and responding",
    ],
    ageGroup: "infant",
  },
  [corePersonalities.observational]: {
    icon: "😌",
    description: "Finds comfort in predictable routines",
    traits: [
      "Routine preference",
      "Consistency seeking",
      "Gradual transitions",
    ],
    activities: [
      "Consistent schedules",
      "Gentle transitions",
      "Familiar songs",
      "Predictable games",
    ],
    ageGroup: "infant",
  },
  [corePersonalities.creative]: {
    icon: "🌟",
    description: "Very vocal and expressive with sounds and movement",
    traits: ["Vocal expression", "Body language", "Musical response"],
    activities: [
      "Singing and music",
      "Sound play",
      "Vocal imitation",
      "Dance and movement",
    ],
    ageGroup: "infant",
  },
  [corePersonalities.emotional]: {
    icon: "💕",
    description: "Sensitive to emotions and needs gentle approaches",
    traits: ["Emotional sensitivity", "Gentle responses", "Comfort seeking"],
    activities: [
      "Soothing music",
      "Gentle massage",
      "Comfort routines",
      "Calm environments",
    ],
    ageGroup: "infant",
  },
  [corePersonalities.physical]: {
    icon: "🏃",
    description: "Always moving and reaching for experiences",
    traits: ["High activity", "Physical engagement", "Movement seeking"],
    activities: [
      "Reaching games",
      "Kicking play",
      "Movement songs",
      "Physical exploration",
    ],
    ageGroup: "infant",
  },
  [corePersonalities.independent]: {
    icon: "🔍",
    description: "Focuses intently and shows strong preferences",
    traits: ["Intense focus", "Strong preferences", "Persistent exploration"],
    activities: [
      "Object exploration",
      "Cause-effect toys",
      "Investigation time",
      "Novel experiences",
    ],
    ageGroup: "infant",
  },
};

const toddlerLearningProfiles: LearningProfileByPersonality = {
  // Toddler profiles (1-2 years)
  [corePersonalities.physical]: {
    icon: "🏃",
    description: "Learns through movement and whole-body experiences",
    traits: ["Constant movement", "Physical challenges", "Active learning"],
    activities: [
      "Climbing structures",
      "Running games",
      "Dancing",
      "Ball play",
    ],
    ageGroup: "toddler",
  },
  [corePersonalities.social]: {
    icon: "👥",
    description: "Copies others and seeks shared activities",
    traits: ["Imitation learning", "Social seeking", "Shared excitement"],
    activities: [
      "Copy games",
      "Simple group play",
      "Imitation songs",
      "Shared activities",
    ],
    ageGroup: "toddler",
  },
  [corePersonalities.logical]: {
    icon: "🧩",
    description: "Enjoys routines and repetitive activities",
    traits: ["Routine comfort", "Organizing play", "Repetition enjoyment"],
    activities: [
      "Sorting games",
      "Stacking toys",
      "Routine songs",
      "Simple patterns",
    ],
    ageGroup: "toddler",
  },
  [corePersonalities.creative]: {
    icon: "🎨",
    description: "Engages in simple pretend play and creative expression",
    traits: ["Imaginative play", "Creative expression", "Artistic interest"],
    activities: [
      "Simple pretend play",
      "Art exploration",
      "Music and movement",
      "Story time",
    ],
    ageGroup: "toddler",
  },
  [corePersonalities.observational]: {
    icon: "🌸",
    description: "Takes time to warm up and prefers familiar environments",
    traits: ["Slow warming", "Familiar preference", "Gentle encouragement"],
    activities: [
      "Familiar activities",
      "One-on-one play",
      "Gentle exploration",
      "Comfort objects",
    ],
    ageGroup: "toddler",
  },
  [corePersonalities.emotional]: {
    icon: "💕",
    description: "Shows empathy and responds to emotional tone",
    traits: [
      "Empathy development",
      "Emotional responsiveness",
      "Comfort giving",
    ],
    activities: [
      "Nurturing play",
      "Emotion books",
      "Comfort games",
      "Helping activities",
    ],
    ageGroup: "toddler",
  },
  [corePersonalities.independent]: {
    icon: "🔍",
    description: "Wants autonomy and persistent exploration",
    traits: [
      "Independence seeking",
      "Persistent exploration",
      "Self-direction",
    ],
    activities: [
      "Self-help practice",
      "Independent exploration",
      "Choice-making",
      "Problem-solving toys",
    ],
    ageGroup: "toddler",
  },
  [corePersonalities.sensory]: {
    icon: "⚡",
    description: "Loves messy play and rich sensory experiences",
    traits: ["Sensory seeking", "Messy play love", "Texture exploration"],
    activities: [
      "Water play",
      "Sand exploration",
      "Messy art",
      "Textured materials",
    ],
    ageGroup: "toddler",
  },
};

const earlyPreschoolLearningProfiles: LearningProfileByPersonality = {
  // Early Preschool profiles (2-3 years)
  [corePersonalities.physical]: {
    icon: "🏃",
    description: "Learns best through movement and action",
    traits: [
      "Movement learning",
      "Physical challenges",
      "Difficulty sitting still",
    ],
    activities: [
      "Active games",
      "Building projects",
      "Dance parties",
      "Playground adventures",
    ],
    ageGroup: "earlyPreschool",
  },
  [corePersonalities.social]: {
    icon: "👥",
    description: "Thrives in group settings and with peers",
    traits: ["Group preference", "Peer learning", "Collaborative play"],
    activities: [
      "Group games",
      "Peer play dates",
      "Sharing activities",
      "Circle time",
    ],
    ageGroup: "earlyPreschool",
  },
  [corePersonalities.logical]: {
    icon: "🧩",
    description: "Enjoys puzzles, patterns, and problem-solving",
    traits: ["Pattern recognition", "Problem solving", "Question asking"],
    activities: [
      "Puzzles",
      "Sorting games",
      "Building blocks",
      "Simple experiments",
    ],
    ageGroup: "earlyPreschool",
  },
  [corePersonalities.creative]: {
    icon: "🎨",
    description: "Lives in world of imagination and pretend play",
    traits: ["Rich imagination", "Pretend play", "Creative expression"],
    activities: [
      "Dress-up play",
      "Art projects",
      "Story creation",
      "Imaginative play",
    ],
    ageGroup: "earlyPreschool",
  },
  [corePersonalities.observational]: {
    icon: "🌸",
    description: "Processes carefully before acting",
    traits: ["Careful processing", "Small group preference", "Deep engagement"],
    activities: [
      "Quiet exploration",
      "One-on-one activities",
      "Nature observation",
      "Calm play",
    ],
    ageGroup: "earlyPreschool",
  },
  [corePersonalities.emotional]: {
    icon: "💕",
    description: "Highly attuned to emotions and loves helping",
    traits: ["Emotional awareness", "Helping instinct", "Nurturing behavior"],
    activities: [
      "Caring for dolls",
      "Helping tasks",
      "Emotion games",
      "Kindness activities",
    ],
    ageGroup: "earlyPreschool",
  },
  [corePersonalities.independent]: {
    icon: "🔍",
    description: "Shows independence and loves investigating",
    traits: ["Strong independence", "Investigation focus", "Self-direction"],
    activities: [
      "Independent puzzles",
      "Exploration time",
      "Choice activities",
      "Discovery games",
    ],
    ageGroup: "earlyPreschool",
  },
  [corePersonalities.sensory]: {
    icon: "⚡",
    description: "Craves rich sensory experiences",
    traits: ["Sensory craving", "Touch exploration", "Multi-sensory learning"],
    activities: [
      "Sensory bins",
      "Textured play",
      "Movement activities",
      "Sensory exploration",
    ],
    ageGroup: "earlyPreschool",
  },
};

const preschoolLearningProfiles: LearningProfileByPersonality = {
  // Preschool profiles (3-4 years)
  [corePersonalities.physical]: {
    icon: "🏃",
    description: "Masters skills through movement and hands-on learning",
    traits: [
      "Physical mastery",
      "Hands-on learning",
      "Coordination development",
    ],
    activities: [
      "Sports skills",
      "Building projects",
      "Obstacle courses",
      "Physical challenges",
    ],
    ageGroup: "preschool",
  },
  [corePersonalities.social]: {
    icon: "👥",
    description: "Learns best through peer interaction and group activities",
    traits: [
      "Collaboration skills",
      "Friendship development",
      "Group learning",
    ],
    activities: [
      "Team games",
      "Collaborative projects",
      "Social problem-solving",
      "Group activities",
    ],
    ageGroup: "preschool",
  },
  [corePersonalities.logical]: {
    icon: "🧩",
    description: "Loves complex puzzles and logical activities",
    traits: [
      "Complex problem solving",
      "Logical thinking",
      "Structure preference",
    ],
    activities: [
      "Complex puzzles",
      "Building sets",
      "Math games",
      "Science experiments",
    ],
    ageGroup: "preschool",
  },
  [corePersonalities.creative]: {
    icon: "🎨",
    description: "Creates elaborate stories and imaginative play",
    traits: [
      "Elaborate creativity",
      "Original thinking",
      "Artistic expression",
    ],
    activities: [
      "Art projects",
      "Story creation",
      "Drama play",
      "Music composition",
    ],
    ageGroup: "preschool",
  },
  [corePersonalities.observational]: {
    icon: "🌸",
    description: "Processes deeply and shows attention to detail",
    traits: ["Deep processing", "Detail attention", "Thoughtful observation"],
    activities: [
      "Detailed projects",
      "Nature study",
      "Quiet activities",
      "In-depth exploration",
    ],
    ageGroup: "preschool",
  },
  [corePersonalities.emotional]: {
    icon: "💕",
    description: "Highly empathetic and emotionally intelligent",
    traits: [
      "Emotional intelligence",
      "Empathy skills",
      "Relationship learning",
    ],
    activities: [
      "Emotion discussions",
      "Helping others",
      "Caring activities",
      "Social skills",
    ],
    ageGroup: "preschool",
  },
  [corePersonalities.independent]: {
    icon: "🔍",
    description: "Shows self-direction and autonomous learning",
    traits: [
      "Self-direction",
      "Autonomous learning",
      "Independent problem-solving",
    ],
    activities: [
      "Independent projects",
      "Self-chosen activities",
      "Problem-solving challenges",
      "Research activities",
    ],
    ageGroup: "preschool",
  },
  [corePersonalities.sensory]: {
    icon: "⚡",
    description: "Uses sensory input to regulate and learn effectively",
    traits: [
      "Sensory regulation",
      "Multi-sensory learning",
      "Sensory preferences",
    ],
    activities: [
      "Sensory regulation activities",
      "Multi-sensory learning",
      "Movement breaks",
      "Sensory tools",
    ],
    ageGroup: "preschool",
  },
};

const preKLearningProfiles: LearningProfileByPersonality = {
  // Pre-K profiles (4-5+ years)
  [corePersonalities.physical]: {
    icon: "🏃",
    description: "Learns academic concepts through movement and manipulation",
    traits: [
      "Movement-based learning",
      "Physical manipulation",
      "Kinesthetic memory",
    ],
    activities: [
      "Math manipulatives",
      "Science experiments",
      "Letter formation",
      "Active learning games",
    ],
    ageGroup: "preK",
  },
  [corePersonalities.social]: {
    icon: "👥",
    description: "Learns through discussion, group work, and peer teaching",
    traits: ["Discussion learning", "Peer teaching", "Group problem-solving"],
    activities: [
      "Group discussions",
      "Peer tutoring",
      "Team projects",
      "Collaborative problem-solving",
    ],
    ageGroup: "preK",
  },
  [corePersonalities.logical]: {
    icon: "🧩",
    description: "Shows early academic skills in math, science, and logic",
    traits: ["Academic readiness", "Logical reasoning", "System understanding"],
    activities: [
      "Math concepts",
      "Science exploration",
      "Logic puzzles",
      "Academic games",
    ],
    ageGroup: "preK",
  },
  [corePersonalities.creative]: {
    icon: "🎨",
    description: "Uses imagination across all learning areas",
    traits: [
      "Cross-curricular creativity",
      "Original ideas",
      "Artistic talents",
    ],
    activities: [
      "Creative writing",
      "Art integration",
      "Musical expression",
      "Dramatic learning",
    ],
    ageGroup: "preK",
  },
  [corePersonalities.observational]: {
    icon: "🌸",
    description: "Processes thoroughly and asks thoughtful questions",
    traits: [
      "Thorough processing",
      "Thoughtful questions",
      "Deep understanding",
    ],
    activities: [
      "In-depth projects",
      "Research activities",
      "Thoughtful discussions",
      "Detailed exploration",
    ],
    ageGroup: "preK",
  },
  [corePersonalities.emotional]: {
    icon: "💕",
    description: "Shows advanced emotional understanding and regulation",
    traits: [
      "Emotional regulation",
      "Social leadership",
      "Conflict resolution",
    ],
    activities: [
      "Emotion coaching",
      "Peer mediation",
      "Social skills practice",
      "Leadership opportunities",
    ],
    ageGroup: "preK",
  },
  [corePersonalities.independent]: {
    icon: "🔍",
    description: "Shows intrinsic motivation and self-directed learning",
    traits: ["Intrinsic motivation", "Self-direction", "Independent thinking"],
    activities: [
      "Independent research",
      "Self-chosen projects",
      "Goal setting",
      "Self-assessment",
    ],
    ageGroup: "preK",
  },
  [corePersonalities.sensory]: {
    icon: "⚡",
    description: "Integrates sensory input for optimal learning",
    traits: [
      "Sensory integration",
      "Learning style awareness",
      "Sensory strategies",
    ],
    activities: [
      "Multi-sensory phonics",
      "Kinesthetic math",
      "Visual learning",
      "Auditory processing",
    ],
    ageGroup: "preK",
  },
};

export type AgeGroup =
  | "infant"
  | "toddler"
  | "earlyPreschool"
  | "preschool"
  | "preK";

const learningProfilesByAgeGroup: Record<
  AgeGroup,
  LearningProfileByPersonality
> = {
  infant: infantLearningProfiles,
  toddler: toddlerLearningProfiles,
  earlyPreschool: earlyPreschoolLearningProfiles,
  preschool: preschoolLearningProfiles,
  preK: preKLearningProfiles,
};

const namesByAgeGroup: Partial<Record<Personality, Record<AgeGroup, string>>> =
  {
    [corePersonalities.physical]: {
      infant: "Active Mover",
      toddler: "Physical Explorer",
      earlyPreschool: "Active Learner",
      preschool: "Physical Achiever",
      preK: "Kinesthetic Learner",
    },
    [corePersonalities.social]: {
      infant: "Social Connector",
      toddler: "Social Imitator",
      earlyPreschool: "Social Butterfly",
      preschool: "Social Collaborator",
      preK: "Collaborative Learner",
    },
    [corePersonalities.logical]: {
      infant: "Calm Processor",
      toddler: "Pattern Seeker",
      earlyPreschool: "Logic Lover",
      preschool: "Pattern Master",
      preK: "Logical Thinker",
    },
    [corePersonalities.creative]: {
      infant: "Expressive Communicator",
      toddler: "Creative Player",
      earlyPreschool: "Creative Dreamer",
      preschool: "Creative Innovator",
      preK: "Creative Visionary",
    },
    [corePersonalities.observational]: {
      infant: "Gentle Observer",
      toddler: "Cautious Observer",
      earlyPreschool: "Thoughtful Observer",
      preschool: "Reflective Thinker",
      preK: "Contemplative Learner",
    },
    [corePersonalities.emotional]: {
      infant: "Emotional Responder",
      toddler: "Emotional Connector",
      earlyPreschool: "Empathy Helper",
      preschool: "Emotional Intuitive",
      preK: "Emotionally Intelligent",
    },
    [corePersonalities.independent]: {
      infant: "Curious Investigator",
      toddler: "Independent Doer",
      earlyPreschool: "Curious Explorer",
      preschool: "Independent Investigator",
      preK: "Self-Directed Learner",
    },
    [corePersonalities.sensory]: {
      infant: "Sensory Explorer",
      toddler: "Sensory Seeker",
      earlyPreschool: "Sensory Adventurer",
      preschool: "Sensory Processor",
      preK: "Multi-Sensory Learner",
    },
  };

export type Zodiac =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export type ZodiacSign = {
  icon: string;
  element: string;
  traits: string[];
  dates: [number, number, number, number];
  primary: Personality[];
  secondary: Personality[];
};

const zodiacSigns: Record<Zodiac, ZodiacSign> = {
  aries: {
    icon: "♈",
    element: "fire",
    traits: ["energetic", "bold", "independent"],
    dates: [3, 21, 4, 19],
    primary: [corePersonalities.physical, corePersonalities.independent],
    secondary: [corePersonalities.creative],
  },
  taurus: {
    icon: "♉",
    element: "earth",
    traits: ["steady", "practical", "methodical"],
    dates: [4, 20, 5, 20],
    primary: [corePersonalities.sensory, corePersonalities.observational],
    secondary: [corePersonalities.logical],
  },
  gemini: {
    icon: "♊",
    element: "air",
    traits: ["curious", "social", "adaptable"],
    dates: [5, 21, 6, 20],
    primary: [corePersonalities.social, corePersonalities.logical],
    secondary: [corePersonalities.creative],
  },
  cancer: {
    icon: "♋",
    element: "water",
    traits: ["nurturing", "emotional", "intuitive"],
    dates: [6, 21, 7, 22],
    primary: [corePersonalities.emotional, corePersonalities.observational],
    secondary: [corePersonalities.creative],
  },
  leo: {
    icon: "♌",
    element: "fire",
    traits: ["confident", "creative", "dramatic"],
    dates: [7, 23, 8, 22],
    primary: [corePersonalities.creative, corePersonalities.social],
    secondary: [corePersonalities.physical],
  },
  virgo: {
    icon: "♍",
    element: "earth",
    traits: ["detail-oriented", "helpful", "analytical"],
    dates: [8, 23, 9, 22],
    primary: [corePersonalities.logical, corePersonalities.observational],
    secondary: [corePersonalities.emotional],
  },
  libra: {
    icon: "♎",
    element: "air",
    traits: ["harmonious", "social", "balanced"],
    dates: [9, 23, 10, 22],
    primary: [corePersonalities.social, corePersonalities.emotional],
    secondary: [corePersonalities.creative],
  },
  scorpio: {
    icon: "♏",
    element: "water",
    traits: ["intense", "determined", "perceptive"],
    dates: [10, 23, 11, 21],
    primary: [corePersonalities.emotional, corePersonalities.observational],
    secondary: [corePersonalities.independent],
  },
  sagittarius: {
    icon: "♐",
    element: "fire",
    traits: ["adventurous", "optimistic", "freedom-loving"],
    dates: [11, 22, 12, 21],
    primary: [corePersonalities.independent, corePersonalities.physical],
    secondary: [corePersonalities.social],
  },
  capricorn: {
    icon: "♑",
    element: "earth",
    traits: ["ambitious", "disciplined", "practical"],
    dates: [12, 22, 1, 19],
    primary: [corePersonalities.logical, corePersonalities.independent],
    secondary: [corePersonalities.observational],
  },
  aquarius: {
    icon: "♒",
    element: "air",
    traits: ["innovative", "independent", "humanitarian"],
    dates: [1, 20, 2, 18],
    primary: [corePersonalities.independent, corePersonalities.creative],
    secondary: [corePersonalities.logical],
  },
  pisces: {
    icon: "♓",
    element: "water",
    traits: ["imaginative", "compassionate", "intuitive"],
    dates: [2, 19, 3, 20],
    primary: [corePersonalities.creative, corePersonalities.emotional],
    secondary: [corePersonalities.observational],
  },
};

type Question = {
  scenario: string;
  prediction: string;
  question: string;
  weight: number;
};

type QuestionsByPersonality = Partial<Record<Personality, Question[]>>;

const infantQuestions: QuestionsByPersonality = {
  [corePersonalities.observational]: [
    {
      scenario: "Meeting New People",
      prediction:
        "We sense {name} likes to carefully observe new faces and situations!",
      question:
        "{name} typically watches new people quietly for a while before smiling or responding",
      weight: 3,
    },
    {
      scenario: "Environment Changes",
      prediction: "{name} probably notices when things are different!",
      question:
        "{name} seems to notice and react when toys or furniture are moved to new places",
      weight: 2,
    },
  ],
  [corePersonalities.sensory]: [
    {
      scenario: "Texture Exploration",
      prediction:
        "We predict {name} loves exploring different textures and sensations!",
      question:
        "{name} actively reaches for and explores different textures, sounds, and objects",
      weight: 3,
    },
    {
      scenario: "Sensory Response",
      prediction: "{name} probably responds strongly to sensory experiences!",
      question:
        "{name} shows clear reactions (positive or negative) to different sounds, lights, or textures",
      weight: 2,
    },
  ],
  [corePersonalities.social]: [
    {
      scenario: "Face-to-Face Interaction",
      prediction: "We sense {name} lights up during social interaction!",
      question:
        "{name} becomes more animated and engaged when people talk to or play with them",
      weight: 3,
    },
    {
      scenario: "Social Seeking",
      prediction: "{name} probably seeks out social connection!",
      question:
        "{name} often looks toward people's faces and seems to want interaction",
      weight: 2,
    },
  ],
  [corePersonalities.observational]: [
    {
      scenario: "Routine Preferences",
      prediction: "We predict {name} finds comfort in predictable routines!",
      question:
        "{name} seems calmer and more content when daily routines are consistent",
      weight: 3,
    },
    {
      scenario: "Transition Sensitivity",
      prediction:
        "{name} probably needs gentle transitions between activities!",
      question:
        "{name} responds better to gradual changes rather than sudden transitions",
      weight: 2,
    },
  ],
  [corePersonalities.creative]: [
    {
      scenario: "Vocal Expression",
      prediction: "We sense {name} loves to 'talk' and express themselves!",
      question:
        "{name} is very vocal with coos, babbles, and makes lots of different sounds",
      weight: 3,
    },
    {
      scenario: "Musical Response",
      prediction: "{name} probably responds strongly to music and singing!",
      question:
        "{name} becomes more animated or calm when music is played or when you sing",
      weight: 2,
    },
  ],
  [corePersonalities.emotional]: [
    {
      scenario: "Emotional Sensitivity",
      prediction: "We predict {name} is very sensitive to emotional tone!",
      question:
        "{name} responds differently to calm, happy, or stressed voices and emotions",
      weight: 3,
    },
    {
      scenario: "Comfort Seeking",
      prediction: "{name} probably seeks comfort when overwhelmed!",
      question: "{name} needs extra soothing during busy or overwhelming times",
      weight: 2,
    },
  ],
  [corePersonalities.physical]: [
    {
      scenario: "Movement Patterns",
      prediction:
        "We sense {name} is always moving and exploring with their body!",
      question:
        "{name} is constantly moving their arms, legs, or whole body even during quiet times",
      weight: 3,
    },
    {
      scenario: "Physical Engagement",
      prediction: "{name} probably learns through physical movement!",
      question:
        "{name} reaches eagerly for objects and seems to understand things better when they can touch them",
      weight: 2,
    },
  ],
  [corePersonalities.independent]: [
    {
      scenario: "Intense Focus",
      prediction:
        "We predict {name} focuses intently on things that interest them!",
      question:
        "{name} will stare at or examine objects, faces, or scenes for longer periods than expected",
      weight: 3,
    },
    {
      scenario: "Strong Preferences",
      prediction: "{name} probably shows clear likes and dislikes!",
      question:
        "{name} demonstrates strong preferences for certain toys, activities, or people",
      weight: 2,
    },
  ],
};

const toddlerQuestions: QuestionsByPersonality = {
  [corePersonalities.physical]: [
    {
      scenario: "Movement Preference",
      prediction: "We sense {name} learns best when their body is moving!",
      question:
        "{name} prefers active play like climbing, running, or dancing over quiet activities",
      weight: 3,
    },
    {
      scenario: "Energy Expression",
      prediction: "{name} probably shows excitement through movement!",
      question:
        "When {name} is happy or excited, they express it through jumping, clapping, or moving their whole body",
      weight: 2,
    },
  ],
  [corePersonalities.social]: [
    {
      scenario: "Copy Cat Behavior",
      prediction: "We predict {name} loves copying what others do!",
      question:
        "{name} often imitates actions, sounds, or behaviors they see others doing",
      weight: 3,
    },
    {
      scenario: "Shared Activities",
      prediction: "{name} probably gets more excited when others join in!",
      question:
        "{name} shows more enthusiasm for toys and activities when playing with others",
      weight: 2,
    },
  ],
  [corePersonalities.logical]: [
    {
      scenario: "Routine Importance",
      prediction: "We sense {name} finds security in familiar patterns!",
      question:
        "{name} notices and shows distress when their usual routines are changed",
      weight: 3,
    },
    {
      scenario: "Organizing Play",
      prediction: "{name} probably enjoys organizing and arranging things!",
      question:
        "{name} likes to sort, stack, or arrange their toys in specific ways",
      weight: 2,
    },
  ],
  [corePersonalities.creative]: [
    {
      scenario: "Imaginative Play",
      prediction:
        "We predict {name} is starting to use their imagination in play!",
      question:
        "{name} pretends toys are something else (like a block is a phone) or engages in simple pretend play",
      weight: 3,
    },
    {
      scenario: "Creative Expression",
      prediction: "{name} probably loves creative and artistic activities!",
      question:
        "{name} is drawn to music, dancing, scribbling, or other creative expression",
      weight: 2,
    },
  ],
  [corePersonalities.observational]: [
    {
      scenario: "New Situation Approach",
      prediction: "We sense {name} likes to observe before jumping in!",
      question:
        "{name} typically watches new activities or places before participating themselves",
      weight: 3,
    },
    {
      scenario: "Familiar Preference",
      prediction:
        "{name} probably feels most comfortable with familiar people and places!",
      question:
        "{name} shows clear preference for familiar environments and takes time to warm up to new situations",
      weight: 2,
    },
  ],
  [corePersonalities.emotional]: [
    {
      scenario: "Empathy Development",
      prediction: "We predict {name} notices and responds to others' emotions!",
      question:
        "{name} shows concern when others are upset, like offering a toy or giving hugs",
      weight: 3,
    },
    {
      scenario: "Emotional Responsiveness",
      prediction: "{name} probably feels emotions deeply!",
      question:
        "{name} is very affected by the emotional tone of situations and people around them",
      weight: 2,
    },
  ],
  [corePersonalities.independent]: [
    {
      scenario: "Autonomy Seeking",
      prediction: "We sense {name} wants to do things themselves!",
      question:
        "{name} often insists on doing tasks independently, even when it's difficult",
      weight: 3,
    },
    {
      scenario: "Persistent Exploration",
      prediction: "{name} probably keeps trying until they figure things out!",
      question:
        "{name} will work persistently on challenges and doesn't give up easily",
      weight: 2,
    },
  ],
  [corePersonalities.sensory]: [
    {
      scenario: "Messy Play Love",
      prediction: "We predict {name} loves rich sensory experiences!",
      question:
        "{name} gravitates toward messy play like water, sand, play dough, or finger painting",
      weight: 3,
    },
    {
      scenario: "Texture Exploration",
      prediction: "{name} probably learns through touching and feeling!",
      question:
        "{name} wants to touch, feel, and explore the texture of different objects and materials",
      weight: 2,
    },
  ],
};

const earlyPreschoolQuestions: QuestionsByPersonality = {
  [corePersonalities.physical]: [
    {
      scenario: "Movement Learning",
      prediction:
        "We sense {name} learns best when they can move and be active!",
      question:
        "{name} has difficulty sitting still for long periods and learns better during active play",
      weight: 3,
    },
    {
      scenario: "Physical Challenges",
      prediction: "{name} probably loves physical challenges and active games!",
      question:
        "{name} seeks out physical challenges like climbing, jumping, or running games",
      weight: 2,
    },
  ],
  [corePersonalities.social]: [
    {
      scenario: "Group Preference",
      prediction:
        "We predict {name} thrives in social situations and group play!",
      question:
        "{name} prefers playing with others over playing alone and seeks out group activities",
      weight: 3,
    },
    {
      scenario: "Peer Learning",
      prediction:
        "{name} probably learns by watching and playing with other children!",
      question:
        "{name} picks up new skills and behaviors quickly when around other children",
      weight: 2,
    },
  ],
  [corePersonalities.logical]: [
    {
      scenario: "Problem Solving",
      prediction:
        "We sense {name} enjoys puzzles and figuring out how things work!",
      question:
        "{name} enjoys puzzles, building activities, and figuring out cause-and-effect relationships",
      weight: 3,
    },
    {
      scenario: "Question Asking",
      prediction: "{name} probably asks lots of 'why' and 'how' questions!",
      question:
        "{name} frequently asks questions about how things work and wants detailed explanations",
      weight: 2,
    },
  ],
  [corePersonalities.creative]: [
    {
      scenario: "Pretend Play Development",
      prediction: "We predict {name} has a rich imagination for pretend play!",
      question:
        "{name} often engages in pretend play, like feeding dolls, playing house, or pretending to be animals",
      weight: 3,
    },
    {
      scenario: "Creative Expression",
      prediction: "{name} probably loves expressing themselves creatively!",
      question:
        "{name} is drawn to art materials, music, dancing, or storytelling activities",
      weight: 2,
    },
  ],
  [corePersonalities.observational]: [
    {
      scenario: "Processing Time",
      prediction:
        "We sense {name} likes to think things through before acting!",
      question:
        "{name} often takes time to process new information or situations before responding",
      weight: 3,
    },
    {
      scenario: "Quiet Preference",
      prediction:
        "{name} probably prefers smaller groups and quieter activities!",
      question:
        "{name} seems more comfortable and engaged in smaller groups or one-on-one interactions",
      weight: 2,
    },
  ],
  [corePersonalities.emotional]: [
    {
      scenario: "Empathy Expression",
      prediction:
        "We predict {name} has a big heart and notices others' feelings!",
      question:
        "{name} shows concern when others are upset and often tries to comfort them",
      weight: 3,
    },
    {
      scenario: "Helping Instinct",
      prediction: "{name} probably loves helping others!",
      question:
        "{name} often wants to help with tasks around the house or help other children",
      weight: 2,
    },
  ],
  [corePersonalities.independent]: [
    {
      scenario: "Independent Investigation",
      prediction:
        "We sense {name} loves exploring and investigating on their own!",
      question:
        "{name} often explores toys and environments independently before asking for help",
      weight: 3,
    },
    {
      scenario: "Choice Making",
      prediction: "{name} probably likes having choices and making decisions!",
      question:
        "{name} shows clear preferences and likes to have choices in activities and play",
      weight: 2,
    },
  ],
  [corePersonalities.sensory]: [
    {
      scenario: "Sensory Play Preference",
      prediction:
        "We predict {name} loves rich sensory experiences and messy play!",
      question:
        "{name} gravitates toward sensory activities like play dough, water play, or finger painting",
      weight: 3,
    },
    {
      scenario: "Multi-Sensory Learning",
      prediction:
        "{name} probably learns best when multiple senses are involved!",
      question:
        "{name} seems to understand and remember things better when they can touch, see, and hear about them",
      weight: 2,
    },
  ],
};

const preschoolQuestions = {
  [corePersonalities.physical]: [
    {
      scenario: "Physical Mastery",
      prediction:
        "We sense {name} loves mastering physical skills and challenges!",
      question:
        "{name} enjoys physical activities like sports, climbing, building, and hands-on projects",
      weight: 3,
    },
    {
      scenario: "Hands-On Learning",
      prediction:
        "{name} probably learns best through hands-on, physical experiences!",
      question:
        "{name} understands concepts better when they can manipulate objects and move their body",
      weight: 2,
    },
  ],
  [corePersonalities.social]: [
    {
      scenario: "Group Learning",
      prediction:
        "We predict {name} learns best through interaction and collaboration!",
      question:
        "{name} shows more engagement and learns more during group activities than solo work",
      weight: 3,
    },
    {
      scenario: "Friendship Skills",
      prediction: "{name} probably has natural social and friendship skills!",
      question:
        "{name} easily makes friends and enjoys cooperative play and shared problem-solving",
      weight: 2,
    },
  ],
  [corePersonalities.logical]: [
    {
      scenario: "Complex Problem Solving",
      prediction: "We sense {name} loves understanding how things work!",
      question:
        "{name} enjoys complex puzzles and building activities that require planning",
      weight: 3,
    },
    {
      scenario: "Logical Thinking",
      prediction: "{name} probably thinks in logical steps!",
      question:
        "{name} asks detailed 'why' and 'how' questions and wants thorough explanations",
      weight: 2,
    },
  ],
  [corePersonalities.creative]: [
    {
      scenario: "Original Ideas",
      prediction: "We predict {name} brings creative solutions to challenges!",
      question:
        "{name} comes up with unique ideas and approaches that adults wouldn't think of",
      weight: 3,
    },
    {
      scenario: "Elaborate Creativity",
      prediction: "{name} probably creates complex imaginative scenarios!",
      question:
        "{name} creates elaborate stories, art projects, or dramatic play scenarios",
      weight: 2,
    },
  ],
  [corePersonalities.observational]: [
    {
      scenario: "Deep Processing",
      prediction:
        "We sense {name} processes information deeply and thoughtfully!",
      question:
        "{name} takes time to think through problems and often comes up with thoughtful solutions",
      weight: 3,
    },
    {
      scenario: "Detail Attention",
      prediction: "{name} probably notices details that others might miss!",
      question:
        "{name} pays attention to small details in books, activities, and their environment",
      weight: 2,
    },
  ],
  [corePersonalities.emotional]: [
    {
      scenario: "Emotional Intelligence",
      prediction: "We predict {name} has advanced understanding of emotions!",
      question:
        "{name} can identify and talk about their own emotions and others' feelings",
      weight: 3,
    },
    {
      scenario: "Relationship Learning",
      prediction: "{name} probably learns best through emotional connection!",
      question:
        "{name} responds better to activities when they feel emotionally connected to the teacher or activity",
      weight: 2,
    },
  ],
  [corePersonalities.independent]: [
    {
      scenario: "Self-Direction",
      prediction:
        "We sense {name} loves directing their own learning and exploration!",
      question:
        "{name} often chooses their own projects and can work independently for extended periods",
      weight: 3,
    },
    {
      scenario: "Problem-Solving Persistence",
      prediction: "{name} probably persists through challenges independently!",
      question:
        "{name} keeps trying to solve problems on their own before asking for help",
      weight: 2,
    },
  ],
  [corePersonalities.sensory]: [
    {
      scenario: "Sensory Regulation",
      prediction:
        "We predict {name} uses sensory input to help them focus and learn!",
      question:
        "{name} seems to concentrate better when they can move slightly, fidget, or have sensory input",
      weight: 3,
    },
    {
      scenario: "Sensory Preferences",
      prediction:
        "{name} probably has clear sensory preferences that help them learn!",
      question:
        "{name} shows clear preferences for certain textures, sounds, or lighting that help them feel comfortable",
      weight: 2,
    },
  ],
};

const preKQuestions: Partial<Record<Personality, Question[]>> = {
  [corePersonalities.physical]: [
    {
      scenario: "Movement-Based Learning",
      prediction:
        "We sense {name} learns academic concepts best through movement!",
      question:
        "{name} understands letters, numbers, and concepts better when they can trace, build, or move while learning",
      weight: 3,
    },
    {
      scenario: "Physical Memory",
      prediction:
        "{name} probably remembers information better when their body is involved!",
      question:
        "{name} needs movement breaks during learning activities to maintain focus and attention",
      weight: 2,
    },
  ],
  [corePersonalities.social]: [
    {
      scenario: "Discussion Learning",
      prediction:
        "We predict {name} learns best through discussion and group work!",
      question:
        "{name} shows more understanding and engagement during group discussions than individual work",
      weight: 3,
    },
    {
      scenario: "Peer Teaching",
      prediction:
        "{name} probably loves sharing knowledge and teaching others!",
      question:
        "{name} often explains things to other children and wants to show others what they've learned",
      weight: 2,
    },
  ],
  [corePersonalities.logical]: [
    {
      scenario: "Academic Readiness",
      prediction: "We sense {name} is ready for academic challenges!",
      question:
        "{name} shows interest in letters, numbers, and understanding how things work systematically",
      weight: 3,
    },
    {
      scenario: "Problem-Solving Approach",
      prediction: "{name} probably approaches problems methodically!",
      question:
        "{name} likes to work through problems step-by-step and understand the logic behind solutions",
      weight: 2,
    },
  ],
  [corePersonalities.creative]: [
    {
      scenario: "Cross-Curricular Creativity",
      prediction:
        "We predict {name} brings creativity to all areas of learning!",
      question:
        "{name} finds creative ways to approach academic tasks and learning activities",
      weight: 3,
    },
    {
      scenario: "Artistic Talents",
      prediction: "{name} probably shows natural talent in creative areas!",
      question:
        "{name} shows advanced skills or strong interest in art, music, drama, or creative writing",
      weight: 2,
    },
  ],
  [corePersonalities.observational]: [
    {
      scenario: "Thoughtful Questions",
      prediction: "We sense {name} asks deep, thoughtful questions!",
      question:
        "{name} asks questions that show deep thinking and wants to understand things thoroughly",
      weight: 3,
    },
    {
      scenario: "In-Depth Focus",
      prediction: "{name} probably prefers to explore topics in depth!",
      question:
        "{name} likes to spend extended time on topics that interest them rather than moving quickly between activities",
      weight: 2,
    },
  ],
  [corePersonalities.emotional]: [
    {
      scenario: "Emotional Regulation",
      prediction:
        "We predict {name} shows advanced emotional understanding and self-control!",
      question:
        "{name} can manage their emotions well and helps others with emotional situations",
      weight: 3,
    },
    {
      scenario: "Social Leadership",
      prediction:
        "{name} probably shows natural leadership in social situations!",
      question:
        "{name} often helps resolve conflicts between children and shows empathy and fairness",
      weight: 2,
    },
  ],
  [corePersonalities.independent]: [
    {
      scenario: "Independent Learning",
      prediction: "We sense {name} loves directing their own learning!",
      question:
        "{name} often chooses their own projects and can work independently for extended periods",
      weight: 3,
    },
    {
      scenario: "Intrinsic Motivation",
      prediction:
        "{name} probably feels proud of self-directed accomplishments!",
      question:
        "{name} shows more satisfaction from self-chosen activities than assigned tasks",
      weight: 2,
    },
  ],
  [corePersonalities.sensory]: [
    {
      scenario: "Sensory Integration",
      prediction:
        "We predict {name} learns best when multiple senses are engaged!",
      question:
        "{name} understands and remembers academic concepts better when they can see, hear, and touch materials",
      weight: 3,
    },
    {
      scenario: "Learning Style Awareness",
      prediction: "{name} probably knows what helps them learn best!",
      question:
        "{name} can tell you what kinds of activities help them focus and learn most effectively",
      weight: 2,
    },
  ],
};

const ageSpecificQuestionsByAgeGroup: Partial<
  Record<AgeGroup, QuestionsByPersonality>
> = {
  infant: infantQuestions,
  toddler: toddlerQuestions,
  earlyPreschool: earlyPreschoolQuestions,
  preschool: preschoolQuestions,
  preK: preKQuestions,
};

export {
  learningProfilesByAgeGroup,
  namesByAgeGroup,
  zodiacSigns,
  ageSpecificQuestionsByAgeGroup,
};
