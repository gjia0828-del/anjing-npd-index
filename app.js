const DIMENSIONS = [
  { key: 'visibility', label: '被看见需求', color: '#df5a68' },
  { key: 'entitlement', label: '特权与控制', color: '#b99b6b' },
  { key: 'empathy', label: '共情切换', color: '#d7d9dd' },
  { key: 'criticism', label: '批评敏感', color: '#a72f3e' }
];

const CHAPTERS = [
  {
    key: 'visibility',
    title: '被看见的需求',
    kicker: '被看见',
    color: '#df5a68',
    questions: [
      {
        title: '一群人拍完合照，你第一眼会看谁？',
        aside: '照片还没有发出去，大家都在低头看原图。',
        options: [
          { text: '先看自己拍得好不好看', score: 5 },
          { text: '看自己和最熟的那个人', score: 4 },
          { text: '看整体画面效果', score: 2 },
          { text: '看别人拍得怎么样', score: 0 }
        ]
      },
      {
        title: '你分享了一件很重要的事，对方反应很平淡。你会？',
        aside: '对方没有否定你，只是没有表现出你期待的兴奋。',
        options: [
          { text: '很失落，想再讲一次，让对方重视', score: 5 },
          { text: '会有点在意，但先放着', score: 3 },
          { text: '觉得对方可能在忙', score: 1 },
          { text: '不太需要对方给反应', score: 0 }
        ]
      },
      {
        title: '进入一个几乎没有熟人的场合，你会？',
        aside: '没有人主动介绍你，也没有人特别注意到你。',
        options: [
          { text: '希望自己很快成为被注意到的人', score: 5 },
          { text: '希望有人主动来找我', score: 3 },
          { text: '先观察，遇到合适的人再聊', score: 1 },
          { text: '最好没人注意我', score: 0 }
        ]
      },
      {
        title: '你更希望别人怎么评价你？',
        aside: '只能选一句最想听到的。',
        options: [
          { text: '特别、出众、很有存在感', score: 5 },
          { text: '有能力、有魅力', score: 4 },
          { text: '靠谱、好相处', score: 2 },
          { text: '普通但真实', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'entitlement',
    title: '特权的边界',
    kicker: '特权与控制',
    color: '#b99b6b',
    questions: [
      {
        title: '排队时有人插队，但对方说自己很急。你会？',
        aside: '周围没有人出声，队伍也没有管理人员。',
        options: [
          { text: '规则就是规则，谁都不该例外', score: 0 },
          { text: '可以理解，但应该先问大家', score: 2 },
          { text: '如果是我很急，我也希望别人让我', score: 4 },
          { text: '有急事的人理应优先', score: 5 }
        ]
      },
      {
        title: '团队合作中，你的方案没有被采用。你会？',
        aside: '大家已经投票选择了另一个方向。',
        options: [
          { text: '会推动大家重新考虑我的方案', score: 5 },
          { text: '会表达不满，但接受讨论', score: 4 },
          { text: '有点失望，按团队决定', score: 2 },
          { text: '很快就接受', score: 0 }
        ]
      },
      {
        title: '计划一次旅行，你更希望？',
        aside: '同行的人说都可以，让你来提意见。',
        options: [
          { text: '我来定大方向和细节', score: 5 },
          { text: '我提方案，两个人一起定', score: 4 },
          { text: '对方定，我补充', score: 2 },
          { text: '对方安排就好', score: 0 }
        ]
      },
      {
        title: '对方临时改变你已经安排好的计划。你会？',
        aside: '对方说临时有更想做的事，但没有恶意。',
        options: [
          { text: '很生气，觉得不被尊重', score: 5 },
          { text: '会表达不满，要求重新商量', score: 4 },
          { text: '会调整一下', score: 2 },
          { text: '随对方', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'empathy',
    title: '共情的开关',
    kicker: '共情切换',
    color: '#d7d9dd',
    questions: [
      {
        title: '朋友刚经历失败，而你正处在人生高光期。你会？',
        aside: '你很想分享自己的好消息，但对方的情绪明显很低。',
        options: [
          { text: '先顾及对方感受，克制分享自己的成绩', score: 5 },
          { text: '先安慰对方，再分享自己的事', score: 4 },
          { text: '会分享自己的开心，觉得这不冲突', score: 2 },
          { text: '更想聊自己的高光', score: 0 }
        ]
      },
      {
        title: '争执中你发现自己可能错了。你会？',
        aside: '对方还在等你的回应。',
        options: [
          { text: '直接承认并道歉', score: 5 },
          { text: '先解释，再承认', score: 3 },
          { text: '会有点难堪，但不再争', score: 1 },
          { text: '继续证明自己没错', score: 0 }
        ]
      },
      {
        title: '别人拒绝了你的请求。你会？',
        aside: '对方没有给很长的解释，只说了不方便。',
        options: [
          { text: '理解对方有难处', score: 5 },
          { text: '会问原因，能接受就接受', score: 4 },
          { text: '会有点不爽', score: 1 },
          { text: '觉得对方不够重视我', score: 0 }
        ]
      },
      {
        title: '听到别人遇到困难时，你通常会？',
        aside: '这件事可能也会影响你。',
        options: [
          { text: '自然代入对方的处境', score: 5 },
          { text: '先听，再看能不能帮', score: 4 },
          { text: '联想到自己的经历', score: 2 },
          { text: '更关心这件事对我有没有影响', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'criticism',
    title: '批评的回声',
    kicker: '批评敏感',
    color: '#a72f3e',
    questions: [
      {
        title: '别人指出你的问题时，你会？',
        aside: '对方说的是具体行为，没有攻击你整个人。',
        options: [
          { text: '反复想，觉得是在否定我', score: 5 },
          { text: '有点难受，但表面不说', score: 4 },
          { text: '先判断有没有道理', score: 2 },
          { text: '比较平静地接受', score: 0 }
        ]
      },
      {
        title: '被当众纠正时，你会？',
        aside: '现场还有其他人，你很想把局面拿回来。',
        options: [
          { text: '立刻反驳或解释', score: 5 },
          { text: '很尴尬，之后找机会解释', score: 4 },
          { text: '先接受，私下再说', score: 2 },
          { text: '觉得没关系', score: 0 }
        ]
      },
      {
        title: '一条负面评价会让你想多久？',
        aside: '评价已经过去，对方也没有继续追问。',
        options: [
          { text: '会想很久，反复回看', score: 5 },
          { text: '会想一阵子', score: 4 },
          { text: '过一会儿就好', score: 1 },
          { text: '很快忘记', score: 0 }
        ]
      },
      {
        title: '有人半开玩笑说你“也就一般般”。你会？',
        aside: '对方说完就笑了，但你不太确定这是不是玩笑。',
        options: [
          { text: '会记很久，想证明给对方看', score: 5 },
          { text: '会有点不舒服', score: 3 },
          { text: '当作玩笑过去', score: 1 },
          { text: '完全不在意', score: 0 }
        ]
      }
    ]
  }
];

const PERSONAS = [
  {
    code: 'NO. 01', name: '自洽闪光者',
    tagline: '我可以发光，但不需要把别人调暗。',
    description: '你有明确的表达欲，也愿意被看见。你享受认可，但不把别人的失败当作自己的背景板。你比较能区分“我做得不错”和“我必须比别人都强”，也愿意承认自己仍有不足。',
    mechanism: '用真实的自我确认来驱动自己，而不是靠贬低别人维持优越。',
    keywords: ['自信', '表现力', '自我确认'],
    strengths: ['有表现力，也愿意承担关注', '自我认同较稳，不容易被一次否定击穿', '能欣赏别人，不把关系变成排名'],
    caveats: ['有时会低估自己的表达对别人的影响', '被忽视时也会不舒服，但通常不会转成攻击'],
    advice: '保留你的光，也允许别人拥有自己的光。',
    quote: '我可以很在意自己，也可以在别人发光时鼓掌。',
    prototype: { visibility: 74, entitlement: 28, empathy: 86, criticism: 30 }
  },
  {
    code: 'NO. 02', name: '舞台中心型',
    tagline: '我需要被看见，也需要学会下台。',
    description: '你有很强的存在感需求。进入一个空间时，你会本能地想知道别人有没有注意到你。被看见时你很有能量，失去注意力时则容易不安、过度表现，或者开始怀疑自己的价值。',
    mechanism: '用关注确认存在感。注意力像一面镜子，照出你此刻是否足够重要。',
    keywords: ['存在感', '舞台', '高光'],
    strengths: ['有感染力，能让场面热起来', '敢表达，不怕成为焦点', '擅长把普通时刻变得有戏剧性'],
    caveats: ['注意力减少时容易焦虑', '可能把别人的沉默理解成不重视', '容易为了维持高光而过度表现'],
    advice: '练习在没有掌声的时候也确认自己的价值。',
    quote: '不是每一刻都需要成为主角。',
    prototype: { visibility: 94, entitlement: 56, empathy: 55, criticism: 48 }
  },
  {
    code: 'NO. 03', name: '赞美依赖型',
    tagline: '你的评价，会决定我今天的状态。',
    description: '你很在意别人怎么看你。赞美会让你迅速充电，冷淡和忽视则会让你反复想。你并不一定想压过别人，但很需要持续的外部确认，才能感到自己是被喜欢、被肯定、被选择的。',
    mechanism: '用外界反馈稳定自我价值。别人的态度一变，你的内心就开始重新审题。',
    keywords: ['认可依赖', '敏感', '外部确认'],
    strengths: ['很会观察别人的反应', '愿意经营关系，也愿意照顾气氛', '对认可和鼓励有很强的感受力'],
    caveats: ['容易被他人的评价牵着走', '没被回应时容易自我怀疑', '可能为了得到肯定而过度迎合'],
    advice: '把一句赞美当作礼物，不要当作氧气。',
    quote: '别人的喜欢是加分，不是我的生命维持系统。',
    prototype: { visibility: 90, entitlement: 45, empathy: 66, criticism: 84 }
  },
  {
    code: 'NO. 04', name: '特殊待遇型',
    tagline: '我应该被理解、被优先、被例外对待。',
    description: '你对公平和特殊待遇很敏感。你很希望别人看见你的处境、能力和付出，也容易觉得自己的需求应该被优先考虑。你并不是完全不讲理，只是很难接受“我也只是普通人之一”。',
    mechanism: '用“我不一样”来保护自己的重要性。特殊待遇像一张证明：我值得被优先。',
    keywords: ['例外感', '优先需求', '重要性'],
    strengths: ['自我需求清晰，不轻易委屈自己', '敢争取，也敢表达不满', '对自己值得什么有很强的判断'],
    caveats: ['容易忽略别人的限制和难处', '关系里可能产生不公平感', '被拒绝时容易把规则理解为针对'],
    advice: '你的需求值得被看见，但别人的需求也同时存在。',
    quote: '我可以重要，但不需要所有人都围着我转。',
    prototype: { visibility: 60, entitlement: 94, empathy: 28, criticism: 42 }
  },
  {
    code: 'NO. 05', name: '防御性优越者',
    tagline: '我不是永远正确，我只是很难接受自己不够好。',
    description: '你看起来很有主见，也很容易在批评出现时先防御。你不是真的觉得自己完美，而是被否定会触发很强的不安全感。你先证明自己是对的，才有空间面对“我可能也有问题”。',
    mechanism: '先用优越感挡住被否定的痛。骄傲是一层盔甲，里面藏着对“不够好”的恐惧。',
    keywords: ['防御', '优越感', '批评敏感'],
    strengths: ['有决断力，不容易被轻易带偏', '标准清晰，知道自己想要什么', '在压力下仍然能维持存在感'],
    caveats: ['批评容易被听成攻击', '可能错过真实的反馈', '容易把不同意见变成输赢'],
    advice: '先分清“这件事没做好”和“我这个人不好”。',
    quote: '我可以有不足，这不影响我仍然值得被尊重。',
    prototype: { visibility: 55, entitlement: 78, empathy: 35, criticism: 93 }
  },
  {
    code: 'NO. 06', name: '关系掌控型',
    tagline: '我不是想控制你，我只是害怕失控。',
    description: '你喜欢关系有明确的节奏和方向。计划、决定和不确定性都会触发你的掌控欲。你愿意负责，也愿意推进，但当事情不按你的方式发生时，很难真正放松。',
    mechanism: '用控制感换取安全感。只要一切在计划里，你就不必面对关系的不确定。',
    keywords: ['掌控', '确定感', '主导'],
    strengths: ['有安排能力，能推动关系向前', '责任心强，遇到问题愿意处理', '在混乱中能迅速建立秩序'],
    caveats: ['别人可能觉得被安排', '不确定性会引发焦虑', '容易把协商变成审批'],
    advice: '把“我来决定”换成“我想知道你怎么想”。',
    quote: '关系不是项目管理，安全感也不只来自控制。',
    prototype: { visibility: 64, entitlement: 90, empathy: 32, criticism: 55 }
  },
  {
    code: 'NO. 07', name: '隐性主角型',
    tagline: '我不说，但我希望你知道我很特别。',
    description: '你不一定会高调争取注意力，但内心很在意别人有没有重视你。你可能会用沉默、失望、被动等待来测试关系：如果对方真的在意，就应该发现我。',
    mechanism: '用被动期待保护自己，避免直接暴露“我很想被重视”的需求。',
    keywords: ['隐性主角', '被动期待', '内在特殊感'],
    strengths: ['有内在标准，不容易随波逐流', '观察细腻，能察觉关系里的细微变化', '对自我价值有较高的期待'],
    caveats: ['别人很难知道你的期待', '容易积累隐性的失望', '沉默可能被误解为冷淡'],
    advice: '把期待说出来，不要让别人猜。',
    quote: '我不用一直低调，也不用等别人发现我。',
    prototype: { visibility: 34, entitlement: 78, empathy: 42, criticism: 90 }
  },
  {
    code: 'NO. 08', name: '高共情自恋者',
    tagline: '我能理解你，但我也很需要你看见我。',
    description: '你不是不关心别人，甚至很能共情。但你也希望自己的独特、付出和感受被重点看见。你容易在照顾别人和等待回报之间来回，最后因为没有被同等回应而失望。',
    mechanism: '用付出换取被重视，再用失望证明自己总是付出更多。',
    keywords: ['高共情', '付出', '被看见'],
    strengths: ['共情力强，能看见复杂情绪', '关系投入高，愿意认真照顾别人', '既敏感又有表达欲'],
    caveats: ['容易暗暗记账', '付出后期待对方同等回报', '很难承认自己也在索取'],
    advice: '付出前先问自己：如果对方没有回报，我还愿意吗？',
    quote: '我可以理解你，但我也需要被理解。',
    prototype: { visibility: 83, entitlement: 60, empathy: 80, criticism: 79 }
  }
];

const STORAGE_KEY = 'anjing_state_v1';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const refs = {
  header: $('#siteHeader'), landing: $('#landingScreen'), test: $('#testScreen'), result: $('#resultScreen'),
  resumeButton: $('#resumeButton'), backButton: $('#backButton'), progressBar: $('#progressBar'),
  questionNumber: $('#questionNumber'), chapterKicker: $('#chapterKicker'), chapterTitle: $('#chapterTitle'),
  chapterMarks: $('#chapterMarks'), questionCard: $('#questionCard'), questionIndex: $('#questionIndex'),
  questionTitle: $('#questionTitle'), questionAside: $('#questionAside'), optionsGrid: $('#optionsGrid'), toast: $('#toast')
};

let state = { answers: Array(16).fill(null), current: 0 };
let activeScreen = 'landing';
let activePersona = null;
let activeScores = null;
let activeIndex = 0;
let radarUid = 0;
let toastTimer = null;

function safeLoadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.answers) && saved.answers.length === 16) {
      state.answers = saved.answers;
      state.current = Math.min(Math.max(Number(saved.current) || 0, 0), 16);
    }
  } catch (error) { localStorage.removeItem(STORAGE_KEY); }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: state.answers, current: state.current })); } catch (error) {}
}
function hasProgress() { return state.answers.some(answer => answer !== null); }
function updateResumeButton() {
  refs.resumeButton.hidden = !hasProgress();
  refs.resumeButton.textContent = state.current >= 16 ? '查看上次结果' : '继续上次测试';
}
function setScreen(name) {
  activeScreen = name;
  [refs.landing, refs.test, refs.result].forEach(screen => screen.classList.remove('is-active'));
  const target = { landing: refs.landing, test: refs.test, result: refs.result }[name];
  if (!target) return;
  target.classList.add('is-active');
  refs.header.classList.toggle('on-inner', name !== 'landing');
  window.scrollTo(0, 0);
}
function getChapterAndQuestion(index) { return { chapterIndex: Math.floor(index / 4), questionIndex: index % 4 }; }
function getGlobalIndex(chapterIndex, questionIndex) { return chapterIndex * 4 + questionIndex; }

function startNewTest() {
  state.answers = Array(16).fill(null);
  state.current = 0;
  saveState();
  updateResumeButton();
  setScreen('test');
  renderQuestion();
}

function seededShuffle(length, seed) {
  const order = Array.from({ length }, (_, index) => index);
  let value = ((seed + 11) * 2654435761) >>> 0;
  for (let index = order.length - 1; index > 0; index -= 1) {
    value = (1664525 * value + 1013904223) >>> 0;
    const target = value % (index + 1);
    [order[index], order[target]] = [order[target], order[index]];
  }
  return order;
}

function renderQuestion() {
  if (state.current >= 16) { showResult(computeScores(state.answers)); return; }
  const { chapterIndex, questionIndex } = getChapterAndQuestion(state.current);
  const chapter = CHAPTERS[chapterIndex];
  const question = chapter.questions[questionIndex];
  const accent = chapter.color;
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-soft', hexToRgba(accent, 0.14));

  refs.chapterKicker.textContent = `MIRROR ${String(chapterIndex + 1).padStart(2, '0')} / 04`;
  refs.chapterTitle.textContent = chapter.title;
  refs.questionNumber.textContent = String(state.current + 1).padStart(2, '0');
  refs.questionIndex.textContent = `FRAGMENT ${String(state.current + 1).padStart(2, '0')} · ${chapter.kicker}`;
  refs.questionTitle.textContent = question.title;
  refs.questionAside.textContent = question.aside || '';
  refs.progressBar.style.width = `${((state.current + 1) / 16) * 100}%`;
  refs.backButton.disabled = state.current === 0;

  refs.chapterMarks.innerHTML = CHAPTERS.map((item, index) => {
    const done = index < chapterIndex || (index === chapterIndex && questionIndex === 3 && state.answers[getGlobalIndex(index, 3)] !== null);
    const current = index === chapterIndex;
    return `<span class="chapter-mark ${done ? 'done' : ''} ${current ? 'current' : ''}"></span>`;
  }).join('');

  const order = seededShuffle(question.options.length, state.current + 3);
  refs.optionsGrid.innerHTML = order.map((optionIndex, displayIndex) => {
    const option = question.options[optionIndex];
    return `<button class="option-button" data-option-index="${optionIndex}" aria-label="选项 ${String.fromCharCode(65 + displayIndex)}：${escapeHtml(option.text)}"><span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span><span class="option-text">${escapeHtml(option.text)}</span></button>`;
  }).join('');

  refs.questionCard.classList.remove('swap-in');
  void refs.questionCard.offsetWidth;
  refs.questionCard.classList.add('swap-in');
}

function chooseOption(optionIndex) {
  const { chapterIndex, questionIndex } = getChapterAndQuestion(state.current);
  const option = CHAPTERS[chapterIndex].questions[questionIndex].options[optionIndex];
  if (!option) return;
  $$('.option-button', refs.optionsGrid).forEach(button => button.classList.remove('selected'));
  refs.optionsGrid.querySelector(`[data-option-index="${optionIndex}"]`)?.classList.add('selected');
  state.answers[state.current] = option.score;
  state.current += 1;
  saveState();
  window.setTimeout(() => {
    refs.questionCard.classList.add('swap-out');
    window.setTimeout(() => {
      refs.questionCard.classList.remove('swap-out');
      if (state.current >= 16) showResult(computeScores(state.answers)); else renderQuestion();
    }, 170);
  }, 170);
}

function goBack() {
  if (state.current <= 0) return;
  state.current -= 1;
  saveState();
  renderQuestion();
}

function computeScores(answers) {
  const scores = {};
  CHAPTERS.forEach((chapter, chapterIndex) => {
    const values = chapter.questions.map((_, questionIndex) => answers[getGlobalIndex(chapterIndex, questionIndex)]).filter(value => typeof value === 'number');
    const avg = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
    scores[chapter.key] = Math.min(96, Math.max(12, Math.round(24 + avg * 14.4)));
  });
  return scores;
}

function computeNpdIndex(scores) {
  return Math.min(96, Math.max(4, Math.round(scores.visibility * 0.22 + scores.entitlement * 0.3 + (96 - scores.empathy) * 0.28 + scores.criticism * 0.2)));
}

function getIndexState(score) {
  if (score >= 75) return '高防御自恋';
  if (score >= 55) return '高自恋特质';
  if (score >= 30) return '健康自我关注';
  return '低自恋能量';
}

function selectPersona(scores) {
  return PERSONAS.map(persona => {
    const distance = Math.sqrt(DIMENSIONS.reduce((sum, dimension) => {
      const diff = scores[dimension.key] - persona.prototype[dimension.key];
      return sum + diff * diff;
    }, 0) / DIMENSIONS.length);
    return { persona, distance };
  }).sort((a, b) => a.distance - b.distance)[0].persona;
}

function showResult(scores) {
  activeScores = scores;
  activePersona = selectPersona(scores);
  activeIndex = computeNpdIndex(scores);
  const top = [...DIMENSIONS].sort((a, b) => scores[b.key] - scores[a.key]).slice(0, 2);
  $('#personaCode').textContent = `SELF FILE / ${activePersona.code}`;
  $('#resultKicker').textContent = `${top[0].label} × ${top[1].label}`;
  $('#personaName').textContent = activePersona.name;
  $('#personaTagline').textContent = activePersona.tagline;
  $('#personaDescription').textContent = activePersona.description;
  $('#personaKeywords').innerHTML = activePersona.keywords.map(keyword => `<span>${escapeHtml(keyword)}</span>`).join('');
  $('#npdScore').textContent = activeIndex;
  $('#scoreBar').style.width = `${activeIndex}%`;
  $('#scoreState').textContent = getIndexState(activeIndex);
  $('#mechanismText').textContent = activePersona.mechanism;
  $('#strengthList').innerHTML = activePersona.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  $('#caveatList').innerHTML = activePersona.caveats.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  $('#personaQuote').textContent = activePersona.quote;
  $('#personaAdvice').textContent = activePersona.advice;
  renderRadar($('#resultRadar'), scores, { width: 620, showValues: true });
  $('#previewCode').textContent = activePersona.code;
  $('#previewName').textContent = activePersona.name;
  $('#previewTagline').textContent = activePersona.tagline;
  $('#previewScore').textContent = activeIndex;
  renderRadar($('#previewRadar'), scores, { width: 220, compact: true, showValues: false });
  setScreen('result');
  updateResumeButton();
}

function radarSVG(scores, options = {}) {
  const width = options.width || 500;
  const height = width;
  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.31;
  const labelRadius = radius + width * 0.145;
  const baseAngle = -Math.PI / 2;
  const pointAt = (index, value) => {
    const angle = baseAngle + (Math.PI * 2 * index) / 4;
    const distance = radius * (Math.max(0, Math.min(96, value)) / 96);
    return [cx + Math.cos(angle) * distance, cy + Math.sin(angle) * distance];
  };
  const labelAt = index => {
    const angle = baseAngle + (Math.PI * 2 * index) / 4;
    return [cx + Math.cos(angle) * labelRadius, cy + Math.sin(angle) * labelRadius];
  };
  const polygon = values => values.map((value, index) => pointAt(index, value).join(',')).join(' ');
  const grids = [16, 32, 48, 64, 80, 96].map(level => `<polygon points="${polygon(Array(4).fill(level))}" class="radar-grid"/>`).join('');
  const axes = DIMENSIONS.map((_, index) => { const [x, y] = pointAt(index, 96); return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="radar-axis"/>`; }).join('');
  const values = DIMENSIONS.map(dimension => scores[dimension.key] || 0);
  const dataPoints = values.map((value, index) => pointAt(index, value));
  const points = dataPoints.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${options.compact ? 2.7 : 4}" class="radar-point"/>`).join('');
  const valueSize = width * 0.035;
  const valuesText = options.showValues ? DIMENSIONS.map((dimension, index) => {
    const [x, y] = pointAt(index, 84);
    return `<text x="${x}" y="${y + valueSize * 0.35}" text-anchor="middle" class="radar-value" style="font-size:${valueSize}px">${scores[dimension.key] || 0}</text>`;
  }).join('') : '';
  const labels = DIMENSIONS.map((dimension, index) => {
    const [x, y] = labelAt(index);
    const anchor = Math.abs(x - cx) < 10 ? 'middle' : x < cx ? 'end' : 'start';
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" class="radar-label">${dimension.label}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="四维自恋能量雷达图">${grids}${axes}<polygon points="${dataPoints.map(point => point.join(',')).join(' ')}" class="radar-data"/>${points}${valuesText}${labels}</svg>`;
}

function renderRadar(container, scores, options = {}) { if (container) container.innerHTML = radarSVG(scores, options); }

function buildShareText() {
  const top = [...DIMENSIONS].sort((a, b) => activeScores[b.key] - activeScores[a.key]).slice(0, 2);
  return `测出我的自恋能量人格是「${activePersona.name}」。\n\nNPD指数 ${activeIndex}/100：${getIndexState(activeIndex)}。\n${top[0].label} ${activeScores[top[0].key]} / ${top[1].label} ${activeScores[top[1].key]}。\n\n${activePersona.quote}\n\n#NPD指数 #自恋人格 #自我观察 #人格测试 #暗镜`;
}

async function copyShareText() {
  const text = buildShareText();
  try { await navigator.clipboard.writeText(text); showToast('分享文案已复制'); }
  catch (error) {
    const area = document.createElement('textarea'); area.value = text; area.style.position = 'fixed'; area.style.opacity = '0';
    document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); showToast('分享文案已复制');
  }
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => refs.toast.classList.remove('show'), 2200);
}
function goHome() { setScreen('landing'); updateResumeButton(); }
function resume() { if (state.current >= 16) showResult(computeScores(state.answers)); else { setScreen('test'); renderQuestion(); } }
function restart() { localStorage.removeItem(STORAGE_KEY); startNewTest(); }

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const chars = [...text]; const lines = []; let line = '';
  chars.forEach(char => { const test = line + char; if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = char; } else line = test; });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((value, index) => ctx.fillText(index === maxLines - 1 && lines.length > maxLines ? `${value.slice(0,-1)}…` : value, x, y + index * lineHeight));
}

function drawCanvasRadar(ctx, scores, cx, cy, radius) {
  const start = -Math.PI / 2;
  const point = (index, value) => {
    const angle = start + (Math.PI * 2 * index) / 4;
    const length = radius * (value / 96);
    return [cx + Math.cos(angle) * length, cy + Math.sin(angle) * length];
  };
  for (let level = 1; level <= 5; level += 1) {
    ctx.beginPath();
    for (let index = 0; index < 4; index += 1) {
      const [x, y] = point(index, level * 19.2);
      if (index === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath(); ctx.strokeStyle = 'rgba(242,238,232,0.14)'; ctx.lineWidth = 1.2; ctx.stroke();
  }
  for (let index = 0; index < 4; index += 1) {
    const [x, y] = point(index, 96);
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.strokeStyle = 'rgba(242,238,232,0.12)'; ctx.stroke();
  }
  const values = DIMENSIONS.map(d => scores[d.key] || 0);
  ctx.beginPath();
  values.forEach((value, index) => { const [x, y] = point(index, value); if (index === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
  ctx.closePath(); ctx.fillStyle = 'rgba(167,47,62,0.24)'; ctx.fill(); ctx.strokeStyle = '#df5a68'; ctx.lineWidth = 2.5; ctx.stroke();
  values.forEach((value, index) => { const [x, y] = point(index, value); ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fillStyle = '#d7d9dd'; ctx.fill(); });
  DIMENSIONS.forEach((dimension, index) => {
    const angle = start + (Math.PI * 2 * index) / 4;
    const lx = cx + Math.cos(angle) * (radius + 58);
    const ly = cy + Math.sin(angle) * (radius + 53);
    ctx.fillStyle = '#b8b5b9'; ctx.font = '500 18px "PingFang SC", sans-serif';
    ctx.textAlign = Math.abs(lx - cx) < 8 ? 'center' : lx < cx ? 'right' : 'left';
    ctx.fillText(dimension.label, lx, ly);
  });
}

function downloadShareCard() {
  if (!activePersona) return;
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1440;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 1080, 1440);
  grad.addColorStop(0, '#181d24'); grad.addColorStop(0.6, '#0b0f15'); grad.addColorStop(1, '#05070a');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 1080, 1440);
  const aura = ctx.createRadialGradient(880, 220, 20, 880, 220, 420);
  aura.addColorStop(0, 'rgba(167,47,62,0.3)'); aura.addColorStop(1, 'rgba(167,47,62,0)');
  ctx.fillStyle = aura; ctx.fillRect(0, 0, 1080, 900);
  ctx.strokeStyle = 'rgba(215,217,221,0.28)'; ctx.lineWidth = 2; ctx.strokeRect(30, 30, 1020, 1380);
  ctx.textAlign = 'left'; ctx.fillStyle = '#df5a68'; ctx.font = '600 18px "SF Mono", monospace'; ctx.fillText('暗镜 / DARK MIRROR', 72, 92);
  ctx.textAlign = 'right'; ctx.fillStyle = '#66646b'; ctx.fillText(activePersona.code, 1008, 92);
  ctx.textAlign = 'left'; ctx.fillStyle = '#85838a'; ctx.font = '500 15px "SF Mono", monospace'; ctx.fillText('NPD ENERGY', 72, 175);
  ctx.fillStyle = '#d7d9dd'; ctx.font = '400 150px "Bodoni 72", "Didot", serif'; ctx.fillText(String(activeIndex), 68, 315);
  ctx.fillStyle = '#df5a68'; ctx.font = '600 20px "PingFang SC", sans-serif'; ctx.fillText(getIndexState(activeIndex), 72, 355);
  ctx.fillStyle = '#f2eee8'; ctx.font = '500 76px "Songti SC", serif'; ctx.fillText(activePersona.name, 68, 470);
  ctx.fillStyle = '#8d8b91'; ctx.font = '400 28px "Songti SC", serif';
  wrapCanvasText(ctx, activePersona.tagline, 72, 520, 880, 42, 2);
  drawCanvasRadar(ctx, activeScores, 540, 825, 185);
  ctx.textAlign = 'left'; ctx.fillStyle = '#67656c'; ctx.font = '500 15px "SF Mono", monospace'; ctx.fillText('LOOK AGAIN', 72, 1145);
  ctx.fillStyle = '#d7d9dd'; ctx.font = '400 33px "Songti SC", serif';
  wrapCanvasText(ctx, activePersona.quote, 72, 1195, 880, 47, 2);
  ctx.fillStyle = '#55535a'; ctx.font = '500 13px "SF Mono", monospace'; ctx.fillText('16 个日常瞬间 · 照见你的自恋能量', 72, 1360);
  ctx.textAlign = 'right'; ctx.fillText('ANJING / SELF-MIRROR', 1008, 1360);
  const link = document.createElement('a');
  link.download = `暗镜-${activePersona.name}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('暗镜卡片已生成');
}

function hexToRgba(hex, alpha) {
  const raw = hex.replace('#',''); const value = parseInt(raw.length === 3 ? raw.split('').map(c=>c+c).join('') : raw, 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}
function escapeHtml(value) { return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'); }

document.addEventListener('click', event => {
  const actionTarget = event.target.closest('[data-action]');
  if (actionTarget) {
    const action = actionTarget.dataset.action;
    if (action === 'start') startNewTest();
    if (action === 'resume') resume();
    if (action === 'back') goBack();
    if (action === 'home') goHome();
    if (action === 'download') downloadShareCard();
    if (action === 'copy') copyShareText();
    if (action === 'restart') restart();
    return;
  }
  const option = event.target.closest('[data-option-index]');
  if (option && activeScreen === 'test') chooseOption(Number(option.dataset.optionIndex));
});
window.addEventListener('scroll', () => refs.header.classList.toggle('scrolled', window.scrollY > 16), { passive: true });

safeLoadState();
updateResumeButton();
