import { ProjectVisual, SiteFooter, SiteHeader } from "./site-components";
import type { Project } from "./site-data";

function LibrarySystemDesign() {
  const operationalAreas = [
    "Books & copies",
    "Memberships",
    "Subscriptions",
    "Borrowing",
    "Due dates & fines",
    "Roles & permissions",
    "Activity logging",
    "Excel data migration",
    "Search & filtering",
    "Content management",
  ];

  return (
    <section className="case-design" aria-labelledby="system-design-title">
      <div className="case-section-heading">
        <p className="section-label">System design</p>
        <div>
          <h2 id="system-design-title">From legacy records to structured workflows.</h2>
          <p className="case-section-intro">
            Selected design material from the team presentation, condensed for clarity. It
            documents the system shape and scope without presenting the work as a solo build.
          </p>
        </div>
      </div>

      <div className="architecture-board" aria-label="Library system architecture">
        <div className="architecture-heading">
          <span>Architecture</span>
          <p>Clear boundaries from the user interface to application logic and persistent data.</p>
        </div>
        <div className="architecture-flow">
          <article>
            <span>01 · Presentation</span>
            <h3>Web interface</h3>
            <p>Role-aware experiences for users, employees, and administrators.</p>
            <small>React · JavaScript · HTML/CSS</small>
          </article>
          <i aria-hidden="true">→</i>
          <article>
            <span>02 · Application</span>
            <h3>Backend services</h3>
            <p>Business workflows, validation, permissions, and operational traceability.</p>
            <small>C# · ASP.NET Core Web API · Kestrel</small>
          </article>
          <i aria-hidden="true">→</i>
          <article>
            <span>03 · Data</span>
            <h3>Relational model</h3>
            <p>Structured records for the library catalogue and day-to-day transactions.</p>
            <small>SQL Server · Entity Framework Core</small>
          </article>
        </div>
        <div className="architecture-foundation">
          <span>Deployment foundation</span>
          <p>Windows Server · IIS / Kestrel · SSL · Firewall configuration</p>
        </div>
      </div>

      <div className="system-scope">
        <div>
          <span>Operational scope</span>
          <h3>Connected areas, not an isolated CRUD demo.</h3>
          <p>
            The project joined catalogue, member, circulation, access-control, and audit
            workflows in one maintainable system.
          </p>
        </div>
        <ol>
          {operationalAreas.map((area, index) => (
            <li key={area}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {area}
            </li>
          ))}
        </ol>
      </div>

      <div className="design-artifacts">
        <div className="artifact-heading">
          <span>Team design artifacts</span>
          <p>Open either diagram to inspect the original presentation material.</p>
        </div>
        <div className="artifact-grid">
          <a href="/projects/library/erd-design.png" target="_blank" rel="noreferrer">
            <figure>
              <div className="artifact-image">
                <img
                  src="/projects/library/erd-design.png"
                  alt="Entity relationship design centered on books and connected author, publisher, status, series, and supplier records"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>Data model</span>
                <strong>Entity relationship design</strong>
                <small>Open full diagram ↗</small>
              </figcaption>
            </figure>
          </a>
          <a href="/projects/library/use-case-diagram.png" target="_blank" rel="noreferrer">
            <figure>
              <div className="artifact-image">
                <img
                  src="/projects/library/use-case-diagram.png"
                  alt="Use-case diagram connecting employee, guest, and member actors to library operations"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>Workflow scope</span>
                <strong>Role-based use cases</strong>
                <small>Open full diagram ↗</small>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </section>
  );
}

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
          <ProjectVisual project={project} detail />
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

      {project.slug === "library-management-system" ? <LibrarySystemDesign /> : null}

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
