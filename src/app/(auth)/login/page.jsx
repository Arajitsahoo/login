'use client'
 import { useState } from "react";
 import Link from "next/link";

const page = () => {
  const [logbtn, setLogbtn]=useState("login");

  const loginUser = (e)=>{
    e.preventDefault();
    window.alert("login successful")
  }
  return (
    <div>
        <form onSubmit={loginUser} className="inputbox"> 
            <input type="email" placeholder="enter your valid email" name="email"/> <br />
            <input type="password" placeholder="enter your password " name="password"/> <br />
            <button type="submit">Login</button>
            <div>
              Didn't have an account yet?
              <Link href={"/register"} >
                Register now
              </Link>
            </div>
        </form>
    </div>
  )
}

export default page
