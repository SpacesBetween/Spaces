import { supabase } from "../../configuration/supabaseClient.js";

// function to handle signup with DB
export const handleSignUp = async (info) => {
  let outputString = "";

  // firstly, handle wrong email domain
  const domain = info.email.slice(-9);
  if (domain !== "us.edu.sg" && domain !== "u.nus.edu") {
    return "Sorry, invalid input.";
  }

  try {
    // proceed to call signUp if email is correct
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
      await handleLogin(info);
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

  const {
    data: { user },
  } = await supabase.auth.getUser();

  switch (info.type) {
    case "Staff":
      await createProfileStaff({
        id: user?.id,
        name: info.name,
        email: info.email,
      });
      break;
    case "Student":
      await createProfileStudent({
        id: user?.id,
        name: info.name,
        email: info.email,
      });
      break;
    case "TA":
      await createProfileTA({
        id: user?.id,
        name: info.name,
        email: info.email,
        moduleIfTA: info.moduleIfTA,
      });
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
    return error.message;
  }
};

// function to handle case where user forget password
export const forgetPassword = async ({ email }) => {};
