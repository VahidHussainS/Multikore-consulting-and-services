import React from 'react'

const ComingSoonPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffe259 0%, #ffc900 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Montserrat', Arial, sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Top Accent Line */}
      <svg width="350" height="48" style={{ position: 'absolute', top: 80, left: '7vw' }}>
        <line x1="0" y1="10" x2="280" y2="10" stroke="#222" strokeWidth="3" opacity={0.15} />
        <line x1="0" y1="34" x2="180" y2="34" stroke="#222" strokeWidth="2" opacity={0.3} />
      </svg>

      {/* Main Card Container */}
      <div
        style={{
          background: 'rgba(255,255,255,0.92)',
          borderRadius: 18,
          boxShadow: '0 10px 48px -8px #B395070e',
          padding: '46px 70px 38px 70px',
          minWidth: 340,
          maxWidth: 480,
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Company Name */}
        <div
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#353230',
            marginBottom: 14,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}
        >
          Multikore Consulting and Services
        </div>

        {/* “COMING SOON” */}
        <div
          style={{
            background: 'linear-gradient(90deg,#2a2725 80%,#353230 100%)',
            color: '#FFC900',
            display: 'inline-block',
            padding: '17px 38px 15px 38px',
            fontWeight: 700,
            fontSize: '2.6rem',
            letterSpacing: '3px',
            borderRadius: '13px',
            boxShadow: '0 5px 22px -8px #FFC90044',
            marginBottom: 23,
            transform: 'skew(-7deg,-1.8deg)',
            textTransform: 'uppercase',
            fontFamily: "'Montserrat', Arial, sans-serif",
            transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
          }}
        >
          <span style={{ display: 'inline-block', transform: 'skew(7deg,1.8deg)' }}>
            COMING SOON
          </span>
        </div>

        {/* “Under Construction” */}
        <div
          style={{
            background: '#fff',
            color: '#282725',
            display: 'inline-block',
            padding: '9px 30px 7px 30px',
            fontWeight: 600,
            fontSize: '1.18rem',
            marginTop: '-10px',
            borderRadius: '7px',
            transform: 'skew(-7deg,-1.8deg)',
            fontFamily: "'Montserrat', Arial, sans-serif",
            letterSpacing: '.12rem',
          }}
        >
          <span style={{ display: 'inline-block', transform: 'skew(7deg,1.8deg)' }}>
            UNDER CONSTRUCTION
          </span>
        </div>

        {/* Optional message/CTA */}
        <div style={{
          color: '#606060',
          marginTop: 26,
          fontSize: '1rem',
          letterSpacing: '.015em',
        }}>
          Our website is almost ready.<br />
          Stay tuned for an amazing experience!
        </div>

        {/* Phone Number */}
        <div
          style={{
            color: '#353230',
            marginTop: 32,
            fontSize: '1.05rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}
        >
          Ph: +91-9741675001
        </div>
      </div>

      {/* Decorative Bottom Accent Lines */}
      <svg width="320" height="40" style={{ position: 'absolute', left: '9vw', bottom: '15vh' }}>
        <line x1="0" y1="20" x2="240" y2="20" stroke="#fff" strokeWidth="2.3" opacity={0.8} />
        <line x1="0" y1="34" x2="140" y2="34" stroke="#fff" strokeWidth="2" opacity={0.5} />
      </svg>
    </div>
  )
}

export default ComingSoonPage
