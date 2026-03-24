import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub } from 'react-icons/fa'

/* ─── SVG Visuals ─────────────────────────────────────────────── */

const PocketLLMVisual = () => (
  <svg width="100%" height="100%" viewBox="0 0 420 165" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
    {/* App window chrome */}
    <rect x="16" y="14" width="388" height="138" rx="10" fill="rgba(0,0,0,0.35)" />
    {/* Title bar */}
    <rect x="16" y="14" width="388" height="28" rx="10" fill="rgba(0,0,0,0.4)" />
    <circle cx="32" cy="28" r="5" fill="rgba(255,80,80,0.7)" />
    <circle cx="48" cy="28" r="5" fill="rgba(255,200,0,0.7)" />
    <circle cx="64" cy="28" r="5" fill="rgba(0,210,80,0.7)" />
    <text x="180" y="33" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">PocketLLM</text>
    {/* Sidebar */}
    <rect x="16" y="42" width="72" height="110" fill="rgba(0,0,0,0.25)" />
    <rect x="22" y="52" width="60" height="18" rx="5" fill="rgba(124,58,237,0.5)" />
    <text x="52" y="65" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="monospace">💬 Chat</text>
    <rect x="22" y="76" width="60" height="14" rx="4" fill="rgba(255,255,255,0.06)" />
    <text x="52" y="87" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">Docs Q&A</text>
    <rect x="22" y="96" width="60" height="14" rx="4" fill="rgba(255,255,255,0.06)" />
    <text x="52" y="107" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">Settings</text>
    {/* Chat area */}
    {/* User bubble */}
    <rect x="220" y="48" width="172" height="24" rx="10" fill="rgba(124,58,237,0.65)" />
    <text x="231" y="64" fill="rgba(255,255,255,0.9)" fontSize="8.5" fontFamily="sans-serif">Summarize this document</text>
    {/* AI bubble */}
    <rect x="96" y="80" width="200" height="34" rx="10" fill="rgba(255,255,255,0.12)" />
    <text x="106" y="93" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="sans-serif">Sure! Here's a concise summary:</text>
    <text x="106" y="107" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="sans-serif">The document covers three main topics…</text>
    {/* User bubble 2 */}
    <rect x="240" y="122" width="152" height="20" rx="8" fill="rgba(124,58,237,0.55)" />
    <text x="251" y="136" fill="rgba(255,255,255,0.85)" fontSize="8" fontFamily="sans-serif">Can you expand on #2?</text>
    {/* Input bar */}
    <rect x="96" y="140" width="300" height="18" rx="9" fill="rgba(255,255,255,0.1)" stroke="rgba(124,58,237,0.5)" strokeWidth="1" />
    <text x="108" y="153" fill="rgba(255,255,255,0.3)" fontSize="7.5" fontFamily="sans-serif">Ask anything… (Ollama · local)</text>
  </svg>
)

const NewsVisual = () => (
  <svg width="100%" height="100%" viewBox="0 0 420 165" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
    {/* Three source columns */}
    {[
      { x: 12, label: 'LEFT', color: 'rgba(239,68,68,0.7)', labelColor: '#FCA5A5' },
      { x: 148, label: 'CENTER', color: 'rgba(100,116,139,0.6)', labelColor: '#CBD5E1' },
      { x: 284, label: 'RIGHT', color: 'rgba(59,130,246,0.7)', labelColor: '#93C5FD' },
    ].map(({ x, label, color, labelColor }) => (
      <g key={label}>
        <rect x={x} y="12" width="120" height="92" rx="8" fill="rgba(0,0,0,0.25)" />
        <rect x={x} y="12" width="120" height="20" rx="8" fill={color} />
        <text x={x + 60} y="26" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">{label}</text>
        {[38, 52, 66, 78, 90].map((y, i) => (
          <rect key={y} x={x + 8} y={y} width={i % 2 === 0 ? 100 : 80} height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        ))}
      </g>
    ))}
    {/* Arrows converging */}
    <path d="M72 104 Q72 130 210 135" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
    <path d="M208 104 L208 134" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
    <path d="M344 104 Q344 130 212 135" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
    {/* Output box */}
    <rect x="90" y="134" width="240" height="24" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <text x="210" y="143" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="sans-serif">RAG · DPR retrieval</text>
    <text x="210" y="153" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8" fontWeight="600" fontFamily="sans-serif">⚖ Balanced Neutral Output</text>
  </svg>
)

