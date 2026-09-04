import type { Project } from "./site-data";

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 48 32" aria-hidden="true">
      <path d="M4 26V6l8 12L20 6v20" />
      <path d="M26 26 34 6l8 20M29.5 18h9" />
    </svg>
  );
}

const navItems = [
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["Capabilities", "/#capabilities"],
  ["Credentials", "/#credentials"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Mohammad Abdelfattah home">
        <BrandMark />
        <span>Mohammad Abdelfattah</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={label}>{label}</a>
        ))}
      </nav>

      <a className="header-cta" href="/#contact">Contact me</a>

      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
          <a href="/#contact">Contact me</a>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 Mohammad Abdelfattah</span>
      <span>Backend systems · Data workflows · Practical software</span>
    </footer>
  );
}

export function ProjectVisual({
  project,
  compact = false,
  detail = false,
}: {
  project: Project;
  compact?: boolean;
  detail?: boolean;
}) {
  const isLibraryJourney = project.visual === "library" && detail;

  return (
    <div
      className={`project-visual project-visual-${project.visual}${compact ? " is-compact" : ""}${isLibraryJourney ? " is-journey" : ""}`}
      aria-label={isLibraryJourney ? `${project.title} transformation journey` : `${project.title} system map`}
    >
      <div className="visual-label">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>

      {project.visual === "library" && !detail ? (
        <div className="library-map">
          <div className="map-column">
            <span>Books</span>
            <span>Members</span>
            <span>Subscriptions</span>
          </div>
          <div className="map-core">Library<br />operations</div>
          <div className="map-column">
            <span>Borrowing</span>
            <span>Due dates & fines</span>
            <span>Activity log</span>
          </div>
        </div>
      ) : null}

      {isLibraryJourney ? (
        <div className="library-journey">
          <article>
            <span>01</span>
            <div>
              <strong>Legacy operations</strong>
              <p>Desktop-bound records, limited maintainability, and fragmented workflows.</p>
            </div>
          </article>
          <i aria-hidden="true">↓</i>
          <article>
            <span>02</span>
            <div>
              <strong>Analysis & re-engineering</strong>
              <p>Requirements, relational data, backend logic, permissions, and migration.</p>
            </div>
          </article>
          <i aria-hidden="true">↓</i>
          <article>
            <span>03</span>
            <div>
              <strong>Internal municipal use</strong>
              <p>A modern web-based system supporting Tulkarm Municipality staff.</p>
            </div>
          </article>
        </div>
      ) : null}

      {project.visual === "cardiac" ? (
        <div className="cardiac-map">
          <div><strong>23+</strong><span>API endpoints</span></div>
          <div className="security-line"><span>JWT</span><span>Ownership</span><span>Rate limits</span></div>
          <div><strong>22</strong><span>Automated tests</span></div>
        </div>
      ) : null}

      {project.visual === "student" ? (
        <div className="layer-map">
          <span>API layer</span>
          <i aria-hidden="true">↓</i>
          <span>Business layer</span>
          <i aria-hidden="true">↓</i>
          <span>Data access · Stored procedures</span>
        </div>
      ) : null}

      {project.visual === "walks" ? (
        <div className="walks-map">
          <span>Identity + JWT</span>
          <div><strong>Regions</strong><strong>Walking routes</strong></div>
          <span>EF Core · SQL Server</span>
        </div>
      ) : null}

      <p className="visual-note">
        {isLibraryJourney
          ? "Transformation summary based on the documented team project."
          : "Sanitized visual based on documented project scope."}
      </p>
    </div>
  );
}
