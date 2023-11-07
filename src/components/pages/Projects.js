import React, { useState } from 'react';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='container'>
        <div className='page-content'>
          <div className='row mt-4'>
            <div className='col-md-5 order-2 order-md-1'>
              <h4 className=''>PROJECTS</h4>
              <p>AdventHealth Hospital</p>
              <p>National Young Arts Competition</p>
              <p>Navarasa Academy of Performing Arts</p>
              <p>Mrityun Dance Studio</p>
              <p>Orlando Science Center</p>
              <p>Orlando Tamil Sangam</p>
              <p>U.S. Hunger (Formerly Feeding Children Everywhere)</p>
              <p>Website Development & Certifications</p>
              <p>Math Tutor</p>
            </div>
            <div className='col-md-7 order-1 order-md-2'>
              <div className='project-bg'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
