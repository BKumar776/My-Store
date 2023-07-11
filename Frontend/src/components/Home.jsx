import React from 'react';

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

import vg from "../assets/img1.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <div className='home' id='home'>
       <main>
          <h1>My Store</h1>
          <p>Service door to door</p>
          <Link to={'/menu'}>
            <button>ORDER NOW</button>
          </Link>
        </main>
     </div>
    
     <div className='home2'>
        <img src={vg}  alt="Graphics"/>
        <div>
            <p>
               My Store is the leading on-demand delivery service that can help you to get your desired orders on time via a single tap on your app. Use My Store..
            </p>
        </div>

     </div>

     <div className="home3" id="about">
        <div>
        <h1>Who we are?</h1>
        <p>
        Our online ordering system will help you transform your website into a money-making machine.
        No matter how much your business grows, you will always be able to take free unlimited orders with zero costs.
        Power your business with our free restaurant online ordering system & you’ll never have to worry about fees or commissions...
        </p>
        </div>
        
     </div>

     <div className="home4" id="brands">
     <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
     </div>
        
        
   </>
  );
};

export default Home
