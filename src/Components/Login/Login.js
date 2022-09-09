import React, { useState } from "react"
import "./Login.css"
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
  const [loginEmail, setloginEmail] = useState("")
  const [loginPassword, setloginPassword] = useState("")

  // const signIn = async (e) => {
  //   e.preventDefault()

  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     )
  //     console.log(userCredential.user)
  //   } catch (err) {
  //     alert(err)
  //   }
  // }

  const signIn = async (e) => {
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      alert("Logged in successfully")
      navigate("/")
    } catch (err) {
      alert("Incorrect login attempt")
    }
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
        <h1>Login</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setloginEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setloginPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>

          <Link
            to="/register"
            style={{ textDecoration: "none" }}
            className="login__registerButton"
          >
            New User? Create an Account here!
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
