/* Unit test to test single function in the auth.js model file */
import { handleLogin, handleSignUp, signOut } from "../model/auth/auth.js";

/* Model file */

/* Sign up */

// Test case 1: successful sign up for student

// Unit testing

/*test("Signing up as a student", () => {
  expect(handleSignUp({
  email: "e0968931@u.nus.edu",
  password: "ncsfkjsbf99",
  type: "Student",
  name: "Tianyue",
}).then()
  ).toMatch("Sucess! Please check your email for confirmation.");
});*/

// Integration testing with DB
/* We expect the database to create a new user in the authetication database provided
by supabase while also creating a new user under the 'User' table to keep
track of the profile. 
We expect the confirmation link sent to user's email to be 
directed to the homepage. */

// Test case 2: unrecognised email domain

/*test("Signing up as a student", () => {
  expect(
    handleSignUp({
      email: "ihopenoOneuseThis@hmail.com",
      password: "ncsfkjsbf99",
      type: "Student",
      name: "Tianyue",
    }).then(msg => msg)
  ).toMatch("Sorry, invalid input.");
});*/

/*handleSignUp({
  email: "ihopenoOneuseThis@hmail.com",
  password: "ncsfkjsbf99",
  type: "Student",
  name: "Tianyue",
}).then(msg => msg);*/

// Test case 3: TA sign up

/*handleSignUp({
  email: "e0968931@u.nus.edu",
  password: "ncsfkjsbf99",
  type: "TA",
  name: "Tianyue",
  moduleIfTA: ["CS1101S"]
}).then(msg => console.log(msg));*/

// Test case 4: Wrong emails (gibberish email)

/*handleSignUp({
  email: "dsakbdkbskabdk@u.nus.edu",
  password: "ncsfkjsbf99",
  type: "TA",
  name: "Tianyue",
  moduleIfTA: ["CS1101S"]
}).then(msg => console.log(msg));*/

/*handleLogin({
  email: "dsakbdkbskabdk@u.nus.edu",
  password: "ncsfkjsbf99",
}).then((msg) => console.log(msg));*/

// Test case 5: Already registered email

/*handleSignUp({
  email: "e0968931@u.nus.edu",
  password: "ncsfkjsbf99",
  type: "Student",
  name: "Tianyue",
}).then(msg => console.log(msg));*/

// Test case 6: TA sign up but empty moduleIfTA

/*handleSignUp({
  email: "nduiababdaaidbiad@u.nus.edu",
  password: "ncsfkjsbf99",
  type: "TA",
  name: "Tianyue",
}).then(msg => console.log(msg));*/

/* Login */

// Test case 1: successful login

/*handleLogin({ email: "e0968931@u.nus.edu", password: "ncsfkjsbf99" }).then(
  (msg) => console.log(msg)
);*/

// Test case 2: Wrong password

// handleLogin({ email: "e0968931@u.nus.edu", password: "ncsfkjf99" }).then(
//   (msg) => console.log(msg)
// );

// Test case 3: no details input

// handleLogin({ email: "", password: "" }).then((msg) => console.log(msg));

/* Sign out */

// Test case 1: success sign out 
// signOut({email: "e0968931@u.nus.edu", password: "ncsfkjsbf99"}).then();