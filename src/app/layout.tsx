'use client';

import { ReactNode, useEffect } from 'react';
import '../styles/index.scss';
import ScrollToTop from '@/components/common/ScrollTop';
import Footer from '@/app/footer/page';
import DefaulHeader from '@/components/Header';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {

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
