function getRealTod() {
  const h = new Date().getHours();
  return h >= 6 && h < 12 ? "Ochtend" : h >= 12 && h < 17 ? "Middag" : h >= 17 && h < 21 ? "Avond" : "Nacht";
}
function getRealSeason() {
  const m = new Date().getMonth();
  return m >= 2 && m <= 4 ? "Lente" : m >= 5 && m <= 7 ? "Zomer" : m >= 8 && m <= 10 ? "Herfst" : "Winter";
}
function TreeSVG({
  season,
  growth,
  enrich,
  onLeaf
}) {
  const col = SC[season];
  const s = Math.min(Math.max(growth, 0.15), 0.85);
  const th = 140 * s;
  const cr = 105 * s;
  const lc = Math.floor(20 + enrich * 30);
  const leaves = useMemo(() => {
    const a = [];
    for (let i = 0; i < lc; i++) {
      const an = i / lc * Math.PI * 2 + Math.sin(i * 4.1) * 0.6;
      const d = (0.25 + Math.random() * 0.75) * cr;
      a.push({
        x: Math.cos(an) * d,
        y: Math.sin(an) * d * 0.7 - cr * 0.1,
        sz: 4 + Math.random() * 10,
        rot: i * 41 % 360,
        id: i,
        hue: Math.random()
      });
    }
    return a;
  }, [lc, cr]);
  // SEED stage - centered, detailed
  if (growth < 0.15) return /*#__PURE__*/React.createElement("g", {
    transform: "translate(0,-30)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: 22,
    rx: 35,
    ry: 8,
    fill: "#4A5568",
    opacity: 0.3
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: 20,
    rx: 28,
    ry: 6,
    fill: "#5A6878",
    opacity: 0.25
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: 10,
    rx: 7,
    ry: 9,
    fill: "#6A7888"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "ry",
    values: "9;9.3;9",
    dur: "3s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: 8,
    rx: 5,
    ry: 6,
    fill: "#7A8898",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-2,6 Q-1,4 1,5",
    fill: "none",
    stroke: "#4A5568",
    strokeWidth: 0.5,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,2 Q-2,-8 0,-16",
    fill: "none",
    stroke: "#4CAF7A",
    strokeWidth: 2.5,
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: "-3,0,-8;3,0,-8;-3,0,-8",
    dur: "5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-1,-15)"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: "-4,-1,-15;4,-1,-15;-4,-1,-15",
    dur: "5s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,0 Q-8,-4 -6,-10 Q-3,-14 0,-8 Q3,-14 6,-10 Q8,-4 0,0Z",
    fill: col.la,
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,0 Q0,-6 0,-10",
    fill: "none",
    stroke: col.lf,
    strokeWidth: 0.6,
    opacity: 0.5
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(2,-11) rotate(40)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 Q-4,-2 -3,-5 Q-1,-7 0,-4 Q1,-7 3,-5 Q4,-2 0,0Z",
    fill: col.ll,
    opacity: 0.6
  })), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: Math.cos(i * 2.1) * 18,
    cy: -5 + Math.sin(i * 3.4) * 12,
    r: 1.2,
    fill: "#FFE87C",
    opacity: 0.4
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0.2;0.6;0.2",
    dur: `${2 + i}s`,
    repeatCount: "indefinite"
  }))));
  // GROWING/MATURE tree
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: 24,
    rx: 80 * s,
    ry: 16 * s,
    fill: "rgba(0,0,0,0.08)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: -5,
    cy: 26,
    rx: 60 * s,
    ry: 10 * s,
    fill: "rgba(0,0,0,0.05)"
  }), growth > 0.3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: `M-${10 * s},14 Q-${25 * s},18 -${45 * s},22 Q-${55 * s},25 -${60 * s},20`,
    fill: "none",
    stroke: "#3D4A58",
    strokeWidth: 4 * s,
    strokeLinecap: "round",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${10 * s},14 Q${28 * s},20 ${48 * s},18 Q${58 * s},22 ${55 * s},15`,
    fill: "none",
    stroke: "#3D4A58",
    strokeWidth: 3.5 * s,
    strokeLinecap: "round",
    opacity: 0.45
  }), /*#__PURE__*/React.createElement("path", {
    d: `M-${4 * s},16 Q-${15 * s},24 -${28 * s},28`,
    fill: "none",
    stroke: "#3D4A58",
    strokeWidth: 2.5 * s,
    strokeLinecap: "round",
    opacity: 0.35
  })), /*#__PURE__*/React.createElement("path", {
    d: `M-${14 * s},14 C-${16 * s},-${th * 0.2} -${18 * s},-${th * 0.5} -${13 * s},-${th * 0.85} Q-${10 * s},-${th} -${5 * s},-${th} L${5 * s},-${th} Q${10 * s},-${th} ${13 * s},-${th * 0.85} C${18 * s},-${th * 0.5} ${16 * s},-${th * 0.2} ${14 * s},14 Z`,
    fill: "#4A5568"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M-${8 * s},10 Q-${10 * s},-${th * 0.2} -${9 * s},-${th * 0.5}`,
    fill: "none",
    stroke: "#6A7888",
    strokeWidth: 2 * s,
    opacity: 0.3,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${6 * s},8 Q${8 * s},-${th * 0.3} ${7 * s},-${th * 0.6}`,
    fill: "none",
    stroke: "#6A7888",
    strokeWidth: 1.5 * s,
    opacity: 0.25,
    strokeLinecap: "round"
  }), growth > 0.4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: -4 * s,
    cy: -th * 0.3,
    rx: 3 * s,
    ry: 2 * s,
    fill: "#3D4A58",
    opacity: 0.3
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 5 * s,
    cy: -th * 0.55,
    rx: 2.5 * s,
    ry: 1.5 * s,
    fill: "#3D4A58",
    opacity: 0.2
  })), growth > 0.35 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: `M-${5 * s},-${th * 0.7} Q-${30 * s},-${th * 0.9} -${52 * s},-${th * 0.62}`,
    fill: "none",
    stroke: "#4A5568",
    strokeWidth: 5 * s,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M-${52 * s},-${th * 0.62} Q-${58 * s},-${th * 0.55} -${62 * s},-${th * 0.5}`,
    fill: "none",
    stroke: "#4A5568",
    strokeWidth: 2.5 * s,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${5 * s},-${th * 0.65} Q${35 * s},-${th * 0.95} ${55 * s},-${th * 0.55}`,
    fill: "none",
    stroke: "#4A5568",
    strokeWidth: 5 * s,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${55 * s},-${th * 0.55} Q${60 * s},-${th * 0.48} ${64 * s},-${th * 0.42}`,
    fill: "none",
    stroke: "#4A5568",
    strokeWidth: 2.5 * s,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M-${3 * s},-${th * 0.85} Q-${18 * s},-${th * 1.08} -${35 * s},-${th * 0.9}`,
    fill: "none",
    stroke: "#4A5568",
    strokeWidth: 3.5 * s,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${3 * s},-${th * 0.8} Q${22 * s},-${th * 1.1} ${40 * s},-${th * 0.88}`,
    fill: "none",
    stroke: "#4A5568",
    strokeWidth: 3.5 * s,
    strokeLinecap: "round"
  })), growth > 0.2 && /*#__PURE__*/React.createElement("g", {
    transform: `translate(0,-${th + cr * 0.15})`
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: -cr * 0.15,
    cy: cr * 0.2,
    rx: cr * 1.15,
    ry: cr * 0.92,
    fill: col.lf,
    opacity: 0.3
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: -cr * 0.25,
    cy: cr * 0.1,
    rx: cr * 0.75,
    ry: cr * 0.65,
    fill: col.lf
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: cr * 0.2,
    cy: cr * 0.05,
    rx: cr * 0.8,
    ry: cr * 0.7,
    fill: col.lf
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: -cr * 0.15,
    rx: cr * 0.85,
    ry: cr * 0.72,
    fill: col.lf
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: -cr * 0.35,
    cy: -cr * 0.3,
    rx: cr * 0.55,
    ry: cr * 0.4,
    fill: col.la,
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: cr * 0.3,
    cy: -cr * 0.25,
    rx: cr * 0.5,
    ry: cr * 0.38,
    fill: col.la,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: -cr * 0.48,
    rx: cr * 0.42,
    ry: cr * 0.32,
    fill: col.ll,
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: -cr * 0.7,
    cy: -cr * 0.1,
    rx: cr * 0.32,
    ry: cr * 0.28,
    fill: col.la,
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: cr * 0.68,
    cy: -cr * 0.05,
    rx: cr * 0.3,
    ry: cr * 0.26,
    fill: col.la,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: cr * 0.35,
    rx: cr * 0.6,
    ry: cr * 0.3,
    fill: col.lf,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: -cr * 0.1,
    cy: cr * 0.05,
    rx: cr * 0.5,
    ry: cr * 0.4,
    fill: col.lf,
    opacity: 0.3
  }), growth > 0.5 && [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("circle", {
    key: `sp${i}`,
    cx: Math.sin(i * 2.5) * cr * 0.6,
    cy: Math.cos(i * 3.1) * cr * 0.5 - cr * 0.1,
    r: 1.5 + i * 0.3,
    fill: "#FFFFCC",
    opacity: 0.2
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0.1;0.35;0.1",
    dur: `${2.5 + i * 0.7}s`,
    repeatCount: "indefinite"
  }))), leaves.map(l => /*#__PURE__*/React.createElement("g", {
    key: l.id,
    onClick: onLeaf,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: l.x,
    cy: l.y,
    rx: l.sz,
    ry: l.sz * 0.55,
    fill: l.hue > 0.66 ? col.ll : l.hue > 0.33 ? col.la : col.lf,
    opacity: 0.7 + l.hue * 0.2,
    transform: `rotate(${l.rot},${l.x},${l.y})`
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: `${l.rot - 3},${l.x},${l.y};${l.rot + 3},${l.x},${l.y};${l.rot - 3},${l.x},${l.y}`,
    dur: `${4 + l.id % 5}s`,
    repeatCount: "indefinite"
  }))))));
}
const W = {
  width: "100%",
  height: "100vh",
  maxWidth: 430,
  margin: "0 auto",
  position: "relative",
  overflow: "hidden",
  fontFamily: "'Quicksand',system-ui,sans-serif",
  userSelect: "none",
  touchAction: "manipulation",
  background: "#F5F7FA",
  WebkitOverflowScrolling: "touch"
};
const F = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
const OB = {
  ...F,
  background: "linear-gradient(160deg,#2C3E50 0%,#1A2B3A 30%,#162430 60%,#1E3040 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const OBC = {
  textAlign: "center",
  zIndex: 2,
  padding: "16px 20px",
  width: "100%",
  maxWidth: 360
};
function HuxiApp() {
  // ═══ ALL HOOKS FIRST ═══
  const [phase, setPhase] = useState("welcome");
  const [accType, setAccType] = useState(null);
  const [reason, setReason] = useState(null);
  const [experience, setExperience] = useState(null);
  const [treeName, setTreeName] = useState("");
  const [userName, setUserName] = useState("");
  const [nameIn, setNameIn] = useState("");
  const [userNameIn, setUserNameIn] = useState("");
  const [season, setSeason] = useState(getRealSeason());
  const [tod, setTod] = useState(getRealTod());
  const [growth, setGrowth] = useState(0.08);
  // Granular world items - each earned one by one
  const [wi, setWi] = useState({
    leaves: 0,
    flowers: 0,
    grass: 0,
    stones: 0,
    shrooms: 0,
    bushes: 0,
    streakDays: 0,
    brieven: 0,
    dagboeken: 0,
    tools: 0,
    checkins: 0,
    tasks: 0
  });
  const [dailyMood, setDailyMood] = useState(null);
  const [checkinDone, setCheckinDone] = useState(false);
  const [showEx, setShowEx] = useState(false);
  const [curEx, setCurEx] = useState(null);
  const [exPhase, setExPhase] = useState("idle");
  const [exRound, setExRound] = useState(0);
  const [exCountdown, setExCountdown] = useState(0);
  const [showSci, setShowSci] = useState(false);
  const [seenEx, setSeenEx] = useState([]);
  const [lastExId, setLastExId] = useState(null);
  const [showOffer, setShowOffer] = useState(false);
  const [exDone, setExDone] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [custRounds, setCustRounds] = useState(null);
  const [showMem, setShowMem] = useState(false);
  const [memTxt, setMemTxt] = useState("");
  const [showSett, setShowSett] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [letterDraft, setLetterDraft] = useState("");
  const [letters, setLetters] = useState([]);
  const [showLetters, setShowLetters] = useState(false);
  const [showDiary, setShowDiary] = useState(false);
  const [diaryDraft, setDiaryDraft] = useState("");
  const [diary, setDiary] = useState([]);
  const [wMsg, setWMsg] = useState("");
  const [animalMsg, setAnimalMsg] = useState("");
  const [showTools, setShowTools] = useState(false);
  const [activeTool, setActiveTool] = useState(null);
  const [toolStep, setToolStep] = useState(0);
  const [gratItems, setGratItems] = useState(["", "", ""]);
  const [affirmation] = useState(() => MEMZ[Math.floor(Math.random() * MEMZ.length)]);
  const [dailyTasks, setDailyTasks] = useState([]);
  const [curTask, setCurTask] = useState(null);
  const [taskInput, setTaskInput] = useState("");
  const [dailyActions, setDailyActions] = useState(0);
  const [lastDay, setLastDay] = useState(() => new Date().toDateString());
  const [totalSessions, setTotalSessions] = useState(0);
  // Invisible level: based on total sessions completed, not shown to user
  // Level 1 (0-4 sessions): check-in + 1 ademhaling + 1 taak, max 2 acties
  // Level 2 (5-14): + brief + dagboek, max 3 acties  
  // Level 3 (15-29): + tools menu, max 4 acties
  // Level 4 (30-59): + zelf oefening kiezen, max 5 acties
  // Level 5 (60+): alles vrij, geen limiet
  const lvl = totalSessions < 5 ? 1 : totalSessions < 15 ? 2 : totalSessions < 30 ? 3 : totalSessions < 60 ? 4 : 5;
  const maxAct = experience !== "none" ? 99 : lvl === 1 ? 2 : lvl === 2 ? 3 : lvl === 3 ? 4 : lvl === 4 ? 5 : 99;
  const [soundOn, setSoundOn] = useState(true);
  const [reminder, setReminder] = useState("");
  const [isPremium] = useState(true);
  const [coins, setCoins] = useState(0);
  const [ownedItems, setOwnedItems] = useState(["hat_none", "shirt_none", "pants_none", "shoes_none", "skin_light", "hair_short", "hairc_brown", "acc_none", "pet_none"]);
  const [avatar, setAvatar] = useState({
    hat: "hat_none",
    shirt: "shirt_none",
    pants: "pants_none",
    shoes: "shoes_none",
    skin: "skin_light",
    hair: "hair_short",
    hairc: "hairc_brown",
    acc: "acc_none",
    pet: "pet_none"
  });
  const [showAvatar, setShowAvatar] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [thClients, setThClients] = useState([{
    name: "Anna V.",
    mood: "ok",
    lastActive: "Vandaag",
    hw: [],
    id: 1
  }, {
    name: "Bert D.",
    mood: "tense",
    lastActive: "Gisteren",
    hw: [],
    id: 2
  }, {
    name: "Clara M.",
    mood: "calm",
    lastActive: "Vandaag",
    hw: [],
    id: 3
  }]);
  const [selClient, setSelClient] = useState(null);
  const [showAssign, setShowAssign] = useState(false);
  const [showAddEx, setShowAddEx] = useState(false);
  const [custExName, setCustExName] = useState("");
  const [custExDesc, setCustExDesc] = useState("");
  const [custExList, setCustExList] = useState([]);
  const [thCode] = useState("HUXI-" + Math.random().toString(36).substring(2, 8).toUpperCase());
  const [careAlert, setCareAlert] = useState(true);
  const [thAgenda, setThAgenda] = useState([{
    client: "Anna V.",
    time: "14:00",
    date: "2026-03-18",
    id: 1
  }]);
  const [showAgendaAdd, setShowAgendaAdd] = useState(false);
  const [agClient, setAgClient] = useState("");
  const [agDate, setAgDate] = useState("");
  const [agTime, setAgTime] = useState("");
  const countRef = useRef(null);
  const exRef = useRef(null);
  const c = SC[season];
  const moods = accType === "child" ? MCH : accType === "junior" ? MJ : MA;
  const reasons = accType === "child" ? REASONS_C : accType === "junior" ? REASONS_J : REASONS_A;
  const checkinQ = useMemo(() => CQ[Math.floor(Math.random() * CQ.length)], [checkinDone]);
  const offerTxt = useMemo(() => OFFR[Math.floor(Math.random() * OFFR.length)], [showOffer]);
  const flowers = useMemo(() => {
    const n = Math.min(wi.flowers, 40);
    return Array.from({
      length: n
    }, (_, i) => ({
      x: -175 + i / Math.max(n, 1) * 350 + Math.sin(i * 7) * 20,
      y: 14 + Math.abs(Math.sin(i * 3)) * 35,
      color: c.fl[i % c.fl.length],
      sz: 0.35 + Math.random() * 0.55,
      id: i
    }));
  }, [wi.flowers, c.fl]);
  const particles = useMemo(() => {
    const isN = tod === "Nacht";
    return Array.from({
      length: 16
    }, (_, i) => ({
      x: Math.random() * 100,
      y: 5 + Math.random() * 78,
      sz: isN ? 2 + Math.random() * 3 : 1.2 + Math.random() * 2,
      del: Math.random() * 8,
      dur: 4 + Math.random() * 6,
      glow: isN,
      id: i
    }));
  }, [tod]);
  const stars = useMemo(() => Array.from({
    length: 40
  }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 38,
    sz: 0.8 + Math.random() * 2,
    del: Math.random() * 3,
    id: i
  })), []);
  useEffect(() => {
    if (phase !== "world" && phase !== "therapist_dash") return;
    const iv = setInterval(() => {
      setTod(getRealTod());
      setSeason(getRealSeason());
    }, 60000);
    return () => clearInterval(iv);
  }, [phase]);
  // Reset daily state on new day
  useEffect(() => {
    const today = new Date().toDateString();
    if (today !== lastDay) {
      setLastDay(today);
      setDailyActions(0);
      setCheckinDone(false);
      setExDone(false);
      setDailyTasks([]);
    }
  }, [lastDay]);
  // Enrich derived from world items - slow accumulation
  const enrich = Math.min(1, wi.leaves * 0.008 + wi.flowers * 0.015 + wi.grass * 0.006 + wi.stones * 0.01 + wi.shrooms * 0.01 + wi.bushes * 0.012 + wi.checkins * 0.002 + wi.tasks * 0.003);
  // World progress - unlocks landscape features
  const wp = Math.min(1, totalSessions * 0.002 + wi.leaves * 0.004 + wi.flowers * 0.008 + wi.grass * 0.003 + wi.stones * 0.006 + wi.shrooms * 0.006 + wi.bushes * 0.008 + wi.brieven * 0.01 + wi.dagboeken * 0.004 + wi.streakDays * 0.01);
  useEffect(() => {
    if (phase !== "world") return;
    setWMsg((userName ? "Hoi " + userName + "! " : "") + "Welkom bij " + treeName + " 🌿");
    const t = setTimeout(() => setWMsg(""), 4000);
    return () => clearTimeout(t);
  }, [phase, treeName, userName]);
  useEffect(() => {
    if (phase !== "world") return;
    const iv = setInterval(() => saveData(), 60000);
    return () => clearInterval(iv);
  }, [phase]);
  useEffect(() => {
    if (checkinDone && !exDone && !showEx && !showOffer && phase === "world") {
      const t = setTimeout(() => setShowOffer(true), 3000);
      return () => clearTimeout(t);
    }
  }, [checkinDone, exDone, phase]);
  // Reminders - stay until dismissed
  useEffect(() => {
    if (phase !== "world") return;
    const msgs = ["Drink een slokje water 💧", "Rek je even uit 🙆", "Adem even diep in 🌬️", "Kijk even naar buiten 🪟", "Rol je schouders 🧘"];
    const iv = setInterval(() => {
      if (!reminder) setReminder(msgs[Math.floor(Math.random() * msgs.length)]);
    }, 180000);
    return () => clearInterval(iv);
  }, [phase, reminder]);
  // Generate daily tasks after checkin
  useEffect(() => {
    if (checkinDone && dailyTasks.length === 0) {
      const type = accType === "child" ? "child" : accType === "junior" ? "junior" : "adult";
      const pool = [...MICRO[type]].sort(() => Math.random() - 0.5);
      const count = lvl <= 1 ? 5 : lvl <= 2 ? 4 : lvl <= 3 ? 3 : 2;
      setDailyTasks(pool.slice(0, count).map((t, i) => ({
        id: i,
        text: t
      })));
    }
  }, [checkinDone, dailyTasks.length]);
  // Rare animal
  const rareAnimal = useMemo(() => {
    const m = new Date().getMinutes();
    if (season === "Winter" && tod === "Nacht" && m < 10) return "🦉";
    if (season === "Lente" && tod === "Ochtend" && m < 15) return "🦌";
    if (season === "Zomer" && tod === "Avond" && m < 10) return "✨";
    if (season === "Herfst" && tod === "Middag" && m < 8) return "🦔";
    return null;
  }, [season, tod]);
  const onLeaf = useCallback(() => {
    const all = [...MEMZ];
    const now = Date.now();
    letters.forEach(l => {
      if (![30, 90, 180, 365].some(d => now - l.id < d * 86400000)) all.push(l.text);
    });
    setMemTxt(all[Math.floor(Math.random() * all.length)]);
    setShowMem(true);
    setTimeout(() => setShowMem(false), 4000);
  }, [letters]);
  const runEx = useCallback(() => {
    if (!curEx) return;
    const ex = curEx;
    const childMult = accType === "child" ? 0.5 : 1;
    const tot = custRounds || Math.round(ex.r * childMult);
    let rnd = 0;
    setShowSci(false);
    const startCount = secs => {
      setExCountdown(Math.ceil(secs));
      clearInterval(countRef.current);
      countRef.current = setInterval(() => setExCountdown(c => c > 0 ? c - 1 : 0), 1000);
    };
    const fin = () => {
      clearInterval(countRef.current);
      setExPhase("done");
      setTimeout(() => {
        setShowEx(false);
        setExDone(true);
        setGrowth(g => Math.min(1, g + 0.008));
        setWi(w => ({
          ...w,
          leaves: w.leaves + 1
        }));
        setLastExId(ex.id);
        setCoins(c => c + (ex.pts || 10));
        setDailyActions(a => a + 1);
        setTotalSessions(s => s + 1);
        saveData();
      }, 2500);
    };
    const cyc = () => {
      setExPhase("in");
      startCount(ex.iS);
      exRef.current = setTimeout(() => {
        if (ex.hI > 0) {
          setExPhase("hold");
          startCount(ex.hI);
          exRef.current = setTimeout(() => {
            setExPhase("out");
            startCount(ex.oS);
            exRef.current = setTimeout(() => {
              if (ex.hO > 0) {
                setExPhase("hold2");
                startCount(ex.hO);
                exRef.current = setTimeout(() => {
                  rnd++;
                  setExRound(rnd);
                  rnd >= tot ? fin() : cyc();
                }, ex.hO * 1000);
              } else {
                rnd++;
                setExRound(rnd);
                rnd >= tot ? fin() : cyc();
              }
            }, ex.oS * 1000);
          }, ex.hI * 1000);
        } else {
          setExPhase("out");
          startCount(ex.oS);
          exRef.current = setTimeout(() => {
            rnd++;
            setExRound(rnd);
            rnd >= tot ? fin() : cyc();
          }, ex.oS * 1000);
        }
      }, ex.iS * 1000);
    };
    cyc();
  }, [curEx, custRounds, accType]);
  const stopEx = useCallback(() => {
    clearTimeout(exRef.current);
    clearInterval(countRef.current);
    setShowEx(false);
  }, []);

  // Persistent storage
  const saveData = () => {
    try {
      localStorage.setItem("huxi-profile", JSON.stringify({
        accType,
        reason,
        experience,
        treeName,
        userName,
        growth,
        coins,
        ownedItems,
        avatar,
        letters,
        diary,
        seenEx,
        lastExId,
        dailyMood,
        totalSessions,
        wi,
        lastDay,
        dailyActions
      }));
    } catch (e) {}
  };
  const loadData = () => {
    try {
      const raw = localStorage.getItem("huxi-profile");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.accType) {
          setAccType(d.accType);
          setReason(d.reason);
          setExperience(d.experience);
          setTreeName(d.treeName);
          setUserName(d.userName || "");
          setGrowth(d.growth || 0.1);
          setCoins(d.coins || 0);
          setDailyMood(d.dailyMood || null);
          setTotalSessions(d.totalSessions || 0);
          if (d.wi) setWi(d.wi);
          const today = new Date().toDateString();
          if (d.lastDay === today) {
            setLastDay(today);
            setDailyActions(d.dailyActions || 0);
          } else {
            setLastDay(today);
            setDailyActions(0);
          }
          setOwnedItems(d.ownedItems || ["hat_none", "shirt_none", "pants_none", "shoes_none", "skin_light", "hair_short", "hairc_brown", "acc_none", "pet_none"]);
          setAvatar(d.avatar || {
            hat: "hat_none",
            shirt: "shirt_none",
            pants: "pants_none",
            shoes: "shoes_none",
            skin: "skin_light",
            hair: "hair_short",
            hairc: "hairc_brown",
            acc: "acc_none",
            pet: "pet_none"
          });
          setLetters(d.letters || []);
          setDiary(d.diary || []);
          setSeenEx(d.seenEx || []);
          setLastExId(d.lastExId || null);
          setPhase("world");
        }
      }
    } catch (e) {}
  };
  useEffect(() => {
    loadData();
  }, []);

  // ═══ FUNCTIONS (no hooks) ═══
  const pickEx = () => {
    let pool = EX.filter(e => {
      if (experience === "none" && e.lv !== "b") return false;
      if (experience === "some" && e.lv === "x") return false;
      if (e.en === "up" && (dailyMood === "tense" || dailyMood === "overwhelmed" || dailyMood === "restless")) return false;
      if (experience === "none" && e.en === "up") return false;
      return true;
    });
    if (pool.length > 1) pool = pool.filter(e => e.id !== lastExId);
    return pool.length ? pool[Math.floor(Math.random() * pool.length)] : EX[0];
  };
  const launchEx = (ex, r) => {
    setCurEx(ex);
    setCustRounds(r || null);
    setShowOffer(false);
    setShowPicker(false);
    setShowEx(true);
    setExRound(0);
    setExPhase("idle");
    if (!seenEx.includes(ex.id)) {
      setShowSci(true);
      setSeenEx(p => [...p, ex.id]);
    } else setShowSci(false);
  };
  const startAuto = () => launchEx(pickEx(), null);
  const doCheckin = id => {
    setDailyMood(id);
    setCheckinDone(true);
    setGrowth(g => Math.min(1, g + 0.003));
    setWi(w => ({
      ...w,
      checkins: w.checkins + 1
    }));
    if (accType === "child" || accType === "junior") setCoins(c => c + 2);
    setTimeout(saveData, 500);
  };
  const saveLetter = () => {
    if (!letterDraft.trim()) return;
    setLetters(p => {
      const n = [{
        text: letterDraft.trim(),
        date: new Date().toLocaleDateString("nl-NL", {
          day: "numeric",
          month: "long",
          year: "numeric"
        }),
        id: Date.now()
      }, ...p];
      return n;
    });
    setLetterDraft("");
    setShowLetter(false);
    setWi(w => ({
      ...w,
      flowers: w.flowers + 1,
      brieven: w.brieven + 1
    }));
    if (accType === "child" || accType === "junior") setCoins(c => c + 8);
    setTimeout(saveData, 500);
  };
  const saveDiary = () => {
    if (!diaryDraft.trim()) return;
    setDiary(p => [{
      text: diaryDraft.trim(),
      date: new Date().toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "long"
      }),
      id: Date.now()
    }, ...p]);
    setDiaryDraft("");
    setShowDiary(false);
    setWi(w => ({
      ...w,
      grass: w.grass + 1,
      dagboeken: w.dagboeken + 1
    }));
    if (accType === "child" || accType === "junior") setCoins(c => c + 5);
    setTimeout(saveData, 500);
  };
  const switchAcc = () => {
    try {
      localStorage.removeItem("huxi-profile");
    } catch (e) {}
    setShowSett(false);
    setPhase("welcome");
    setAccType(null);
    setReason(null);
    setExperience(null);
    setTreeName("");
    setUserName("");
    setNameIn("");
    setUserNameIn("");
    setGrowth(0.08);
    setWi({
      leaves: 0,
      flowers: 0,
      grass: 0,
      stones: 0,
      shrooms: 0,
      bushes: 0,
      streakDays: 0,
      brieven: 0,
      dagboeken: 0,
      tools: 0,
      checkins: 0,
      tasks: 0
    });
    setTotalSessions(0);
    setCheckinDone(false);
    setExDone(false);
    setCoins(0);
    setOwnedItems(["hat_none", "shirt_none", "pants_none", "shoes_none", "skin_light", "hair_short", "hairc_brown", "acc_none", "pet_none"]);
    setAvatar({
      hat: "hat_none",
      shirt: "shirt_none",
      pants: "pants_none",
      shoes: "shoes_none",
      skin: "skin_light",
      hair: "hair_short",
      hairc: "hairc_brown",
      acc: "acc_none",
      pet: "pet_none"
    });
    setLetters([]);
    setDiary([]);
    setSeenEx([]);
  };
  const tapA = msg => {
    setAnimalMsg(msg);
    setTimeout(() => setAnimalMsg(""), 2500);
  };
  const finTool = () => {
    setActiveTool(null);
    setToolStep(0);
    setShowTools(false);
    setGrowth(g => Math.min(1, g + 0.004));
    setWi(w => ({
      ...w,
      tools: w.tools + 1,
      stones: w.stones + (w.tools % 2 === 0 ? 1 : 0),
      shrooms: w.shrooms + (w.tools % 2 === 1 ? 1 : 0)
    }));
    setDailyActions(a => a + 1);
    setTotalSessions(s => s + 1);
    if (accType === "child" || accType === "junior") setCoins(c => c + 6);
    setTimeout(saveData, 500);
  };
  const nextStep = steps => {
    toolStep < steps.length - 1 ? setToolStep(s => s + 1) : finTool();
  };
  // Task system
  const startTask = task => {
    setCurTask(task);
    setTaskInput("");
  };
  const finishTask = () => {
    const tid = curTask && curTask.id;
    setCurTask(null);
    setDailyTasks(p => p.filter(t => t.id !== tid));
    setGrowth(g => Math.min(1, g + 0.003));
    setWi(w => ({
      ...w,
      tasks: w.tasks + 1,
      bushes: w.bushes + (w.tasks % 5 === 0 ? 1 : 0)
    }));
    setDailyActions(a => a + 1);
    setTotalSessions(s => s + 1);
    setCoins(c => c + 5);
    setTimeout(saveData, 500);
  };
  const canDoMore = dailyActions < maxAct;
  const moodSlow = dailyMood === "overwhelmed" ? 2.5 : dailyMood === "tense" ? 1.8 : 1;
  const moodWarm = dailyMood === "overwhelmed" ? "rgba(255,180,100,0.1)" : dailyMood === "tense" ? "rgba(255,160,80,0.06)" : "transparent";
  const tI = {
    Ochtend: "🌅",
    Middag: "☀️",
    Avond: "🌇",
    Nacht: "🌙"
  }[tod];
  const sI = {
    Lente: "🌸",
    Zomer: "☀️",
    Herfst: "🍂",
    Winter: "❄️"
  }[season];
  const showCreek = wp > 0.35;
  const showBridge = wp > 0.55;
  const showPond = wp > 0.5;
  const showMountains = wp > 0.6;
  const showBench = wp > 0.65;

  // ═══ RENDERS ═══
  const css = `*{margin:0;padding:0;box-sizing:border-box}
html,body{background:#F5F7FA;overflow:hidden;height:100vh;height:100dvh;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}
@media(min-width:431px){body{display:flex;justify-content:center}}
.fadeUp{animation:fU .9s ease-out}@keyframes fU{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}
.wp{position:absolute;width:4px;height:4px;border-radius:50%;background:rgba(91,184,160,0.4);animation:fp 5s ease-in-out infinite alternate}@keyframes fp{0%{opacity:.3}100%{transform:translateY(-30px);opacity:.7}}
.card{background:rgba(255,255,255,0.08);border:1px solid rgba(91,184,160,0.2);border-radius:14px;padding:14px 10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;backdrop-filter:blur(8px);color:white;font-family:inherit}.card:hover{background:rgba(91,184,160,0.15)}
.rb{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(91,184,160,0.15);border-radius:14px;padding:12px 16px;cursor:pointer;backdrop-filter:blur(8px);font-family:inherit;width:100%;margin-bottom:6px}.rb:hover{background:rgba(91,184,160,0.12)}
.mb2{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.06);border:2px solid;border-radius:14px;padding:12px 16px;cursor:pointer;font-family:inherit;width:100%;margin-bottom:6px}
.ni{width:100%;max-width:260px;padding:13px 18px;border-radius:22px;border:2px solid rgba(91,184,160,0.3);background:rgba(255,255,255,0.08);color:#D8E8F0;font-size:16px;font-family:inherit;text-align:center;outline:none}.ni::placeholder{color:rgba(200,230,180,0.4)}
.gb{display:block;margin:18px auto 0;padding:12px 34px;background:linear-gradient(135deg,#4CAF7A,#3D9A68);color:white;border:none;border-radius:22px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit}
.ci{display:flex;align-items:center;gap:10px;border:1px solid;border-radius:16px;padding:12px 18px;cursor:pointer;backdrop-filter:blur(12px);font-family:inherit;background:rgba(255,255,255,0.12);margin-bottom:8px;width:100%}.ci:hover{background:rgba(255,255,255,0.2)}
.star{position:absolute;background:#FFF;border-radius:50%;animation:tw 2s ease-in-out infinite alternate}@keyframes tw{0%{opacity:.3;transform:scale(.8)}100%{opacity:1;transform:scale(1.2)}}
.cloud{position:absolute;animation:cd 100s linear infinite}@keyframes cd{0%{transform:translateX(0)}100%{transform:translateX(80px)}}.cp{position:absolute;background:rgba(255,255,255,0.85);border-radius:50%}.c1{width:50px;height:30px;top:0;left:0}.c2{width:65px;height:36px;top:-12px;left:14px}.c3{width:44px;height:26px;top:-2px;left:40px}
.po{position:absolute;background:rgba(255,255,200,0.55);border-radius:50%;animation:pf 6s ease-in-out infinite alternate}@keyframes pf{0%{opacity:.3}50%{transform:translate(12px,-20px);opacity:.7}100%{transform:translate(-8px,-35px);opacity:.15}}
.ff{position:absolute;background:#FFE87C;border-radius:50%;box-shadow:0 0 8px 3px rgba(255,232,124,0.5);animation:ffg 3.5s ease-in-out infinite alternate}@keyframes ffg{0%{opacity:.1}50%{transform:translate(12px,-14px);opacity:1}100%{transform:translate(-8px,-25px);opacity:.08}}
.badge{display:flex;align-items:center;gap:5px;background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);padding:5px 10px;border-radius:18px;color:#FFF;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,0.3);font-size:12px}
.sb{background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.15);border-radius:50%;width:34px;height:34px;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.ab{display:flex;align-items:center;gap:6px;background:rgba(255,255,255,0.9);backdrop-filter:blur(12px);border:1px solid rgba(76,175,122,0.3);border-radius:20px;padding:8px 14px;cursor:pointer;font-family:inherit;font-size:11px;font-weight:600;color:#3D4A58}
.mb{background:linear-gradient(135deg,#4CAF7A,#3D9A68);color:white;border:none;border-radius:14px;padding:8px 24px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit}
.bD{animation:bd 1s ease-out forwards}@keyframes bd{0%{transform:scale(0.8)}50%{transform:scale(1.1)}100%{transform:scale(1)}}
*::-webkit-scrollbar{display:none}*{-ms-overflow-style:none;scrollbar-width:none}
.fadeIn{animation:fi .3s ease}@keyframes fi{0%{opacity:0}100%{opacity:1}}
.sl{animation:su .5s ease-out}@keyframes su{0%{transform:translateY(20px);opacity:0}100%{opacity:1}}
.wm{animation:wm 4s ease-out forwards}@keyframes wm{0%{opacity:0}12%{opacity:1}78%{opacity:1}100%{opacity:0}}
.ta{width:100%;padding:12px 14px;border-radius:14px;border:2px solid rgba(76,175,122,0.2);background:rgba(76,175,122,0.04);color:#3D4A58;font-size:14px;font-family:inherit;outline:none;resize:none}.ta:focus{border-color:rgba(76,175,122,0.5)}
.tb{background:rgba(76,175,122,0.1);border:1px solid rgba(76,175,122,0.3);border-radius:8px;padding:4px 12px;color:#3D4A58;font-family:inherit;font-size:12px;cursor:pointer}`;
  const overlay = children => ({
    ...F,
    zIndex: 30,
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(5px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });
  const modal = {
    background: "rgba(255,255,255,0.97)",
    borderRadius: 24,
    padding: "24px 22px",
    width: 300,
    maxHeight: "80vh",
    overflow: "auto"
  };
  const g = "#3D4A58";
  const g5 = "rgba(61,74,88,0.5)";
  const g3 = "rgba(61,74,88,0.3)";

  // WELCOME
  if (phase === "welcome") return /*#__PURE__*/React.createElement("div", {
    style: W
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    style: OB
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeUp",
    style: OBC
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52
    }
  }, "\uD83C\uDF33"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      fontWeight: 700,
      color: "#5BB8A0",
      letterSpacing: 8,
      margin: "4px 0"
    }
  }, "HUXI"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(200,230,180,0.8)",
      fontSize: 14,
      marginBottom: 22
    }
  }, "Jouw rustige natuurwereld"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(220,240,200,0.9)",
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Wie ben jij?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      maxWidth: 300,
      margin: "0 auto"
    }
  }, ACCS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    className: "card",
    onClick: () => {
      setAccType(a.id);
      setPhase(a.id === "therapist" ? "planting" : "reason");
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26
    }
  }, a.emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: "#B8D8CC"
    }
  }, a.label), a.age && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "rgba(200,230,180,0.6)"
    }
  }, a.age), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "rgba(200,230,180,0.45)"
    }
  }, a.desc)))))));

  // REASON
  if (phase === "reason") return /*#__PURE__*/React.createElement("div", {
    style: W
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    style: OB
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeUp",
    style: OBC
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 12
    }
  }, accType === "child" ? "🦋" : "🌿"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "#5BB8A0",
      marginBottom: 6
    }
  }, accType === "child" ? "Waarom ben je hier?" : "Wat brengt je hier?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(200,230,180,0.6)",
      fontSize: 12,
      marginBottom: 20
    }
  }, "Geen oordeel, alleen begrip"), reasons.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    className: "rb",
    onClick: () => {
      setReason(r.id);
      setPhase("mood_first");
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, r.e), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#D8E8F0",
      fontSize: 14,
      fontWeight: 600
    }
  }, r.l))))));

  // MOOD
  if (phase === "mood_first") return /*#__PURE__*/React.createElement("div", {
    style: W
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    style: OB
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeUp",
    style: OBC
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 12
    }
  }, accType === "child" ? "🐰" : "🌱"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "#5BB8A0",
      marginBottom: 6
    }
  }, "Hoe voel je je nu?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(200,230,180,0.6)",
      fontSize: 12,
      marginBottom: 20
    }
  }, accType === "child" ? "Kies het diertje dat bij je past" : "Er is geen goed of fout antwoord"), moods.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    className: "mb2",
    style: {
      borderColor: m.c + "66"
    },
    onClick: () => {
      setDailyMood(m.id);
      if (accType === "child") {
        setExperience("none");
        setPhase("planting");
      } else setPhase("experience");
    }
  }, accType === "child" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, m.a), /*#__PURE__*/React.createElement("span", {
    style: {
      color: m.c,
      fontSize: 14,
      fontWeight: 600
    }
  }, m.l))))));

  // EXPERIENCE
  if (phase === "experience") return /*#__PURE__*/React.createElement("div", {
    style: W
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    style: OB
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeUp",
    style: OBC
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 12
    }
  }, "\uD83C\uDF2C\uFE0F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "#5BB8A0",
      marginBottom: 6
    }
  }, "Heb je ervaring met ademhaling?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(200,230,180,0.6)",
      fontSize: 12,
      marginBottom: 20
    }
  }, "Dit helpt ons de juiste oefeningen te kiezen"), EXPLVL.map(e => /*#__PURE__*/React.createElement("button", {
    key: e.id,
    className: "rb",
    onClick: () => {
      setExperience(e.id);
      setPhase("planting");
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, e.e), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#D8E8F0",
      fontSize: 14,
      fontWeight: 600
    }
  }, e.l))))));

  // PLANTING
  if (phase === "planting") {
    const isT = accType === "therapist";
    const go = () => {
      setUserName(userNameIn.trim() || "");
      setTreeName(nameIn.trim() || "Mijn Boom");
      setPhase(isT ? "therapist_dash" : "world");
      setGrowth(0.1);
      setTimeout(saveData, 500);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: W
    }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
      style: OB
    }, /*#__PURE__*/React.createElement("div", {
      className: "fadeUp",
      style: OBC
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 64,
        marginBottom: 12
      }
    }, isT ? "🔬" : "🌱"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        color: "#5BB8A0",
        marginBottom: 8
      }
    }, isT ? "Je praktijk instellen" : accType === "child" ? "Hoe heet jij?" : "Nog even voorstellen"), /*#__PURE__*/React.createElement("input", {
      className: "ni",
      placeholder: "Jouw naam",
      value: userNameIn,
      onChange: e => setUserNameIn(e.target.value),
      maxLength: 20,
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/React.createElement("input", {
      className: "ni",
      placeholder: isT ? "Praktijknaam..." : "Naam van je boom...",
      value: nameIn,
      onChange: e => setNameIn(e.target.value),
      maxLength: 20,
      onKeyDown: e => {
        if (e.key === "Enter") go();
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "gb",
      onClick: go
    }, isT ? "Start dashboard 🔬" : accType === "child" ? "Laten we beginnen! 🌟" : "We hebben het zaadje geplant 🌿"))));
  }

  // THERAPIST DASHBOARD
  if (phase === "therapist_dash") return /*#__PURE__*/React.createElement("div", {
    style: W
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      background: "linear-gradient(180deg,#F5F7FA,#EDF0F5)",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      maxWidth: 420,
      margin: "0 auto",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: g,
      margin: 0
    }
  }, treeName), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: g5,
      margin: 0
    }
  }, "Dashboard")), /*#__PURE__*/React.createElement("button", {
    className: "tb",
    onClick: switchAcc
  }, "\uD83D\uDD04 Wissel")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "white",
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: g,
      marginBottom: 12
    }
  }, "Cli\xEBnten"), thClients.map(cl => /*#__PURE__*/React.createElement("div", {
    key: cl.id,
    style: {
      padding: "10px 0",
      borderBottom: "1px solid rgba(61,74,88,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: g,
      margin: 0
    }
  }, cl.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10,
      color: g5,
      margin: 0
    }
  }, cl.lastActive)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "rgba(76,175,122,0.1)",
      border: "1px solid rgba(76,175,122,0.3)",
      borderRadius: 8,
      padding: "4px 10px",
      fontSize: 10,
      color: g,
      cursor: "pointer",
      fontFamily: "inherit"
    },
    onClick: () => {
      setSelClient(cl);
      setShowAssign(true);
    }
  }, "+ Oefening")), cl.hw.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, cl.hw.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.id,
    style: {
      fontSize: 11,
      color: g,
      padding: "2px 0"
    }
  }, h.done ? "✅" : "⬜", " ", h.name)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "white",
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: g,
      margin: 0
    }
  }, "Eigen oefeningen"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "rgba(76,175,122,0.1)",
      border: "1px solid rgba(76,175,122,0.3)",
      borderRadius: 8,
      padding: "4px 10px",
      fontSize: 10,
      color: g,
      cursor: "pointer",
      fontFamily: "inherit"
    },
    onClick: () => setShowAddEx(true)
  }, "+ Toevoegen")), custExList.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: g5
    }
  }, "Nog geen eigen oefeningen") : custExList.map(ce => /*#__PURE__*/React.createElement("div", {
    key: ce.id,
    style: {
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: g,
      margin: 0
    }
  }, ce.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "white",
      borderRadius: 16,
      padding: 16,
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: g,
      marginBottom: 8
    }
  }, "Code: ", /*#__PURE__*/React.createElement("code", {
    style: {
      letterSpacing: 2
    }
  }, thCode)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10,
      color: g5
    }
  }, "Deel met cli\xEBnt voor premium")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "white",
      borderRadius: 16,
      padding: 16,
      marginTop: 16,
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: g,
      marginBottom: 8
    }
  }, "Agenda"), thAgenda.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 0",
      borderBottom: "1px solid rgba(61,74,88,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: g,
      margin: 0
    }
  }, a.client), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10,
      color: g5,
      margin: 0
    }
  }, a.date, " om ", a.time)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      fontSize: 14,
      cursor: "pointer",
      color: "#C4553A"
    },
    onClick: () => setThAgenda(p => p.filter(x => x.id !== a.id))
  }, "\u2715"))), !showAgendaAdd ? /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 8,
      background: "rgba(76,175,122,0.1)",
      border: "1px solid rgba(76,175,122,0.3)",
      borderRadius: 8,
      padding: "6px 12px",
      fontSize: 10,
      color: g,
      cursor: "pointer",
      fontFamily: "inherit"
    },
    onClick: () => setShowAgendaAdd(true)
  }, "+ Afspraak") : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: 10,
      background: "rgba(76,175,122,0.04)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      width: "100%",
      padding: "6px 10px",
      borderRadius: 8,
      border: "1px solid " + g3,
      fontSize: 12,
      fontFamily: "inherit",
      marginBottom: 6,
      color: g,
      outline: "none"
    },
    placeholder: "Cli\xEBnt naam",
    value: agClient,
    onChange: e => setAgClient(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: {
      flex: 1,
      padding: "6px 8px",
      borderRadius: 8,
      border: "1px solid " + g3,
      fontSize: 11,
      fontFamily: "inherit",
      color: g,
      outline: "none"
    },
    value: agDate,
    onChange: e => setAgDate(e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    type: "time",
    style: {
      flex: 1,
      padding: "6px 8px",
      borderRadius: 8,
      border: "1px solid " + g3,
      fontSize: 11,
      fontFamily: "inherit",
      color: g,
      outline: "none"
    },
    value: agTime,
    onChange: e => setAgTime(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      background: "none",
      border: "1px solid " + g3,
      borderRadius: 8,
      padding: "6px",
      fontSize: 10,
      color: g5,
      cursor: "pointer"
    },
    onClick: () => {
      setShowAgendaAdd(false);
      setAgClient("");
      setAgDate("");
      setAgTime("");
    }
  }, "Annuleren"), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      flex: 1,
      padding: "6px",
      fontSize: 10
    },
    onClick: () => {
      if (agClient.trim() && agDate && agTime) {
        setThAgenda(p => [...p, {
          client: agClient.trim(),
          date: agDate,
          time: agTime,
          id: Date.now()
        }]);
        setShowAgendaAdd(false);
        setAgClient("");
        setAgDate("");
        setAgTime("");
      }
    }
  }, " Toevoegen")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "white",
      borderRadius: 16,
      padding: 16,
      marginTop: 16,
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: g,
      margin: 0
    }
  }, "Zorgmelding"), /*#__PURE__*/React.createElement("button", {
    className: "tb",
    onClick: () => setCareAlert(a => !a)
  }, careAlert ? "🔔 Aan" : "🔕 Uit")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10,
      color: g5,
      marginTop: 6
    }
  }, "Ontvang een melding als een cli\xEBnt meerdere dagen slecht scoort"))), showAssign && selClient && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => setShowAssign(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: g,
      fontSize: 16,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 14
    }
  }, "Toewijzen aan ", selClient.name), EX.map(ex => /*#__PURE__*/React.createElement("button", {
    key: ex.id,
    className: "rb",
    style: {
      background: "rgba(76,175,122,0.05)",
      borderColor: "rgba(76,175,122,0.15)"
    },
    onClick: () => {
      setThClients(p => p.map(cl => cl.id === selClient.id ? {
        ...cl,
        hw: [...cl.hw, {
          name: ex.name,
          done: false,
          id: Date.now()
        }]
      } : cl));
      setShowAssign(false);
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF2C\uFE0F"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: g
    }
  }, accType === "child" && ex.nameChild || ex.name))), custExList.map(ce => /*#__PURE__*/React.createElement("button", {
    key: ce.id,
    className: "rb",
    style: {
      background: "rgba(76,175,122,0.05)",
      borderColor: "rgba(76,175,122,0.15)"
    },
    onClick: () => {
      setThClients(p => p.map(cl => cl.id === selClient.id ? {
        ...cl,
        hw: [...cl.hw, {
          name: ce.name,
          done: false,
          id: Date.now()
        }]
      } : cl));
      setShowAssign(false);
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCB"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: g
    }
  }, ce.name))))), showAddEx && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => setShowAddEx(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: g,
      fontSize: 16,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 14
    }
  }, "Eigen oefening"), /*#__PURE__*/React.createElement("input", {
    style: {
      width: "100%",
      padding: "10px 14px",
      borderRadius: 12,
      border: "2px solid rgba(76,175,122,0.2)",
      background: "rgba(76,175,122,0.04)",
      color: g,
      fontSize: 14,
      fontFamily: "inherit",
      outline: "none",
      marginBottom: 10
    },
    placeholder: "Naam",
    value: custExName,
    onChange: e => setCustExName(e.target.value)
  }), /*#__PURE__*/React.createElement("textarea", {
    className: "ta",
    placeholder: "Beschrijving",
    value: custExDesc,
    onChange: e => setCustExDesc(e.target.value),
    rows: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      background: "none",
      border: "1px solid " + g3,
      borderRadius: 14,
      padding: "10px 0",
      color: g,
      fontSize: 13,
      cursor: "pointer"
    },
    onClick: () => {
      setShowAddEx(false);
      setCustExName("");
      setCustExDesc("");
    }
  }, "Annuleren"), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      flex: 1,
      padding: "10px 0"
    },
    onClick: () => {
      if (!custExName.trim()) return;
      setCustExList(p => [...p, {
        name: custExName.trim(),
        desc: custExDesc.trim(),
        id: Date.now()
      }]);
      setCustExName("");
      setCustExDesc("");
      setShowAddEx(false);
    }
  }, "Toevoegen"))))));

  // ═══ WORLD ═══
  return /*#__PURE__*/React.createElement("div", {
    style: W
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      background: `linear-gradient(180deg,${c.s1} 0%,${c.s2} 55%,${c.gl} 100%)`,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      background: TOVL[tod],
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      background: moodWarm,
      zIndex: 2
    }
  }), tod === "Nacht" && /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      zIndex: 3
    }
  }, stars.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "star",
    style: {
      position: "absolute",
      left: s.x + "%",
      top: s.y + "%",
      width: s.sz,
      height: s.sz,
      animationDelay: s.del + "s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      zIndex: 4,
      opacity: tod === "Nacht" ? 0.12 : 0.7
    }
  }, [{
    l: "3%",
    t: "6%",
    s: 1
  }, {
    l: "30%",
    t: "2%",
    s: 1.3
  }, {
    l: "60%",
    t: "9%",
    s: 0.85
  }].map((cl, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cloud",
    style: {
      position: "absolute",
      left: cl.l,
      top: cl.t,
      transform: "scale(" + cl.s + ")"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp c1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cp c2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cp c3"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "16%",
      left: 0,
      right: 0,
      height: "30%",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 140",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,95 Q40,40 100,65 Q150,30 220,55 Q290,20 350,48 Q390,35 400,50 L400,140 L0,140Z",
    fill: c.gd,
    opacity: 0.25
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,105 Q60,50 140,72 Q210,38 280,60 Q350,35 400,55 L400,140 L0,140Z",
    fill: c.gd,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,110 Q80,65 160,82 Q240,55 320,72 Q380,58 400,65 L400,140 L0,140Z",
    fill: c.gd,
    opacity: 0.45
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "22%",
      zIndex: 7,
      background: `linear-gradient(180deg,${c.gd}DD,${c.gd})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      zIndex: 12,
      pointerEvents: "none"
    }
  }, particles.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: p.glow ? "ff" : "po",
    style: {
      position: "absolute",
      left: p.x + "%",
      top: p.y + "%",
      width: p.sz,
      height: p.sz,
      animationDelay: p.del + "s",
      animationDuration: p.dur * moodSlow + "s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "8%",
      left: 0,
      right: 0,
      height: "72%",
      zIndex: 10,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      filter: !checkinDone ? "blur(3px)" : "none",
      transition: "filter 1.5s",
      opacity: !checkinDone ? 0.7 : 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "-200 -260 400 320",
    style: {
      width: "100%",
      height: "100%"
    },
    preserveAspectRatio: "xMidYMax meet"
  }, showCreek && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M-200,38 Q-140,32 -80,38 Q-20,30 40,36 Q100,28 160,34 Q200,30 200,32",
    fill: "none",
    stroke: "rgba(100,180,220,0.35)",
    strokeWidth: 4,
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "translate",
    values: "0,0;3,0;0,0",
    dur: "5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M-200,42 Q-130,36 -60,42 Q10,34 60,40 Q120,32 180,38",
    fill: "none",
    stroke: "rgba(100,180,220,0.2)",
    strokeWidth: 2.5
  })), [-160, -120, -80, 80, 120, 160].map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: `gr${i}`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M${x},28 Q${x - 3},18 ${x - 1},10`,
    fill: "none",
    stroke: c.gd,
    strokeWidth: 1.5,
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${x + 4},30 Q${x + 6},16 ${x + 3},8`,
    fill: "none",
    stroke: c.la || c.gd,
    strokeWidth: 1.2,
    opacity: 0.3
  }))), flowers.map(f => /*#__PURE__*/React.createElement("g", {
    key: f.id,
    transform: `translate(${f.x},${f.y}) scale(${f.sz})`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M0,0 Q-1,-4 0,-14`,
    fill: "none",
    stroke: "#3D7A5A",
    strokeWidth: 1.8,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M-1,-8 Q-6,-10 -8,-7`,
    fill: "none",
    stroke: "#4A7A6A",
    strokeWidth: 1,
    opacity: 0.6
  }), [0, 72, 144, 216, 288].map((r, i) => {
    const px = Math.cos(r * Math.PI / 180) * 5;
    const py = Math.sin(r * Math.PI / 180) * 5 - 14;
    return /*#__PURE__*/React.createElement("ellipse", {
      key: i,
      cx: px,
      cy: py,
      rx: 3.8,
      ry: 2.2,
      fill: f.color,
      opacity: 0.85,
      transform: `rotate(${r + 20},${px},${py})`
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 0,
    cy: -14,
    r: 2.5,
    fill: "#FFE066"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 0.5,
    cy: -14.5,
    r: 1,
    fill: "#FFF",
    opacity: 0.4
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0,10)"
  }, /*#__PURE__*/React.createElement(TreeSVG, {
    season: season,
    growth: growth,
    enrich: enrich,
    onLeaf: onLeaf
  })), wi.shrooms > 0 && /*#__PURE__*/React.createElement("g", {
    transform: "translate(100,32) scale(0.8)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: -2,
    y: 0,
    width: 4,
    height: 8,
    rx: 1.5,
    fill: "#F5E6D0"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: 0,
    rx: 7,
    ry: 4,
    fill: "#C4553A",
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("circle", {
    cx: -2,
    cy: -1,
    r: 1,
    fill: "white",
    opacity: 0.6
  })), wi.shrooms > 2 && /*#__PURE__*/React.createElement("g", {
    transform: "translate(-130,38) scale(0.6)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: -2,
    y: 0,
    width: 3,
    height: 6,
    rx: 1,
    fill: "#F5E6D0"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: 0,
    rx: 5,
    ry: 3,
    fill: "#E8A840",
    opacity: 0.5
  })), wi.stones > 0 && /*#__PURE__*/React.createElement("ellipse", {
    cx: 140,
    cy: 35,
    rx: 8,
    ry: 4,
    fill: "rgba(130,120,110,0.3)"
  }), wi.stones > 1 && /*#__PURE__*/React.createElement("ellipse", {
    cx: 148,
    cy: 37,
    rx: 5,
    ry: 3,
    fill: "rgba(140,130,120,0.25)"
  }), wi.stones > 3 && /*#__PURE__*/React.createElement("ellipse", {
    cx: -150,
    cy: 40,
    rx: 6,
    ry: 3,
    fill: "rgba(120,115,105,0.25)"
  }), Array.from({
    length: Math.min(wi.grass, 20)
  }, (_, i) => ({
    x: -160 + i * 16 + Math.sin(i * 5) * 10,
    id: i
  })).map(gr => /*#__PURE__*/React.createElement("g", {
    key: `gr${gr.id}`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M${gr.x},28 Q${gr.x - 2},20 ${gr.x},14`,
    fill: "none",
    stroke: c.la || c.gd,
    strokeWidth: 1.2,
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${gr.x + 3},30 Q${gr.x + 5},18 ${gr.x + 2},12`,
    fill: "none",
    stroke: c.gd,
    strokeWidth: 1,
    opacity: 0.3
  }))), wi.bushes > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: -140,
    cy: 30,
    rx: 12,
    ry: 8,
    fill: c.lf,
    opacity: 0.45
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: -136,
    cy: 27,
    rx: 8,
    ry: 6,
    fill: c.la,
    opacity: 0.35
  })), wi.bushes > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: 130,
    cy: 32,
    rx: 10,
    ry: 7,
    fill: c.lf,
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 134,
    cy: 29,
    rx: 7,
    ry: 5,
    fill: c.la,
    opacity: 0.3
  })), wi.bushes > 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: -80,
    cy: 35,
    rx: 9,
    ry: 6,
    fill: c.lf,
    opacity: 0.35
  })), showCreek && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M-200,38 Q-140,32 -80,38 Q-20,30 40,36 Q100,28 160,34 Q200,30 200,32",
    fill: "none",
    stroke: "rgba(100,180,220,0.35)",
    strokeWidth: 4,
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "translate",
    values: "0,0;3,0;0,0",
    dur: "5s",
    repeatCount: "indefinite"
  }))), showBridge && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M30,33 Q40,26 50,33",
    fill: "none",
    stroke: "#8B7050",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("line", {
    x1: 32,
    y1: 33,
    x2: 32,
    y2: 28,
    stroke: "#8B7050",
    strokeWidth: 1.2
  }), /*#__PURE__*/React.createElement("line", {
    x1: 48,
    y1: 33,
    x2: 48,
    y2: 28,
    stroke: "#8B7050",
    strokeWidth: 1.2
  })), showPond && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: 120,
    cy: 42,
    rx: 18,
    ry: 8,
    fill: "rgba(100,170,210,0.3)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 118,
    cy: 41,
    rx: 12,
    ry: 5,
    fill: "rgba(120,190,230,0.2)"
  })), showBench && /*#__PURE__*/React.createElement("g", {
    transform: "translate(95,24) scale(0.35)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: -15,
    y: 0,
    width: 30,
    height: 3,
    rx: 1,
    fill: "#8B7050"
  }), /*#__PURE__*/React.createElement("rect", {
    x: -13,
    y: 3,
    width: 3,
    height: 10,
    fill: "#6B5040"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 10,
    y: 3,
    width: 3,
    height: 10,
    fill: "#6B5040"
  }), /*#__PURE__*/React.createElement("rect", {
    x: -16,
    y: -6,
    width: 32,
    height: 3,
    rx: 1,
    fill: "#8B7050"
  })), wp > 0.6 && /*#__PURE__*/React.createElement("g", {
    transform: "translate(-160,25) scale(0.25)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: -3,
    y: -12,
    width: 6,
    height: 16,
    rx: 2,
    fill: "#4A5568"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 0,
    cy: -18,
    rx: 12,
    ry: 10,
    fill: c.lf
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 3,
    cy: -21,
    rx: 8,
    ry: 7,
    fill: c.la,
    opacity: 0.5
  })), showMountains && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M-200,-80 L-160,-140 L-120,-85",
    fill: c.gd,
    opacity: 0.15
  }), /*#__PURE__*/React.createElement("path", {
    d: "M140,-75 L180,-145 L220,-80",
    fill: c.gd,
    opacity: 0.12
  }), wp > 0.75 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M-168,-130 L-160,-140 L-152,-132",
    fill: "white",
    opacity: 0.3
  }), /*#__PURE__*/React.createElement("path", {
    d: "M172,-135 L180,-145 L188,-137",
    fill: "white",
    opacity: 0.25
  }))), /*#__PURE__*/React.createElement("text", {
    x: -120,
    y: 30,
    fontSize: 22,
    style: {
      cursor: "pointer"
    },
    onClick: () => tapA("De vos kijkt je nieuwsgierig aan")
  }, "\uD83E\uDD8A"), /*#__PURE__*/React.createElement("text", {
    x: -80,
    y: 34,
    fontSize: 18,
    style: {
      cursor: "pointer"
    },
    onClick: () => tapA("Het konijntje wiebelt met z'n neusje")
  }, "\uD83D\uDC30"), totalSessions > 10 && /*#__PURE__*/React.createElement("text", {
    x: 52 * Math.max(growth, 0.4),
    y: -110 * Math.max(growth, 0.4),
    fontSize: 16,
    style: {
      cursor: "pointer"
    },
    onClick: () => tapA("Het roodborstje zingt een liedje")
  }, "\uD83D\uDC26"), totalSessions > 25 && /*#__PURE__*/React.createElement("g", {
    onClick: () => tapA("Een vlinder danst op de wind"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "translate",
    values: "-45,-78;-28,-90;-52,-74;-35,-86;-45,-78",
    dur: "12s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("text", {
    x: 0,
    y: 0,
    fontSize: 18
  }, "\uD83E\uDD8B")), totalSessions > 40 && /*#__PURE__*/React.createElement("g", {
    onClick: () => tapA("Een bij zoemt rond"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "translate",
    values: "40,-88;58,-96;32,-82;52,-94;40,-88",
    dur: "7s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("text", {
    x: 0,
    y: 0,
    fontSize: 14
  }, "\uD83D\uDC1D")), showPond && totalSessions > 60 && /*#__PURE__*/React.createElement("text", {
    x: 115,
    y: 38,
    fontSize: 10
  }, "\uD83D\uDC38"), wp > 0.7 && /*#__PURE__*/React.createElement("text", {
    x: 150,
    y: 28,
    fontSize: 10
  }, "\uD83E\uDD94"), wp > 0.85 && /*#__PURE__*/React.createElement("text", {
    x: -165,
    y: 22,
    fontSize: 12
  }, "\uD83E\uDD8C"), tod === "Nacht" && Array.from({
    length: Math.min(3 + Math.floor(wp * 10), 15)
  }, (_, i) => ({
    x: Math.sin(i * 2.7) * 90,
    y: -30 - Math.abs(Math.cos(i * 3.2)) * 60,
    id: i
  })).map(f => /*#__PURE__*/React.createElement("circle", {
    key: `ff${f.id}`,
    cx: f.x,
    cy: f.y,
    r: 2,
    fill: "#FFE87C",
    opacity: 0.6
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0.2;0.8;0.2",
    dur: `${2 + f.id * 0.4}s`,
    repeatCount: "indefinite"
  }))), rareAnimal && /*#__PURE__*/React.createElement("text", {
    x: 80,
    y: -20,
    fontSize: 22,
    style: {
      cursor: "pointer"
    },
    onClick: () => tapA("Een zeldzame bezoeker...")
  }, rareAnimal))), animalMsg && /*#__PURE__*/React.createElement("div", {
    className: "sl",
    style: {
      position: "absolute",
      top: "35%",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 22
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      padding: "8px 16px",
      borderRadius: 14,
      color: g,
      fontSize: 12,
      fontWeight: 600
    }
  }, animalMsg)), wMsg && /*#__PURE__*/React.createElement("div", {
    className: "wm",
    style: {
      position: "absolute",
      top: 50,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(10px)",
      padding: "8px 20px",
      borderRadius: 18,
      color: g,
      fontSize: 13,
      fontWeight: 600,
      whiteSpace: "nowrap"
    }
  }, wMsg)), reminder && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 80,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 22,
      cursor: "pointer"
    },
    onClick: () => setReminder("")
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(8px)",
      padding: "10px 18px",
      borderRadius: 16,
      color: "#4A5568",
      fontSize: 12,
      fontWeight: 600,
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }
  }, reminder, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 9,
      color: "rgba(74,85,104,0.4)",
      marginTop: 4
    }
  }, "Tik om te sluiten"))), !checkinDone && /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeUp",
    style: {
      textAlign: "center",
      padding: 20,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: 700,
      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
      marginBottom: 20
    }
  }, checkinQ), moods.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    className: "ci",
    style: {
      borderColor: m.c + "44"
    },
    onClick: () => doCheckin(m.id)
  }, accType === "child" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, m.a), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#3D4A58",
      fontSize: 14,
      fontWeight: 600
    }
  }, m.l), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 4,
      borderRadius: 2,
      background: m.c,
      opacity: 0.6
    }
  }))))), showOffer && !showEx && /*#__PURE__*/React.createElement("div", {
    className: "sl",
    style: {
      position: "absolute",
      bottom: 80,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.93)",
      backdropFilter: "blur(12px)",
      padding: "16px 22px",
      borderRadius: 20,
      textAlign: "center",
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: g,
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 12
    }
  }, offerTxt), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    onClick: startAuto
  }, "Ja \uD83C\uDF3F"), experience !== "none" && /*#__PURE__*/React.createElement("button", {
    style: {
      display: "block",
      margin: "8px auto 0",
      background: "none",
      border: "none",
      color: g5,
      fontSize: 11,
      cursor: "pointer"
    },
    onClick: () => setShowOffer(false)
  }, "Ik kies straks zelf"))), showEx && curEx && /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      zIndex: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: {
      background: "rgba(255,255,255,0.96)",
      borderRadius: 28,
      padding: "28px 32px",
      textAlign: "center",
      maxWidth: 300,
      width: "90%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: g,
      fontSize: 16,
      fontWeight: 700,
      margin: 0
    }
  }, accType === "child" && curEx.nameChild || curEx.name), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "rgba(76,175,122,0.1)",
      border: "1px solid rgba(76,175,122,0.2)",
      borderRadius: "50%",
      width: 22,
      height: 22,
      fontSize: 10,
      cursor: "pointer",
      color: g,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    onClick: () => setShowSci(s => !s)
  }, "\uD83D\uDD2C")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: g5,
      fontSize: 12,
      marginBottom: 16
    }
  }, curEx.desc), showSci && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(76,175,122,0.08)",
      borderRadius: 14,
      padding: "12px 14px",
      marginBottom: 16,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: g,
      fontSize: 11,
      lineHeight: 1.5
    }
  }, "\uD83D\uDD2C ", curEx.sci)), exPhase === "idle" ? /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      padding: "12px 30px",
      fontSize: 15
    },
    onClick: runEx
  }, showSci ? "Begrepen, start" : "Start") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 140,
      margin: "0 auto 12px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: "4px solid " + (exPhase === "hold" || exPhase === "hold2" ? "#E8A840" : "#5BB8A0"),
      transition: `transform ${exPhase === "in" ? curEx.iS : exPhase === "out" ? curEx.oS : exPhase === "hold" ? curEx.hI : exPhase === "hold2" ? curEx.hO : 1}s ease-in-out, border-color 0.3s`,
      transform: exPhase === "in" ? "scale(1.15)" : exPhase === "hold" ? "scale(1.15)" : exPhase === "out" ? "scale(0.6)" : exPhase === "hold2" ? "scale(0.6)" : "scale(1)",
      opacity: exPhase === "done" ? 1 : exPhase === "in" || exPhase === "hold" ? 1 : 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: g,
      display: "block"
    }
  }, exPhase === "in" ? "Adem in" : exPhase === "hold" || exPhase === "hold2" ? "Vasthouden" : exPhase === "out" ? "Adem uit" : "Goed gedaan!"), exPhase !== "done" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: "#4CAF7A",
      display: "block",
      marginTop: 2
    }
  }, exCountdown))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: g5,
      fontSize: 12,
      marginBottom: 4
    }
  }, exRound, " van ", custRounds || Math.round(curEx.r * (accType === "child" ? 0.5 : 1))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: g3,
      fontSize: 10,
      marginBottom: 8
    }
  }, "~", Math.round(((custRounds || Math.round(curEx.r * (accType === "child" ? 0.5 : 1))) - exRound) * (curEx.iS + curEx.oS + curEx.hI + curEx.hO) / 60), " min"), exPhase === "done" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#4CAF7A",
      fontSize: 13,
      fontWeight: 600
    }
  }, "Je wereld groeit \uD83C\uDF31"), (accType === "child" || accType === "junior") && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#E6A832",
      fontSize: 12,
      fontWeight: 600,
      marginTop: 4
    }
  }, "+", curEx.pts, " muntjes verdiend! \uD83E\uDE99"))), exPhase !== "done" && exPhase !== "idle" && /*#__PURE__*/React.createElement("button", {
    style: {
      display: "block",
      margin: "12px auto 0",
      background: "none",
      border: "none",
      color: g3,
      fontSize: 11,
      cursor: "pointer"
    },
    onClick: stopEx
  }, "Stoppen"))), showMem && /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      zIndex: 25,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    },
    onClick: () => setShowMem(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.93)",
      backdropFilter: "blur(15px)",
      padding: "26px 34px",
      borderRadius: 24,
      textAlign: "center",
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      marginBottom: 10
    }
  }, "\uD83C\uDF43"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: g,
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.5
    }
  }, memTxt))), checkinDone && !showEx && !showOffer && !showMem && !showSett && !showGuide && !showLetter && !showLetters && !showDiary && !showPicker && !showTools && !activeTool && !showAvatar && !showShop && !curTask && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 0,
      right: 0,
      zIndex: 20,
      display: "flex",
      justifyContent: "center",
      gap: 8,
      padding: "0 12px",
      flexWrap: "wrap"
    }
  }, canDoMore && /*#__PURE__*/React.createElement("button", {
    className: "ab",
    onClick: () => {
      if (experience === "none" && lvl < 4) startAuto();else setShowPicker(true);
    }
  }, "\uD83C\uDF2C\uFE0F Adem"), dailyTasks.length > 0 && canDoMore && /*#__PURE__*/React.createElement("button", {
    className: "ab",
    onClick: () => startTask(dailyTasks[0])
  }, "\uD83C\uDF3F Taak"), !canDoMore && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(8px)",
      padding: "8px 16px",
      borderRadius: 14,
      color: "#4A5568",
      fontSize: 11,
      fontWeight: 600
    }
  }, "Je hebt genoeg gedaan voor nu \u2014 rust even \uD83C\uDF31"), /*#__PURE__*/React.createElement("button", {
    className: "ab",
    onClick: () => setShowLetter(true)
  }, "\u2709\uFE0F"), letters.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "ab",
    onClick: () => setShowLetters(true)
  }, "\uD83C\uDF43"), /*#__PURE__*/React.createElement("button", {
    className: "ab",
    onClick: () => setShowDiary(true)
  }, "\uD83D\uDCD4"), lvl >= 3 && /*#__PURE__*/React.createElement("button", {
    className: "ab",
    onClick: () => setShowTools(true)
  }, "\uD83E\uDDD8"), (accType === "child" || accType === "junior") && /*#__PURE__*/React.createElement("button", {
    className: "ab",
    onClick: () => setShowAvatar(true)
  }, "\uD83D\uDC64"), /*#__PURE__*/React.createElement("button", {
    className: "ab",
    onClick: () => setShowGuide(true)
  }, "\u2753")), curTask && /*#__PURE__*/React.createElement("div", {
    style: {
      ...F,
      zIndex: 30,
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: {
      background: "rgba(255,255,255,0.96)",
      borderRadius: 28,
      padding: "28px 32px",
      textAlign: "center",
      maxWidth: 300,
      width: "90%"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(74,85,104,0.4)",
      fontSize: 10,
      marginBottom: 10
    }
  }, "Even stilstaan \uD83C\uDF3F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#3D4A58",
      fontSize: 17,
      fontWeight: 700,
      lineHeight: 1.5,
      marginBottom: 18
    }
  }, curTask.text), /*#__PURE__*/React.createElement("textarea", {
    className: "ta",
    placeholder: accType === "child" ? "Schrijf of teken hier..." : "Schrijf hier wat in je opkomt...",
    value: taskInput,
    onChange: e => setTaskInput(e.target.value),
    rows: 2,
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(74,85,104,0.35)",
      fontSize: 9,
      marginBottom: 10
    }
  }, "Neem even de tijd \u2014 geen haast"), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      padding: "12px 30px",
      opacity: taskInput.trim().length >= 2 ? 1 : 0.3
    },
    onClick: () => {
      if (taskInput.trim().length >= 2) finishTask();
    }
  }, "Klaar \uD83C\uDF3F"))), showPicker && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => setShowPicker(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: g,
      fontSize: 17,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 6
    }
  }, "\uD83C\uDF2C\uFE0F Kies een oefening"), /*#__PURE__*/React.createElement("button", {
    className: "rb",
    style: {
      justifyContent: "center",
      background: "rgba(76,175,122,0.1)",
      borderColor: "rgba(76,175,122,0.3)",
      marginBottom: 10
    },
    onClick: startAuto
  }, /*#__PURE__*/React.createElement("span", null, "\u2728"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: g,
      fontSize: 14,
      fontWeight: 600
    }
  }, "Laat HUXI kiezen")), EX.filter(ex => {
    if (experience === "none" && ex.lv !== "b") return false;
    if (experience === "some" && ex.lv === "x") return false;
    if (ex.en === "up" && (dailyMood === "tense" || dailyMood === "overwhelmed")) return false;
    return true;
  }).map(ex => /*#__PURE__*/React.createElement("button", {
    key: ex.id,
    className: "rb",
    onClick: () => launchEx(ex, null)
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF2C\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#3D4A58",
      fontSize: 13,
      fontWeight: 600,
      display: "block"
    }
  }, accType === "child" && ex.nameChild || ex.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(45,90,39,0.55)",
      fontSize: 10
    }
  }, ex.desc)), experience === "experienced" && /*#__PURE__*/React.createElement("select", {
    onClick: e => e.stopPropagation(),
    onChange: e => {
      if (e.target.value) launchEx(ex, parseInt(e.target.value));
    },
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "1px solid rgba(91,184,160,0.3)",
      borderRadius: 8,
      padding: "2px",
      color: "#3D4A58",
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "x", ex.r), /*#__PURE__*/React.createElement("option", {
    value: ex.r + 3
  }, "x", ex.r + 3), /*#__PURE__*/React.createElement("option", {
    value: ex.r + 6
  }, "x", ex.r + 6), /*#__PURE__*/React.createElement("option", {
    value: ex.r + 10
  }, "x", ex.r + 10)))))), showLetter && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => setShowLetter(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: modal,
    onClick: e => e.stopPropagation()
  }, (() => {
    const now = Date.now();
    const lk = letters.find(l => [30, 90, 180, 365].some(d => now - l.id < d * 86400000));
    if (lk) {
      const age = now - lk.id;
      const nd = [30, 90, 180, 365].find(d => age < d * 86400000);
      const dl = Math.ceil((nd * 86400000 - age) / 86400000);
      const ud = new Date(lk.id + nd * 86400000).toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
      return /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 36
        }
      }, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("h3", {
        style: {
          color: g,
          fontSize: 18,
          fontWeight: 700,
          margin: "8px 0"
        }
      }, "Brief op slot"), /*#__PURE__*/React.createElement("p", {
        style: {
          color: g5,
          fontSize: 13,
          margin: "12px 0 6px"
        }
      }, "Nog ", /*#__PURE__*/React.createElement("strong", {
        style: {
          color: g
        }
      }, dl, " dagen")), /*#__PURE__*/React.createElement("p", {
        style: {
          color: g3,
          fontSize: 11,
          margin: "0 0 20px"
        }
      }, "Vrijkomt op ", ud), /*#__PURE__*/React.createElement("button", {
        className: "mb",
        onClick: () => setShowLetter(false)
      }, "Begrepen"));
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 36
      }
    }, "\u2709\uFE0F"), /*#__PURE__*/React.createElement("h3", {
      style: {
        color: g,
        fontSize: 18,
        fontWeight: 700,
        margin: "8px 0"
      }
    }, "Brief aan jezelf")), /*#__PURE__*/React.createElement("textarea", {
      className: "ta",
      placeholder: "Lieve ik...",
      value: letterDraft,
      onChange: e => setLetterDraft(e.target.value),
      maxLength: 500,
      rows: 6
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        flex: 1,
        background: "none",
        border: "1px solid " + g3,
        borderRadius: 14,
        padding: "10px 0",
        color: g,
        fontSize: 13,
        cursor: "pointer"
      },
      onClick: () => {
        setShowLetter(false);
        setLetterDraft("");
      }
    }, "Annuleren"), /*#__PURE__*/React.createElement("button", {
      className: "mb",
      style: {
        flex: 1,
        padding: "10px 0"
      },
      onClick: saveLetter
    }, "Bewaar \uD83C\uDF3F")));
  })())), showLetters && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => setShowLetters(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: g,
      fontSize: 17,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 14
    }
  }, "\uD83C\uDF43 Jouw brieven"), letters.map(l => {
    const now = Date.now(),
      age = now - l.id,
      nd = [30, 90, 180, 365].find(d => age < d * 86400000),
      isL = !!nd,
      dl = nd ? Math.ceil((nd * 86400000 - age) / 86400000) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: l.id,
      style: {
        padding: "12px 14px",
        marginBottom: 8,
        background: isL ? "rgba(150,150,150,0.08)" : "rgba(76,175,122,0.06)",
        borderRadius: 14
      }
    }, isL ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        color: g5,
        fontSize: 12,
        fontWeight: 600,
        margin: 0
      }
    }, "Op slot"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: g3,
        fontSize: 10,
        margin: 0
      }
    }, "Nog ", dl, " dagen"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        color: g,
        fontSize: 13,
        fontWeight: 600,
        lineHeight: 1.4,
        margin: 0
      }
    }, l.text), /*#__PURE__*/React.createElement("p", {
      style: {
        color: g3,
        fontSize: 10,
        marginTop: 6
      }
    }, "\uD83D\uDCC5 ", l.date)));
  }), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      width: "100%",
      marginTop: 14,
      padding: "10px 0"
    },
    onClick: () => setShowLetters(false)
  }, "Sluiten"))), showDiary && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => setShowDiary(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30
    }
  }, "\uD83D\uDCD4"), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: g,
      fontSize: 17,
      fontWeight: 700,
      margin: "6px 0"
    }
  }, "Dagboek")), /*#__PURE__*/React.createElement("textarea", {
    className: "ta",
    placeholder: "Vandaag\u2026",
    value: diaryDraft,
    onChange: e => setDiaryDraft(e.target.value),
    maxLength: 1000,
    rows: 4
  }), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      width: "100%",
      marginTop: 10,
      padding: "10px 0"
    },
    onClick: saveDiary
  }, "Opslaan"), diary.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(61,74,88,0.08)",
      margin: "14px 0 10px"
    }
  }), diary.slice(0, 10).map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: {
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: g,
      fontSize: 12,
      margin: 0
    }
  }, d.text), /*#__PURE__*/React.createElement("p", {
    style: {
      color: g3,
      fontSize: 9,
      margin: "4px 0 0"
    }
  }, d.date))), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      marginTop: 10,
      background: "none",
      border: "1px solid " + g3,
      borderRadius: 14,
      padding: "8px 0",
      color: g5,
      fontSize: 12,
      cursor: "pointer"
    },
    onClick: () => setShowDiary(false)
  }, "Sluiten"))), showAvatar && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => {
      setShowAvatar(false);
      setShowShop(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: {
      ...modal,
      maxHeight: "90vh"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: g,
      fontSize: 17,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 4
    }
  }, "Jouw Avatar"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#E6A832",
      fontSize: 13,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 10
    }
  }, "\uD83E\uDE99 ", coins, " muntjes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      marginBottom: 12,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 120,
    height: 160,
    viewBox: "0 0 120 160"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 60,
    cy: 155,
    rx: 25,
    ry: 5,
    fill: "rgba(0,0,0,0.1)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 45,
    cy: 148,
    rx: 10,
    ry: 5,
    fill: {
      shoes_none: "#3D4858",
      shoes_sneaker: "#E85D3A",
      shoes_boot: "#4A3020",
      shoes_gold: "#FFD700",
      shoes_rainbow: "#FF69B4"
    }[avatar.shoes] || "#3D4858"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 75,
    cy: 148,
    rx: 10,
    ry: 5,
    fill: {
      shoes_none: "#3D4858",
      shoes_sneaker: "#E85D3A",
      shoes_boot: "#4A3020",
      shoes_gold: "#FFD700",
      shoes_rainbow: "#FF69B4"
    }[avatar.shoes] || "#3D4858"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 42,
    y: 118,
    width: 10,
    height: 32,
    rx: 4,
    fill: {
      pants_none: "#3D7A5A",
      pants_jeans: "#4A6FA5",
      pants_red: "#C4553A",
      pants_purple: "#7B4DAA",
      pants_gold: "#DAA520",
      pants_star: "#2D5A87"
    }[avatar.pants] || "#3D7A5A"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 68,
    y: 118,
    width: 10,
    height: 32,
    rx: 4,
    fill: {
      pants_none: "#3D7A5A",
      pants_jeans: "#4A6FA5",
      pants_red: "#C4553A",
      pants_purple: "#7B4DAA",
      pants_gold: "#DAA520",
      pants_star: "#2D5A87"
    }[avatar.pants] || "#3D7A5A"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 35,
    y: 75,
    width: 50,
    height: 48,
    rx: 10,
    fill: {
      shirt_none: "#4CAF7A",
      shirt_stripes: "#E6A832",
      shirt_heart: "#E85D75",
      shirt_star: "#4A90C4",
      shirt_cool: "#333",
      shirt_rainbow: "#FF6347",
      shirt_nature: "#4CAF7A"
    }[avatar.shirt] || "#4CAF7A"
  }), avatar.shirt === "shirt_stripes" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: 38,
    y1: 85,
    x2: 82,
    y2: 85,
    stroke: "white",
    strokeWidth: 2,
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("line", {
    x1: 38,
    y1: 95,
    x2: 82,
    y2: 95,
    stroke: "white",
    strokeWidth: 2,
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("line", {
    x1: 38,
    y1: 105,
    x2: 82,
    y2: 105,
    stroke: "white",
    strokeWidth: 2,
    opacity: 0.4
  })), avatar.shirt === "shirt_heart" && /*#__PURE__*/React.createElement("text", {
    x: 60,
    y: 103,
    textAnchor: "middle",
    fontSize: 18
  }, "\u2764\uFE0F"), avatar.shirt === "shirt_star" && /*#__PURE__*/React.createElement("text", {
    x: 60,
    y: 103,
    textAnchor: "middle",
    fontSize: 18
  }, "\u2B50"), avatar.shirt === "shirt_cool" && /*#__PURE__*/React.createElement("text", {
    x: 60,
    y: 103,
    textAnchor: "middle",
    fontSize: 14,
    fill: "white"
  }, "COOL"), avatar.shirt === "shirt_nature" && /*#__PURE__*/React.createElement("text", {
    x: 60,
    y: 103,
    textAnchor: "middle",
    fontSize: 16
  }, "\uD83C\uDF3F"), /*#__PURE__*/React.createElement("rect", {
    x: 22,
    y: 78,
    width: 10,
    height: 35,
    rx: 5,
    fill: {
      skin_light: "#FFDBB4",
      skin_medium: "#D4A574",
      skin_dark: "#8D6E4C",
      skin_pale: "#FFE8D0"
    }[avatar.skin] || "#FFDBB4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 88,
    y: 78,
    width: 10,
    height: 35,
    rx: 5,
    fill: {
      skin_light: "#FFDBB4",
      skin_medium: "#D4A574",
      skin_dark: "#8D6E4C",
      skin_pale: "#FFE8D0"
    }[avatar.skin] || "#FFDBB4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 27,
    cy: 115,
    r: 6,
    fill: {
      skin_light: "#FFDBB4",
      skin_medium: "#D4A574",
      skin_dark: "#8D6E4C",
      skin_pale: "#FFE8D0"
    }[avatar.skin] || "#FFDBB4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 93,
    cy: 115,
    r: 6,
    fill: {
      skin_light: "#FFDBB4",
      skin_medium: "#D4A574",
      skin_dark: "#8D6E4C",
      skin_pale: "#FFE8D0"
    }[avatar.skin] || "#FFDBB4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 60,
    cy: 42,
    r: 28,
    fill: {
      skin_light: "#FFDBB4",
      skin_medium: "#D4A574",
      skin_dark: "#8D6E4C",
      skin_pale: "#FFE8D0"
    }[avatar.skin] || "#FFDBB4"
  }), (avatar.hair === "hair_short" || avatar.hair == null || avatar.hair === "hair_none") && /*#__PURE__*/React.createElement("path", {
    d: "M32,35 Q35,10 60,8 Q85,10 88,35 Q88,22 60,18 Q32,22 32,35",
    fill: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858"
  }), avatar.hair === "hair_long" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M32,35 Q35,10 60,8 Q85,10 88,35 Q88,22 60,18 Q32,22 32,35",
    fill: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32,35 Q28,55 30,75",
    fill: "none",
    stroke: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858",
    strokeWidth: 8,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88,35 Q92,55 90,75",
    fill: "none",
    stroke: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858",
    strokeWidth: 8,
    strokeLinecap: "round"
  })), avatar.hair === "hair_curly" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: 40,
    cy: 22,
    r: 10,
    fill: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 60,
    cy: 16,
    r: 11,
    fill: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 80,
    cy: 22,
    r: 10,
    fill: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858"
  })), avatar.hair === "hair_spiky" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
    points: "40,18 45,0 50,18",
    fill: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "55,15 60,-2 65,15",
    fill: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "70,18 75,0 80,18",
    fill: {
      hairc_brown: "#3D4858",
      hairc_black: "#222",
      hairc_blonde: "#E6C86E",
      hairc_red: "#C4553A",
      hairc_blue: "#4A90C4",
      hairc_pink: "#FF85A1",
      hairc_green: "#4CAF7A"
    }[avatar.hairc] || "#3D4858"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 50,
    cy: 42,
    r: 3.5,
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 70,
    cy: 42,
    r: 3.5,
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 51,
    cy: 42,
    r: 2,
    fill: "#333"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 71,
    cy: 42,
    r: 2,
    fill: "#333"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 51.5,
    cy: 41.5,
    r: 0.7,
    fill: "white"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 71.5,
    cy: 41.5,
    r: 0.7,
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M52,52 Q60,58 68,52",
    fill: "none",
    stroke: "#C4553A",
    strokeWidth: 2,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 42,
    cy: 50,
    r: 4,
    fill: "#FFB6B6",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 78,
    cy: 50,
    r: 4,
    fill: "#FFB6B6",
    opacity: 0.4
  }), avatar.hat === "hat_cap" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: 35,
    y: 14,
    width: 50,
    height: 6,
    rx: 3,
    fill: "#E85D3A"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 60,
    cy: 14,
    rx: 28,
    ry: 10,
    fill: "#E85D3A"
  })), avatar.hat === "hat_crown" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
    points: "38,18 42,4 50,14 55,0 60,14 68,0 72,14 78,4 82,18",
    fill: "#FFD700"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 38,
    y: 18,
    width: 44,
    height: 6,
    rx: 2,
    fill: "#FFD700"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 50,
    cy: 12,
    r: 2,
    fill: "#FF6347"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 60,
    cy: 8,
    r: 2,
    fill: "#4A90C4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 70,
    cy: 12,
    r: 2,
    fill: "#4CAF7A"
  })), avatar.hat === "hat_wizard" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M40,22 L60,-10 L80,22",
    fill: "#4A3FA5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 60,
    cy: -4,
    r: 4,
    fill: "#FFD700"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 35,
    y: 22,
    width: 50,
    height: 5,
    rx: 2,
    fill: "#4A3FA5"
  })), avatar.hat === "hat_party" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M48,20 L60,-5 L72,20",
    fill: "#FF6347"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 60,
    cy: -5,
    r: 4,
    fill: "#FFD700"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 54,
    cy: 10,
    r: 2,
    fill: "#4A90C4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 66,
    cy: 12,
    r: 2,
    fill: "#4CAF7A"
  })), avatar.acc === "acc_glasses" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: 50,
    cy: 42,
    r: 7,
    fill: "none",
    stroke: "#333",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 70,
    cy: 42,
    r: 7,
    fill: "none",
    stroke: "#333",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("line", {
    x1: 57,
    y1: 42,
    x2: 63,
    y2: 42,
    stroke: "#333",
    strokeWidth: 1.5
  })), avatar.acc === "acc_scarf" && /*#__PURE__*/React.createElement("path", {
    d: "M35,68 Q60,78 85,68",
    fill: "none",
    stroke: "#E85D3A",
    strokeWidth: 5,
    strokeLinecap: "round"
  })), avatar.pet !== "pet_none" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      marginBottom: 10
    }
  }, {
    pet_cat: "🐱",
    pet_dog: "🐶",
    pet_rabbit: "🐰",
    pet_dragon: "🐉",
    pet_unicorn: "🦄",
    pet_phoenix: "🔥"
  }[avatar.pet])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      padding: "6px 14px",
      fontSize: 11
    },
    onClick: () => setShowShop(false)
  }, "Mijn Spullen"), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "6px 14px",
      fontSize: 11,
      background: "rgba(230,168,50,0.15)",
      border: "1px solid #E6A832",
      borderRadius: 14,
      color: "#8B6914",
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    },
    onClick: () => setShowShop(true)
  }, "\uD83E\uDE99 Winkel")), !showShop ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: g5,
      fontSize: 10,
      marginBottom: 6
    }
  }, "Tik om aan te doen:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4
    }
  }, ownedItems.map(item => {
    const cat = item.split("_")[0];
    const labels = {
      hat_none: "Geen hoed",
      hat_cap: "Petje",
      hat_crown: "Kroon",
      hat_wizard: "Tovenaar",
      hat_party: "Feest",
      shirt_none: "Basis",
      shirt_stripes: "Strepen",
      shirt_heart: "Hart",
      shirt_star: "Ster",
      shirt_cool: "Cool",
      shirt_rainbow: "Regenboog",
      shirt_nature: "Natuur",
      pants_none: "Basis",
      pants_jeans: "Jeans",
      pants_red: "Rood",
      pants_purple: "Paars",
      pants_gold: "Goud",
      pants_star: "Ster",
      shoes_none: "Basis",
      shoes_sneaker: "Sneakers",
      shoes_boot: "Laarzen",
      shoes_gold: "Goud",
      shoes_rainbow: "Regenboog",
      skin_light: "Licht",
      skin_medium: "Medium",
      skin_dark: "Donker",
      skin_pale: "Bleek",
      hair_short: "Kort",
      hair_long: "Lang",
      hair_curly: "Krullen",
      hair_spiky: "Stekels",
      hairc_brown: "Bruin",
      hairc_black: "Zwart",
      hairc_blonde: "Blond",
      hairc_red: "Rood",
      hairc_blue: "Blauw",
      hairc_pink: "Roze",
      hairc_green: "Groen",
      acc_none: "Geen",
      acc_glasses: "Bril",
      acc_scarf: "Sjaal",
      pet_none: "Geen",
      pet_cat: "Kat",
      pet_dog: "Hond",
      pet_rabbit: "Konijn",
      pet_dragon: "Draak",
      pet_unicorn: "Eenhoorn",
      pet_phoenix: "Feniks"
    };
    const eq = avatar[cat] === item;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      style: {
        fontSize: 9,
        padding: "4px 8px",
        borderRadius: 8,
        border: eq ? "2px solid #4CAF7A" : "1px solid rgba(76,175,122,0.2)",
        background: eq ? "rgba(76,175,122,0.15)" : "white",
        cursor: "pointer",
        fontFamily: "inherit",
        color: g
      },
      onClick: () => {
        setAvatar(a => ({
          ...a,
          [cat]: item
        }));
        setTimeout(saveData, 300);
      }
    }, labels[item] || item);
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, [{
    cat: "Huid",
    k: "skin",
    items: [{
      id: "skin_medium",
      n: "Medium",
      p: 0
    }, {
      id: "skin_dark",
      n: "Donker",
      p: 0
    }, {
      id: "skin_pale",
      n: "Bleek",
      p: 0
    }]
  }, {
    cat: "Haar",
    k: "hair",
    items: [{
      id: "hair_long",
      n: "Lang",
      p: 8
    }, {
      id: "hair_curly",
      n: "Krullen",
      p: 8
    }, {
      id: "hair_spiky",
      n: "Stekels",
      p: 10
    }, {
      id: "hair_bun",
      n: "Knotje",
      p: 12
    }, {
      id: "hair_mohawk",
      n: "Hanenkam",
      p: 20
    }]
  }, {
    cat: "Haarkleur",
    k: "hairc",
    items: [{
      id: "hairc_black",
      n: "Zwart",
      p: 5
    }, {
      id: "hairc_blonde",
      n: "Blond",
      p: 5
    }, {
      id: "hairc_red",
      n: "Rood",
      p: 5
    }, {
      id: "hairc_blue",
      n: "Blauw",
      p: 10
    }, {
      id: "hairc_pink",
      n: "Roze",
      p: 10
    }, {
      id: "hairc_green",
      n: "Groen",
      p: 10
    }, {
      id: "hairc_purple",
      n: "Paars",
      p: 12
    }, {
      id: "hairc_rainbow",
      n: "Regenboog",
      p: 40
    }]
  }, {
    cat: "Hoeden",
    k: "hat",
    items: [{
      id: "hat_cap",
      n: "Petje",
      p: 8
    }, {
      id: "hat_beanie",
      n: "Muts",
      p: 10
    }, {
      id: "hat_bow",
      n: "Strik",
      p: 6
    }, {
      id: "hat_flower",
      n: "Bloem",
      p: 5
    }, {
      id: "hat_crown",
      n: "Kroon",
      p: 35
    }, {
      id: "hat_wizard",
      n: "Tovenaar",
      p: 60
    }, {
      id: "hat_party",
      n: "Feest",
      p: 15
    }, {
      id: "hat_pirate",
      n: "Piraat",
      p: 25
    }, {
      id: "hat_astro",
      n: "Astronaut",
      p: 80
    }, {
      id: "hat_halo",
      n: "Halo",
      p: 100
    }]
  }, {
    cat: "Shirts",
    k: "shirt",
    items: [{
      id: "shirt_stripes",
      n: "Strepen",
      p: 6
    }, {
      id: "shirt_heart",
      n: "Hart",
      p: 8
    }, {
      id: "shirt_star",
      n: "Ster",
      p: 8
    }, {
      id: "shirt_nature",
      n: "Natuur",
      p: 10
    }, {
      id: "shirt_cool",
      n: "Cool",
      p: 15
    }, {
      id: "shirt_rainbow",
      n: "Regenboog",
      p: 20
    }, {
      id: "shirt_space",
      n: "Ruimte",
      p: 30
    }, {
      id: "shirt_fire",
      n: "Vuur",
      p: 25
    }, {
      id: "shirt_ice",
      n: "IJs",
      p: 25
    }, {
      id: "shirt_gold",
      n: "Goud",
      p: 50
    }]
  }, {
    cat: "Broeken",
    k: "pants",
    items: [{
      id: "pants_jeans",
      n: "Jeans",
      p: 6
    }, {
      id: "pants_red",
      n: "Rood",
      p: 8
    }, {
      id: "pants_purple",
      n: "Paars",
      p: 8
    }, {
      id: "pants_camo",
      n: "Camo",
      p: 12
    }, {
      id: "pants_star",
      n: "Sterren",
      p: 15
    }, {
      id: "pants_gold",
      n: "Goud",
      p: 35
    }, {
      id: "pants_galaxy",
      n: "Galaxy",
      p: 45
    }]
  }, {
    cat: "Schoenen",
    k: "shoes",
    items: [{
      id: "shoes_sneaker",
      n: "Sneakers",
      p: 6
    }, {
      id: "shoes_boot",
      n: "Laarzen",
      p: 10
    }, {
      id: "shoes_sandal",
      n: "Sandalen",
      p: 5
    }, {
      id: "shoes_rainbow",
      n: "Regenboog",
      p: 20
    }, {
      id: "shoes_gold",
      n: "Goud",
      p: 35
    }, {
      id: "shoes_rocket",
      n: "Raket",
      p: 60
    }]
  }, {
    cat: "Accessoires",
    k: "acc",
    items: [{
      id: "acc_glasses",
      n: "Bril",
      p: 8
    }, {
      id: "acc_sunglasses",
      n: "Zonnebril",
      p: 12
    }, {
      id: "acc_scarf",
      n: "Sjaal",
      p: 6
    }, {
      id: "acc_necklace",
      n: "Ketting",
      p: 15
    }, {
      id: "acc_cape",
      n: "Cape",
      p: 30
    }, {
      id: "acc_wings",
      n: "Vleugels",
      p: 80
    }, {
      id: "acc_crown_acc",
      n: "Tiara",
      p: 45
    }]
  }, {
    cat: "Huisdieren",
    k: "pet",
    items: [{
      id: "pet_cat",
      n: "Kat",
      p: 20
    }, {
      id: "pet_dog",
      n: "Hond",
      p: 20
    }, {
      id: "pet_rabbit",
      n: "Konijn",
      p: 15
    }, {
      id: "pet_hamster",
      n: "Hamster",
      p: 12
    }, {
      id: "pet_fish",
      n: "Vis",
      p: 8
    }, {
      id: "pet_parrot",
      n: "Papegaai",
      p: 25
    }, {
      id: "pet_turtle",
      n: "Schildpad",
      p: 18
    }, {
      id: "pet_pony",
      n: "Pony",
      p: 50
    }, {
      id: "pet_dragon",
      n: "Draak",
      p: 150
    }, {
      id: "pet_unicorn",
      n: "Eenhoorn",
      p: 120
    }, {
      id: "pet_phoenix",
      n: "Feniks",
      p: 200
    }, {
      id: "pet_dino",
      n: "Dino",
      p: 300
    }]
  }].map(grp => /*#__PURE__*/React.createElement("div", {
    key: grp.cat,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: g,
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 4
    }
  }, grp.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4
    }
  }, grp.items.map(item => {
    const owned = ownedItems.includes(item.id);
    const canBuy = coins >= item.p || item.p === 0;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      style: {
        fontSize: 9,
        padding: "5px 8px",
        borderRadius: 8,
        border: owned ? "2px solid #4CAF7A" : "1px solid rgba(76,175,122,0.2)",
        background: owned ? "rgba(76,175,122,0.1)" : "white",
        cursor: owned || canBuy ? "pointer" : "default",
        opacity: owned || canBuy ? 1 : 0.35,
        fontFamily: "inherit",
        color: g
      },
      onClick: () => {
        if (owned) {
          setAvatar(a => ({
            ...a,
            [grp.k]: item.id
          }));
          setTimeout(saveData, 300);
        } else if (canBuy) {
          if (item.p > 0) setCoins(c => c - item.p);
          setOwnedItems(o => [...o, item.id]);
          setAvatar(a => ({
            ...a,
            [grp.k]: item.id
          }));
          setTimeout(saveData, 300);
        }
      }
    }, item.n, " ", !owned && item.p > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: canBuy ? "#E6A832" : "#999"
      }
    }, "\uD83E\uDE99", item.p), owned && "✓");
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      width: "100%",
      marginTop: 10,
      padding: "8px 0"
    },
    onClick: () => {
      setShowAvatar(false);
      setShowShop(false);
    }
  }, "Sluiten"))), showGuide && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => setShowGuide(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: g,
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 14,
      textAlign: "center"
    }
  }, "Wat kan je doen? \uD83C\uDF33"), [{
    i: "🌿",
    t: "Dagelijkse taken",
    d: "5 korte opdrachten per dag: ademen, grounding, dankbaarheid, lichaam checken"
  }, {
    i: "🌬️",
    t: "Ademhaling",
    d: "12 bewezen technieken. Beginners worden rustig begeleid."
  }, {
    i: "✉️",
    t: "Brief",
    d: "Tijdcapsule — opens na 30/90/180/365 dagen"
  }, {
    i: "📔",
    t: "Dagboek",
    d: "Even je hart luchten"
  }, {
    i: "🍃",
    t: "Bladeren",
    d: "Tik voor herinneringen"
  }, {
    i: "🌱",
    t: "Boom",
    d: "Groeit langzaam met alles wat je doet. Geen haast."
  }].map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "8px 0",
      borderBottom: i < 5 ? "1px solid rgba(61,74,88,0.06)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, item.i), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: g,
      fontSize: 12,
      fontWeight: 700,
      margin: 0
    }
  }, item.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: g5,
      fontSize: 10,
      margin: 0
    }
  }, item.d)))), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      width: "100%",
      marginTop: 14,
      padding: "10px 0"
    },
    onClick: () => setShowGuide(false)
  }, "Begrepen! \uD83C\uDF3F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 20,
      padding: "10px 12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge"
  }, /*#__PURE__*/React.createElement("span", null, tI), " ", tod), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge"
  }, /*#__PURE__*/React.createElement("span", null, sI), " ", season), /*#__PURE__*/React.createElement("button", {
    className: "sb",
    onClick: () => setShowSett(true)
  }, "\u2699\uFE0F"))), showSett && /*#__PURE__*/React.createElement("div", {
    style: overlay(),
    onClick: () => setShowSett(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fadeIn",
    style: {
      ...modal,
      width: 270
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: g,
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 16,
      textAlign: "center"
    }
  }, "Instellingen"), [["Geluid", /*#__PURE__*/React.createElement("button", {
    key: "so",
    className: "tb",
    onClick: () => setSoundOn(s => !s)
  }, soundOn ? "🔊 Aan" : "🔇 Uit")], ["Seizoen", /*#__PURE__*/React.createElement("button", {
    key: "s",
    className: "tb",
    onClick: () => setSeason(p => {
      const i = (["Lente", "Zomer", "Herfst", "Winter"].indexOf(p) + 1) % 4;
      return ["Lente", "Zomer", "Herfst", "Winter"][i];
    })
  }, sI, " ", season)], ["Tijd", /*#__PURE__*/React.createElement("button", {
    key: "t",
    className: "tb",
    onClick: () => setTod(p => {
      const i = (["Ochtend", "Middag", "Avond", "Nacht"].indexOf(p) + 1) % 4;
      return ["Ochtend", "Middag", "Avond", "Nacht"][i];
    })
  }, tI, " ", tod)], ["Status", /*#__PURE__*/React.createElement("span", {
    key: "p",
    style: {
      fontSize: 12,
      color: isPremium ? "#4CAF7A" : g5
    }
  }, isPremium ? "⭐ Premium" : "Gratis")], ["Account", /*#__PURE__*/React.createElement("button", {
    key: "a",
    className: "tb",
    onClick: switchAcc
  }, "\uD83D\uDD04 Wissel")]].map(([l, ctrl], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: "1px solid rgba(61,74,88,0.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: g,
      fontSize: 13
    }
  }, l), ctrl)), /*#__PURE__*/React.createElement("button", {
    className: "mb",
    style: {
      width: "100%",
      marginTop: 18,
      padding: "11px 0"
    },
    onClick: () => setShowSett(false)
  }, "Sluiten"))), checkinDone && !showEx && !showOffer && !showMem && growth >= 0.15 && !showSett && !showGuide && !showLetter && !showLetters && !showDiary && !showPicker && !showTools && !activeTool && !showAvatar && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      zIndex: 15,
      cursor: "pointer"
    },
    onClick: onLeaf
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      background: "rgba(255,255,255,0.88)",
      backdropFilter: "blur(8px)",
      padding: "8px 16px",
      borderRadius: 14,
      color: g,
      fontSize: 12,
      fontWeight: 600
    }
  }, "Tik op een blad")));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(HuxiApp));
