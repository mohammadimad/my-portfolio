import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CredentialsPage from "../app/credentials-page";
import Home from "../app/page";
import ProjectPage from "../app/project-page";
import { projects } from "../app/site-data";
import "../app/globals.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const projectSlug = path.startsWith("/projects/") ? path.slice("/projects/".length) : null;
const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : null;
const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');

function setPageMetadata(title: string, description: string) {
  document.title = title;
  descriptionMeta?.setAttribute("content", description);
}

let page = <Home />;

if (path === "/credentials") {
  setPageMetadata(
    "Credentials | Mohammad Abdelfattah",
    "Complete credentials and training record for Mohammad Abdelfattah.",
  );
  page = <CredentialsPage />;
} else if (project) {
  setPageMetadata(`${project.title} | Mohammad Abdelfattah`, project.summary);
  page = <ProjectPage project={project} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {page}
  </StrictMode>,
);
