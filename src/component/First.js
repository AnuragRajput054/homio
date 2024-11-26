import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const First = () => {
  const nevigate = useNavigate();
  const [isSignForm, setIsSignForm] = useState(true);
  const[errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };
  const handleButtonClick = () =>{
      const message = checkValidData(email.current.value,password.current.value);
      console.log(message);
      setErrorMessage(message);
      if(message)return;
      if(!isSignForm){
        createUserWithEmailAndPassword(
          auth,
           email.current.value,
            password.current.value
          )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          nevigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode," == ",errorMessage);
          // ..
        });
      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("Login Successfull "+user);
          nevigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+" "+errorMessage);
        });
      }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wallpapers.com/images/featured/beautiful-background-td7gsxerv3ecl20h.jpg"
          alt="bg"
        />
      </div>

      <form className="absolute p-12 bg-gray-100 w-3/12 my-36 right-0 left-0 mx-auto bg-opacity-30 rounded-lg border-2" 
          onSubmit={(e)=>e.preventDefault()}
      >
        <p className="text-xl mt--20 ml-5 align-middle justify-center  font-bold">
          Find Your Comfort with Homio
        </p>
        <h1 className="text-3xl p-4  font-semibold py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-opacity-50 font-bold rounded-lg bg-black text-white"
          ></input>
        )}
        <input
           ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-opacity-50 font-bold rounded-lg bg-black text-white"
        ></input>
        <input
        ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-opacity-50 font-bold bg-black rounded-lg text-white"
        ></input>
        <br></br>
        <p className="font-bold py-1">{errorMessage}</p>
        <button className="p-4 my-6 w-full rounded-lg bg-blue-300" onClick={handleButtonClick}>
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-3 text-xl font-bold cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignForm
            ? "Don't have Account! Sign Up Now"
            : "Allready have a account! Sign In"}
        </p>
      </form>
    </div>
  );
};

export default First;
