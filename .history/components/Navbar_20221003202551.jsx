import React from 'react';
import { navLinks } from '../constants'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <img
        src='/images/logo.svg'
        className="w-[124px] h-[32px]"
      />
      <ul className={styles.navWrapper}>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px]
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
           text-white `}
          >
            <a  href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;

const styles = {
  container:`w-full py-6 justify-between items-center navbar`,
  navWrapper:`list-none sm:flex hidden justify-end items-center flex-1`,
  navWrapper2:`list-none flex flex-col justify-end items-center flex-1`,
  mobile:`sm:hidden flex flex-1 justify-end items-center`,
  mobileItem:`h-[28px] w-[28px] object-contain`,
  toggleContainer:`p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`
}