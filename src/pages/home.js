import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width:  window.innerWidth > 600 ? imageDetails.width : window.innerWidth,
                height: window.innerWidth > 600 ? imageDetails.height : 350,
              }}>
              <div className='frame'>
                <Link to={`/more`}>
                  <ProgressiveImage
                    src={require("../img/org.jpeg")}
                    placeholder={require("../img/cropped.jpeg")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Roosevelt Island'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        style={{
                          objectFit:"cover",
                          objectPosition: window.innerWidth > 600 ? "40% 30%" : "55% -100px",   
                        }}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'
              style={{
                width: window.innerWidth > 600 ? "100%" : "90%",
                marginLeft:  window.innerWidth < 600 ? "20px" : "",
              }}>
              <div className='title'>Febrero 9, 2024</div>
              <div className='location'>
                <span>40.757094</span>
                <span>-73.955633</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;