import { supabase } from "../../configuration/supabaseClient.js";

// function to handle signup with DB
export const handleSignUp = async ({
  email,
  password,
  type,
  name,
  moduleIfTA,
}) => {
  let outputString = "";

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      // error apart from registering a registed email
      throw error;
    } else if (data.user?.identities?.length === 0) {
      error.message = "User email is already registered";
      throw error;
    } else {
      outputString = "Success! Please check your inbox.";
    }
  } catch (error) {
    return error.message;
  } 

  const createProfileStaff = async ({ name, email }) => {
    try {
      const { error } = await supabase
        .from("User")
        .update({ name: name, type: 'Staff' })
        .eq("email", email);

      if (error) {
        throw error;
      }
    } catch (error) {
      outputString = error.message;
    }
  };

  const createProfileStudent = async ({ name, email }) => {
    try {
      const { error } = await supabase
        .from("User")
        .update({ name: name, type: 'Student' })
        .eq("email", email);

      if (error) {
        throw error;
      }
    } catch (error) {
      outputString = error.message;
    }
  };

  const createProfileTA = async ({ name, email, moduleIfTA }) => {
    try {
      const { error } = await supabase
        .from("User")
        .update({ name: name, type: 'TA', moduleIfTA: moduleIfTA })
        .eq("email", email);

      if (error) {
        throw error;
      }
    } catch (error) {
      outputString = error.message;
    }
  };

  switch (type) {
    case "Staff":
      createProfileStaff({ name, email });
      break;
    case "Student":
      createProfileStudent({ name, email });
      break;
    case "TA":
      createProfileTA({ name, email, moduleIfTA });
      break;
    default:
      return "Error recognising the type of user.";
  }

  return outputString;
};

// function to handle login process
export const handleLogin = async ({ email, password }) => {};

// function to handle case where user forget password
export const forgetPassword = async ({ email }) => {};
