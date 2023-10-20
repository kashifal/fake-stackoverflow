import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const [path, setPath] = React.useState("");
  const location = useLocation();
  console.log("====================================");
  console.log(location.pathname);
  console.log("====================================");

  useEffect(() => {
    setPath(location.pathname);
  });
  return (
    <div>
      <div className="body">
        <header>
          <div className="main_header">
            <div className="header">
              <h1>Fake Stack Overflow</h1>
            </div>
            <div className="search">
              <input type="text" placeholder="Search . . ." />
            </div>
          </div>
        </header>
        <div className="mainContent">
          <nav>
            <button
              style={
                path === "/"
                  ? { background: "gray", color: "white !important" }
                  : {}
              }
            >
              <Link to="/">Questions</Link>
            </button>
            <button
              style={
                path === "/tags"
                  ? { background: "gray", color: "white !important" }
                  : {}
              }
            >
              {" "}
              <Link to="/tags">Tags</Link>
            </button>
          </nav>
          <main>
            <div>{props.children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
