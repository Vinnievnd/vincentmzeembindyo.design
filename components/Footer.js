import Link from "next/link";

export default function Footer() {
  return (
    <footer className="cta-footer">
      <div className="container">
        <h2>Ready to grow your business? Partner with us today!</h2>
        <div className="cols">
          <div className="col">
            <h4>MDA</h4>
            <p>Your Marketing Expert.<br />You set the budget. We do the rest.<br />Make more Smile More.</p>
          </div>
          <div className="col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/concepts">Concepts</Link></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>Services</h4>
            <ul>
              <li>AI driven marketing</li>
              <li>Servers & domains hosting</li>
              <li>Dynamic website development</li>
              <li>E-commerce optimization</li>
              <li>Data driven insights</li>
              <li>Social media mastery</li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact Us</h4>
            <div className="contact-row"><span>Phone :</span><span>+1 866 806 4111</span></div>
            <div className="contact-row"><span>Email :</span><span>info@simplia.com</span></div>
          </div>
        </div>
        <div className="bottom">
          <div>Copyright © 2026 Mzee Design Agency.</div>
          <div className="socials">
            <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7c0-1.1.9-2 2-2h2V1h-3a5 5 0 0 0-5 5v4H6v4h3v8h4z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
