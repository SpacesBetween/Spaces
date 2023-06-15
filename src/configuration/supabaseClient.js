import { createClient } from '@supabase/supabase-js'
import 'dotenv/config';

const supabaseKey = process.env.REACT_APP_ANON_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false
    }
});
