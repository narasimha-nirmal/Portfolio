import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.55, ease: 'easeOut' },
  }),
}

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/narasimha-nirmal', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nirmalnarasimha/', label: 'LinkedIn' },
  { icon: HiMail, href: 'mailto:malavall@usc.edu', label: 'Email' },
]

const featuredProjects = [
  {
    title: 'Cross Lingual Hate Speech Detection',
    desc: 'Detecting Hate Speech using XLM-R with zero-shot and multi-task learning obtaining Macro F1: 0.79',
    href: '#projects',
  },
  {
    title: 'News Debiasing',
    desc: 'News debiasing system using LLMs like MPT and LED, explored RAG-based grounding, achieving ROUGE-1: 40.5 and BERTScore: 82.6',
    href: '#projects',
  },
]

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 1.5rem 5rem',
        backgroundColor: '#F8FAFC',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(109,40,217,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-80px', width: '520px', height: '520px',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
      }} />

      <div className="hero-grid" style={{
        maxWidth: '1060px', width: '100%', position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: '4rem',
      }}>

        {/* LEFT: text */}
        <div>
          <motion.h1
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              margin: '0 0 0.75rem',
              lineHeight: 1.08,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #0F172A 45%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Nirmal Narasimha
            </span>
            <span style={{ color: '#7C3AED', WebkitTextFillColor: '#7C3AED' }}>.</span>
          </motion.h1>

          <motion.div
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="hero-tagline"
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              fontWeight: 600,
              color: '#475569',
              marginBottom: '1.25rem',
              fontFamily: "'Space Grotesk', sans-serif",
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#7C3AED' }}>ML · NLP</span>
            <span style={{ color: '#CBD5E1' }}>·</span>
            <span>Full-Stack Systems</span>
            <span style={{ color: '#CBD5E1' }}>·</span>
            <span>CS Graduate @ USC</span>
          </motion.div>

          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            style={{
              fontSize: '0.975rem',
              color: '#475569',
              lineHeight: 1.75,
              maxWidth: '520px',
              marginBottom: '2rem',
            }}
          >
            I'm a Computer Science graduate driven by solving complex problems and building systems that create real-world impact.
            I focus on designing scalable and intelligent solutions, with strong experience in machine learning and NLP.
            My work has explored challenges such as bias in language models and cross-lingual generalization through projects like news debiasing and hate speech detection.
            Beyond modeling, I enjoy building complete end-to-end systems — from LLM-based applications to real-time platforms — with an emphasis on scalability and reliability.
          </motion.p>

          <motion.div
            custom={3} initial="hidden" animate="visible" variants={fadeUp}
            className="hero-socials"
            style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  border: '1px solid #E2E8F0',
                  color: '#374151',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#7C3AED'
                  e.currentTarget.style.color = '#6D28D9'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(124,58,237,0.12)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E2E8F0'
                  e.currentTarget.style.color = '#374151'
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}>
            <p style={{
              fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em',
              color: '#94A3B8', marginBottom: '0.75rem', fontWeight: 600,
            }}>
              Featured Projects
            </p>
            <div className="hero-project-cards" style={{ display: 'flex', gap: '0.75rem' }}>
              {featuredProjects.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  onClick={scrollToProjects}
                  className="hero-project-card"
                  style={{
                    flex: 1,
                    display: 'block',
                    padding: '0.875rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    border: '1px solid #E2E8F0',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    minWidth: 0,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.borderColor = '#7C3AED'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(124,58,237,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = '#E2E8F0'
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'
                  }}
                >
                  <p style={{ margin: '0 0 0.25rem', fontWeight: 600, color: '#0F172A', fontSize: '0.85rem', lineHeight: 1.3 }}>
                    {p.title}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.76rem', color: '#64748B', lineHeight: 1.5 }}>
                    {p.desc}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="hero-photo"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}
        >
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring" />
            <div className="hero-photo-dot" />
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Nirmal Narasimha"
              className="hero-photo-img"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-photo-wrap {
          position: relative;
          width: 240px;
          height: 240px;
          flex-shrink: 0;
        }
        .hero-photo-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px dashed rgba(124,58,237,0.25);
        }
        .hero-photo-dot {
          position: absolute;
          bottom: 10px;
          right: -4px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #7C3AED;
          border: 3px solid #F8FAFC;
          z-index: 2;
        }
        .hero-photo-img {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 4px solid #fff;
          box-shadow: 0 8px 40px rgba(124,58,237,0.18);
          display: block;
        }

        @media (max-width: 720px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 2rem !important;
          }
          .hero-photo {
            order: -1;
            justify-content: center !important;
          }
          .hero-photo-wrap {
            width: 160px;
            height: 160px;
          }
          .hero-photo-img {
            width: 160px;
            height: 160px;
          }
          .hero-photo-dot {
            width: 16px;
            height: 16px;
            bottom: 6px;
            right: -2px;
          }
          .hero-tagline {
            justify-content: center !important;
          }
          .hero-socials {
            justify-content: center !important;
          }
          .hero-project-cards {
            flex-direction: column !important;
          }
          .hero-project-card {
            width: 100% !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  )
}
