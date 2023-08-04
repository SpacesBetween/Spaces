import { supabase } from "../../configuration/supabaseClient.js";

// function to handle signup with DB
export const handleSignUp = async (info) => {
  const domainNine = info.email.slice(-9);
  const domainTen = info.email.slice(-10);

  if (domainTen !== "nus.edu.sg" && domainNine !== "u.nus.edu") {
    return "Sorry, invalid input.";
  } else if (info.name?.length === 0) {
    return "Please enter a name.";
  } else if (info.password?.length < 8 || info.password?.length === 0) {
    return "Please enter a password with at least 8 characters.";
  } else if (info.type === "TA" && info.moduleIfTA === []) {
    return "Please enter the module that you are teaching.";
  } else if (info.type === "Staff" && domainTen !== "nus.edu.sg") {
    return "Are you sure that you are a staff?";
  } else if (info.moduleIfTA?.length > 7) {
    return "Are you sure you are teaching so many modules?";
  }

  // outputstring to display msg if an error occurs during profile creation
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
      return "User email is already registered";
    } else {
      outputString = "Success! Please check your email for confirmation.";
    }
  } catch (error) {
    return error.message;
  }

  const createProfileStaff = async (info) => {
    try {
      const { error } = await supabase
        .from("User")
        .update({
          name: info.name,
          type: "Staff",
        })
        .eq("email", info.email);

      if (error) {
        throw error;
      }
    } catch (error) {
      outputString = error.message;
    }
  };

  const createProfileStudent = async (info) => {
    try {
      const { error } = await supabase
        .from("User")
        .update({
          name: info.name,
          type: "Student",
        })
        .eq("email", info.email);

      if (error) {
        throw error;
      }
    } catch (error) {
      outputString = error.message;
    }
  };

  const createProfileTA = async (info) => {
    try {
      const { error } = await supabase
        .from("User")
        .update({
          name: info.name,
          type: "TA",
          moduleIfTA: info.moduleIfTA,
        })
        .eq("email", info.email);

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
  if (info.email?.length === 0) {
    return "Please enter your email";
  } else if (info.password?.length === 0) {
    return "Enter your password please.";
  }

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: info.email,
      password: info.password,
    });

    if (error) {
      throw error;
    } else {
      return "Success";
    }
  } catch (error) {
    throw error;
  }
};

// function to handle case where user forget password
export const forgetPassword = async (email) => {
  try {
    const domainNine = email.slice(-9);
    const domainTen = email.slice(-10);

    if (domainTen !== "nus.edu.sg" && domainNine !== "u.nus.edu") {
      return new Error("Sorry, invalid input.");
    }

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "",
      data: { email: email },
    });

    if (error) {
      throw error;
    } else if (data) {
      return "Success! Check your email to reset password! You can close this page now.";
    }
  } catch (error) {
    throw error;
  }
};

// function for logging out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    } else {
      return "Successfully logged out.";
    }
  } catch (error) {
    return error.message;
  }
};

// get user details
export const getUserDetails = async (user) => {
  let prosessingData;

  try {
    const { data, error } = await supabase
      .from("User")
      .select("*, EventParticipants(event_id, UserType)")
      .eq("user_id", user.id);

    if (error) {
      throw error;
    } else if (data) {
      prosessingData = data[0];

      for (const count in prosessingData.EventParticipants) {
        const { data, error } = await supabase
          .from("Event")
          .select()
          .eq("id", prosessingData.EventParticipants[count].event_id);

        if (data) {
          prosessingData.EventParticipants[count].event = data[0];
        } else if (error) {
          throw new Error(error.message + ". Please refresh");
        } else {
          throw new Error("Something went wrong, please refresh!");
        }
      }
    } else {
      throw new Error("An error occured, please try again!");
    }
  } catch (error) {
    throw error;
  }

  return prosessingData;
};

export const tempGetPfp = (email) => {
   const maybeNum = email?.slice(0, 3)[2];

   if (isNaN(maybeNum)) {
     return 10;
   } 

   return maybeNum;
}