import { SiteFooter, SiteHeader } from "./site-components";
import { credentialGroups } from "./site-data";

export default function CredentialsPage() {
  return (
    <main className="site-shell detail-shell">
      <a className="skip-link" href="#credential-catalog">Skip to credential catalog</a>
      <SiteHeader />

      <section className="catalog-hero" id="credential-catalog">
        <a className="back-link" href="/#credentials">← Back to portfolio</a>
        <p className="eyebrow">Complete learning record</p>
        <h1>Complete credentials and training record.</h1>
        <p>
          The portfolio highlights the credentials closest to backend, database,
          and delivery work. This page keeps the complete record without competing
          with project evidence on the homepage.
        </p>
      </section>

      <section className="credential-catalog">
        {credentialGroups.map((group, groupIndex) => (
          <section className="catalog-group" key={group.title}>
            <div>
              <span>0{groupIndex + 1}</span>
              <h2>{group.title}</h2>
            </div>
            <div className="catalog-list">
              {group.items.map((credential) => (
                <article key={`${credential.title}-${credential.date ?? "undated"}`}>
                  <div>
                    {credential.href ? (
                      <a href={credential.href} target="_blank" rel="noreferrer">{credential.title} ↗</a>
                    ) : (
                      <strong>{credential.title}</strong>
                    )}
                    {credential.id ? <small>{credential.id}</small> : null}
                  </div>
                  <span>{credential.issuer}</span>
                  <time>{credential.date ?? "Date not listed"}</time>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="catalog-contact">
        <p>Projects remain the primary proof of applied skill.</p>
        <a href="/#work">Return to selected work ↗</a>
      </section>

      <SiteFooter />
    </main>
  );
}
