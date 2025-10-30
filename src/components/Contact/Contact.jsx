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
      <path d="M20.52 3.449A11.815 11.815 0 0011.826 0C5.304 0 .003 5.301 0 11.819a11.8 11.8 0 001.62 5.99L0 24l6.305-1.654a11.836 11.836 0 005.515 1.404h.005c6.517 0 11.82-5.301 11.823-11.819a11.766 11.766 0 00-3.449-8.482Zm-8.7 16.342h-.003a8.822 8.822 0 01-4.479-1.228l-.321-.191-3.327.871.889-3.257-.209-.334a8.802 8.802 0 01-1.353-4.72c.001-4.86 3.957-8.815 8.818-8.815 2.354 0 4.562.918 6.228 2.585a8.73 8.73 0 012.591 6.224c-.003 4.86-3.958 8.815-8.834 8.815ZM17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.472-.148-.672.15-.197.297-.769.965-.941 1.163-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.346.446-.519.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.075-.149-.672-1.627-.922-2.219-.242-.576-.487-.498-.672-.507l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347Z" fill="currentColor"/>
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
            <p>Interior Architect Founder of OYA Interiors</p>
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
