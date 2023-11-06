import React, { useState } from 'react';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <div className='page-content'>
        <h4 className='text-center mb-5'>BIO</h4>
        <div className='row mt-4'>
          <div className='col-md-6'>
            <img src='/images/about-me.png' className='img-fluid' />
          </div>
          <div className='col-md-6 color-half-white'>
            <p>
              Esha Gokulram is a junior in Seminole High School’s IB program.
              She loves coaching young kids and volunteers at the Orlando
              Science Center. She is an active member of multiple clubs at her
              school and has been part of their Varsity Golf Team for the last
              two academic years.{' '}
            </p>
            <p>
              Esha has been learning Bharatanatyam from Guru Anandhi Srinivas
              for nearly a decade. With Guru’s guidance, she developed a great
              passion for this classical dance and has performed at community
              events and temples locally and out of state. As a result, she
              received the Student Achievers’ Award in 2022 for preserving
              Indian culture and language, presented by the Asian American
              Heritage Council of Central Florida. In addition to classical
              dance, Esha has been learning Western classical Violin for the
              last ten years and has achieved Royal Conservatory of Music
              certifications.{' '}
            </p>
            <p>
              Esha was a national finalist in the 2019 National American Miss
              pageant with her award-winning speech in the preteen category.
              Odessey of the mind has been a significant part of her middle
              school that fueled her creative mind, and their team ranked
              twelfth place at the World Finals in 2019. She enjoys coding, has
              competed at hackathons, and obtained the game developer
              certification.
            </p>
            <p>
              She thanks God, her Guru, the orchestra, parents, grandparents,
              relatives, and friends for their support and encouragement for a
              successful Arangetram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
