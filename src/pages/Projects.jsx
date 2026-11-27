import { useState } from "react";
import { projects } from "../data.js";

const tags = ["All", ...new Set(projects.map((p) => p.tag))];

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <div className="wrap section">
      <h1 className="page-title">Projects</h1>
      <div className="filters" role="group" aria-label="Filter projects">
        {tags.map((t) => (
          <button key={t} className={t === active ? "filter on" : "filter"} aria-pressed={t === active} onClick={() => setActive(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <article className="card" key={p.title}>
            <span className="chip">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <a href={p.link}>View project</a>
          </article>
        ))}
      </div>
    </div>
  );
}
