import { ProjectVisual, SiteFooter, SiteHeader } from "./site-components";
import {
  experienceGroups,
  projects,
  proofPoints,
  selectedCredentials,
  technologies,
} from "./site-data";

const capabilities = [
  {
    number: "01",
    title: "Backend systems",
    text: "C#, ASP.NET Core, REST APIs, JWT, RBAC, layered architecture, and secure resource ownership.",
  },
  {
    number: "02",
    title: "Data workflows",
    text: "SQL Server, Entity Framework Core, ADO.NET, stored procedures, relational modeling, and legacy data migration.",
  },
  {
    number: "03",
    title: "Quality & security",
    text: "xUnit, Moq, integration testing, validation, rate limiting, structured logging, and auditing.",
  },
  {
    number: "04",
    title: "Product delivery",
    text: "Capacitor, responsive web interfaces, API integration, Git workflows, Linux fundamentals, and deployment.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <section className="hero" id="main-content">
        <div className="hero-copy">
          <p className="eyebrow">Backend-focused software developer</p>
          <h1>Secure .NET systems for real operations.</h1>
          <p className="hero-lede">
            I&apos;m Mohammad Abdelfattah, a Computer Science — Data Science graduate.
            My experience combines professional product work at Immesense with structured
            backend training and a one-year municipal software program.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected work</a>
            <a className="button button-secondary" href="#experience">See my experience</a>
          </div>
        </div>

        <aside className="hero-evidence" aria-label="Selected evidence">
          <div className="evidence-heading">
            <span>Selected evidence</span>
            <span>2025—2026</span>
          </div>
          <a href="/projects/library-management-system">
            <strong>01</strong>
            <span>Municipal library system</span>
            <small>Backend team contribution</small>
          </a>
          <a href="/projects/cardiac-monitor-api">
            <strong>02</strong>
            <span>Cardiac Monitor API</span>
            <small>23+ endpoints · 22 tests</small>
          </a>
          <a href="/credentials">
            <strong>03</strong>
            <span>Continuous learning record</span>
            <small>Selected and complete credentials</small>
          </a>
        </aside>
      </section>

      <section className="technology-strip" aria-label="Technical stack">
        <div className="technology-track">
          {[false, true].map((duplicate) => (
            <div className="technology-row" aria-hidden={duplicate || undefined} key={String(duplicate)}>
              {technologies.map((technology) => (
                <span className="technology-item" key={`${duplicate}-${technology.label}`}>
                  <i aria-hidden="true">{technology.mark}</i>
                  {technology.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-heading section-heading-light">
          <p className="section-label">About the work</p>
          <div>
            <h2>Selected facts from recent work.</h2>
            <p>
              I work best where backend engineering, structured data, and real operational
              workflows meet. The numbers below describe specific work—not years, clients,
              or impact that cannot be verified.
            </p>
          </div>
        </div>
        <div className="proof-list">
          {proofPoints.map((point, index) => (
            <article key={point.label}>
              <span>0{index + 1}</span>
              <strong>{point.value}</strong>
              <div>
                <h3>{point.label}</h3>
                <p>{point.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading section-heading-dark">
          <p className="section-label">Selected work</p>
          <div>
            <h2>Projects explained through role and evidence.</h2>
            <p>
              Each case study separates team contribution, internship work, and personal
              learning projects so the scope is clear before the technology list.
            </p>
          </div>
        </div>

        <div className="featured-projects">
          {projects.slice(0, 2).map((project) => (
            <article className="featured-project" key={project.slug}>
              <ProjectVisual project={project} />
              <div className="featured-project-copy">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="text-link" href={`/projects/${project.slug}`}>Read the case study <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>

        <div className="secondary-projects">
          {projects.slice(2).map((project) => (
            <a className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="project-card-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <ProjectVisual project={project} compact />
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <span className="project-card-link">View case study ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading section-heading-light">
          <p className="section-label">Experience</p>
          <div>
            <h2>Professional work, training, and leadership—clearly separated.</h2>
            <p>
              Employment, internships, practical programs, and student leadership are
              intentionally separated to represent the experience accurately.
            </p>
          </div>
        </div>

        <div className="experience-groups">
          {experienceGroups.map((group) => (
            <section className="experience-group" key={group.title}>
              <div className="experience-group-heading">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="experience-list">
                {group.items.map((item) => (
                  <article className="experience-item" key={`${item.organization}-${item.role}`}>
                    <div className={`organization-mark${item.logo ? " has-logo" : ""}`} aria-hidden="true">
                      {item.logo ? <img src={item.logo} alt="" loading="lazy" /> : item.mark}
                    </div>
                    <div className="experience-title">
                      <time>{item.period}</time>
                      <h4>{item.role}</h4>
                      <p>{item.organization} · {item.place}</p>
                    </div>
                    <div className="experience-detail">
                      <p>{item.detail}</p>
                      {item.link ? (
                        <a href={item.link.href} target="_blank" rel="noreferrer">
                          {item.link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-heading section-heading-dark">
          <p className="section-label">Capabilities</p>
          <div>
            <h2>Backend engineering, supported by data and delivery skills.</h2>
            <p>
              The primary position is backend development. Data, quality, mobile, and
              delivery skills support that focus rather than compete with it.
            </p>
          </div>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.title}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials-preview" id="credentials">
        <div className="section-heading section-heading-light">
          <p className="section-label">Selected credentials</p>
          <div>
            <h2>Six selected credentials.</h2>
            <p>
              Six credentials are highlighted here. The complete learning record remains
              available on a separate page.
            </p>
          </div>
        </div>

        <div className="credential-card-grid">
          {selectedCredentials.map((credential) => (
            <a className="credential-card" href={credential.href} target="_blank" rel="noreferrer" key={credential.title}>
              <div className="credential-image">
                <img src={credential.thumbnail} alt={`Certificate preview: ${credential.title}`} loading="lazy" />
              </div>
              <div>
                <span>{credential.issuer}</span>
                <h3>{credential.title}</h3>
                <small>{credential.date}</small>
              </div>
            </a>
          ))}
        </div>

      </section>

      <section className="foundation-section">
        <div>
          <p className="section-label">Education</p>
          <h2>B.Sc. Computer Science<br />— Data Science</h2>
        </div>
        <dl>
          <div><dt>University</dt><dd>Palestine Technical University — Kadoorie</dd></div>
          <div><dt>Graduated</dt><dd>June 2026</dd></div>
          <div><dt>GPA</dt><dd>80.5</dd></div>
        </dl>
        <dl>
          <div><dt>Arabic</dt><dd>Native</dd></div>
          <div><dt>English</dt><dd>Intermediate</dd></div>
        </dl>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s discuss a backend role or a real software problem.</h2>
        <div className="contact-actions">
          <a className="button contact-primary" href="mailto:hammodaimad@gmail.com">Email Mohammad</a>
          <a className="button contact-secondary" href="https://github.com/mohammadimad" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="button contact-secondary" href="https://www.linkedin.com/in/mohammad-abdelfattah-84a080176" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="contact-meta">
          <a href="mailto:hammodaimad@gmail.com">hammodaimad@gmail.com</a>
          <span>Tulkarm, Palestine</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
