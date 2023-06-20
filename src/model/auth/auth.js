import { supabase } from "../../configuration/supabaseClient.js";

// function to handle signup with DB
export const handleSignUp = async (info) => {
  let outputString = "";

  try {
    const { data, error } = await supabase.auth.signUp({
      email: info.email,
      password: info.password,
    });

    if (error) {
      // error apart from registering a registed email
      throw error;
    } else if (data.user?.identities?.length === 0) {
      outputString = "User email is already registered";
      return outputString;
    } else {
      outputString = "Sucess! Please check your email for confirmation."
    }
  } catch (error) {
    return error.message;
  }

  const createProfileStaff = async (info) => {
    try {
      const { error } = await supabase.from("User").update({
        name: info.name,
        type: "Staff",
      }).eq('email', info.email);

      if (error) {
        throw error;
      }
    } catch (error) {
      outputString = error.message;
    }
  };

  const createProfileStudent = async (info) => {
    try {
      const { error } = await supabase.from("User").update({
        name: info.name,
        type: "Student",
      }).eq('email', info.email);

      if (error) {
        throw error;
      }
    } catch (error) {
      outputString = error.message;
    }
  };

  const createProfileTA = async (info) => {
    try {
      const { error } = await supabase.from("User").update({
        name: info.name,
        type: "TA",
        moduleIfTA: info.moduleIfTA,
      }).eq('email', info.email);

      if (error) {
        throw error;
      }
    } catch (error) {
      outputString = error.message;
    }
  };

  switch (info.type) {
    case "Staff":
      await createProfileStaff(info);
      break;
    case "Student":
      await createProfileStudent(info);
      break;
    case "TA":
      await createProfileTA(info);
      break;
    default:
      return "Error recognising the type of user.";
  }

  return outputString;
};

// function to handle login process
export const handleLogin = async (info) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: info.email,
      password: info.password,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    return error;
  }
};

// function to handle case where user forget password
export const forgetPassword = async ({ email }) => {};

// function for logging out
export const signOut = async (info) => {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw error;
    } else {
      return; 
    }
  } catch (error) {
    return error.message;
  }
  
}