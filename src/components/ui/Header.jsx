import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">

        <img
          src="/images/dfran6.png"
          alt="dFran6"
          className="site-logo"
          width={25}
        />

        

        <button
          className={`menu-button ${menuOpen ? "menu-open" : ""
            }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
        >
          <span />
          <span />
        </button>

      </header>

      <div
        className={`menu-overlay ${menuOpen ? "menu-overlay-open" : ""
          }`}
      >
        <div className="menu-content">

          <p className="menu-eyebrow">
            PROJECT / 01
          </p>

          <h2>
            Courage's
            <br />
            House
          </h2>

          <p className="menu-description">
            A 3D recreation inspired by
            binge-watching Courage the
            Cowardly Dog.
          </p>

          <div className="menu-divider" />

          <div className="project-details">
            <p>V1 — EXTERIOR</p>

            <p>
              Modeled in Blender
              <br />
              Built with React Three Fiber
              <br />
              by Awulor Chukwudi Francis
              <br />
              08-2026
            </p>
          </div>

          <p className="part-two">
            Watch out for Part 2.
          </p>

        </div>
      </div>
    </>
  );
}