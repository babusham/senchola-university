import React from 'react';
import './Home.css';
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiPriceTag3Line } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiBuilding2Line, RiPagesFill } from "react-icons/ri";
import { MdOutlineBusinessCenter, MdOutlineDeveloperMode } from "react-icons/md";
import { BsLaptop, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineMessage, AiFillStar } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";

const Home = () => {
  return (
    <>
    <div className="section1">
        <div className="left ">
          <div className="bubble__cream"></div>
          <div className="bubble__lightgreen"></div>
          <div className="bubble__pink"></div>
          <div className="bubble__suncolor"></div>
        <HiOutlineBookOpen className='section1__topBook '/>
        <h3 className='fw-bold mb-2'>Build Your Career with Senchola</h3>
        <p className='section1__left--p mb-4 text-muted '>Welcome to Lagos High school where raising self <br /> reliant and god-fearing children is our goal</p>
        <button className='section1__left--btn'>LEARN MORE </button>
       <HiOutlineBookOpen className='section1__middleBook ' />
       <HiOutlineBookOpen className='section1__3Book '/>
        </div>
        <div className="right">
            <img className='section1__img' src={require('../assets/guy-lesson 2.png')} alt='A man' width={'25%'} height={'73%'}/> 
            <div className='section1__right--bigBubble'></div>
        </div>

    </div>
    
    <div className="section2 container mb-5">
      <h3 className='section2__h3 text-center mb-5'>EXPLORE OUR PROGRAM</h3>
      <div className="section2__cards ">
      <div className='section2__programs'>
        <FaBookOpenReader className='icons text-center' />
        <h6 className='text-center fw-bold'>Programs</h6>
        <p className='section2__p'>we offer junior and senior <br />
        secondary school Programs
        </p>
        <a href="#" className='text-center more'>see more &gt; </a>
      </div>
      <div className='section2__pricing'>
        <RiPriceTag3Line className='icons text-center '/>
      <h6 className='text-center fw-bold'>Pricing</h6>
        <p className='section2__p'>Our prices differ for various classes <br />
        and also based on if students are...
        </p>
        <a href="#" className='text-center more'>see more &gt; </a>
      </div>
      <div className='section2__certifications'>
        <LiaCertificateSolid className='icons text-center'/>
      <h6 className='text-center fw-bold'>Certifications</h6>
        <p className='section2__p' >Upon leaving the junior secondary, <br />
        our students obtain the junior...
        </p>
        <a href="#" className='text-center more '>see more &gt; </a>
      </div>
      </div>
    </div>

    <div className="section3 my-5 ">
      
      <div className="section3__wrap">
      <div className="section3__bubble1"></div>
      <div className="section3__bg my-5">
        <div className="section3__bg--left container">
        <h4 className='mt-5 fw-bold'>Expert Talent with <br />
        Curated Resources <br />
        & Support</h4>

        <p className='section3__bold'>
          we have the best facilities to ensure that <br />
          studentshave the best experience while <br />
           learning. We believe that practicals helips in <br />
          fast learning.
        </p>

        <button className='section1__left--btn' >SEE MORE</button>
        </div>
        <div className="section3__bg--right">
          <div className="section3__bg--card1">
          <RiBuilding2Line className='section3__bulding' />
          <h6 className='section3__bg--right--infrastructure '>Good Infrastructure</h6>
          <p className='section3__card1-p'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum blanditiis eligendi laboriosam! Exercitationem incidunt facere quasi voluptate doloribus!
          </p>
          </div>

          <div className="section3__bg--card2 mb-5">
          <MdOutlineBusinessCenter className='section3__business' />
          <h6 className='section3__bg--right--business '>Business</h6>
          <p className='section3__card2-p'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum blanditiis eligendi laboriosam! Exercitationem incidunt facere quasi voluptate doloribus!
          </p>
          </div>

          <div className="section3__bg--card3 mb-5">
          <BsLaptop className='section3__supportTeam' />
          <h6 className='section3__bg--right--supportTeam '>Best Support Team</h6>
          <p className='section3__card3-p'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum blanditiis eligendi laboriosam! Exercitationem incidunt facere quasi voluptate doloribus!
          </p>
          </div>

          <div className="section3__bg--card4 mb-5">
          <AiOutlineMessage className='section3__managed' />
          <h6 className='section3__bg--right--managed '>Senchola Managed</h6>
          <p className='section3__card4-p'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum blanditiis eligendi laboriosam! Exercitationem incidunt facere quasi voluptate doloribus!
          </p>
          </div>
        </div>
      </div>
      <HiOutlineBookOpen className='sectoin3__book'/>
      <div className="section3__bubble2"></div>

      </div>
    </div>

    <div className="section4 container">
      <div className="section4__left">
      <HiOutlineBookOpen className='bookopen__section4__photo'/>
      <div className="lightorange__bubble"></div>
        <img src={require('../assets/Rectangle 4584.png')} className='section4__img' />

        <div className="glassmorphism">
        <div className="glassmorphism1">
          <div className="glassmorphism__icon glassmorphism__icon1">
            <RiPagesFill />
          </div>
          <div className="glassmorphism__right">
          <div className="glassmorphism__courses">
          5 Courses
          </div>
          <div className="glassmorphism__designation">
          UI/UX Design
          </div>
          </div>
          </div>
          <div className="glassmorphism2">
          <div className="glassmorphism__icon glassmorphism__icon2">
            <MdOutlineDeveloperMode />
          </div>
          <div className="glassmorphism__right">
          <div className="glassmorphism__courses">
          10 Courses
          </div>
          <div className="glassmorphism__designation">
          Development
          </div>
          </div>
          </div>
          <div className="glassmorphism3">
          <div className="glassmorphism__icon glassmorphism__icon3">
            <HiSpeakerphone />
          </div>
          <div className="glassmorphism__right">
          <div className="glassmorphism__courses">
          4 Courses
          </div>
          <div className="glassmorphism__designation">
          Marketing
          </div>
          </div>
          </div>

        </div>

        
      </div>
      <div className="section4__right">
        <h4 className='section4__right__h3'>Learn without limits and spread knowledge.</h4>
        <p className='section4__right__p'>
          Build new skills that "this is my year" feeling with courses, certificates and degrees from world class company like Senchola.
        </p>
        <button className='section4__right__btn '>See Courses</button>
        <span> <BsFillPlayFill className='section4__right__watch'/> Watch Video</span>
        <HiOutlineBookOpen  className='bookopen__section4__last'/>

        <p className='section4__right__p section4__margin-top'>Recent engagement</p>
        <p className='section4__right__p'>
          <span className='section4__right__bold'>200+</span>
        &nbsp;  Students
          <span className='section4__right__bold'> &nbsp; 6+</span>
          &nbsp;   Courses
        </p>
      </div>

    </div>

    <div className="section5">
      <h3 className='text-center section5__h3'>OUR GALLERY</h3>
      <HiOutlineBookOpen className='section5__bookopen'/>

      <div className="paleblue_bubble"></div>

      <div className="grid_photos container my-5">

        <img src={require('../assets/Rectangle 18.png')} alt='photo' width={'90%'} className='grid_photos_1'/>
        <div className="span2">
        <img src={require('../assets/Rectangle 19.png')} alt='photo' width={'90%'} className='grid_photos_2'/>
        <img src={require('../assets/Rectangle 20.png')} alt='photo' width={'90%'} className='grid_photos_3'/>
        </div>
        <img src={require('../assets/unsplash_0Zx1bDv5BNY.png')} alt='photo' width={'90%'} className='grid_photos_4'/>
        <HiOutlineBookOpen className='bookopen__photosDown'/>
      </div>
      
    </div>

    <div className="section6 mb-5">
      <h3 className='text-center section6__h3'>TESTIMONIALS</h3>
      <HiOutlineBookOpen className='testimonial__bookopen'/>
      <p className='text-center section6__h3p '>What people say about us</p>
      <div className="user_wrapper container">

        <div className="section6__pink_bubble"></div>
      <div className="user_card_wrapper">
      <div className="user_card">
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <p className='user_card_p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere ipsam, ut possimus molestias atque minus iure nesciunt odio voluptatibus.
      </p>

      <div className="user">
        <img src={require('../assets/profileImg1.png')} alt='user-photos' className='pro_pic' />
        <div className="profile_details">
        <div className="user_name">Alman Kesen</div>
        <div className="designation">UI UX Designer</div>
        </div>
      </div>
      </div>

      <div className="user_card">
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <p className='user_card_p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere ipsam, ut possimus molestias atque minus iure nesciunt odio voluptatibus.
      </p>

      <div className="user">
        <img src={require('../assets/profileImg2.png')} alt='user-photos' className='pro_pic'/>
        <div className="profile_details">
        <div className="user_name">Janney jacksen</div>
        <div className="designation">Web Developer</div>
        </div>
      </div>
      </div>

        <HiOutlineBookOpen className='section6__bookopen'/>

      <div className="user_card">
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <p className='user_card_p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere ipsam, ut possimus molestias atque minus iure nesciunt odio voluptatibus.
      </p>

      <div className="user">
        <img src={require('../assets/profileImg3.jpg')} alt='user-photos' className='pro_pic'/>
        <div className="profile_details">
        <div className="user_name">Eleveny Petun</div>
        <div className="designation">App Developer</div>
        </div>
      </div>
      </div>

      <div className="user_card">
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <AiFillStar className='rating'/>
      <p className='user_card_p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere ipsam, ut possimus molestias atque minus iure nesciunt odio voluptatibus.
      </p>

      <div className="user">
        <img src={require('../assets/profileImg4.png')} alt='user-photos' className='pro_pic'/>
        <div className="profile_details">
        <div className="user_name">Klessen Amy</div>
        <div className="designation">Flutter Developer</div>
        </div>
      </div>
      </div>
      </div>
      <div className="section6__blue_bubble"></div>
      </div>
    </div>
    </>
  )
}

export default Home;