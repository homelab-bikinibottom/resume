import React from 'react';

export default function Header() {
  return (
    <div className="header clearfix">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h3 className="navbar-brand">Resume</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Resume <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://eamca.com" target="_blank">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://blog.eamca.com" target="_blank">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
