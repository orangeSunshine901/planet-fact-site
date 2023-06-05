import data from "./data";
import { useState } from "react";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Nav = () => {
  // setMobileMenu keeps a track of the state of the NavMenu for the function mobileNav
  const [mobileMenu, setMobileMenu] = useState(false);

  // This is a function that shows/hides the nav menu on mobile after a user clicks on the hamburger icon

  function mobileNav() {
    const navList = document.getElementById("nav-items");
    if (mobileMenu === false) {
      setMobileMenu(true);
      navList.style.display = "block";
    } else {
      setMobileMenu(false);
      navList.style.display = "none";
    }
  }

  return (
    <div>
      <nav>
        <div className="logo-wrapper">
          <a className="logo">THE PLANETS</a>
        </div>
        <div className="desktop-nav-elements">
          {data.map((e) => (
            <Link
              className={`${e.name.toLowerCase()}-nav`}
              key={e.id}
              to={`/${e.name.toLowerCase()}`}
            >
              {e.name}
            </Link>
          ))}
        </div>
        <div className="mobile-nav-element">
          <button onClick={mobileNav}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
              </g>
            </svg>
          </button>
        </div>
      </nav>
      {/* The state is passed down to the children NavMobile to keep a track of the state */}
      <NavMobile nav={setMobileMenu} />
    </div>
  );
};

export default Nav;
