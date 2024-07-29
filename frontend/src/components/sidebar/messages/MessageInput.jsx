import React from 'react';
import { BiSend } from 'react-icons/bi';

const MessageInput = () => {
  return (
    <form className='px-4 my-3 relative'>
      <div className='w-full'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-x-gray-600 text-white'
          placeholder='Send Message'
        />
        <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <BiSend className='text-white' />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;


