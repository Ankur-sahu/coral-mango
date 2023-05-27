import React, { useEffect } from "react"
import { getUserData } from "../../utils/auth/Auth"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    // Fetch user data from localStorage or state
  // Example: const userData = JSON.parse(localStorage.getItem('login'));
  const navigate = useNavigate()
  useEffect(()=>{
    if(!getUserData()){
        navigate('/')
    }
})
    return (
        <>
            <main>
                <h1> Welcome To Dashboard</h1>
                {/*<p>Welcome, {userData.fullName}</p> */}
                {/* <p> {userData.email}</p> */}
                {/* <p>{userData.username}</p> */}

            </main>
        </>
    )
}

export default Dashboard