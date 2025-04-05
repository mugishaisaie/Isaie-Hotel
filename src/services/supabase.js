
import { createClient } from '@supabase/supabase-js'
 export const  supabaseUrl = 'https://rehjaqtmrlgbkagerhyv.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlaGphcXRtcmxnYmthZ2VyaHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4OTAxOTAsImV4cCI6MjA1ODQ2NjE5MH0.NlBnTHOSisbdS12tplri_XLo1688n4WkLLheUr5VV7Q`
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;