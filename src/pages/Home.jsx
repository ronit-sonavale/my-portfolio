import { Link } from "react-router-dom";
import { profile, projects } from "../data.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="hello">Hi, I am {profile.name}.</p>
          <h1>{profile.tagline}</h1>
          <p className="lead">{profile.role} based in {profile.city}.</p>
          <div className="btns">
            <Link className="btn primary" to="/projects">See my projects</Link>
            <Link className="btn" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2>Recent work</h2>
          <Link to="/projects">View all projects</Link>
        </div>
        <div className="grid">
          {projects.slice(0, 3).map((p) => (
            <article className="card" key={p.title}>
              <span className="chip">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
