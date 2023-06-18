/* Unit test to test single function in the auth.js model file */
import { handleSignUp } from "../auth/auth.js"
import { supabase } from "../../configuration/supabaseClient.js";

/* Sign up */

// Test case 1: successful sign up for student

// Unit testing 
/*test("Signing up as a student", () => {
  expect(
    handleSignUp({
      email: "e0968931@u.nus.edu",
      password: "ncsfkjsbf99",
      type: "Student",
      name: "Tianyue",
    })
  ).resolve().toMatch("Success! Please check your inbox.");
});*/

// Integration testing with DB
/* We expect the database to create a new user in the authetication database provided
by supabase while also creating a new user under the 'User' table to keep
track of the profile. 
We expect the confirmation link sent to user's email to be 
directed to the homepage. */
const msg = handleSignUp({
  email: "e0968931@u.nus.edu",
  password: "ncsfkjsbf99",
  type: "Student",
  name: "Tianyue",
});

msg.then((string) => console.log(string));

/*const { data, error } = await supabase.auth.signUp({
  email: "e0968931@u.nus.edu",
  password: "ndksnfkdsnfksnfks212901",
})

if (error) {
  throw error;
}*/