import React, { useContext, useState } from "react"
import { getUserData } from "../utils/auth/Auth"
import { useNavigate } from "react-router-dom"
import donwArrow from "../assets/images/downArrow.png"
import Button from "../components/common/Button"
import { tableContext } from "../contexts/Context"

const Navbar = () => {
  const navigate = useNavigate();
  const userData = getUserData();
  const [logoutBtn, setLogoutBtn] = useState(false);
  const { tableView, setTableView } = useContext(tableContext);
  let name
  if (userData) {
    name = userData.email.split('@');
  }


  const logout = () => {
    localStorage.removeItem('login');
    navigate('/');
  };

  return (
    <>
      <nav>
        <div className="left-menu">
          <ul className="display-row">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>

          </ul></div>
        <div className="menu-items">

          {userData && (
            <>
            <div onClick={() => setTableView(!tableView)} >{tableView ? "Card View" : "Table View"}</div>
            <div onClick={() => setLogoutBtn(!logoutBtn)}>
              {name[0]} <img src={donwArrow} alt="Down Arrow" />
              {logoutBtn && <div onClick={logout}>Logout</div>}
            </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar
