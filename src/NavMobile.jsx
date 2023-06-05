import data from "./data";
import { Link } from "react-router-dom";

const planets = data;

// NavMobile takes a prop from the Nav Component to close the nav bar and change the state when a user clicks on a planet

const NavMobile = (props) => {
  function closeNav() {
    document.querySelector("#nav-items").style.display = "none";
    //Setting state for the mobileMenu
    props.nav(false);
  }

  return (
    <div id="nav-items">
      <ul>
        {planets.map((e) => (
          <Link key={e.id} to={`/${e.name.toLowerCase()}`} onClick={closeNav}>
            <li>
              <div
                className="nav-items-planet"
                style={{ backgroundColor: e.color }}
              ></div>
              <h3>{e.name}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavMobile;
