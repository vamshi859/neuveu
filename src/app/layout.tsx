'use client';

import Aos from 'aos';
import { ReactNode, useEffect } from 'react';
import 'aos/dist/aos.css';
import '../styles/index.scss';
import ScrollToTop from '@/components/common/ScrollTop';
import Footer from '@/components/Footer';
import DefaulHeader from '@/components/Header';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang='en'>
      <body>
        <div className='main-page-wrapper'>
          <DefaulHeader />
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
