/* Unit test to test single function in the auth.js model file */
import { handleLogin, handleSignUp } from "../auth/auth.js";

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
  ).toMatch("Success! Please check your inbox.");
});*/

// Integration testing with DB
/* We expect the database to create a new user in the authetication database provided
by supabase while also creating a new user under the 'User' table to keep
track of the profile. 
We expect the confirmation link sent to user's email to be 
directed to the homepage. */

// Test case 2: unrecognised email domain
handleSignUp({
  email: "ihopenoOneuseThis@hmail.com",
  password: "ncsfkjsbf99",
  type: "Student",
  name: "Tianyue",
});

// Test case 3: staff sign up

// Test case 4: TA sign up

// Test case 5: Wrong emails (gibberish email)

// Test case 6: Already registered email

/*handleSignUp({
  email: "e0968931@u.nus.edu",
  password: "ncsfkjsbf99",
  type: "Student",
  name: "Tianyue",
});*/

/* Login */

// Test case 1: successful login

// handleLogin({ email: "e0968931@u.nus.edu", password: "ncsfkjsbf99" });

// Test case 2: Wrong password

handleLogin({ email: "e0968931@u.nus.edu", password: "ncsfkjf99" });