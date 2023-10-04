import React from 'react';
import {review} from "../assets/Data";
import qouteImg from "../assets/quote-image.jpg";

const Review = () => {
  return (
     <section className='review' id='review'>
        <h1 className='heading'>
            Customer's <span>Review</span>
        </h1>
        <div className='box-container'>
            {review.map((item,index) => (
                    <div className='box'>
                        <img src={qouteImg} alt="" className='quote' />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <img src={item.img} alt='' className='user'/>
                    <h3>John Deo</h3>
                    <div className='stars'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star-half-alt' />
                    </div>
                    </div>
                ))
            }

        </div>
     </section>
  )
};

export default Review;
