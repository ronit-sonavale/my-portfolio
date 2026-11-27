import { profile, skills, timeline } from "../data.js";

export default function About() {
  return (
    <div className="wrap section">
      <h1 className="page-title">About me</h1>
      <div className="two-col">
        <div>
          {profile.about.map((t, i) => <p className="body" key={i}>{t}</p>)}
          <h2>Skills</h2>
          {skills.map((s) => (
            <div className="skill-group" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((i) => <li className="chip" key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h2>Journey</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.year}>
                <span className="year">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
