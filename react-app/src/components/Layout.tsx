import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="">
        <Link to="/">Home</Link> | <Link to="/users"> Users </Link> |{" "}
        <Link to="/counter"> Counter </Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
