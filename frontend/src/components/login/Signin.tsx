import React from 'react'

export const Signin = () => {
  return (
    <div>
        <img src=''></img>
        <h3>Track Ahaar</h3>
        <p>"Your One stop for Tracking Tasty Treasures at railway Stations"</p>
        <div>
            <form>
                <h2>log in to your Account</h2>
                <label>Email/Phone Number</label>
                <br></br>
                <input type='text'></input>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type='password'></input>
                <br></br>
                <input type='checkbox'></input>
                <label>Agree with Terms&Conditions</label>
                <br></br>
                <button>Log in</button>
                <p>--------------or------------</p>
                <button>continue with Google</button>
                <p>DO NOT have an account? <a href=''>Sign Up</a></p>
            </form>
        </div>
    </div>
  )
}
