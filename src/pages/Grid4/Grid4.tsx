import "./Grid4.scss";

// https://www.youtube.com/watch?v=OtpDP8k-2iM

const Grid4 = () => {
  return (
    <div className="grid4 grid-container">
      <header className="header grid-cell bg-blue-400 cell1">
        <h2 className="site-title">Header A</h2>
      </header>
      <div className="breadcrumbs grid-cell bg-blue-400 cell1">
        <h2>Breadcrumbs B</h2>
      </div>
      <main className="main-content grid-cell bg-white text-gray-700 cell2">
        <h2>Main content area D</h2>
        <p>
          The main content area is where the magic happens. Right now, the main
          content is on the left and the sidebar is on the right. If you go into
          the markup for this document and add <code>dir="rtl"</code> to the{" "}
          <code>html</code> element, the two elements will swap spaces because
          CSS Grid honors text direction.
        </p>
      </main>
      <div className="sidebar1 grid-cell bg-purple-600 cell3">
        <h3>The Sidebar C</h3>
        <p>The sidebar typically contains things like:</p>
        <ul>
          <li>Links</li>
          <li>Menus</li>
          <li>Ads</li>
        </ul>
      </div>
      <div className="sidebar2 grid-cell bg-purple-600 cell3">
        <h3>The Sidebar E</h3>
        <p>The sidebar typically contains things like:</p>
        <ul>
          <li>Links</li>
          <li>Menus</li>
          <li>Ads</li>
        </ul>
      </div>
      <div className="footer grid-cell bg-green-600 cell6">
        <aside>
          Content, layout, design:{" "}
          <a href="https://twitter.com/mor10" target="_blank" rel="nofollow">
            Morten Rand-Hendriksen
          </a>
          .
        </aside>
      </div>
    </div>
  );
};

export default Grid4;
