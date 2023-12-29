import logo from '../src/images/logo.jpg';
import chef_left from '../src/images/chef_left.jpeg';
import chef_right from '../src/images/chef_right.png';
import chef_center from '../src/images/chef_center_1.png';
import chef_center_2 from '../src/images/chef_center_2.png';
import card_1 from '../src/images/card_1.png';
import card_2 from '../src/images/card_2.png';
import card_3 from '../src/images/card_3.png';
import chef_bottom from '../src/images/chef_bottom.png';
import slider_1 from '../src/images/slider_1.jpg';
import slider_2 from '../src/images/slider_2.png';
import slider_3 from '../src/images/slider_3.jpg';
import slider_4 from '../src/images/slider_4.jpg';
import offer_one from '../src/images/offer_line.png';
import guest_one from '../src/images/guest_one.jpeg';
import guest from '../src/images/guest.png';
// import guest_bg from '../src/images/guest_bg.jpg';
import box from '../src/images/box.png';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class=" " href="#">
      <img src={logo} className="nav_logo" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav  justify-content-center  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PAGES
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PROJECTS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOG
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SHOP
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">CONTACTS</a>
        </li>
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <button class="notification_box btn" type="">
        <ion-icon name="logo-dropbox"></ion-icon>    
            </button>
        <button class="search btn" type="">
        <ion-icon name="search-outline"></ion-icon>
        </button>
        <input class="btn" type="submit" value="BOOK A TABEL" />

      </form>
    </div>
  </div>
</nav>
<div className="hero_section">
  <div className="container">
        <div className="text">
        <h1>Taste Great Seafood <br /> with Moon</h1>
    <h5> <button>Discover More</button> or +23 433 23 46 32</h5>
        </div>
      </div>
     
    </div>

<div className="chef_words" >
  <div className="container">
    <div className="row">
      <div className="col-md-4 col">
        <div className="chef_left" data-aos="fade-right">
      <img src={chef_left} className="chef_left" alt="" />

        </div>
      </div>
      <div className="col-md-4">
        <div className="chef_center" data-aos="fade-up" >
          <p>Our Philosophy</p>
          <h4>chef's Words</h4>
      <img src={chef_center} className="chef_line" alt="" />
          <p className="center_p_1" data-aos="zoom-in">depending on the day of visit to the restraurant, <br /> you will experience one of our creations</p>
          <p className="center_p_2" data-aos="zoom-in">Lorem ant ipsum dolor sit amhet consectetur adipisicing elit. Pariatur ea quo porro dolorum odio, repiandae
             necessitatibus eveniet veritatis autem. Maxime, perspiciatis voluptas.</p>
      <img src={chef_center_2} className="chef_center_2" alt="" data-aos="zoom-in" />

        </div>
      </div>
      <div className="col-md-4">
        <div className="chef_right" data-aos="fade-left">
      <img src={chef_right} className="chef_right" alt="" />
        </div>
      </div>
    </div>
    <img src={chef_bottom} className="chef_bottom" alt="" data-aos="flip-up" />
  </div>
