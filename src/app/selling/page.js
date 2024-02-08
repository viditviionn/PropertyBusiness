"use client";
import React, { useState } from "react";
import m2 from "../../../public/images/pageImages/m2.jpg";
import selling_small from "../../../public/images/otherimages/selling_small.jpg";

import { Box, Button, Grid } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/navigation";
import BasicCard from "../../components/SellingCard";
import { grey } from "@mui/material/colors";
import InfoBox from "@/components/InfoBox";

export default function Page() {
  const router = useRouter();

  const handleNavigation = () => {
    // Example: Navigate to the '/about' page
    router.push("/contact/meetingform");
  };

  return (
    <div className="page">
      <div>
        <div>
          <Image src={m2} alt="m2 image" />
        </div>
        <div className="image-text">
          Thinking about selling your home? Want some free advice?
        </div>

        <div onClick={handleNavigation} className="image-button">
          <Button onClick={handleNavigation} variant="contained">
            Book a free Meeting
          </Button>
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        <div>
          <div className="text-underlined">
            {" "}
            Selling your house in the India
          </div>
        </div>

        <p>
          Selling a house can be a long, complicated and stressful process,
          especially if you are not experienced in the Dutch real-estate market
          or know the legal requirements and your obligations.
        </p>
        <p>
          Most people who sell their house in the Netherlands use the services
          of a professional real-estate agent to take care of the entire
          process. However, how do you know if you've chosen the best
          real-estate agent to sell your property?
        </p>
        <p>
          Welocate created the Home Sellers Plan, especially for expats. We only
          use local real-estate agents with a proven track-record, delivering
          the best quality and service to make sure you get the best agents
          available.
        </p>
        <div>
          <div className="text-underlined">The Home Sellers Plan</div>
        </div>

        <div className="">
          {/* <div className="wid-25">
          <Image className="small-image" src={selling_small} alt="image" />
        </div> */}
          <div className="wid-75">
            <p>
              Are you looking to sell your property and need the help of a
              professional real-estate agent?
            </p>
            <p>
              The Home Sellers Plan provides everything you need to sell a house
              in the Netherlands
            </p>
            <p>
              Our local real-estate agent will ensure your property is presented
              professionally and will advise on your legal obligations.
            </p>
            <p>
              Our goal is to sell your property at the best possible price in
              the shortest amount of time.
            </p>
            <p>
              The package is offered at a fixed, transparent and competitive
              price to avoid surprises afterwards.
            </p>
            <p>
              Below you will find more information about what is included in the
              Home Sellers Plan.
            </p>
          </div>
        </div>

        <div>
          <div className="text-underlined">Whats Included?</div>
        </div>

        <Grid container direction="row" spacing={1}>
          {/* <BasicCard /> */}
        </Grid>
        <div className="grid" style={{ marginTop: "20px" }}>
          <InfoBox
            title="Orientation"
            description="We help you find a local real-estate agent to sell your house at the best possible price. The agent will visit your property at no cost and will provide a free appraisal and a detailed plan of approach on how to sell your house."
            icon="🏠"
          />
          <InfoBox
            title="Presentation"
            description="You have one chance to give potential buyers a good first impression. We ensure the right promotional tools are used such as Funda, the agents’ exchange system, professional photos, brochures, a for-sale sign, etc."
            icon="🏠"
          />
          <InfoBox
            title="For sale"
            description="The agent will show potential buyers around the property and informs you after each viewing. If an offer is made, negotiations start and your agent will try to get the highest price ensuring your best interests are kept in mind."
            icon="🏠"
          />
          <InfoBox
            title="Sold"
            description="A purchase contract is signed which details the price, transfer date and other conditions. On the date of transfer, a final inspection of the property takes place and then you sign the transfer deed at the notary. The property is sold!"
            icon="🏠"
          />
          {/* Repeat for other boxes, changing the props as necessary */}

          <style jsx>{`
            .grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
              gap: 20px;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
