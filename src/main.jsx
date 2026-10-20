import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Asterisk, Figma, Layers3, Lightbulb, Menu, MousePointer2, Sparkles, X } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01', type: 'Design Thinking', title: 'Design Thinking',
    description: 'Problem: Fear of knife injuries made the user less confident in cooking independently.Process: Interviewed the user and researched existing vegetable choppers.Solution: Designed a safer vegetable chopper and created a cardboard prototype.Reflection: Learned the importance of user-centred design and identified the need for usability testing.',
    tags: ['User research', 'Information architecture', 'Prototype'], color: 'lavender', symbol: 'DT',url:'https://github.com/SoumyaBadoniya/Product_Design_Design_Thinking-'
  },
  {
    number: '02', type: 'Design Management And IRP', title: 'Design Management',
    description: 'Problem: Create an affordable, healthier snack brand with a unique identity.Process: Conducted competitor research and developed brand identity, packaging, and marketing concepts.Solution: Designed a cucumber chips brand with three flavours, distinctive packaging, and an IPR protection strategy.Reflection: Learned brand management and intellectual property basics; would improve the design through customer feedback and testing.',
    tags: ['User flow', 'Wireframes', 'UI design'], color: 'peach', symbol: 'DM',url:'https://github.com/SoumyaBadoniya/Design_Management_And_IRP'
  },
  {
    number: '03', type: 'Photoshop Assignment', title: 'Photoshop Assignment',
    description: '1. Horizon Zero Dawn Poster: Created a cinematic composition poster combining character imagery, dramatic lighting, and landscape elements to create visual depth and atmosphere.2. God of War Poster: Designed a cinematic composition using character placement, snowy landscapes, and contrasting tones to create a dramatic visual impact.',
    tags: ['Competitive review', 'Visual design', 'Usability'], color: 'mint', symbol: 'PA',url:'https://github.com/SoumyaBadoniya/PhotoshopAssignments'
  }
];

