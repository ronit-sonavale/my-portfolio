import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="wrap section">
      <h1 className="page-title">Page not found</h1>
      <p className="body">This address does not exist. Go back to the <Link to="/">home page</Link>.</p>
    </div>
  );
}
