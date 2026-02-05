"use client";

import Copy from "@/components/Copy";
import { portfolioContent } from "@/data/portfolioContent";

export default function Page() {
  return (
    <>
      <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '12vh', paddingBottom: '6rem' }}>
        <div className="page-header contact-page-header" style={{ width: '100%', maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', padding: '0 5rem' }}>

          <div className="contact-heading-wrapper">
            <Copy delay={0.3}>
              <h1 className="contact-heading" style={{ fontSize: 'clamp(5rem, 18vw, 20rem)', lineHeight: '0.75', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '-0.03em' }}>
                GET IN TOUCH
              </h1>
            </Copy>
          </div>

          <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.8rem', width: '100%' }}>
            {/* Email */}
            <Copy delay={0.5}>
              <a href={`mailto:hemanthkumar7783@gmail.com`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontFamily: 'DM Mono', textTransform: 'none', borderBottom: '1.5px solid #141414', paddingBottom: '2px', letterSpacing: '0.05em' }} className="contact-email">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="email-text">hemanthkumar7783@gmail.com</span>
                <span className="email-label">Email Me</span>
              </a>
            </Copy>

            {/* Phone */}
            <Copy delay={0.6}>
              <a href="tel:+919494712989" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontFamily: 'DM Mono', letterSpacing: '0.05em' }} className="contact-phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="phone-text">+91 9494712989</span>
                <span className="phone-label">CALL ME</span>
              </a>
            </Copy>

            {/* Location */}
            <Copy delay={0.7}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontFamily: 'DM Mono', letterSpacing: '0.05em' }} className="contact-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="location-text">Hyderabad, Telangana, India</span>
                <span className="location-label">LOCATION</span>
              </p>
            </Copy>

            {/* Social Links */}
            <div className="social-links" style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              <Copy delay={0.8}>
                <a href={portfolioContent.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.25rem', fontFamily: 'DM Mono', textDecoration: 'underline', fontWeight: '500', whiteSpace: 'nowrap' }} className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span className="social-label" style={{ display: 'inline' }}>LINKEDIN</span>
                </a>
              </Copy>
              <Copy delay={0.9}>
                <a href={portfolioContent.contact.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.25rem', fontFamily: 'DM Mono', textDecoration: 'underline', fontWeight: '500', whiteSpace: 'nowrap' }} className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span className="social-label" style={{ display: 'inline' }}>GITHUB</span>
                </a>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
