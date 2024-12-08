import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogImages = [
    "/images/Blogs1.png",
    '/images/Blogs2.png',
    "/images/Blogs1.png",
    '/images/Blogs2.png',
  ];

  return (
    <section className="blogs">
      <div className="container">
        <p className="section-title">Our Blogs</p>
        <h2 className="text-center">Latest News</h2>
        <div className="grid">
          {blogImages.map((src, index) => (
            <div key={index} className="blog-item">
              <img src={src} alt={`Blog ${index + 1}`} className="img" />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
