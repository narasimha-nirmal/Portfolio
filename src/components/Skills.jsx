import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    category: 'Languages',
    emoji: '{ }',
    gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
    skills: ['Python', 'C/C++', 'JavaScript', 'Dart', 'Java'],
    pillBg: '#F5F3FF',
    pillBorder: '#DDD6FE',
    pillColor: '#5B21B6',
  },
  {
    category: 'Backend & Cloud',
    emoji: '⚙',
    gradient: 'linear-gradient(135deg, #0369A1, #38BDF8)',
    skills: ['Flask', 'Django', 'Node.js', 'Express', 'REST', 'SSE', 'Docker', 'AWS'],
    pillBg: '#EFF6FF',
    pillBorder: '#BFDBFE',
    pillColor: '#1D4ED8',
  },
  {
    category: 'Data & ML',
    emoji: '◈',
    gradient: 'linear-gradient(135deg, #047857, #34D399)',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Hugging Face', 'MongoDB', 'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib'],
    pillBg: '#ECFDF5',
    pillBorder: '#A7F3D0',
    pillColor: '#065F46',
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section
      ref={ref}
      style={{ padding: '6rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <p className="section-label">Skills</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: '#0F172A', margin: 0 }}>
          Technologies & Tools
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '960px',
        margin: '0 auto',
      }}>
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: gi * 0.12 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'transform 0.22s, box-shadow 0.22s, border-color 0.22s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'
              e.currentTarget.style.borderColor = '#C4B5FD'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)'
              e.currentTarget.style.borderColor = '#E2E8F0'
            }}
          >
            {/* Gradient header strip */}
            <div style={{
              background: group.gradient,
              padding: '1.1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <span style={{
                width: '36px', height: '36px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
                color: '#fff',
                fontWeight: 700,
                fontFamily: 'monospace',
                flexShrink: 0,
              }}>
                {group.emoji}
              </span>
              <h3 style={{
                margin: 0,
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#fff',
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '0.01em',
              }}>
                {group.category}
              </h3>
            </div>

            {/* Pills */}
            <div style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      backgroundColor: group.pillBg,
                      border: `1px solid ${group.pillBorder}`,
                      color: group.pillColor,
                      fontSize: '0.83rem',
                      fontWeight: 600,
                      transition: 'transform 0.15s, box-shadow 0.15s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
