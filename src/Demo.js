import React, { useEffect } from 'react';
import logo from './applex.jpg';
import logo2 from './159047687653948028.jpg';
import Particles from 'react-particles-js';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Demo=()=>{
useEffect(() =>{
Aos.init({duration:2000});
}, []);
return(
<div className="abc">
   <div class="header">
      <Particles
      canvasClassName="example"
      params={{
      particles: {
      number: {
      value: 200,
      density: {
      enable: true,
      value_area: 1000,
      }
      },
      },
      }}
      />
      <div class="inl">
         <img src={logo} class="rounded-circle"/>
      </div>
      <div class="inl1">
         <img src={logo2} class="rounded i"/>
      </div>
      <div class="nav center3">
         <input type="checkbox" id="nav-check"/>
         <div class="nav-header">
         </div>
         <div class="nav-btn">
            <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
            </label>
         </div>
         <div class="nav-links">
            <a href="#ABOUT" target="_blank">About Us</a>
            <a href="#PROJECT" target="_blank">Projects</a>
            <a href="#TESTIMONIAL" target="_blank">Testimonials</a>
            <a href="#TEAM" target="_blank">Team Members</a>
            <a href="#CONTACT" target="_blank">Contact Us</a>
         </div>
      </div>
   </div>
   <div class="car"></div>
   <div class="container-fluid main1">
      <div class="row">
         <div class="col-md-4" data-aos="slide-up">
            <h2 class="display-1">Experience app development with applex.in</h2>
            <br/>
            <p> Bring your mobile app ideas into life with us</p>
            <br/>
            <button type="button" class="btn btn-primary" ><a href="#" > Learn More </a></button>
         </div>
      </div>
   </div>
   <div class="container tmarginm" id="ABOUT">
      <p class="lead text-center ">ABOUT US</p>
      <h2 class="display-3 text-center">We help brands and individuals solve their app related challenges with gratifying solutions</h2>
      <p class="lead text-center tmargin">We are a group of professionals who believe that in this growing scenario of digitization and innovation, mobile based applications are the need of the day.
         applex.in can help your business or start-up reach out to the millions of smartphone users worldwide.
      </p>
   </div>
   <div class="container tmarginm ">
      <p class="lead text-center">WHAT WE DO</p>
      <h2 class="display-3 text-center">Amazing features to convince you to use our products and services</h2>
      <p class="lead text-center tmargin ">Mobile apps can help increase engagement and foster customer loyalty and brand recognition. If you’re looking for a team to support your mobile application development project, applex.in can help. We offer cutting-edge research, development, and mobile application design to match your unique project requirements. We also provide quality assurance by industry professionals who ensure your project is done to your complete satisfaction and produces the results you’re looking for. Finally, our mobile application solutions can be built and tested to function seamlessly across any mobile device, whether it is a small smartphone or a large tablet.
      </p>
   </div>
   <div class="container tmarginm ">
      <div class="row tmargin">
         <div class="col-md-6 box" data-aos="slide-up">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/2017/06/editing-free-img.png"/><br/>Design</h2>
               <br/>
               <p class="lead text-center" >Best in class UI/UX designs with regular updates to make your app stay updated with the latest design trends.
               </p>
            </div>
         </div>
         <div class="col-md-6 box" data-aos="slide-up">
            <div class="align-items-center">
               <h2 class="display-3 text-center">  <img src="https://applex.in/wp-content/uploads/2017/06/coding-free-img.png"/><br/>Development</h2>
               <br/>
               <p class="lead text-center">Tailor-made apps underpinned by deep knowledge of material design and enterprise-grade mobile security can create a unified experience across varied screen sizes.
               </p>
            </div>
         </div>
      </div>
      <div class="row tmargin">
         <div class="col-md-6 box" data-aos="slide-up">
            <div class="align-items-center">
               <h2 class="display-3 text-center">  <img src="https://applex.in/wp-content/uploads/2017/06/support-free-img.png"/><br/>Debugging &Testing</h2>
               <br/>
               <p class="lead text-center">Extensive debugging and testing to ensure that the end user gets to experience a completely bug-free product
               </p>
            </div>
         </div>
         <div class="col-md-6 box" data-aos="slide-up">
            <div class="align-items-center">
               <h2 class="display-3 text-center" >  <img src="https://applex.in/wp-content/uploads/2017/06/marketing-1-free-img.png"/><br/>Help & Support</h2>
               <br/>
               <p class="lead text-center ">Get 24×7 help and support regarding any app you want us to develop for you or your company.
               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid tmarginm ">
      <br/>
      <div class="row">
         <div class="col-md-6">
            <img height="500px" src=" https://applex.in/wp-content/uploads/2020/03/rsz_21430-min_1-2048x1361.jpg" alt="" class="w-100" data-aos="slide-right"/>
         </div>
         <div class="col-md-6">
            <div class=" align-items-center h-100" data-aos="fade-right">
               <h2 class="text-center display-3" >Why Choose Us?</h2>
               <br/>
               <p class="lead text-center">
                  Quality Designs<br/>
                  _________________________________________
               </p>
               <p class="lead text-center">
                  24×7 Live Support<br/>
                  _________________________________________
               </p>
               <p class="lead text-center">
                  Result Oriented Projects<br/>
                  _________________________________________
               </p>
               <p class="lead text-center">
                  Constant Monitorization<br/>
                  _________________________________________
               </p>
               <p class="lead text-center" >
                  Experienced Professionals
               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="container tmarginm" id="PROJECT">
      <p class="lead text-center">EXPERIENCE</p>
      <h2 class="text-center display-2">Our Projects</h2>
      <br/>
      <div class="row tmargin">
         <div class="col-md-4 box2">
            <img src="https://applex.in/wp-content/uploads/2020/03/stiQr-it-icon-17.1-1-600x598.png" alt="" class="w-100" data-aos="zoom-in"/>
         </div>
         <div class="col-md-8">
            <div class="align-items-center h-100">
               <div class="col" data-aos="slide-up">
                  <h2 class="display-3">stiQR it</h2>
                  <h4 class="display-4">e-Verification for online certificates</h4>
                  <p class="lead">stiQR it Verifications ensures that no misrepresentation of information occurs and verifies that your credentials are uniquely yours.
                     We aim to provide you with a safe and secure verification environment by scanning the QR provided on your certificate through the stiQR it application.
                     <br /><br />
                     <button type="button" class="btn btn-primary" data-aos="slide-up"><a href="#" > Download  </a></button>
                  </p>
               </div>
            </div>
         </div>
      </div>
      <div class="row tmargin">
         <div class="col-md-4 order-md-4 box2">
            <img src="https://applex.in/wp-content/uploads/2020/03/SnapLingo-1-600x600.png" alt="" class="w-100" data-aos="zoom-in"/>
         </div>
         <div class="col-md-8 order-md-1">
            <div class="align-items-center h-100">
               <div class="col"data-aos="slide-up">
                  <h2 class="display-3" >SNAPLINGO</h2>
                  <h4 class="display-4">One stop destination for all image to text (OCR) conversion troubles.</h4>
                  <p class="lead">Want to extract text from any image, edit and save as doc/pdf? Want to scan QR/Bar codes? Want to locate a place from a signboard and translate? Want to search images in google?
                     Snaplingo comes as a package solution to all these problems.
                     <br /><br />
                     <button type="button" class="btn btn-primary" data-aos="slide-up"><a href="#" > Download  </a></button>
                  </p>
               </div>
            </div>
         </div>
      </div>
      <br/>
      <div class="row tmargin">
         <div class="col-md-4 box2">
            <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-07-at-20.39.32-1-e1585750905146.jpeg" alt="" class="w-100" data-aos="zoom-in"/>
         </div>
         <div class="col-md-8">
            <div class=" align-items-center h-100">
               <div class="col" data-aos="slide-up">
                  <h2 class="display-3">INNOVACION</h2>
                  <h4 class="display-3">Get to know the events, register and gear up for the annual IEM-UEM techfest, Innovacion.</h4>
                  <p class="lead">Must be confused which exhibition to attend, participate and which events to register and how. Want the complete set of information along with live updates on spot? Want to know your ID, your team ID that is hard to remember?
                     We made that easier for you with this app.
                     <br /><br />
                     <button type="button" class="btn btn-primary" data-aos="slide-up"><a href="#" > Download  </a></button>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid tmarginm ">
      <p class="lead text-center ">FACTS</p>
      <h2 class="display-2 text-center">Here is why we claim to be the best choice for you!</h2>
      <div class="row tmargin">
         <div class="col-md-3" data-aos="flip-right">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/2017/06/projects-icon-free-img.png"/><br/>5</h2>
               <p class="lead text-center" >Projects Completed
               </p>
            </div>
         </div>
         <div class="col-md-3" data-aos="flip-right">
            <div class="align-items-center">
               <h2 class="display-3 text-center">  <img src="https://applex.in/wp-content/uploads/2017/06/heart-icon-free-img.png"/><br/>1K+</h2>
               <p class="lead text-center">Happy Users
               </p>
            </div>
         </div>
         <div class="col-md-3" data-aos="flip-left">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/2017/06/code-lines-icon-free-img.png"/><br/>1M+</h2>
               <p class="lead text-center" >Lines of Code.
               </p>
            </div>
         </div>
         <div class="col-md-3" data-aos="flip-left">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/2017/06/award-icon-free-img.png"/><br/>6+</h2>
               <p class="lead text-center" >Awards
               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid tmarginm" id="TESTIMONIAL">
      <p class="lead text-center">TESTIMONIALS</p>
      <h2 class="text-center display-2">Check out what people say about us!</h2>
      <div class="row">
         <div class="col">
            <div class="carousel slide" data-ride="carousel" id="quote-carousel" data-interval="2500" data-pause="false">
               <div class="carousel-inner text-center">
                  <div class="item active">
                     <blockquote>
                        <div class="row">
                           <div class="col-sm-8 col-sm-offset-2 testimonial-height text-center">
                              <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-13-at-18.26.28-100x100.jpeg" class="rounded-circle" alt=""/>
                              <h2 class="display-4">Sandeep Dwivedi</h2>
                              <h4>Innovation Officer, DST, Government of Uttar Pradesh</h4>
                              <br/>
                              <h4>&quot;Project is really wonderful. If we want to explore the mission of Digital India then we must have to recognize the innovators of this projects. Heartiest Blessings.&quot;</h4>
                           </div>
                        </div>
                     </blockquote>
                  </div>
                  <div class="item ">
                     <blockquote>
                        <div class="row">
                           <div class="col-sm-8 col-sm-offset-2 testimonial-height text-center">
                              <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-13-at-18.31.07-100x100.jpeg" class="rounded-circle" alt=""/>
                              <h2 class="display-4">Abhinav Gupta</h2>
                              <h4>IRS, Govt. Of India, P.S. to Dr Harsh Vardhan</h4>
                              <br/>
                              <h4>&quot;Excellent idea and very innovative.&quot;</h4>
                           </div>
                        </div>
                     </blockquote>
                  </div>
                  <div class="item ">
                     <blockquote>
                        <div class="row">
                           <div class="col-sm-8 col-sm-offset-2 testimonial-height text-center">
                              <img src="https://applex.in/wp-content/uploads/2020/03/iet-chairman-image-100x100.jpg" class="rounded-circle" alt=""/>
                              <h2 class="display-4">Dr.V.K Agarwal</h2>
                              <h4>Chiarman, IET Alwar</h4>
                              <br/>
                              <h4>&quot;Great idea, willing to implement this in our college.&quot;</h4>
                           </div>
                        </div>
                     </blockquote>
                  </div>
                  <div class="item ">
                     <blockquote>
                        <div class="row">
                           <div class="col-sm-8 col-sm-offset-2 testimonial-height text-center">
                              <img src="https://applex.in/wp-content/uploads/2020/03/iet-executive-director-image-100x100.jpg" class="rounded-circle" alt=""/>
                              <h2 class="display-4">Dr.Manju Agarwal</h2>
                              <h4>General Secretary, IET Alwar</h4>
                              <br/>
                              <h4>&quot;Want to collaborate with this project.&quot;</h4>
                           </div>
                        </div>
                     </blockquote>
                  </div>
               </div>
               <a data-slide="prev" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
               <a data-slide="next" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid tmarginm ">
      <h2 class="display-2 text-center">Who We've Worked With</h2>
      <div class="row tmargin">
         <div class="col-md-2" data-aos="flip-right">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/logo1-opibusy62k8y5arhnvok74p80txivmdpwhpdtrooc0.png"/></h2>
            </div>
         </div>
         <div class="col-md-2" data-aos="flip-right">
            <div class="align-items-center">
               <h2 class="display-3 text-center">  <img src="https://applex.in/wp-content/uploads/elementor/thumbs/imageds-onizehxb4jl0wsbs9oasi6cbjqq6kpht8o0yupfmeo.png"/></h2>
            </div>
         </div>
         <div class="col-md-2" data-aos="flip-left">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/0-1-omiek1njhpq3s6udnh404j1uip3f445zsik0hhgawg.jpg"/></h2>
            </div>
         </div>
         <div class="col-md-2" data-aos="flip-left">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/logo-omiek3j7vdsofernchx99ikrpgu5jidggruzg1dik0.png"/></h2>
            </div>
         </div>
         <div class="col-md-2" data-aos="flip-left">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/download-2-omiek88etjz41gktl1ye3ze2oe6zlzw45f4euf6jow.png"/></h2>
            </div>
         </div>
         <div class="col-md-2" data-aos="flip-left">
            <div class="align-items-center">
               <h2 class="display-3 text-center"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/download-1-omiek7akmpxtpum6qjjrjhmm30bmeasdtagxd57xv4.png"/></h2>
            </div>
         </div>
      </div>
   </div>
   <div class="container tmarginm" id="TEAM">
      <p class="lead text-center" >TEAM</p>
      <h2 class="display-2 text-center">Meet our team of expert Developers</h2>
      <div class="row tmargin">
         <div class="col-md-4">
            <div class="our-team">
               <div class="pic">
                  <img src="https://applex.in/wp-content/uploads/2020/03/33180111_577344002648558_6925806232779358208_o.jpg"/>
                  <ul class="social">
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-instagram"></a></li>
                     <li><a href="#" class="fa fa-linkedin"></a></li>
                  </ul>
               </div>
               <div class="team-content">
                  <div class="team-info">
                     <h3 class="title">Sourajit Basu</h3>
                     <span class="post">Head App Developer<br/>Co-Founder applex.in</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="our-team">
               <div class="pic">
                  <img src="https://applex.in/wp-content/uploads/2020/03/80571107_143011440465361_990146418796658688_o.jpg"/>
                  <ul class="social">
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-instagram"></a></li>
                     <li><a href="#" class="fa fa-linkedin"></a></li>
                  </ul>
               </div>
               <div class="team-content">
                  <div class="team-info">
                     <h3 class="title">Ankita De</h3>
                     <span class="post">Head App Developer<br/>Co-Founder applex.in</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="our-team">
               <div class="pic">
                  <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-13-at-20.37.41-e1584889009418.jpeg"/>
                  <ul class="social">
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-instagram"></a></li>
                     <li><a href="#" class="fa fa-linkedin"></a></li>
                  </ul>
               </div>
               <div class="team-content">
                  <div class="team-info">
                     <h3 class="title">Prajata Samanta</h3>
                     <span class="post">Web Head</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="our-team">
               <div class="pic">
                  <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-09-at-20.13.23.jpeg"/>
                  <ul class="social">
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-instagram"></a></li>
                     <li><a href="#" class="fa fa-linkedin"></a></li>
                  </ul>
               </div>
               <div class="team-content">
                  <div class="team-info">
                     <h3 class="title">Sarbari Choudhury</h3>
                     <span class="post">Android Developer</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="our-team">
               <div class="pic">
                  <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-14-at-14.11.46-e1584888490865.jpeg"/>
                  <ul class="social">
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-instagram"></a></li>
                     <li><a href="#" class="fa fa-linkedin"></a></li>
                  </ul>
               </div>
               <div class="team-content">
                  <div class="team-info">
                     <h3 class="title">Saikat Choudhury</h3>
                     <span class="post">Android Developer</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="our-team">
               <div class="pic">
                  <img src="https://applex.in/wp-content/uploads/2020/03/75241179_775063572949471_7798094398171906048_n.jpg"/>
                  <ul class="social">
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-instagram"></a></li>
                     <li><a href="#" class="fa fa-linkedin"></a></li>
                  </ul>
               </div>
               <div class="team-content">
                  <div class="team-info">
                     <h3 class="title">Sushmita Biswas</h3>
                     <span class="post">Graphics Head</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-4">
         </div>
         <div class="col-md-4">
            <div class="our-team">
               <div class="pic">
                  <img src="https://applex.in/wp-content/uploads/2020/03/Arvil-Sen-e1584888762353.jpeg"/>
                  <ul class="social">
                     <li><a href="https://www.facebook.com/arvilsen/" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-instagram"></a></li>
                     <li><a href="#" class="fa fa-linkedin"></a></li>
                  </ul>
               </div>
               <div class="team-content">
                  <div class="team-info">
                     <h3 class="title">Arvil Sen</h3>
                     <span class="post">Operations Head</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <footer class="footer-distributed">
      <div class="footer-left">
         <h3>About<span> applex.in </span></h3>
         <p class="footer-links">
            <a href="#"> Home </a>
            <br/>
            <a href="#"> About Us </a>
            <br/>
            <a href="#"> Terms of Service </a>
            <br/>
            <a href="#"> Privacy policy </a>
         </p>
         <p class="footer-company-name">© 2020 applex.in | Powered by applex.in | All rights Reserved</p>
      </div>
      <div class="footer-center">
         <div>
            <i class="fa fa-map-marker"></i>
            <p>Sector V, Salt Lake<br/>Kolkata<br/>West Bengal, India.
            </p>
         </div>
         <div>
            <i class="fa fa-phone"></i>
            <p>+91 6290438875</p>
         </div>
         <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:contact@applex.in">contact@applex.in</a></p>
         </div>
      </div>
      <div class="footer-right">
         <p class="footer-company-about">
            <span>About the company</span>
            We provide custom android and ios application with best in class UI design
         </p>
         <br/>
         <p class="footer-company-about"><span>Reach us on</span></p>
         <div class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
         </div>
      </div>
   </footer>
</div>
);
}
export default Demo;
