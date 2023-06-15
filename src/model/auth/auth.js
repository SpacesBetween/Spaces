import { supabase } from "../../configuration/supabaseClient.js";

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
  } finally {
  }

  const createProfileStaff = async ({ name, email }) => {};

  const createProfileStudent = async ({ children }) => {};

  const createProfileTA = async ({ children }) => {};

  switch (type) {
    case "Staff":
      createProfileStaff();
      break;
    case "Student":
      createProfileStudent();
      break;
    case "TA":
      createProfileTA();
      break;
    default:
      return "Error recognising the type of user."
  }

  return outputString;
};
