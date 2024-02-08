import Grid from "@mui/material/Grid";
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import p5 from "../../../public/images/propertyImages/p5.jpg";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import ReviewSection from "@/components/ReviewCard";

export default function aboutus() {
  return (
    <div style={{ margin: "30px" }}>
      <div>
        <div className="text-underlined"> Who are WE ?</div>
      </div>
      <p style={{width: "90%"}}>
        Welocate is a Dutch company dedicated to quality and excellent service
        to help expats moving and settling in the Netherlands. Its founder moved
        from the United Kingdom to the Netherlands almost twenty years ago and
        has experienced many of the things that an expat will face. Having
        learned many lessons in this time, it is our goal to ensure expats
        receive all the help they need, to avoid the pitfalls, whilst also given
        a fair deal with best value for money services.
      </p>
      <div style={{ marginLeft: 20 }}>
        <Grid item container style={{ margin: "30px" }}>
          <Grid sm={6} lg={6} md={6}>
            <Grid item>
              <div
                style={{
                  fontSize: "20px",
                  color: "#555",
                  paddingBottom: "5px",
                }}
              >
                Our mission
              </div>
              <Grid style={{ lineHeight: "35px" }}>
                Deliver what the customer really needs with the best possible
                service at prices that are fair and known up front, no
                surprises.
              </Grid>
            </Grid>
            <Grid item>
              <div
                style={{
                  fontSize: "20px",
                  color: "#555",
                  paddingBottom: "5px",
                }}
              >
                Our Vision
              </div>
              <Grid style={{ lineHeight: "35px" }}>
                To become the market leader in all services required by expats
                in the Netherlands and to bring innovations to the market using
                new technology.
              </Grid>
            </Grid>
            <Grid item>
              <div
                style={{
                  fontSize: "20px",
                  color: "#555",
                  paddingBottom: "5px",
                }}
              >
                Our Values
              </div>
              <Grid style={{ lineHeight: "35px" }}>
                To ensure that expats are treated honestly and fairly.
              </Grid>
            </Grid>
          </Grid>
          <Grid sm={6} lg={6} md={6}>
            <Image
              src={p5}
              alt="Image"
              style={{ height: "100%", width: "90%" }}
            />
          </Grid>
        </Grid>
      </div>

      <div className="text-underlined"> Why Choose Us ?</div>
      <p>
        When moving house or relocating from another country, it is important
        you can rely on somebody to help that you can trust. Somebody that
        understands the challenges you may face and can stand with you whilst
        making one of the most important moves and decisions in your life.
      </p>
      <p>
        At Welocate we are passionate about helping expats and dedicated to our
        service to support you, whenever you need our help. Every year we help
        hundreds of expats moving and settling in the Netherlands. Feedback from
        our customers is important to us and we measure and try to improve where
        necessary. Our client satisfaction rates are extremely high which is
        shown by the number of expats that refer family, friends and colleagues
        to us.
      </p>

      <div className="text-underlined">What Our Customers Say ?</div>
      <p>
        Welcome to our Reviews section! Here, you'll find genuine feedback from
        our valued customers. Dive in to hear their stories, experiences, and
        insights about our products and services.
      </p>
      {/* // Card1# */}
      {/* <Grid item container>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar sx={{color:'blue'}}>M</Avatar></div>
              <div>
                <Rating name="read-only" value={4} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>13 Sep 2023</div>
              </div>
            </div>
          </div>
        </Grid>


        <Grid item xs={12}sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar>P</Avatar></div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>21 Jul 2023</div>
              </div>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar sx={{color:'green'}}>A</Avatar></div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>25 june 2023</div>
              </div>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar sx={{color:'yellow'}}>H</Avatar></div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>25 feb 2023</div>
              </div>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar sx={{color:'coral'}}>A</Avatar></div>
              <div>
                <Rating name="read-only" value={3} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>31jan 2023</div>
              </div>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar sx={{color:'red'}}>J</Avatar></div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>12 jan 2023</div>
              </div>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar sx={{color:'green'}}>S</Avatar></div>
              <div>
                <Rating name="read-only" value={4} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>26 May 2022</div>
              </div>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar sx={{color:'greenyellow'}}>H</Avatar></div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>23 April 2022</div>
              </div>
            </div>
          </div>
        </Grid>



        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar>A</Avatar></div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>5 jan 2022</div>
              </div>
            </div>
          </div>
        </Grid>



        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className='rating-card'>
            <div className='rating-header'>
              <div className='rating-person'><Avatar>L</Avatar></div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: '10px', color: 'grey' }}>2 Dec 2021</div>
              </div>
            </div>
          </div>
        </Grid>


      </Grid> */}
      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <ReviewSection />
      </div>
    </div>
  );
}
