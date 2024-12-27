/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const WaitList = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false);
  const [, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(loading) return;
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/save-to-sheet", {
        Email: email, Date: new Date().toLocaleDateString()
      }, {
        headers: {
          "Content-Type": "application/",
        },
      });

      if (response.data.success) {
        setEmail('')
        toast('🦄 You have joined the waitlist', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } 
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.response?.data?.error || "An error occurred.");
    } finally {
      setLoading(false);
      setEmail('')

    }

  }
  return (
  <form
    onSubmit={handleSubmit}
    className='border w-full md:w-[572px] p-2 flex justify-between items-center bg-white rounded-md'>
    <input type="email" 
    value={email}
    onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className='flex-1 outline-0' />
    <Button disabled={loading} type='submit' className='flex'>{loading ?<><Loader2  className="animate-spin" /><span>joining...</span> </>: 'Join Waitlist'}</Button>
  </form>
  );
};

export default WaitList;
