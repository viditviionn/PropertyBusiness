"use client";
import React, { useState } from "react";
import m3 from "../../../public/images/pageImages/m3.jpg";
import selling_small from "../../../public/images/otherimages/selling_small.jpg";

import { Box, Button, Grid } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleNavigation = () => {
    // Example: Navigate to the '/about' page
    router.push("/contact");
  };

  return (
    <div className="page">
      <div>
        <div>
          <Image src={m3} alt="m3 image" />
        </div>
        <div className="image-text">
          Rent out your property, trouble-free? Arrange a meeting to find out
          more
        </div>

        <div onClick={handleNavigation} className="image-button">
          <Button onClick={handleNavigation} variant="contained">
            Book Now
          </Button>
        </div>
      </div>

      <div style={{ margin: "30px" }}>
        <div>
          <div className="text-underlined">
            {" "}
            Renting out a property in the Netherlands
          </div>
        </div>

        <p>
          Are you looking to rent out your property? Welocate helps you find the
          best tenants while taking care of all the procedures of tenancy,
          including contract negotiations, check-in and check-out, inspections
          and setting up utilities. We don't stop once we've placed a tenant,
          throughout the contract, we'll take care of the administration and
          technical management on your behalf.
        </p>
        <p>
          We have created the Landlord Rental Plan to help you rent out your
          property, worry-free.
        </p>
        <div>
          <div className="text-underlined">The Landlord Rental Plan</div>
        </div>

        <div className="image25-content75">
          <div className="wid-25 small-image-div" style={{ margin: "20px", marginTop: "30px" }}>
            <Image className="small-image" src={selling_small} alt="image" />
          </div>
          <div className="wid-75 rentingout-content-wrap">
            <p>
              Are you currently renting out your property, or maybe you are
              considering renting out the property you live in, or even looking
              to buy a new investment to rent out?
            </p>
            <p>
              If so, the Landlord Rental Plan is the ideal solution for you. We
              have developed a complete package of services for a fixed price to
              assist you. The Landlord Rental Plan takes all your worries away
              throughout the entire rental process, we will be there to guide
              you from start to finish.
            </p>
            <p>
              If you need to secure finance on your investment property, we can
              also provide the relevant products you need for your mortgage,
              such as an appraisal report for rental properties and a notary,
              all at a fixed price..
            </p>
          </div>
        </div>

        <div className="we-help-wrap">
          <div className="text-underlined">Renting Your Property</div>
          <p>We Help different Types Of Landlords :</p>
          <ul style={{ color: "grey", marginLeft: "10px" }}>
            <li>You currently own a property you wish to rent out.</li>
            <li>
              You wish to rent out the property you live in but need to change
              your mortgage to allow this.
            </li>
            <li>
              You wish to buy an investment property with a mortgage that you
              want to rent out.
            </li>
          </ul>
          <p>
            Detailed below are the stages involved in renting, how we can help,
            as well as things you may need to consider if you have an existing
            or are arranging a new mortgage on your property.
          </p>
        </div>

        <Grid item container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="step-heading">Step 1: Orientation</div>
            <p>
              The first step is for us to discuss your requirements and assess
              the property. This is at no cost with no obligation. We can advise
              how to maximise your rental income, help you throughout the
              process and give advice on styling that will improve your return.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="step-heading"> Step 2: Property Presentation</div>
            <p>
              We will create the advertisement in consultation with you and, if
              required, use a professional photographer to take extensive photos
              as well as create an official measurement report and floor plan.
              This will ensure your property is presented in the most attractive
              way to appeal to prospective tenants.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="step-heading">Step 3: Property Advertising</div>
            <p>
              We will advertise your property on the most well-known rental
              platforms, promote through social media as well as inform our own
              network about the property. This will ensure maximum exposure for
              your property to the most suitable tenants.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="step-heading">Step 4: Viewings</div>
            <p>
              The first step is for us to discuss your requirements and assess
              the property. This is at no cost with no obligation. We can advise
              how to maximise your rental income, help you throughout the
              process and give advice on styling that will improve your return.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="step-heading">
              Step 5: Tenant screening and selection
            </div>
            <p>
              The first step is for us to discuss your requirements and assess
              the property. This is at no cost with no obligation. We can advise
              how to maximise your rental income, help you throughout the
              process and give advice on styling that will improve your return.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="step-heading">Step 6: Contract preparation</div>
            <p>
              The first step is for us to discuss your requirements and assess
              the property. This is at no cost with no obligation. We can advise
              how to maximise your rental income, help you throughout the
              process and give advice on styling that will improve your return.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="step-heading">Step 7: Check-in</div>
            <p>
              The first step is for us to discuss your requirements and assess
              the property. This is at no cost with no obligation. We can advise
              how to maximise your rental income, help you throughout the
              process and give advice on styling that will improve your return.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="step-heading">
              Step 8: Administrative and technical management
            </div>
            <p>
              The first step is for us to discuss your requirements and assess
              the property. This is at no cost with no obligation. We can advise
              how to maximise your rental income, help you throughout the
              process and give advice on styling that will improve your return.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
