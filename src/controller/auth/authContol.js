import "../../model/auth/auth";
import { handleLogin, handleSignUp } from "../../model/auth/auth";
import { useUser } from "../../model/auth/authContext";
import React from "react";

export const CheckLogin = () => {
    const { user } = useUser();

    // could be the authetication entry point! then react router
}

export const LoginController = (info) => {
    // used within the login page 
    if (info.email?.length === 0) {
        return "Please enter your email";
    } else if (info.password?.length === 0) {
        return "Enter your password please."
    } else {
        handleLogin(info).catch(error => error).then();
    }
}

export const SignUpController = (info) => {
  // used 'within' sign up page
  // controller check the input as user click on the submit button
  const domainNine = info.email.slice(-9);
  const domainTen = info.email.slice(-10);
  if (domainTen !== "nus.edu.sg" && domainNine !== "u.nus.edu") {
    return "Sorry, invalid input.";
  } else if (info.name?.length === 0) {
    return "Please enter a name."
  } else if (info.password?.length < 8 || info.password?.length === 0) {
    return "Please enter a password with at least 8 characters."
  } else if (info.type === "TA" && info.moduleIfTA?.length === 0) {
    return "Please enter the module that you are teaching."
  } else {
     handleSignUp(info)
    .then(msg => {
        if (msg === "Sucess! Please check your email for confirmation.") {
            // success screen
        } else if (msg === "User email is already registered") {
            // return message
        } else {
            // error screen
        }
    });
  }
}
