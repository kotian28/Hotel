import React from 'react';
import {blog} from "../assets/Data";

const Blog = () => {
  return (
    <section className='blog' id='blog'>
        <h1 className='heading'>
            Our <span>Blogs</span>
        </h1>
        <div className='box-container'>
            {blog.map((item, index) => (
                <div className='box' key={index}>
                    <div className='image'>
                        <img src={item.img} alt=''/>                    
                    </div>
                    <div className='content'>
                        <a href="#" className='title'>
                            Tasty and Refreshing 
                        </a>
                        <span>By Admin/25th May,2023</span>
                        <p>
                            Lorem Ipsum Dolor Sit Amet Consectetur Adispisicing
                            Elit. Non, Dicta.
                        </p>
                        <a href="#" className='btn'>
                            Read more
                        </a>
                    </div>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default Blog;
