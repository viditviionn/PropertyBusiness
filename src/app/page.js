"use client";

import { Button, Grid } from "@mui/material";
import m2 from "../../public/images/pageImages/m4.jpg";
import Image from "next/image";
import "../css/home.css";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import ReviewSection from "@/components/ReviewCard";

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    // Example: Navigate to the '/about' page
    router.push("/contact");
  };

  return (
    <div>
      <div style={{ height: "400px" }}>
        <Image src={m2} alt="m1 image" style={{ height: "400px" }} />
      </div>
      <div className="image-text">
        Buying Renting or Renting RentingOut A home in India Want to know how we
        can help?
      </div>
      <div className="image-button">
        <Button onClick={handleNavigation} variant="contained">
          Book a free Meeting
        </Button>
      </div>
      <div className="content-written">
        <div className="content-button-wrapper">
          <div className="wid-75">
            <p className="paragraph1">
              Whether you have just moved to the Netherlands and about to rent
              or have been here for a few years and are ready to buy a new home,
              we are here for you. Our packages for buying, selling, renting out
              and renting are customised to your specific requirements and
              providing everything you need at a fixed and transparent price.
              <br></br>
              <br></br>
              Whether you are moving to Amsterdam, The Hague, Rotterdam or
              anywhere else in the Netherlands, we have a network of local
              agents that will help you with everything you need.
            </p>
          </div>
          <div className="button-group-right">
            <Button className="actionButton" style={{ margin: "10px" }} variant="contained">
              Contact Us
            </Button>
            <Button className="actionButton" style={{ margin: "10px" }} variant="contained">
              Send Us message
            </Button>
            <Button className="actionButton" style={{ margin: "10px" }} variant="contained">
              Request a Service
            </Button>
          </div>
        </div>

        <div className="text-underlined">
          ABN AMRO, Rabobank or ING Bank clients
        </div>
        <p>
          Are you a customer of ABN AMRO, Rabobank or ING Bank? If so, we offer
          everything you need to arrange your mortgage with them such as
          appraisal reports, construction checks, energy labels and a free
          notary service as well as the complete Home Buyers Plan package, all
          at a special price.
        </p>

        <p>
          To request any of these products, click on the 'Request a service'
          button and complete the form.
        </p>

        <div className="text-underlined">What Our Customers Say ?</div>
        <p>
          Welcome to our Reviews section! Here, you'll find genuine feedback
          from our valued customers. Dive in to hear their stories, experiences,
          and insights about our products and services.
        </p>
      </div>
      {/* // Card1# */}
      {/* <Grid item container marginLeft={10} marginRight={10}>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar sx={{ color: "blue" }}>M</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={4} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  13 Sep 2023
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar>P</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  21 Jul 2023
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar sx={{ color: "green" }}>A</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  25 june 2023
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar sx={{ color: "yellow" }}>H</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  25 feb 2023
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar sx={{ color: "coral" }}>A</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={3} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  31jan 2023
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar sx={{ color: "red" }}>J</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  12 jan 2023
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar sx={{ color: "green" }}>S</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={4} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  26 May 2022
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar sx={{ color: "greenyellow" }}>H</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  23 April 2022
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar>A</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  5 jan 2022
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="rating-card">
            <div className="rating-header">
              <div className="rating-person">
                <Avatar>L</Avatar>
              </div>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div style={{ fontSize: "10px", color: "grey" }}>
                  2 Dec 2021
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid> */}
      <div style={{paddingLeft: '70px', paddingRight: '70px'}}>
        <ReviewSection/>
      </div>
    </div>
  );
}
