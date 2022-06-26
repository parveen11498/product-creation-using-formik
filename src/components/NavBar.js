import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="navbar-dark bg-primary mb-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-left">
            <h1 className="app-title">
              <Link to="/">
                Users
                <small>&nbsp;/create/read/update/delete</small>
              </Link>
            </h1>
          </div>
          <div className="col-sm-4 text-right">
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink to="/adduser">Add User</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;