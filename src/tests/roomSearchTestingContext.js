import { supabase } from "../configuration/supabaseClient.js";
import { handleCancellation } from "../model/room/roomFunc.js";

// user object
export const {
  data: { user },
} = await supabase.auth.signInWithPassword({
  email: "e0968931@u.nus.edu",
  password: "ncsfkjsbf99",
});

// dummy user
export const {
  data: { user: badUser },
} = await supabase.auth.signInWithPassword({
  email: "e0774768@u.nus.edu",
  password: "ncsfkjsbf99",
});

handleCancellation("79", badUser).then((data) => console.log(data));
