import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'

const contactItems = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'malavall@usc.edu',
    href: 'mailto:malavall@usc.edu',
    color: '#6D28D9',
    bg: '#EDE9FE',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nirmalnarasimha',
    href: 'https://www.linkedin.com/in/nirmalnarasimha/',
    color: '#0369A1',
    bg: '#F0F9FF',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/narasimha-nirmal',
    href: 'https://github.com/narasimha-nirmal',
    color: '#374151',
    bg: '#F9FAFB',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '(213)-681-7458',
    href: 'tel:2136817458',
    color: '#047857',
    bg: '#ECFDF5',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} style={{ padding: '6rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <p style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7C3AED', fontWeight: 600, marginBottom: '0.5rem' }}>
          Contact
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: '#0F172A', margin: '0 0 1rem' }}>
          Get in Touch
        </h2>
        <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
          I'm open to full time opportunities in AI/ML, Data Science, and full-stack development.
          Hit me up and we can get started!
        </p>
      </motion.div>

      {/* Clean 2-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        maxWidth: '640px',
        margin: '0 auto',
      }} className="contact-grid">
        {contactItems.map(({ icon: Icon, label, value, href, color, bg }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              padding: '1.5rem',
              backgroundColor: '#fff',
              borderRadius: '14px',
              border: '1px solid #E2E8F0',
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#C4B5FD'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(124,58,237,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#E2E8F0'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{
              width: '42px', height: '42px',
              borderRadius: '10px',
              backgroundColor: bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={20} color={color} />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.2rem' }}>
                {label}
              </p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#0F172A', fontWeight: 600 }}>
                {value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <style>{`
        @media (max-width: 500px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
