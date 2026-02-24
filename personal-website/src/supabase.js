// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vewlioizgwxewufbdest.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZld2xpb2l6Z3d4ZXd1ZmJkZXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODI5NTcsImV4cCI6MjA4NzQ1ODk1N30.Pd7UvmrKlazZ06WZg-M_1wzEPya9bxMP_0OIqfq8kDs'

export const supabase = createClient(supabaseUrl, supabaseKey)