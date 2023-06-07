import data from "./data";
import { useState } from "react";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Nav = () => {
  // setMobileMenu keeps a track of the state of the NavMenu for the function mobileNav
  const [mobileMenu, setMobileMenu] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(false);

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

  function desktopNav(e) {
    const navLinks = [
      ...document.querySelectorAll(".desktop-nav-elements > a"),
    ];
    navLinks.map((planet) => {
      if (
        planet.text == e.target.text &&
        e.target.classList.value == `${e.target.text.toLowerCase()}-nav`
      ) {
        e.target.classList.value = `${e.target.text.toLowerCase()}-nav-active`;
      } else {
        planet.classList.value = `${planet.text.toLowerCase()}-nav`;
      }
    });
  }

  return (
    <div>
      <nav>
        <div className="logo-wrapper">
          <a className="logo">THE PLANETS</a>
        </div>
        <div className="desktop-nav-elements">
          <Link
            disabled={(e) =>
              e.target.classList.value == "mercury-nav-active" ? true : false
            }
            to={"/mercury"}
            className="mercury-nav-active"
            onClick={(e) => desktopNav(e)}
          >
            Mercury
          </Link>
          <Link
            to={"/venus"}
            className="venus-nav"
            onClick={(e) => desktopNav(e)}
          >
            Venus
          </Link>
          <Link
            to={"/earth"}
            className="earth-nav"
            onClick={(e) => desktopNav(e)}
          >
            Earth
          </Link>
          <Link
            to={"/mars"}
            className="mars-nav"
            onClick={(e) => desktopNav(e)}
          >
            Mars
          </Link>
          <Link
            to={"/jupiter"}
            className="jupiter-nav"
            onClick={(e) => desktopNav(e)}
          >
            Jupiter
          </Link>
          <Link
            to={"/saturn"}
            className="saturn-nav"
            onClick={(e) => desktopNav(e)}
          >
            Saturn
          </Link>
          <Link
            to={"/uranus"}
            className="uranus-nav"
            onClick={(e) => desktopNav(e)}
          >
            Uranus
          </Link>
          <Link
            to={"/neptune"}
            className="neptune-nav"
            onClick={(e) => desktopNav(e)}
          >
            Neptune
          </Link>
          {/* {data.map((planets) => (
            <Link
              // className={`${planets.name.toLowerCase()}-nav`}
              key={planets.id}
              to={`/${planets.name.toLowerCase()}`}
              onClick={(e) => desktopNav(e)}
            >
              {planets.name}
            </Link>
          ))} */}
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
