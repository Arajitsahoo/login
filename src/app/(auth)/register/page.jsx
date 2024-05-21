"use client"
import Link from "next/link";
let arr = [];

const register = () => {
  const newUser = (e)=>{
    e.preventDefault();
    // arr.push(e.name);
    console.log(e);
    
    
  }

  return (
    <div>
      <form onClick={newUser}>
        <input type="text" placeholder="Enter your Full name" name="name" /> <br />
        <input type="email" placeholder="enter your Email" name="email" /> <br />
        <input type="password" placeholder="Enter your password" name="password"/><br />
        <button type="submit">Register</button>
        <div >
              Already a member?{" "}
              <Link href={"/login"} >
                Login
              </Link>
            </div>
      </form>
    </div>
  )
}

export default register