</div>

  <div className="slider_box">
    <p>Enjoy Our Dishes</p>
    <h5>Welcome to the Heart of Sea</h5>
    <img src={chef_center} className="slider_line" alt="" />
  {/* <div className="slider">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
    <div class="carousel-indicators" >
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" >
      
      <div class="carousel-item active">
        <img src={slider_1} class="d-block w-45" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={slider_1} class="d-block w-45" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={slider_1} class="d-block w-45" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div> */}
  <div className="slider_menu">
    <div className="row">
      <div className="col-lg-4" >
        <div className="menu_one">
        <div className="menu_text " data-aos="fade-up">
        <p>01</p>
          <h5>Fresh Products</h5>
          <p data-aos="zoom-in">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis inventore praesentium aut?</p>
          <div className="btn" data-aos="zoom-in">
          <ion-icon id="menu_icon" name="arrow-forward-circle-outline"></ion-icon>
          </div>
        </div>
        </div>
      </div>
      <div className="col-lg-4">
      <div className="menu_two">
      <div className="menu_text" data-aos="fade-up" data-aos-delay="500">
        <p>02</p>
          <h5>Fresh Products</h5>
          <p data-aos="zoom-in" data-aos-delay="300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis inventore praesentium aut?</p>
          <div className="btn" data-aos="zoom-in" data-aos-delay="200" >
          <ion-icon id="menu_icon" name="arrow-forward-circle-outline"></ion-icon>
          </div>
        </div>
      </div>

      </div>
      <div className="col-lg-4">
      <div className="menu_three">
      <div className="menu_text" data-aos="fade-up" data-aos-delay="800">
        <p>03</p>
          <h5>Fresh Products</h5>
          <p data-aos="zoom-in" data-aos-delay="500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis inventore praesentium aut?</p>
          <div className="btn" data-aos="zoom-in" data-aos-delay="400">
          <ion-icon id="menu_icon" name="arrow-forward-circle-outline"></ion-icon>
          </div>
        </div>
      </div>

      </div>
    </div>
  </div>
  </div>

<div className="daily_offer">
  <div className="container">
    <div className="row">
      <div className="col_md-6">
        <div className="offer_box" data-aos="fade-up">
          <p>From Our Menu</p>
          <h3>Try Our Daily Offers</h3>
          <img src={offer_one} className="daily_img" alt="" />
          <div className="offer_box_one" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
          <p >Raw Scallops from Erquy <span >__________________________________ <span >&#36;38</span></span> </p>
          <p className="offer_p">candied jerusalem artichokes, truffle</p> 
          </div>
          <div className="offer_box_two" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="100">
          <p>Sea Bass Ceviche<span>___________________________________________ <span>&#36;36</span></span> </p>
          <p className="offer_p">Avocado, buttemut, lime</p> 
          </div>
          <div className="offer_box_three" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="200">
          <p>Tender Octopus and Fennel <span>______________________________<span> &#36;38</span> </span> </p>
          <p className="offer_p">Citrus, Wild rocket condiment</p> 
          </div>
          <div className="offer_box_four" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="300">
          <p>Thinly Slicent Brittany Artichokes <span>_________________________ <span>&#36;38</span></span> </p>
          <p className="offer_p">Purslane, truffli</p> 
          </div>
          <button className="offer_btn">VIEW ALL MENU</button>
        </div>
      </div>
      <div className="col_md-6"></div>
    </div>
  </div>
</div>

<div className="guest_booking">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="guest_book" data-aos= "zoom-in-up">
          <p>Guestbook</p>
          <h4>Read Incredible Stroies of Our Gustes</h4>
          <img src={guest} className="guest" alt="" />
          <button>ALL TESTIMONIALS</button>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="box_one" data-aos="fade-left" data-aos-delay="650">
        <img src={box} className="daily_img" alt=""  />

          <p data-aos="fade-left"data-aos-delay="650">"Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Officia provident
              aspernatur accusantium distinctio eveniet "</p>
              <div className="about">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-4">
                    <div className="img_box">
                    <img src={guest_one} className="" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8 col-sm-8">
                    <div className="text_box">
                    <h5>Dominicana Rodrgez</h5>
                    <p>Client of Restaurant</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="box_one" data-aos="fade-left" data-aos-delay="300">
        <img src={box} className="daily_img" alt="" />

          <p data-aos="fade-left"data-aos-delay="650">"Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Officia provident
              aspernatur accusantium distinctio eveniet "</p>
              <div className="about">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-4">
                    <div className="img_box">
                    <img src={guest_one} className="" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8  col-sm-8">
                    <div className="text_box">
                    <h5>Dominicana Rodrgez</h5>
                    <p>Client of Restaurant</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
   
  </div>
  <div className="booking_section">
    <div className="booking_layer">
    </div>
      <h4>Lorem ipsum dolor, sit  amet <br /> consectetur adipisicing elit.</h4>
      <button className="booking_btn">BOOK A TABLE</button>
    </div>
    <div className="gust_last">
     <div className="container">
     <div className="row">
        <div className="col-lg-3 col-md-3 ">
          <div className="one">
            <h4>200+</h4>
            <p>Clients Every Day</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 ">
        <div className="two">
            <h4>180+</h4>
            <p>Great Moments</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 ">
        <div className="three">
            <h4>350+</h4>
            <p>Cups of Coffee</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 ">
        <div className="one">
            <h4>200+</h4>
            <p>Clients Every Day</p>
          </div>
        </div>
      </div>  
     </div>
    </div>
