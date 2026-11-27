import { useState } from "react";
import { profile } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) err.message = "Write at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="wrap section">
      <h1 className="page-title">Contact</h1>
      <div className="two-col">
        <div>
          <p className="body">Have a question or an idea? Send a message and I will reply by email.</p>
          <p className="body">
            <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a><br />
            <strong>Location:</strong> {profile.city}
          </p>
        </div>
        <form onSubmit={submit} noValidate>
          {sent && <p className="notice" role="status">Message sent. Thank you, I will reply soon.</p>}
          {["name", "email", "message"].map((f) => (
            <div className="field" key={f}>
              <label htmlFor={f}>{f[0].toUpperCase() + f.slice(1)}</label>
              {f === "message"
                ? <textarea id={f} name={f} rows="5" value={form[f]} onChange={change} />
                : <input id={f} name={f} type={f === "email" ? "email" : "text"} value={form[f]} onChange={change} />}
              {errors[f] && <span className="error">{errors[f]}</span>}
            </div>
          ))}
          <button className="btn primary" type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}
