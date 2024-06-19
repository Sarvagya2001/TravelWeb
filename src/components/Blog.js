// src/components/Blog.js
import React from 'react';
import './Blog.css'; // Import the CSS file for styling
import BlogImage1 from '../images/blog1.jpg';
import BlogImage2 from '../images/blog2.jpg';

const Blog = () => {
  return (
    <div className="blog">
      <div className="top-section">
        <div className="connector-line-left"></div>
        <div className="centered-text">
          <p className="bold-text">Blog Title</p>
        </div>
        <div className="connector-line-right"></div>
      </div>
      <p className="blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vel risus aliquam, vel accumsan turpis fermentum.</p>

      <div className="images-container">
        {/* Image 1 */}
        <div className="image-container">
          <div className="top-left-text">16 July 2019</div>
          <img src={BlogImage1} alt="Blog 1" className="blog-image" />
          <div className="bottom-text">
            <span>Post By: Nisha Sharma</span>
            <span>05 Likes 06 Comments</span>
          </div>
          <p className="bottom-paragraph">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Image 2 */}
        <div className="image-container">
          <div className="top-left-text">21 August 2019</div>
          <img src={BlogImage2} alt="Blog 2" className="blog-image" />
          <div className="bottom-text">
            <span>Post By: Nidhi Sharma</span>
            <span>05 Likes 06 Comments</span>
          </div>
          <p className="bottom-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;


