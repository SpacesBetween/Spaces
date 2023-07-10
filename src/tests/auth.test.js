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
      email: "e0774768@u.nus.edu",
      password: "ncsfkjsbf99",
      type: "TA",
      name: "Stephanie",
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

test("successful login", async () =>
  await expect(
    handleLogin({ email: "e0968931@u.nus.edu", password: "ncsfkjsbf99" })
  ).resolves.toBe("Success"));

// Test case 2: Wrong password

test("wrong password", async () =>
  await expect(
    handleLogin({ email: "e0968931@u.nus.edu", password: "ncsfsbf99" })
  ).resolves.toBe("Invalid login credentials"));

// Test case 3: no details input

test("no inputs", async () =>
  await expect(handleLogin({ email: "", password: "" })).resolves.toBe(
    "Please enter your email"
  ));

/* Sign out */

// Test case 1: success sign out

test("successful signout", async () =>
  await expect(
    signOut({ email: "e0968931@u.nus.edu", password: "ncsfkjsbf99" })
  ).resolves.toBe("Successfully logged out."));
