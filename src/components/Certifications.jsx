import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink } from 'react-icons/hi'
import { SiCoursera, SiUdemy, SiGoogle } from 'react-icons/si'
import { HiAcademicCap } from 'react-icons/hi'

const certifications = [
  {
    name: 'Build Basic Generative Adversarial Networks',
    issuer: 'DeepLearning.AI',
    date: 'Jul 2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/32D2RST9RR7W',
    icon: SiCoursera,
    color: '#0056D2',
    bg: '#EFF6FF',
    border: '#BFDBFE',
  },
  {
    name: 'Problem Solving With Programming In C',
    issuer: 'NPTEL',
    date: 'Sep 2021',
    link: 'https://nptel.ac.in/content/noc/noc21/sem1/ecertificates/106/noc21-cs01/course/nptel21cs01s13232218142927.jpg',
    icon: HiAcademicCap,
    color: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
  },
  {
    name: 'Google Cloud Platform Fundamentals for AWS Professionals',
    issuer: 'Coursera',
    date: 'Jul 2021',
    link: 'https://www.coursera.org/account/accomplishments/verify/VPUZ3KBUMWEC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    icon: SiGoogle,
    color: '#0056D2',
    bg: '#EFF6FF',
    border: '#BFDBFE',
  },
  {
    name: 'Cloud Computing Concepts Part 1',
    issuer: 'Coursera (UIUC)',
    date: 'May 2021',
    link: 'https://www.coursera.org/account/accomplishments/verify/MM8SYF7ZJPEA',
    icon: SiCoursera,
    color: '#0056D2',
    bg: '#EFF6FF',
    border: '#BFDBFE',
  },
  {
    name: 'Machine Learning A-Z',
    issuer: 'Udemy',
    date: 'Sep 2020',
    link: 'https://www.udemy.com/certificate/UC-65c21524-ee33-4edf-9a1d-7c41a4689476/',
    icon: SiUdemy,
    color: '#A435F0',
    bg: '#FAF5FF',
    border: '#E9D5FF',
  },
  {
    name: 'The Complete 2020 Flutter Development Bootcamp with Dart',
    issuer: 'Udemy',
    date: 'Aug 2020',
    link: 'https://www.udemy.com/certificate/UC-2ca190d0-fd3c-4e35-b9a8-6422b4ad9404/',
    icon: SiUdemy,
    color: '#A435F0',
    bg: '#FAF5FF',
    border: '#E9D5FF',
  },
  {
    name: 'Tableau 2020 A-Z: Hands-On Tableau Training for Data Science',
    issuer: 'Udemy',
    date: 'Nov 2020',
    link: 'https://www.udemy.com/certificate/UC-a7b4ffe7-0a73-4949-8dc3-c1a359546a46/',
    icon: SiUdemy,
    color: '#A435F0',
    bg: '#FAF5FF',
    border: '#E9D5FF',
  },
]

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      style={{ padding: '4rem 1.5rem 6rem', maxWidth: '1100px', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '2.5rem' }}
      >
        <p style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7C3AED', fontWeight: 600, marginBottom: '0.5rem' }}>
          Certifications
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: '#0F172A', margin: 0 }}>
          Credentials
        </h2>
      </motion.div>

      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1rem',
      }}>
        {certifications.map((cert, i) => {
          const Icon = cert.icon
          return (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.10)' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: '1.25rem 1.5rem',
                backgroundColor: '#fff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '38px', height: '38px',
                  borderRadius: '10px',
                  backgroundColor: cert.bg,
                  border: `1px solid ${cert.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} color={cert.color} />
                </div>
                <HiExternalLink size={15} color="#CBD5E1" />
              </div>

              <div>
                <p style={{ margin: 0, fontWeight: 600, color: '#0F172A', fontSize: '0.9rem', lineHeight: 1.4 }}>
                  {cert.name}
                </p>
                <p style={{ margin: '0.3rem 0 0', color: '#64748B', fontSize: '0.8rem' }}>
                  {cert.issuer}
                </p>
              </div>

              <span style={{
                alignSelf: 'flex-start',
                padding: '0.2rem 0.65rem',
                borderRadius: '999px',
                backgroundColor: '#F5F3FF',
                border: '1px solid #DDD6FE',
                color: '#6D28D9',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}>
                {cert.date}
              </span>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
