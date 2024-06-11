import Link from 'next/link';

import Footer from '@/components/Footer';
import DefaulHeader from '@/components/Header';
import AppBanner from '@/components/home/AppBanner';
import Banner from '@/components/home/Banner';
import Block from '@/components/home/Block';
import ContactForm from '@/components/home/ContactForm';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Service from '@/components/home/Service';
import WhyChoose from '@/components/home/WhyChoose';
import Bar from '@/components/home/Bar';

export const metadata = {
  title: 'Insurance || Jano - Creative Multipurpose React NextJS Template',
};

const Insurance = () => {
  return (
    <>
      <Hero />
      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
      <Bar />

      <div className='fancy-feature-thirtyFour mt-50'>
        <div className='container'>
          <div className='row gx-xxl-5'>
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
      <div className='fancy-feature-thirtyFive mt-90 md-mt-70'>
        <div className='container' data-aos='fade-up'>
          <Banner />
          {/* /.top-banner */}
        </div>
        {/* End .container */}
      </div>
      {/* /.fancy-feature-thirtyFive */}
      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}
      <div className='fancy-feature-thirtySix mt-190 lg-mt-140'>
        <div className='container'>
          <div className='wrapper position-relative'>
            <div className='row'>
              <div className='col-lg-6'>
                <div
                  className='title-style-one text-center text-lg-start mb-40 md-mb-20'
                  data-aos='fade-right'
                >
                  <h2 className='main-title fw-500 tx-dark m0'>
                    Discover all our Services.
                  </h2>
                </div>
              </div>
            </div>
            <div className='row'>
              <Service />
            </div>
            {/* /.row */}

            <div className='text-center md-mt-50'>
              <Link
                href='/pages-menu/service-v1'
                className='btn-twentyTwo fw-500 tran3s'
                data-aos='fade-left'
              >
                View all Services
              </Link>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySix */}
      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className='fancy-feature-thirtySeven mt-225 lg-mt-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 ms-auto order-lg-last'
              data-aos='fade-left'
            >
              <div className='ps-lg-5 ms-xxl-3'>
                <div className='title-style-one mb-40'>
                  <div className='sc-title text-uppercase'>Why Choose Us</div>
                  <h2 className='main-title fw-500 tx-dark m0'>
                    What makes us the best.
                  </h2>
                </div>
                <WhyChoose />
                {/* /.accordion-style-five */}
              </div>
            </div>
            {/* End .col-6 */}

            <div className='col-xxl-5 col-lg-6 order-lg-first'>
              <Block />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}
      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className='feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50'
        data-aos='fade-up'
      >
        <div className='container'>
          <div className='title-style-one text-center mb-50 lg-mb-20'>
            <h2 className='main-title fw-500 tx-dark m0'>Client Feedback</h2>
          </div>
        </div>
        <div className='inner-content'>{/* /.slider-wrapper */}</div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}
      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className='fancy-feature-thirtyEight mt-140 lg-mt-100'>
        <div className='container'>
          <AppBanner />
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}
      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      <div
        className='fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 '
        data-aos='fade-up'
      >
        <div className='container'>
          <div className='bg-wrapper zn2 bg-white position-relative'>
            <div className='row'>
              <div className='col-xl-11 m-auto'>
                <div className='row align-items-center'>
                  <div className='col-lg-6 ms-auto order-lg-last'>
                    <div className='text-wrapper'>
                      <img
                        src='/images/icon/icon_114.svg'
                        alt='icon'
                        className='lazy-img mb-30'
                      />
                      <div className='title-style-one'>
                        <h2 className='main-title fw-500 tx-dark m0'>
                          Let’s talk with expereince advisors.
                        </h2>
                      </div>
                      <p className='fs-20 tx-dark pt-20 m0'>
                        eiusmod tempor incididunt. Ut enim mim veniam, quis
                        nostrud elit lorem dolor.
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-5 col-lg-6 order-lg-first'>
                    <div className='form-style-two md-mb-40'>
                      <ContactForm />
                    </div>
                    {/* /.form-style-two */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className='shapes shape-text fw-500 fs-20 tx-dark text-center'>
              Fill the <br />
              form
            </div>
            <img
              src='/images/shape/shape_90.svg'
              alt='shape'
              className='lazy-img shapes shape-one'
            />
            <img
              src='/images/shape/shape_91.svg'
              alt='shape'
              className='lazy-img shapes shape-two'
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
    </>
  );
};

export default Insurance;
