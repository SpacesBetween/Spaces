import { handleLogin, handleSignUp, signOut } from "../model/auth/auth.js";

/* Model file */

/* Sign up */

// Test case 1: successful sign up for student

// Unit testing

test("Successful sign up as a student", async () => {
  await expect(
    handleSignUp({
      email: "e0968931@u.nus.edu",
      password: "ncsfkjsbf99",
      type: "Student",
      name: "Tianyue",
    })
  ).resolves.toBe("Success! Please check your email for confirmation.");
});

// Integration testing with DB
/* We expect the database to create a new user in the authetication database provided
by supabase while also creating a new user under the 'User' table to keep
track of the profile. 
We expect the confirmation link sent to user's email to be 
directed to the homepage. */

// Test case 2: unrecognised email domain

test("Unrecognised email domain", async () => {
  await expect(
    handleSignUp({
      email: "ihopenoOneuseThis@hmail.com",
      password: "ncsfkjsbf99",
      type: "Student",
      name: "Tianyue",
    })
  ).resolves.toBe("Sorry, invalid input.");
});

// Test case 3: TA sign up

test("successful sign up as TA", async () => {
  await expect(
    handleSignUp({
      email: "e0968931@u.nus.edu",
      password: "ncsfkjsbf99",
      type: "TA",
      name: "Tianyue",
      moduleIfTA: ["CS1101S"],
    })
  ).resolves.toBe("Success! Please check your email for confirmation.");
});

// Test case 4: Wrong emails (gibberish email)

test("Gibberish email", async () => {
  await expect(
    handleSignUp({
      email: "dsakbdkbskabdk@u.nus.edu",
      password: "ncsfkjsbf99",
      type: "TA",
      name: "Tianyue",
      moduleIfTA: ["CS1101S"],
    })
  ).resolves.toBe("Success! Please check your email for confirmation.");
});

// Test case 5: Already registered email

test("Already registered email", async () => {
  await expect(
    handleSignUp({
      email: "e0969417@u.nus.edu",
      password: "ncsfkjsbf99",
      type: "Student",
      name: "Tianyue",
    })
  ).resolves.toBe("User email is already registered");
});

// Test case 6: TA sign up but empty moduleIfTA

test("Empty module but TA", async () => {
  await expect(
    handleSignUp({
      email: "nduiababdaaidbiad@u.nus.edu",
      password: "ncsfkjsbf99",
      type: "TA",
      name: "Tianyue",
    })
  ).resolves.toBe("Please enter the module that you are teaching.");
});

// Test case 7: Signing up as staff with non-staff domain

test("Wrong email domain for staff", async () => {
  await expect(
    handleSignUp({
      email: "something@u.nus.edu",
      password: "somefsfos",
      type: "Staff",
      name: "somename",
    })
  ).resolves.toBe("Are you sure that you are a staff?");
});

// Test case 8: Short passwords

test("Insecure passwords", async () => {
  await expect(
    handleSignUp({
      email: "something@u.nus.edu",
      password: "1234",
      type: "Student",
      name: "somename",
    })
  ).resolves.toBe("Please enter a password with at least 8 characters.");
});

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
