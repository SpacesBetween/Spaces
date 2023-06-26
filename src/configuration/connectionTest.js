import { supabase } from "./supabaseClient.js";

const { data, error } = await supabase.from("venues").select('venueName', "AS1-0210");

if (error) {
    console.log(error.message);
} else {
    console.log(data);
}