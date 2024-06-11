import React from 'react';

const Banner = () => {
  return (
    <div className='top-banner text-center'>
      <h2 className='tx-dark mb-20'>Top Rated Insurance Agency</h2>
      <p className='text-lg tx-dark opacity-75 mb-30 lg-mb-20'>
        “I couldn’t have asked for a better experience with Jano!”
      </p>
      <div className='d-inline-flex align-items-center'>
        <ul className='d-flex style-none rating'>
          {[...Array(5).keys()].map((id) => {
            return (
              <li key={id}>
                <i className='fa-solid fa-star' />
              </li>
            );
          })}
        </ul>
        <div className='fs-20 ms-4'>
          <strong className='fw-500 tx-dark'>4.8</strong>{' '}
          <span className='tx-dark opacity-25'>(30k Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
