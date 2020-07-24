import React from 'react';

const Navbar = () => {
  let navBar = [
    { id: 1, name: 'Business' },
    { id: 2, name: 'Entertainment' },
    { id: 3, name: 'Health' },
    { id: 4, name: 'Science' },
    { id: 5, name: 'Sports' },
    { id: 6, name: 'Technology' },
    { id: 7, name: 'General' },
  ];

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          📰 News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {navBar.map((nav) => (
              <li className="nav-item" key={nav.id}>
                <a className="nav-link">{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
