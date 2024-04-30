import "./Grid3.scss";

// https://codepen.io/mor10/pen/QvmLpd
// https://www.smashingmagazine.com/2017/06/building-production-ready-css-grid-layout/

const Grid3 = () => {
  return (
    <div className="grid3 grid-container">
      <header className="header grid-cell bg-blue-400 cell1">
        <h2 className="site-title">Standard two-column layout</h2>
      </header>
      <main className="main-content grid-cell bg-white text-gray-700 cell2">
        <h2>Main content area</h2>
        <p>
          The main content area is where the magic happens. Right now, the main
          content is on the left and the sidebar is on the right. If you go into
          the markup for this document and add <code>dir="rtl"</code> to the{" "}
          <code>html</code> element, the two elements will swap spaces because
          CSS Grid honors text direction.
        </p>
      </main>
      <div className="sidebar grid-cell bg-purple-600 cell3">
        <h3>The Sidebar</h3>
        <p>The sidebar typically contains things like:</p>
        <ul>
          <li>Links</li>
          <li>Menus</li>
          <li>Ads</li>
        </ul>
      </div>
      <div className="twin1 grid-cell bg-slate-700 cell4">
        This should take up half the space
      </div>
      <div className="twin2 grid-cell bg-gray-600 cell5">
        This should take up the other half of the space
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

export default Grid3;
