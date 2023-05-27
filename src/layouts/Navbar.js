import React, { useState } from "react"
import { getUserData } from "../utils/auth/Auth"
import { useNavigate } from "react-router-dom"
import donwArrow from "../assets/images/downArrow.png"

const Navbar = () => {
    const navigate = useNavigate();
  const userData = getUserData();
  const [logoutBtn, setLogoutBtn] = useState(false);
  let name
  if(userData){
    name = userData.email.split('@');
  }
  

  const logout = () => {
    localStorage.removeItem('login');
    navigate('/');
  };

  return (
    <>
      <nav>
        <div className="logo">LOGO</div>
        <div className="menu-items">
          {userData && (
            <div onClick={()=>setLogoutBtn(!logoutBtn)}>
              {name[0]} <img src={donwArrow} alt="Down Arrow" />
              {logoutBtn && <div onClick={logout}>Logout</div>}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar