import React from 'react'

export const Form = () => {
  return (
    <div>
        <form>
            Create Account
            <br></br>
            <label>Name</label><br></br>
            <input type="text" />
            <br></br>
            <label>Email/Phone no.</label><br></br>
            <input type='text'></input>
            <br></br>
            <label>Password</label><br></br>
            <input type='text'></input>
            <br></br>
            <button>Sign up</button><br></br>
            <input type='checkbox' id='tnc'></input>
            <label>Agree with Terms&Conditions</label>
            <br></br>
            <br></br>
            <p>--------------or------------</p>
            <br></br>
            <br></br>
            <div><button>continue with google</button></div>
        </form>
    </div>
 )
}
