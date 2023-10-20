import React from "react";

const Layout = (props) => {
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
            <button>Questions</button>
            <button>Tags</button>
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
