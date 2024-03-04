import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TeamImage from './Images/MEO3.jpg';
import image1 from './Images/ME02.jpg';
import image2 from './Images/MechDTalks.jpg';
import image3 from './Images/ME1.jpg';
import image4 from './Images/ME003.jpg';
import image5 from './Images/ME5.jpg';
import './Home.css';

const Home = () => {
 
  
  const images = [image1, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const showNextImage = () => {
  //   setCurrentImageIndex((prevIndex) => {
  //     if (prevIndex === images.length - 1) {
  //       // If it's the last image, reset to the first image
  //       return 0;
  //     } else {
  //       // Otherwise, move to the next image
  //       return prevIndex + 1;
  //     }
  //   });
  // };
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isHovered, setCurrentImageIndex, images.length]);
  useEffect(() => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }

    return () => {
      // Optionally exit full-screen when the component unmounts
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts



  return (
    <>
    <section className="home-section">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow left"
          onClick={showPrevImage}
        />
        <div className="image-slider" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow right"
          onClick={showNextImage}
        />
      </div>

      <section className="about-us-section">
        <div className="about-us-overlay"></div>
        <div className="container">

          <div className="section-heading">
            <h2 className="mekanika-title">
              <span>M</span>
              <span>E</span>
              <span>K</span>
              <span>A</span>
              <span>N</span>
              <span>I</span>
              <span>K</span>
              <span>A</span>
            </h2>
          </div>
          <div className="content">
            <div className="text">
            <p>
              Mekanika is a passionate community of students and Alummni of Department of Mechanical Engineering at IIT Kharagpur who are dedicated to advancing the field of
              Mechanical engineering. Our mission is to building connections,
              collaboration, and education in the world of Mechanical engineering.
            </p>
            <p>
              We believe in pushing boundaries, exploring new frontiers, and
              finding solutions to Mechanical Engineering students by conducting Events. Our team is
              committed to excellence and continuous learning.
            </p>
            </div>
            <div className="image">
              <img src={TeamImage} alt="Our Team" />
            </div>
          </div>
        </div>
      </section>
    </section>
        <button onClick={() => document.documentElement.requestFullscreen()}>
        Enter Fullscreen
      </button>
    </>
  );
};
 

export default Home;