</div>

<div className="news_section">
  <div className="container">
    <p>Our Blog</p>
    <h4>Be First Who  Read News</h4>
    <img src={chef_center} alt="" />
   <div className="cards">
   <div className="row ">
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="card_1">
          <div className="img_box">
          <img src={card_1} className="card_img_1" alt="" />
            </div>  
          <p>September 20, 2020 * Recipes</p>   
          <h5>Sushi Time: 10 Tips How to Make It at Home</h5>
          <hr />
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="card_2">
          <div className="img_box">
          <img src={card_2} className="card_img_2" alt="" />
            </div>  
          <p>September 20, 2020 * Recipes</p>   
          <h5>Sushi Time: 10 Tips How to Make It at Home</h5>
          <hr />
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="card_3">
          <div className="img_box">
          <img src={card_3} className="card_img_3" alt="" />
            </div>  
          <p>September 20, 2020 * Recipes</p>   
          <h5>Sushi Time: 10 Tips How to Make It at Home</h5>
          <hr />
        </div>
      </div>
    
    </div>
    <button className="news_btn">VIEW ALL NEWS</button>
   </div>
  </div>


<div className="booking_form">
  <div className="container">
    <h4>Make a Reserve</h4>
    <div className="name">
    <label for="fname">Your Name*</label>
  <input type="text" id="fname" name="fname" />
    </div>
    <div className="mobile">

    <label for="fnum">Your Phone*</label>
  <input type="text" id="fnum" name="fname" />
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="table">
        <select name="person" id="tabel">
    <option value="2person">2 preson</option>
    <option value="4preson">4 preson</option>
    <option value="6preson">6 preson</option>
    <option value="12preson">12 preson</option>
  </select>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="date">
          <input type="date" name="" id="" />
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="time">
          <input type="time" id="myTime"   />
        </div>
      </div>
    </div>
    <button className="booking_btn">BOOK A TABLE</button>
  </div>
</div>

</div>
<footer>
  <div className="container">
    <div className="row g-0">
      <div className="col-lg-4 col-md-4 col-sm-4 ">
        <div className="contact_section">
          <h6>CONTACTS</h6>
          <p><span><ion-icon name="location-outline"></ion-icon></span>Aurangabad</p>
          <p><span><ion-icon name="call-outline"></ion-icon></span> +77 888 66 33 89</p>
          <p><span><ion-icon name="at-outline"></ion-icon></span>abcd@1234.com</p>

        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="socila_section">
          <h5>
          <img src={logo} alt="" />
            </h5>    
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>   
            <div className="social_links">
              <a className="twitter">
              <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a className="facebook">
              <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a className="linkedin">
              <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className="instagram">
              <ion-icon name="logo-instagram"></ion-icon>
              </a>
              </div>   
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="working_secton">
          <h6>Woking House</h6>
          <p> <span>Mon-fri:</span>7.00am-6.00pm</p>
          <p> <span>sat:</span>7.00am-6.00pm</p>
          <p><span>sun:</span>8.00am-6.00pm</p>
        </div>
      </div>
    </div>
  </div>
</footer>



    </div>

  );
}
AOS.init();

export default App;
