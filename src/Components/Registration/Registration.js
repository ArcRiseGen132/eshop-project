import React, { useState } from "react"
import "./Registration.css"
import { Link, useNavigate } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import { auth } from "../../firebase.js"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"

function Login() {
  const navigate = useNavigate()
  const [registerEmail, setregisterEmail] = useState("")
  const [registerPassword, setregisterPassword] = useState("")

  const register = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((auth) => {
        if (auth) {
          alert("Account registered successfully")
          navigate("/")
        }
      })

      .catch((error) => alert("Account already registered"))
  }

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <LoginIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="login__container">
        <h1 onClick={register}>Register Account</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={registerEmail}
            onChange={(e) => setregisterEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={registerPassword}
            onChange={(e) => setregisterPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={register}
          >
            Register Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
