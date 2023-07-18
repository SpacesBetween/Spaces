import { supabase } from "../configuration/supabaseClient.js";
import { handleNewBooking } from "../model/room/roomFunc.js";

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

handleNewBooking(
  user,
  "COM3-01-20",
  new Date("2023-07-31"),
  "8",
  "2 hr",
  true
).then(data => console.log(data))