const HateSpeechVisual = () => (
  <svg width="100%" height="100%" viewBox="0 0 420 165" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
    {/* World map silhouette simplified */}
    <ellipse cx="210" cy="82" rx="170" ry="62" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
    <ellipse cx="210" cy="82" rx="110" ry="62" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
    <line x1="40" y1="82" x2="380" y2="82" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
    {/* Heat map dots by region */}
    {[
      { cx: 120, cy: 65, r: 18, opacity: 0.35, label: 'EN' },
      { cx: 175, cy: 58, r: 14, opacity: 0.28, label: 'FR' },
      { cx: 200, cy: 72, r: 10, opacity: 0.22, label: 'DE' },
      { cx: 270, cy: 75, r: 20, opacity: 0.38, label: 'AR' },
      { cx: 315, cy: 88, r: 16, opacity: 0.3, label: 'HI' },
      { cx: 350, cy: 78, r: 12, opacity: 0.24, label: 'ZH' },
      { cx: 148, cy: 100, r: 8, opacity: 0.2, label: 'TR' },
    ].map(({ cx, cy, r, opacity, label }) => (
      <g key={label}>
        <circle cx={cx} cy={cy} r={r} fill={`rgba(52,211,153,${opacity})`} />
        <text x={cx} y={cy + 4} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontWeight="700" fontFamily="sans-serif">{label}</text>
      </g>
    ))}
    {/* XLM-R label */}
    <rect x="140" y="130" width="140" height="22" rx="8" fill="rgba(0,0,0,0.3)" />
    <text x="210" y="138" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">Zero-shot · Multi-task</text>
    <text x="210" y="148" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">XLM-RoBERTa · F1: 0.79</text>
  </svg>
)

