'use client';

import React from 'react';
import MainMenu from './common/MainMenu';
import Link from 'next/link';
import Image from 'next/image';

const DefaulHeader = () => {
  const [navbar, setNavbar] = React.useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className='custom-header fixed'>
      <section>
        
      </section>
    </nav>
  );
};

export default DefaulHeader;
