import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BEACHES.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon hover:text-indigo-400' />
            <FaTwitter className='icon hover:text-indigo-400' />
            <FaYoutube className='icon hover:text-indigo-400' />
            <FaPinterest className='icon hover:text-indigo-400' />
            <FaInstagram className='icon hover:text-indigo-400' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>About</li>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>Partnerships</li>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>Careers</li>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>Newsroom</li>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>Destinations</li>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>Travel</li>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>View</li>
            <li className='cursor-pointer hover:text-indigo-400 hover:font-bold'>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
