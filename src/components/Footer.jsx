import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #E2E8F0',
      padding: '2rem 1.5rem',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginBottom: '0.875rem' }}>
        {[
          { icon: FaGithub, href: 'https://github.com/narasimha-nirmal', label: 'GitHub' },
          { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nirmalnarasimha/', label: 'LinkedIn' },
          { icon: HiMail, href: 'mailto:malavall@usc.edu', label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            style={{ color: '#CBD5E1', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#7C3AED'}
            onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p style={{ margin: 0, fontSize: '0.82rem', color: '#94A3B8' }}>
        © 2026 Nirmal Narasimha. All rights reserved.
      </p>
    </footer>
  )
}
