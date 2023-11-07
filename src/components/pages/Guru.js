import React, { useState } from 'react';

const Guru = () => {
  return (
    <div className='brochure'>
      <div className='container'>
        <div className='page-content'>
          <div className='row mt-4'>
            <div className='col-md-8'>
              <h5 className='mb-4'>GURU: Smt. Anandavalli Srinivas</h5>
              <p className='normal-para'>
                Guru Smt. Anandavalli Srinivas is the founder and director of
                Navarasa Academy of Performing Arts, Tampa, along with her
                husband, Sri. M.R. Venupuri Srinivas. She trained under the
                guidance of Mrinalini Sarabhai and Dr. Mallika Sarabhai at the
                renowned Darpana Academy of Performing Arts in Ahmedabad, India.
                Darpana Academy is one of India’s finest institutes when it
                comes to spreading Indian classical dance and art around the
                world. Smt. Anandi was a lead choreographer and dancer for the
                academy. She performed solo and in dance dramas and was part of
                Darpana’s professional dance troupe, which traveled globally.
                She has won several awards and honors throughout her 30-year
                career and has trained under various accomplished teachers. She
                has conducted several dance programs, recitals, and charity
                shows through her established institution and has helped raise
                funds for multiple organizations. As a teacher, she is a
                thorough professional and a perfectionist who imparts knowledge
                and training to motivate students about this divine art form. As
                an artist, she is known for her outstanding and refreshingly
                unique choreography. She certainly brings out the best in her
                students.
              </p>
            </div>
            <div className='col-md-4 text-center '>
              <img
                src='/images/brochure-img-1.png'
                className='img-fluid mb-4'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guru;
