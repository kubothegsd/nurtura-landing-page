import { supabase } from '../lib/supabase';

export interface WaitlistEmail {
  id?: number;
  email: string;
  created_at?: string;
}

export const emailService = {
  async addEmail(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('waitlist_emails')
        .insert([{ email }]);

      if (error) {
        console.error('Error adding email:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Unexpected error:', error);
      return { success: false, error: 'An unexpected error occurred' };
    }
  },

  async getEmails(): Promise<WaitlistEmail[]> {
    try {
      const { data, error } = await supabase
        .from('waitlist_emails')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching emails:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Unexpected error:', error);
      return [];
    }
  },
};
