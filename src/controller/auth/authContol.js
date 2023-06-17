import { supabase } from "../../configuration/supabaseClient";
import "../../model/auth/auth";
import { handleLogin, handleSignUp } from "../../model/auth/auth";

export const checkLoginStatus = async () => {

}

export const login = ({email, password}) => {
    handleLogin({ email, password });
}

// need to check input here? the nus domain
export const signUp = ({email, password, name, type, moduleIfTA}) => {
    // need to make varags eh
    const resultMessage = handleSignUp({ email, password, type, name, moduleIfTA});

}