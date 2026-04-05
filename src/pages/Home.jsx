import React, { useEffect, useRef } from "react";
import profile from "../assets/profile.jpg";
import bdFlag from "../assets/Flag.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Inject Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);

    // Staggered reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("mh-animate-in");
        });
      },
      { threshold: 0.08 }
    );
    const els = heroRef.current?.querySelectorAll(".mh-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Mohammad_Hossain_Resume.pdf";
    link.click();
  };

  const socials = [
    { href: "https://github.com/",    icon: <FaGithub />,    label: "GitHub"    },
    { href: "https://linkedin.com/",  icon: <FaLinkedin />,  label: "LinkedIn"  },
    { href: "https://twitter.com/",   icon: <FaTwitter />,   label: "Twitter"   },
    { href: "https://facebook.com/",  icon: <FaFacebook />,  label: "Facebook"  },
    { href: "https://instagram.com/", icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <>
      {/* ─────────────────── Scoped Styles ─────────────────── */}
      <style>{`
        .mh-hero {
          --bg-deep:     #090d14;
          --bg-card:     #0e1420;
          --bg-border:   rgba(255,255,255,0.07);
          --gold:        #c9a96e;
          --gold-light:  #e8c98a;
          --gold-glow:   rgba(201,169,110,0.18);
          --text-main:   #f0ebe2;
          --text-sub:    #8892a4;
          --success:     #4ade80;
          --font-serif:  'Playfair Display', Georgia, serif;
          --font-sans:   'DM Sans', sans-serif;
          --ease-out:    cubic-bezier(0.16,1,0.3,1);
          --ease-spring: cubic-bezier(0.34,1.56,0.64,1);

          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          padding: 6rem 8% 4rem;
          background: var(--bg-deep);
          overflow: hidden;
          font-family: var(--font-sans);
          color: var(--text-main);
          box-sizing: border-box;
        }

        /* Background */
        .mh-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

        .mh-orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); opacity: 0.4;
          animation: mhOrbFloat 9s ease-in-out infinite;
        }
        .mh-orb-1 {
          width: 540px; height: 540px;
          background: radial-gradient(circle, #1a2a4a 0%, transparent 70%);
          top: -140px; right: 4%;
        }
        .mh-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(201,169,110,0.22) 0%, transparent 70%);
          bottom: -60px; left: -40px;
          animation-direction: reverse; animation-duration: 12s;
        }
        @keyframes mhOrbFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-28px) scale(1.04); }
        }

        .mh-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, black, transparent);
          -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, black, transparent);
        }

        /* Reveal */
        .mh-reveal {
          opacity: 0; transform: translateY(26px);
          transition: opacity 0.72s var(--ease-out), transform 0.72s var(--ease-out);
        }
        .mh-animate-in { opacity: 1; transform: translateY(0); }
        .mh-d1 { transition-delay: 0.05s; }
        .mh-d2 { transition-delay: 0.15s; }
        .mh-d3 { transition-delay: 0.25s; }
        .mh-d4 { transition-delay: 0.35s; }
        .mh-d5 { transition-delay: 0.45s; }
        .mh-d6 { transition-delay: 0.55s; }

        /* Left column */
        .mh-left {
          position: relative; z-index: 1;
          flex: 1; max-width: 600px;
          display: flex; flex-direction: column; gap: 1.35rem;
        }

        /* Eyebrow */
        .mh-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: var(--gold);
          background: rgba(201,169,110,0.08);
          border: 1px solid rgba(201,169,110,0.22);
          padding: 6px 14px; border-radius: 100px;
          width: fit-content;
        }
        .mh-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--success); box-shadow: 0 0 8px var(--success);
          animation: mhPulse 2s ease infinite; flex-shrink: 0;
        }
        @keyframes mhPulse {
          0%,100% { opacity:1; box-shadow:0 0 8px var(--success); }
          50%      { opacity:0.55; box-shadow:0 0 16px var(--success); }
        }

        /* Name */
        .mh-greeting {
          font-size: 0.95rem; font-weight: 400;
          color: var(--text-sub); letter-spacing: 0.06em; margin: 0 0 0.2rem;
        }
        .mh-title {
          margin: 0; display: flex; flex-direction: column; line-height: 1.04;
        }
        .mh-name-first {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 5.5vw, 5.2rem);
          font-weight: 900; color: var(--text-main); letter-spacing: -0.02em;
        }
        .mh-name-last {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 5.5vw, 5.2rem);
          font-weight: 400; font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1.5px var(--gold);
          letter-spacing: -0.01em;
        }

        /* Location */
        .mh-location {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.875rem; color: var(--text-sub); margin: 0;
        }
        .mh-flag { width: 20px; height: 14px; border-radius: 3px; object-fit: cover; }

        /* Role */
        .mh-role {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.82rem; font-weight: 500;
          color: var(--text-sub); letter-spacing: 0.04em; margin-bottom: 0.3rem;
        }
        .mh-role-div { color: var(--gold); font-size: 1rem; }

        /* Desc */
        .mh-desc {
          font-size: 1.04rem; line-height: 1.78;
          color: var(--text-sub); max-width: 480px; margin: 0; font-weight: 300;
        }

        /* Buttons */
        .mh-buttons { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }

        .mh-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          color: #0a0d12;
          font-family: var(--font-sans);
          font-size: 0.9rem; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; border-radius: 8px; border: none; cursor: pointer;
          transition: transform 0.25s var(--ease-spring), box-shadow 0.25s ease, background 0.25s ease;
          box-shadow: 0 4px 22px rgba(201,169,110,0.32);
        }
        .mh-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,169,110,0.48);
          background: linear-gradient(135deg, var(--gold-light) 0%, #f0d9a0 100%);
          color: #0a0d12;
        }

        .mh-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 26px;
          background: transparent; color: var(--text-main);
          font-family: var(--font-sans);
          font-size: 0.9rem; font-weight: 500; letter-spacing: 0.02em;
          border: 1px solid var(--bg-border); border-radius: 8px; cursor: pointer;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s var(--ease-spring);
          backdrop-filter: blur(8px);
        }
        .mh-btn-outline:hover {
          border-color: rgba(201,169,110,0.4);
          background: rgba(201,169,110,0.07);
          transform: translateY(-2px);
        }

        /* Socials */
        .mh-socials { display: flex; align-items: center; gap: 6px; }
        .mh-social {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--bg-border);
          color: var(--text-sub); font-size: 1rem; text-decoration: none;
          transition: all 0.25s var(--ease-spring);
        }
        .mh-social:hover {
          background: rgba(201,169,110,0.1);
          border-color: rgba(201,169,110,0.32);
          color: var(--gold);
          transform: translateY(-3px) scale(1.08);
        }

        /* Right / Profile */
        .mh-right { position: relative; z-index: 1; flex-shrink: 0; }
        .mh-profile-wrap { position: relative; width: 360px; height: 420px; }

        .mh-frame {
          position: relative; width: 100%; height: 100%;
          border-radius: 20px; overflow: hidden; background: var(--bg-card);
        }
        .mh-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: contrast(1.05) saturate(0.92);
          transition: transform 0.6s var(--ease-out), filter 0.4s ease;
        }
        .mh-frame:hover .mh-img { transform: scale(1.04); filter: contrast(1.08) saturate(1); }

        /* Corner brackets */
        .mh-corner { position: absolute; width: 22px; height: 22px; }
        .mh-corner.tl { top:-1px;    left:-1px;   border-top:2px solid var(--gold); border-left:2px solid var(--gold); }
        .mh-corner.tr { top:-1px;    right:-1px;  border-top:2px solid var(--gold); border-right:2px solid var(--gold); }
        .mh-corner.bl { bottom:-1px; left:-1px;   border-bottom:2px solid var(--gold); border-left:2px solid var(--gold); }
        .mh-corner.br { bottom:-1px; right:-1px;  border-bottom:2px solid var(--gold); border-right:2px solid var(--gold); }

        /* Glow */
        .mh-glow {
          position: absolute; inset: -20px;
          background: radial-gradient(ellipse at center, var(--gold-glow) 0%, transparent 68%);
          border-radius: 30px; z-index: -1;
          animation: mhGlowPulse 4s ease-in-out infinite;
        }
        @keyframes mhGlowPulse { 0%,100% { opacity:0.6; } 50% { opacity:1; } }

        /* Floating stat cards */
        .mh-stat {
          position: absolute;
          display: flex; align-items: center; gap: 8px;
          background: rgba(10,14,22,0.92);
          backdrop-filter: blur(16px);
          border: 1px solid var(--bg-border);
          border-radius: 12px; padding: 10px 16px;
          font-family: var(--font-sans);
          font-size: 0.8rem; white-space: nowrap;
          box-shadow: 0 8px 32px rgba(0,0,0,0.45);
          animation: mhCardFloat 5s ease-in-out infinite;
          z-index: 2;
        }
        .mh-stat-top    { top: 24px;    right: -44px; animation-delay: 0s; }
        .mh-stat-bottom { bottom: 32px; left: -44px;  animation-delay: 2.5s; }
        @keyframes mhCardFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .mh-stat-num {
          font-family: var(--font-serif);
          font-size: 1.3rem; font-weight: 700; color: var(--gold);
        }
        .mh-stat-label { color: var(--text-sub); font-weight: 400; }
        .mh-stat-dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
          background: var(--success); box-shadow: 0 0 8px var(--success);
          animation: mhPulse 2s ease infinite;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .mh-hero { padding: 5rem 6% 4rem; gap: 3rem; }
          .mh-profile-wrap { width: 300px; height: 350px; }
          .mh-stat-top    { right: -18px; }
          .mh-stat-bottom { left: -18px; }
        }
        @media (max-width: 768px) {
          .mh-hero {
            flex-direction: column-reverse;
            align-items: center; text-align: center;
            padding: 5rem 5% 3rem;
          }
          .mh-left { align-items: center; }
          .mh-desc { text-align: center; }
          .mh-location, .mh-role, .mh-buttons, .mh-socials, .mh-eyebrow { justify-content: center; }
          .mh-profile-wrap { width: 260px; height: 305px; }
          .mh-stat-top    { right: -8px; top: 12px; }
          .mh-stat-bottom { left: -8px;  bottom: 12px; }
        }
        @media (max-width: 480px) {
          .mh-hero { padding: 4rem 4% 3rem; }
          .mh-profile-wrap { width: 220px; height: 260px; }
          .mh-stat { font-size: 0.72rem; padding: 7px 11px; }
          .mh-stat-num { font-size: 1.05rem; }
        }
      `}</style>

      {/* ─────────────────── Markup ─────────────────── */}
      <section className="mh-hero" id="home" ref={heroRef}>

        {/* Decorative background */}
        <div className="mh-bg">
          <div className="mh-orb mh-orb-1" />
          <div className="mh-orb mh-orb-2" />
          <div className="mh-grid" />
        </div>

        {/* ── Left ── */}
        <div className="mh-left">

          <div className="mh-reveal mh-d1">
            <span className="mh-eyebrow">
              <span className="mh-dot" />
              Available for opportunities
            </span>
          </div>

          <div className="mh-reveal mh-d2">
            <p className="mh-greeting">Hello, I'm</p>
            <h1 className="mh-title">
              <span className="mh-name-first">Mohammad</span>
              <span className="mh-name-last">Hossain</span>
            </h1>
          </div>

          <div className="mh-reveal mh-d3">
            <p className="mh-location">
              <img src={bdFlag} alt="Bangladesh Flag" className="mh-flag" />
              <span>Dhaka, Bangladesh</span>
            </p>
          </div>

          <div className="mh-reveal mh-d4">
            <p className="mh-role">
              <span>Computer Science Student</span>
              <span className="mh-role-div">·</span>
              <span>Web Developer</span>
            </p>
            <p className="mh-desc">
              I craft modern web applications with clean code and thoughtful
              design — building experiences that are both functional and beautiful.
            </p>
          </div>

          <div className="mh-reveal mh-d5">
            <div className="mh-buttons">
              <a href="#projects" className="mh-btn-primary">
                View My Work
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M3 7.5h9M8.5 4l3.5 3.5-3.5 3.5"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button className="mh-btn-outline" onClick={downloadResume}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1v8M4 6.5l2.5 2.5 2.5-2.5M1.5 11h10"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Resume
              </button>
            </div>
          </div>

          <div className="mh-reveal mh-d6">
            <div className="mh-socials">
              {socials.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank"
                  rel="noopener noreferrer" aria-label={label}
                  className="mh-social">
                  {icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Right ── */}
        <div className="mh-right mh-reveal mh-d3">
          <div className="mh-profile-wrap">

            <div className="mh-frame">
              <img src={profile} alt="Mohammad Hossain" className="mh-img" />
              <span className="mh-corner tl" />
              <span className="mh-corner tr" />
              <span className="mh-corner bl" />
              <span className="mh-corner br" />
            </div>

            <div className="mh-glow" />

            <div className="mh-stat mh-stat-top">
              <span className="mh-stat-num">20+</span>
              <span className="mh-stat-label">Projects</span>
            </div>

            <div className="mh-stat mh-stat-bottom">
              <span className="mh-stat-dot" />
              <span className="mh-stat-label">Open to Work</span>
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default Home;
