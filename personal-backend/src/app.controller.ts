import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

// Use 'as string' to fix the TypeScript 'undefined' error
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

@Controller('guestbook')
export class AppController {
  
  @Get()
  async getMessages() {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    return data;
  }

  @Post()
  async addMessage(@Body() body: { name: string; message: string }) {
    if (!body.name || !body.message) {
      throw new HttpException('Name and message are required', HttpStatus.BAD_REQUEST);
    }

    const { data, error } = await supabase
      .from('guestbook')
      .insert([{ name: body.name, message: body.message }])
      .select();

    if (error) throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    return { success: true, data };
  }
}