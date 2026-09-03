import { ProjectVisual, SiteFooter, SiteHeader } from "./site-components";
import type { Project } from "./site-data";

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <main className="site-shell detail-shell">
      <a className="skip-link" href="#case-study">Skip to case study</a>
      <SiteHeader />

      <section className="case-hero" id="case-study">
        <a className="back-link" href="/#work">← Back to selected work</a>
        <div className="case-hero-grid">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="case-meta">
              <div><span>Period</span><strong>{project.period}</strong></div>
              <div><span>Role</span><strong>{project.role}</strong></div>
              <div><span>Status</span><strong>{project.status}</strong></div>
            </div>
            <div className="case-actions">
              {project.repository ? (
                <a className="button button-primary" href={project.repository} target="_blank" rel="noreferrer">View repository ↗</a>
              ) : null}
              {project.certificate ? (
                <a className="button button-primary" href={project.certificate} target="_blank" rel="noreferrer">View experience certificate ↗</a>
              ) : null}
            </div>
          </div>
          <ProjectVisual project={project} />
        </div>
      </section>

      <section className="case-story">
        <article>
          <span>01</span>
          <h2>Context</h2>
          <p>{project.context}</p>
        </article>
        <article>
          <span>02</span>
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </article>
      </section>

      <section className="case-contribution">
        <div className="case-section-heading">
          <p className="section-label">My contribution</p>
          <h2>What I contributed.</h2>
        </div>
        <ol>
          {project.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ol>
      </section>

      <section className="case-evidence">
        <div className="case-section-heading">
          <p className="section-label">Evidence</p>
          <h2>Supporting evidence.</h2>
        </div>
        <div>
          {project.evidence.map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-stack">
        <p className="section-label">Technology</p>
        <div>
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="next-project">
        <p>Continue exploring</p>
        <a href="/#work">View all selected work <span aria-hidden="true">↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
