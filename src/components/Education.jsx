import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const educationData = [
  {
    school: 'University of Southern California',
    degree: 'M.S. in Computer Science',
    location: 'Los Angeles, CA',
    date: 'Dec 2025',
    gpa: '3.85 / 4.0',
    coursework: [
      'Machine Learning for Data Science',
      'Applied NLP',
      'Analysis of Algorithms',
      'Deep Learning',
      'Database Management',
      'Software Architectures',
    ],
  },
  {
    school: 'Nitte Meenakshi Institute of Technology',
    degree: 'B.E. in Information Science and Engineering',
    location: 'Bengaluru, India',
    date: 'Jun 2022',
    gpa: '3.66 / 4.0',
    coursework: [
      'Operating Systems',
      'Computer Networks',
      'Data Structures and Algorithms',
      'Theory of Computation',
      'Statistics for Data Science',
    ],
  },
]

const cardStyle = {
  padding: '2rem 2.5rem',
  backgroundColor: '#fff',
  borderRadius: '16px',
  border: '1px solid #E2E8F0',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
}

const pillStyle = {
  padding: '0.3rem 0.85rem',
  borderRadius: '999px',
  backgroundColor: '#F8FAFC',
  border: '1px solid #E2E8F0',
  color: '#475569',
  fontSize: '0.82rem',
  fontWeight: 400,
}

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      style={{ padding: '6rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}
    >
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7C3AED', fontWeight: 600, marginBottom: '0.5rem' }}>
          Education
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: '#0F172A', margin: 0 }}>
          Academic Background
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '750px', margin: '0 auto' }}>
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={cardStyle}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#0F172A' }}>
                  {edu.school}
                </h3>
                <p style={{ margin: '0.2rem 0 0', color: '#6D28D9', fontWeight: 500, fontSize: '1rem' }}>
                  {edu.degree}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '999px',
                  backgroundColor: '#EDE9FE',
                  border: '1px solid #DDD6FE',
                  color: '#6D28D9',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                }}>
                  {edu.date}
                </span>
                <p style={{ margin: '0.35rem 0 0', color: '#94A3B8', fontSize: '0.82rem' }}>{edu.location}</p>
              </div>
            </div>

            {edu.gpa && (
              <p style={{ margin: '0 0 1.5rem', color: '#475569', fontSize: '0.95rem' }}>
                GPA: <span style={{ color: '#0F172A', fontWeight: 700 }}>{edu.gpa}</span>
              </p>
            )}

            <div style={{ marginTop: edu.gpa ? 0 : '1rem' }}>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', fontWeight: 600 }}>
                Relevant Coursework
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {edu.coursework.map((c) => (
                  <span key={c} style={pillStyle}>{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
