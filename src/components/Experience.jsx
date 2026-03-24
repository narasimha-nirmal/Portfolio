import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function CompanyLogo({ exp }) {
  const [failed, setFailed] = useState(false)
  const src = `${import.meta.env.BASE_URL}companies/${exp.logo}`

  if (!failed) {
    return (
      <img
        src={src}
        alt={exp.company}
        onError={() => setFailed(true)}
        style={{
          width: '42px', height: '42px', flexShrink: 0,
          borderRadius: '10px',
          objectFit: 'contain',
          backgroundColor: exp.accentBg,
          padding: '4px',
          border: `1px solid ${exp.accentBg}`,
        }}
      />
    )
  }

  return (
    <div style={{
      width: '42px', height: '42px', flexShrink: 0,
      borderRadius: '10px',
      backgroundColor: exp.accentBg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700, fontSize: '0.78rem',
      color: exp.accentColor,
      letterSpacing: '0.02em',
    }}>
      {exp.initials}
    </div>
  )
}

const experiences = [
  {
    company: 'Whisper Energy',
    title: 'Data Analyst Intern',
    location: 'Los Angeles, CA',
    dates: 'Jun 2025 – Aug 2025',
    initials: 'WE',
    logo: 'whisper-energy.png',
    accentColor: '#7C3AED',
    accentBg: '#EDE9FE',
    bullets: [
      'Built a scalable industry analysis and client segmentation workflow using audit and operational data to identify high-value target sectors.',
      'Designed a fit-score metric to measure how strongly an industry deviated from a baseline profile, helping rank sectors based on expansion potential and strategic fit.',
      'Applied clustering and correlation analysis to uncover relationships across industries, reducing manual review by 30%.',
      'Developed an interactive dashboard combining descriptive analytics, comparative insights, and similarity search for leadership.',
    ],
  },
  {
    company: 'Twilearn Edutech',
    title: 'Data Science Intern',
    location: 'Pune, India',
    dates: 'Sep 2023 – Nov 2023',
    initials: 'TW',
    logo: 'twilearn.png',
    accentColor: '#0369A1',
    accentBg: '#E0F2FE',
    bullets: [
      'Used food delivery platform data to build Tableau dashboards for a client planning to launch a new restaurant.',
      'Analyzed customer ratings, pricing trends, locality demand, and cuisine preferences to identify high-potential locations.',
      'Generated actionable insights to shortlist optimal areas, improving projected sales by 15–20%.',
    ],
  },
  {
    company: 'Exposys Data Labs',
    title: 'Data Science Intern',
    location: 'Bengaluru, India',
    dates: 'Jun 2021 – Jul 2021',
    initials: 'EX',
    logo: 'exposys.png',
    accentColor: '#047857',
    accentBg: '#D1FAE5',
    bullets: [
      'Developed a customer segmentation pipeline using K-means clustering on income, age, and spending behavior.',
      'Generated actionable customer segments for targeted marketing and personalized engagement, improving projected revenue by 10%.',
      'Visualized segment-level patterns and insights to support data-driven campaign decisions.',
    ],
  },
]

function ExperienceCard({ exp, index, inView }) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        marginBottom: '2rem',
        position: 'relative',
      }}
      className="timeline-item"
    >
      <div
        className="exp-card"
        style={{
          width: '46%',
          backgroundColor: '#fff',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          transition: 'border-color 0.22s, box-shadow 0.22s, transform 0.22s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#C4B5FD'
          e.currentTarget.style.boxShadow = '0 12px 36px rgba(124,58,237,0.12)'
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#E2E8F0'
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Gradient top strip */}
        <div style={{
          height: '4px',
          background: `linear-gradient(90deg, ${exp.accentColor}, ${exp.accentColor}88)`,
        }} />

        <div style={{ padding: '1.5rem 1.75rem' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.75rem' }}>
            {/* Company logo / fallback avatar */}
            <CompanyLogo exp={exp} />

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.3rem' }}>
                <h3 style={{
                  margin: 0,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {exp.company}
                </h3>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#94A3B8',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  padding: '0.15rem 0.6rem',
                  borderRadius: '999px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                }}>
                  {exp.dates}
                </span>
              </div>
              <p style={{ margin: '0.15rem 0 0', color: exp.accentColor, fontWeight: 600, fontSize: '0.88rem' }}>
                {exp.title}
              </p>
              <p style={{ margin: '0.1rem 0 0', color: '#94A3B8', fontSize: '0.78rem' }}>{exp.location}</p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#F1F5F9', margin: '0.75rem 0' }} />

          <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {exp.bullets.map((b, i) => (
              <li key={i} style={{ color: '#475569', fontSize: '0.87rem', lineHeight: 1.65 }}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center dot */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '1.75rem',
        transform: 'translateX(-50%)',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: '#7C3AED',
        border: '3px solid #F8FAFC',
        boxShadow: '0 0 0 4px rgba(124,58,237,0.18)',
        zIndex: 1,
      }} className="timeline-dot" />
    </motion.div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      style={{ padding: '6rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <p className="section-label">Experience</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: '#0F172A', margin: 0 }}>
          Work History
        </h2>
      </motion.div>

      <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0, bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, transparent, #C4B5FD 8%, #C4B5FD 92%, transparent)',
          transform: 'translateX(-50%)',
        }} className="timeline-line" />

        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .timeline-line { display: none; }
          .timeline-dot { display: none; }
          .timeline-item { justify-content: center !important; }
          .exp-card { width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