const skills = ['UX research', 'User flows', 'Wireframing', 'Prototyping', 'Visual design', 'Usability testing', 'Figma', 'Responsive design'];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeProject, setActiveProject] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);
  const email = 'soumyabadoniya@gmail.com';

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Go to homepage">Soumya Badoniya<span>®</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> UX DESIGN STUDENT · OPEN TO LEARNING</div>
            <h1>Designing digital things that <em>feel right.</em></h1>
            <p className="hero-intro">Hi, I'm <strong>Soumya Badoniya</strong> — a curious designer exploring the space between people, problems, and thoughtful digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#about">A little about me <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-meta"><span>BASED IN BHOPAL</span><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative abstract shapes representing creative thinking">
            <div className="art-topline"><span>IDEAS IN PROGRESS</span><Asterisk size={20}/></div>
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="art-sun"></div><div className="art-block"></div>
            <div className="art-squiggle">〰</div>
            <div className="art-sticker"><Sparkles size={18}/><span>Curiosity<br/>first.</span></div>
            <div className="art-bottomline"><span>THINK · MAKE · REFINE</span><span>✳ 2026</span></div>
          </div>
        </section>

        <section className="intro-strip">
          <p>GOOD DESIGN STARTS WITH <span>GOOD QUESTIONS.</span></p><Asterisk size={22}/><p>MADE WITH CURIOSITY <span>AND CARE.</span></p>
        </section>

        <section className="about section-wrap section-space" id="about">
          <div className="section-label"><span>01 / ABOUT</span><span>A LITTLE CONTEXT</span></div>
          <div className="about-grid">
            <h2>People first.<br/><em>Pixels second.</em></h2>
            <div className="about-copy">
              <p className="large-copy">I'm learning to turn complicated problems into clear, friendly experiences.</p>
              <p>I enjoy observing how people use products, asking better questions, sketching possibilities, and improving ideas through feedback. I believe a good interface should look considered and feel effortless to use.</p>
              <p>This portfolio is a work in progress — a place to share what I'm learning, what I'm making, and how my design thinking is growing.</p>
              <a className="underlined-link" href="#contact">Say hello <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </section>

        <section className="work-section section-space" id="work">
          <div className="section-wrap">
            <div className="section-label"><span>02 / SELECTED WORK</span><span>EXPLORATIONS & CASE STUDIES</span></div>
            <div className="work-heading"><h2>A few things<br/><em>I've been making.</em></h2><p>Student concepts and explorations. Each project is an opportunity to learn, test, and make the next version better.</p></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <button className={`project-art ${project.color}`} onClick={() => setActiveProject(project)} aria-label={`View details for ${project.title}`}>
                    <span className="project-number">{project.number} / CASE STUDY</span>
                    <span className="project-symbol">{project.symbol}</span>
                    <span className="project-art-caption">A CONCEPT BY Soumya Badoniya <ArrowUpRight size={15}/></span>
                  </button>
                  <div className="project-info">
                    <div className="project-type">{project.type}</div>
                    <button className="project-title-button" onClick={() => setActiveProject(project)}>{project.title}<ArrowUpRight size={18}/></button>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}<a href={project.url}>Click Here</a></div>
                    
                  </div>
                </article>
              ))}
            </div>
            <p className="project-note"><Lightbulb size={17}/> Replace these sample concepts with your own projects and clearly label any speculative work.</p>
          </div>
        </section>

        <section className="skills section-wrap section-space" id="skills">
          <div className="section-label"><span>03 / TOOLKIT</span><span>ALWAYS LEARNING</span></div>
          <div className="skills-grid">
            <div><h2>My growing<br/><em>toolkit.</em></h2><p>I bring curiosity, empathy, and a willingness to iterate. These are the methods and tools I'm currently exploring.</p></div>
            <div className="skill-cloud">{skills.map((skill, i) => <span className={i % 3 === 0 ? 'skill-pill featured' : 'skill-pill'} key={skill}>{i === 0 ? <MousePointer2 size={15}/> : i === 4 ? <Layers3 size={15}/> : i === 6 ? <Figma size={15}/> : <span className="tiny-star">✳</span>}{skill}</span>)}</div>
          </div>
        </section>

        <section className="process-section">
          <div className="section-wrap process-inner">
            <div className="section-label"><span>04 / MY PROCESS</span><span>THOUGHTFUL BY DESIGN</span></div>
            <h2>Make it. Test it.<br/><em>Make it better.</em></h2>
            <div className="process-steps">
              {[['01','Discover','Understand the people, needs, and problem.'],['02','Explore','Map flows, sketch ideas, and compare options.'],['03','Prototype','Turn promising ideas into something testable.'],['04','Improve','Gather feedback and iterate with purpose.']].map(step => <div className="process-step" key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></div>)}
            </div>
          </div>
        </section>

        <section className="contact section-wrap section-space" id="contact">
          <div className="section-label"><span>05 / CONTACT</span><span>GOOD THINGS START WITH A HELLO</span></div>
          <div className="contact-content"><div><p className="eyebrow">HAVE A PROJECT OR AN IDEA?</p><h2>Let's make<br/><em>something meaningful.</em></h2></div><div className="contact-action"><p>I'm always happy to connect, learn from others, and talk about thoughtful design.</p><button className="button button-dark" onClick={copyEmail}>{copied ? 'Email copied!' : 'Copy email address'} {copied ? <Sparkles size={17}/> : <ArrowUpRight size={17}/>}</button><a className="text-link" href={`mailto:${email}`}>{email}</a><p className="replace-note">Replace this placeholder email and add your real professional links.</p></div></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="wordmark" href="#home">Soumya Badoniya<span>®</span></a><p>DESIGNED WITH INTENTION · BUILT WITH AI ASSISTANCE</p><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© 2026 Soumya Badoniya</span></footer>

      {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20}/></button><span className="eyebrow">{activeProject.number} / {activeProject.type}</span><h2 id="modal-title">{activeProject.title}</h2><p>{activeProject.description}</p><h3>Case study outline</h3><ol><li><strong>Problem:</strong> What user need or challenge did you identify?</li><li><strong>Process:</strong> What research, sketches, or design iterations did you try?</li><li><strong>Solution:</strong> What did you design and why?</li><li><strong>Reflection:</strong> What feedback did you receive and what would you improve?</li></ol><p className="modal-hint">This is a starter template. Add your real process, screenshots, and findings before submitting.</p><button className="button button-dark" onClick={() => setActiveProject(null)}>Back to portfolio <ArrowDownRight size={16}/></button></section></div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

