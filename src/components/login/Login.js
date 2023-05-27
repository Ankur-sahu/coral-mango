import React, { useEffect, useState } from "react"
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom"
import { validationInput } from "../../utils/validation/validateInput";
import { getUserData } from "../../utils/auth/Auth";
import { toast } from "react-toastify";

const Login = () => {
    const initValue = {
        email: "",
        password: "",
    }
    const [userInfo, setUserInfo] = useState(initValue)
    const [validateFrom, setValidateForm] = useState(initValue)

    const navigate = useNavigate()

    //handling form
    const handleInput = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
        setValidateForm({ ...validateFrom, [name]: "" })
    }

    //login user
    const loginForm = (e) => {
        e.preventDefault()
        const formData = { ...userInfo }
        const errorMsg = { ...validateFrom }
        validationInput(formData, errorMsg)
        const { email, password } = errorMsg
        if (email || password) {
            setValidateForm(errorMsg)
            return
        }

        if (userInfo.email === "demo@coralmango.com" && userInfo.password === "demo123") {

            localStorage.setItem("login", JSON.stringify(userInfo))
            toast.success("Login successfully", {
                position: "top-center",
                autoClose: 2000,

            });
            navigate('/dashboard')
        } else {
            toast.error(" Invalid Credentials!", {
                position: "top-center",
                autoClose: 1000,

            });
        }
    }

    //checking if user already logged in
    useEffect(() => {
        if (getUserData()) {
            navigate('/dashboard')
        }
    }, [])

    return (

        <main className="display-row">
            <div className="display-col container">
                <h1>Login</h1>
                <form onSubmit={loginForm} style={{ width: "80%" }}>
                    <Input
                        type="email"
                        label="Email"
                        onChange={(e) => handleInput(e)}
                        name="email"
                        errMsg={validateFrom.email}
                    />
                    <Input
                        type="password"
                        label="Password"
                        onChange={(e) => handleInput(e)}
                        name="password"
                        errMsg={validateFrom.password}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </main>
    )
}

export default Login