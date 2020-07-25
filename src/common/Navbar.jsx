import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let navBar = [
    { id: 1, name: 'Business', to: '/business' },
    { id: 2, name: 'Entertainment', to: '/entertainment' },
    { id: 3, name: 'Health', to: '/health' },
    { id: 4, name: 'Science', to: '/science' },
    { id: 5, name: 'Sports', to: '/sports' },
    { id: 6, name: 'Technology', to: '/technology' },
    { id: 7, name: 'Nation', to: '/nation' },
  ];

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link className="textColorGradiant" to="/">
          <p
            className="text-weight-bold text-white"
            style={{ fonrSize: '2rem' }}
          >
            <span role="img" aria-label="news icon">
              📰
            </span>
            News
          </p>
        </Link>

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
              <Link
                key={nav.id}
                className="textColorGradiant"
                to={{
                  pathname: `${nav.to}`,
                  state: nav.name.toLowerCase(),
                }}
              >
                <li className="nav-item">
                  <p className="nav-link">{nav.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
