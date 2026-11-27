import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and React Router.</p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  );
}
