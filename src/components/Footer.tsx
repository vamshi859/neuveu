import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const links = [
    {
      id: 1,
      title: 'Links',
      column: 'col-lg-2 col-md-3 col-sm-6 mb-30',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'About us', href: '/about-v1' },
        { label: 'Careers', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Blog', href: '/blog-v2.' },
      ],
    },
    {
      id: 2,
      title: 'Services',
      column: 'col-lg-3 col-md-4 col-sm-6 mb-30',
      items: [
        { label: 'Health Insurance Plans', href: '/service-details' },
        { label: 'Car Insurance', href: '/service-details' },
        { label: 'Investment', href: '/service-details' },
        { label: 'Mediclaim Policy', href: '/service-details' },
        { label: 'Others', href: '/service-details' },
        { label: 'Health Insurance', href: '/service-details' },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: 'fab fa-facebook-f',
      link: '#',
    },
    {
      iconClass: 'fab fa-twitter',
      link: '#',
    },
    {
      iconClass: 'fab fa-linkedin-in',
      link: '#',
    },
  ];

  return (
    <>
      <div className='footer-style-ten theme-basic-footer zn2 position-relative'>
        <div className='container'>
          <div className='inner-wrapper'>
            <div className='row justify-content-between'>
              <div className='col-lg-3 footer-intro mb-40'>
                <div className='logo'>
                  <Link href='/'>
                    <img src='/images/logo/logo_02.png' alt='logo' width={95} />
                  </Link>
                </div>
                <p className='text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10'>
                  Best Insurance Company.
                </p>
                <p className='text-white opacity-50 fs-15 m0 d-none d-lg-block'>
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{' '}
                  jano inc.
                </p>
              </div>
              {links.map((link) => (
                <div className={link.column} key={link.id}>
                  <h5 className='footer-title text-white fw-500'>
                    {link.title}
                  </h5>
                  <ul className='footer-nav-link style-none'>
                    {link.items.map((item, i) => (
                      <li key={i}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className='col-xl-3 col-lg-4 col-md-5 mb-30'>
                <h5 className='footer-title text-white fw-500'>Address</h5>
                <p className='text-white opacity-75 mb-35'>
                  2190 Zinai terrace, Lake view <br />
                  house state, 10 no road.
                </p>
                <ul className='d-flex social-icon style-none'>
                  {socialIcons.map((icon, index) => (
                    <li key={index}>
                      <a
                        href={icon.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className={icon.iconClass} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src='/images/assets/ils_13.png'
          alt='illustration'
          className='lazy-img illustration-one'
          data-aos='fade-left'
        />
        <img
          src='/images/assets/ils_14.png'
          alt='illustration'
          className='lazy-img illustration-two'
          data-aos='fade-right'
        />
      </div>
    </>
  );
};

export default Footer;
