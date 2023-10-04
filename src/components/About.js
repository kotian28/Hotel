import React from 'react'
import AboutImg from "../assets/about-img.jpg"

const About = () => {
  return (
    <div>
        <section className='about' id='about'>
            <h1 className='heading'>
                <span>about</span>us
            </h1>
            <div className='row'>
              <div className='image'>
                  <img src={AboutImg} alt='' />
              </div>
              <div className='content'>
              <h3>What Makes Our food Special? </h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor pretium viverra.Accumsan tortor posuere ac ut consequat semper viverra nam libero.
              </p>
              <p>
              Pharetra diam sit amet nisl suscipit adipiscing bibendum. Accumsan tortor posuere ac ut consequat semper viverra nam libero.
              Nisl pretium fusce id velit ut tortor pretium viverra.
              </p>
              <a href="#" className='btn'>Learn More</a>
              </div>
            </div>
        </section>
    </div>
  );
};

export default About;