const ImageClassVisual = () => (
  <svg width="100%" height="100%" viewBox="0 0 420 165" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
    {/* Input image thumbnails */}
    {[
      { x: 12, y: 14, grad: ['#92400E', '#D97706'], label: '🏔' },
      { x: 12, y: 72, grad: ['#1E3A5F', '#3B82F6'], label: '🏙' },
      { x: 70, y: 14, grad: ['#14532D', '#22C55E'], label: '🌿' },
      { x: 70, y: 72, grad: ['#4C1D95', '#8B5CF6'], label: '🌃' },
    ].map(({ x, y, grad, label }) => (
      <g key={`${x}-${y}`}>
        <defs><linearGradient id={`g${x}${y}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={grad[0]} /><stop offset="100%" stopColor={grad[1]} /></linearGradient></defs>
        <rect x={x} y={y} width="52" height="48" rx="6" fill={`url(#g${x}${y})`} />
        <text x={x + 26} y={y + 30} textAnchor="middle" fontSize="20">{label}</text>
      </g>
    ))}
    {/* Arrow */}
    <path d="M130 82 L175 82" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
    <polygon points="175,78 185,82 175,86" fill="rgba(255,255,255,0.4)" />
    {/* CNN boxes */}
    {[
      { x: 188, w: 28, h: 80, y: 42, label: 'Conv' },
      { x: 222, w: 22, h: 60, y: 52, label: 'Pool' },
      { x: 250, w: 28, h: 72, y: 46, label: 'Conv' },
      { x: 284, w: 18, h: 48, y: 58, label: 'FC' },
    ].map(({ x, w, h, y, label }) => (
      <g key={label + x}>
        <rect x={x} y={y} width={w} height={h} rx="4" fill="rgba(251,191,36,0.3)" stroke="rgba(251,191,36,0.5)" strokeWidth="1" />
        <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="6.5" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {/* Arrow to output */}
    <polygon points="308,78 318,82 308,86" fill="rgba(255,255,255,0.4)" />
    {/* Classification bars */}
    {[
      { label: 'Mountain', pct: 90, y: 22 },
      { label: 'Forest', pct: 6, y: 46 },
      { label: 'City', pct: 4, y: 70 },
    ].map(({ label, pct, y }) => (
      <g key={label}>
        <text x="322" y={y + 12} fill="rgba(255,255,255,0.65)" fontSize="7.5" fontFamily="sans-serif">{label}</text>
        <rect x="322" y={y + 15} width="84" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
        <rect x="322" y={y + 15} width={84 * pct / 100} height="8" rx="4"
          fill={pct > 50 ? 'rgba(251,191,36,0.8)' : 'rgba(255,255,255,0.2)'} />
        <text x={322 + 84 * pct / 100 + 4} y={y + 23} fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">{pct}%</text>
      </g>
    ))}
    {/* Accuracy badge */}
    <rect x="322" y="118" width="84" height="30" rx="8" fill="rgba(0,0,0,0.3)" />
    <text x="364" y="131" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="7" fontFamily="sans-serif">Accuracy</text>
    <text x="364" y="144" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="'Space Grotesk',sans-serif">90%</text>
  </svg>
)

const PowerForecastVisual = () => (
  <svg width="100%" height="100%" viewBox="0 0 420 165" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
    {/* Grid */}
    {[35, 75, 115].map(y => <line key={y} x1="40" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />)}
    {[100, 180, 260, 340].map(x => <line key={x} x1={x} y1="20" x2={x} y2="135" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />)}
    {/* X-axis labels */}
    {['Jan','Apr','Jul','Oct'].map((m, i) => (
      <text key={m} x={100 + i * 80} y="148" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="sans-serif">{m}</text>
    ))}
    {/* Y-axis */}
    <line x1="40" y1="20" x2="40" y2="135" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <line x1="40" y1="135" x2="400" y2="135" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    {/* Historical area */}
    <path d="M40,110 C70,105 90,90 120,92 S160,75 190,78 S230,65 260,68"
      stroke="rgba(134,239,172,0.5)" strokeWidth="2" fill="none" strokeDasharray="5,3" />
    {/* LSTM forecast line */}
    <path d="M40,115 C75,108 100,95 130,88 S175,72 210,68 S265,55 300,50 S350,42 400,36"
      stroke="#86EFAC" strokeWidth="2.5" fill="none" />
    {/* Forecast area fill */}
    <path d="M260,68 C290,60 330,48 400,36 L400,135 L260,135 Z"
      fill="rgba(134,239,172,0.08)" />
    {/* Prophet line */}
    <path d="M40,118 C80,112 120,98 160,94 S210,80 260,76 S320,62 400,55"
      stroke="rgba(251,191,36,0.55)" strokeWidth="1.5" fill="none" strokeDasharray="4,3" />
    {/* Forecast divider */}
    <line x1="260" y1="20" x2="260" y2="135" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,3" />
    <text x="265" y="30" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="sans-serif">Forecast →</text>
    {/* Legend */}
    <circle cx="55" cy="155" r="3" fill="#86EFAC" />
    <text x="62" y="158" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="sans-serif">LSTM</text>
    <line x1="100" y1="155" x2="114" y2="155" stroke="rgba(251,191,36,0.6)" strokeWidth="1.5" strokeDasharray="3,2" />
    <text x="118" y="158" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="sans-serif">Prophet</text>
    <line x1="165" y1="155" x2="179" y2="155" stroke="rgba(134,239,172,0.5)" strokeWidth="1.5" strokeDasharray="4,3" />
    <text x="183" y="158" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="sans-serif">Holt-Winters</text>
  </svg>
)

const WebChatVisual = () => (
  <svg width="100%" height="100%" viewBox="0 0 420 165" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
    {/* App chrome */}
    <rect x="14" y="10" width="392" height="148" rx="12" fill="rgba(0,0,0,0.3)" />
    {/* Header bar */}
    <rect x="14" y="10" width="392" height="32" rx="12" fill="rgba(255,255,255,0.08)" />
    <circle cx="36" cy="26" r="10" fill="rgba(255,255,255,0.15)" />
    <text x="36" y="30" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontWeight="700">A</text>
    <text x="54" y="23" fill="rgba(255,255,255,0.85)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Alex</text>
    <text x="54" y="34" fill="rgba(134,239,172,0.8)" fontSize="7.5" fontFamily="sans-serif">● online</text>
    <text x="370" y="30" fill="rgba(255,255,255,0.35)" fontSize="18">#</text>
    {/* Messages */}
    {/* Received */}
    <rect x="24" y="50" width="180" height="26" rx="12" fill="rgba(255,255,255,0.1)" />
    <text x="34" y="60" fill="rgba(255,255,255,0.75)" fontSize="8.5" fontFamily="sans-serif">Hey, any updates on the PR?</text>
    <text x="34" y="72" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="sans-serif">10:42 AM</text>
    {/* Sent */}
    <rect x="216" y="82" width="190" height="26" rx="12" fill="rgba(59,130,246,0.55)" />
    <text x="226" y="92" fill="rgba(255,255,255,0.9)" fontSize="8.5" fontFamily="sans-serif">Just merged it! Check #general</text>
    <text x="380" y="104" textAnchor="end" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="sans-serif">10:44 AM ✓✓</text>
    {/* Received 2 */}
    <rect x="24" y="114" width="150" height="22" rx="10" fill="rgba(255,255,255,0.1)" />
    <text x="34" y="124" fill="rgba(255,255,255,0.75)" fontSize="8.5" fontFamily="sans-serif">Nice! 🔥 Looks great</text>
    <text x="34" y="133" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="sans-serif">10:45 AM</text>
    {/* Input bar */}
    <rect x="24" y="145" width="372" height="8" rx="4" fill="rgba(255,255,255,0.07)" />
  </svg>
)

/* ─── Project Data ────────────────────────────────────────────── */

const projects = [
  {
    title: 'Neutral News Generation',
    subtitle: 'RAG-Based News Debiasing',
    label: 'NLP · RAG',
    gradient: 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 55%, #0EA5E9 100%)',
    accent: '#0369A1', accentLight: '#E0F2FE', accentBorder: '#BAE6FD',
    Visual: NewsVisual,
    bullets: [
      'Built a news debiasing system to generate balanced narratives by conditioning outputs on diverse sources and model constraints.',
      'Explored retrieval grounding approaches and implemented LLM-based generation using MPT and LED.',
      'Evaluated performance using ROUGE and BERTScore, achieving strong semantic alignment and reduced bias.',
    ],
    tech: ['Python', 'PyTorch', 'Hugging Face', 'MPT', 'LED'],
    github: 'https://github.com/narasimha-nirmal/NewsDebiasing',
  },
  {
    title: 'Cross-Lingual Hate Speech Detection',
    subtitle: 'Zero-Shot & Multi-Task NLP',
    label: 'NLP · Multi-Task',
    gradient: 'linear-gradient(135deg, #064E3B 0%, #059669 55%, #34D399 100%)',
    accent: '#059669', accentLight: '#D1FAE5', accentBorder: '#A7F3D0',
    Visual: HateSpeechVisual,
    bullets: [
      'Developed a hate speech detection system for low-resource languages using XLM-R with zero-shot and multi-task learning.',
      'Improved generalization across unseen languages by leveraging shared representations across tasks.',
      'Achieved Macro F1 of 0.79 with strong performance on cross-lingual transfer.',
    ],
    tech: ['Python', 'PyTorch', 'XLM-RoBERTa', 'Transformers'],
    github: 'https://github.com/narasimha-nirmal/Hate-Speech-Zero-shot-transfer-MTL-',
  },
  {
    title: 'PocketLLM',
    subtitle: 'Lightweight Local LLM Platform',
    label: 'Full-Stack · AI',
    gradient: 'linear-gradient(135deg, #2E1065 0%, #5B21B6 55%, #7C3AED 100%)',
    accent: '#7C3AED', accentLight: '#EDE9FE', accentBorder: '#C4B5FD',
    Visual: PocketLLMVisual,
    bullets: [
      'Built a privacy-first LLM platform for on-device inference, eliminating reliance on external APIs.',
      'Implemented streaming responses and document-grounded Q&A using a full-stack architecture with authentication and session management.',
      'Improved responsiveness through a multi-tier caching design with a containerized local deployment.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Ollama', 'JWT', 'Docker', 'SSE', 'IndexedDB'],
    github: 'https://github.com/narasimha-nirmal/PocketLLM',
  },
  {
    title: 'Transfer Learning Image Classification',
    subtitle: 'Scene Recognition with CNNs',
    label: 'Computer Vision · DL',
    gradient: 'linear-gradient(135deg, #78350F 0%, #B45309 55%, #F59E0B 100%)',
    accent: '#B45309', accentLight: '#FEF3C7', accentBorder: '#FDE68A',
    Visual: ImageClassVisual,
    bullets: [
      'Built a multi-class image classification system using transfer learning on EfficientNet, ResNet, and VGG architectures.',
      'Applied fine-tuning, data augmentation, and regularization to improve generalization.',
      'Achieved 90% accuracy and 99% AUC on the test dataset.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'EfficientNet', 'ResNet', 'VGG'],
    github: 'https://github.com/narasimha-nirmal/ImageClassificationTransferLearning',
  },
  {
    title: 'Electrical Power Forecasting',
    subtitle: 'Time-Series Load Prediction',
    label: 'Time-Series · ML',
    gradient: 'linear-gradient(135deg, #14532D 0%, #15803D 55%, #4ADE80 100%)',
    accent: '#15803D', accentLight: '#DCFCE7', accentBorder: '#BBF7D0',
    Visual: PowerForecastVisual,
    bullets: [
      'Developed time-series forecasting models to predict electricity demand using real-world grid data.',
      'Implemented classical modeling including Holt-Winters and Prophet with advanced neural approaches like LSTMs.',
      'Analyzed model performance across temporal patterns to identify the most reliable forecasting strategy.',
    ],
    tech: ['Python', 'TensorFlow', 'LSTM', 'Prophet', 'Pandas'],
    github: 'https://github.com/narasimha-nirmal/FinalYRproject',
  },
  {
    title: 'Real-Time Web Chat Application',
    subtitle: 'Multi-Room Live Messaging',
    label: 'Full-Stack · Real-Time',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 55%, #2563EB 100%)',
    accent: '#2563EB', accentLight: '#DBEAFE', accentBorder: '#BFDBFE',
    Visual: WebChatVisual,
    bullets: [
      'Built a real-time chat application supporting multiple rooms and live messaging using event-based architecture.',
      'Implemented backend APIs and bidirectional communication using WebSockets.',
      'Designed for low-latency interaction and scalable user handling.',
    ],
    tech: ['Node.js', 'Express', 'Socket.io', 'HTML', 'CSS'],
    github: 'https://github.com/narasimha-nirmal',
  },
]

/* ─── Card Component ─────────────────────────────────────────── */

function ProjectCard({ project, index, inView }) {
  const { Visual } = project
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        border: '1px solid #E2E8F0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 24px 56px rgba(0,0,0,0.14)'
        e.currentTarget.style.borderColor = '#C4B5FD'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
        e.currentTarget.style.borderColor = '#E2E8F0'
      }}
    >
      {/* Visual header */}
      <div style={{ position: 'relative', height: '165px', background: project.gradient, overflow: 'hidden' }}>
        <Visual />
        <span style={{
          position: 'absolute', top: '12px', left: '14px',
          padding: '0.22rem 0.7rem',
          borderRadius: '999px',
          backgroundColor: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(8px)',
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.05em',
          border: '1px solid rgba(255,255,255,0.2)',
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          {project.label}
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{
            position: 'absolute', top: '10px', right: '12px',
            width: '32px', height: '32px', borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.35)'}
        >
          <FaGithub size={15} />
        </a>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
        <div>
          <h3 style={{
            margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.3,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            {project.title}
          </h3>
          <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
          {project.bullets.map((b, i) => (
            <li key={i} style={{ fontSize: '0.855rem', color: '#475569', lineHeight: 1.65 }}>{b}</li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: '0.22rem 0.65rem',
              borderRadius: '999px',
              backgroundColor: project.accentLight,
              border: `1px solid ${project.accentBorder}`,
              color: project.accent,
              fontSize: '0.73rem',
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Section ────────────────────────────────────────────────── */

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.04, triggerOnce: true })

  return (
    <section id="projects" ref={ref} style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <p className="section-label">Projects</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>
          Things I've Built
        </h2>
        <p style={{ margin: 0, color: '#64748B', fontSize: '1rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          A collection of ML, NLP, and full-stack projects spanning research and production systems.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))',
        gap: '1.5rem',
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}
