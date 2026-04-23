import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>Not Found Page</h1>
      <h2>Return back home</h2>
      <Link to={"/"} className="btn btn-primary">
        Home
      </Link>
    </>
  );
}

export default NotFoundPage;
