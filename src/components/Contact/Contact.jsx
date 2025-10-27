import "./Contact.css";

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      aria-hidden="true"
      {...props}
    >
      <path d="M20.5 11.9c0 4.7-3.9 8.6-8.6 8.6-1.5 0-2.9-.4-4.1-1.1l-4 1.2 1.3-3.9c-.8-1.3-1.2-2.8-1.2-4.3 0-4.8 3.9-8.6 8.6-8.6s8.6 3.9 8.6 8.6Z" fill="currentColor"/>
      <path d="M8.8 8.6c-.2-.4-.3-.4-.6-.4H7.7c-.2 0-.5.1-.7.3-.2.3-.9.8-.9 2s.9 2.3 1 2.5c.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.6 3 .6s1.5-.6 1.7-1.2c.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.6-.4-.4-.2-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8.9-.1.1-.3.1-.6 0-.3-.2-1.3-.5-2.5-1.6-1-.9-1.6-2.1-1.7-2.4-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.1.1-.2.1-.4 0-.2 0-.3 0-.4Z" fill="#fff"/>
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="currentColor"/>
      <polyline points="4,7 12,12 20,7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Contact() {
  return (
    <section className="hero">
      <div className="frame">
        <div className="card">
          <div className="photo">
            <img src="/olivia-pic.png" alt="portrait" />
          </div>
          <div className="info">
            <h1>OLIVIA BOUTERAA OLIVE</h1>
            <p>Founder and Managing Director</p>
          </div>
          <div className="socials">
            <a className="pill" href="https://instagram.com/OYA_INTERIORS_DUBAI" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a className="pill" href="https://wa.me/971508029602" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a
              className="pill"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=OLIVIA.BOUTERAA@GMAIL.COM"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
