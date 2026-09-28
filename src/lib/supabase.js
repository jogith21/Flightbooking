import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wkzfltxwdundfaghcscr.supabase.co";
const supabaseKey = "sb_publishable_yHyJuxLn6ro9O0VGkvft4g_7k-SYg-A";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);