import { createClient } from '@supabase/supabase-js'

const supabaseKey = process.env.REACT_APP_ANON_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;

export const supabase = createClient("https://lctusxqoprkovqbkyjug.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjdHVzeHFvcHJrb3ZxYmt5anVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU2NzAyNTEsImV4cCI6MjAwMTI0NjI1MX0.PtxYOvkaI6hR4yg9iXxq3HhvVwt00Weja9IfWnrozRU", {
    auth: {
        persistSession: true,
    }
});
