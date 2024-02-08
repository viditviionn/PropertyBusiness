"use client";
import React, { useState } from "react";
import m1 from "../../../public/images/pageImages/m1.jpg";

import { Box, Button, Grid } from "@mui/material";
import Calculatecost from "../../components/Calculatecost";
import BasicCard from "../../components/BuyingCard";
import Buyingtable from "../../components/Buyingtable";
import Buyingtable2 from "../../components/Buyingtable2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InfoBox from "@/components/InfoBox";

const Buying = () => {
  const router = useRouter();

  const handleNavigation = () => {
    // Example: Navigate to the '/about' page
    router.push("/contact");
  };

  const [showCalculateCost, setShowCalculateCost] = useState(false);

  const handleClick = () => {
    setShowCalculateCost(!showCalculateCost);
  };

  return (
    <div className="page">
      <div>
        <div>
          <Image src={m1} alt="m1 image" />
        </div>
        <div className="image-text">
          Buying a home in the Netherlands? Schedule a free online meeting to
          find out how we can help
        </div>

        <div onClick={handleNavigation} className="image-button">
          <Button variant="contained">Book Now</Button>
        </div>
      </div>

      <div style={{ margin: "30px" }}>
        <div className="text-underlined"> Buying House in India</div>

        <p>
          Buying a house can be exciting as well as stressful, especially if you
          don't have detailed knowledge of the process, market or legal
          obligations.
        </p>

        <p>
          It starts with finding the property you wish to purchase in the right
          neighbourhood. Once you've find a house you need check the state and
          construction of the house, figure out what it's worth followed by
          negotiations on price and conditions and finally the legal completion.
        </p>

        <p>
          Since 2004 we've been helping Expats buy their perfect home at the
          best price in the Netherlands, taking all their worries away. We've
          created a complete package to provide everything you need from start
          to finish, the Home Buyers Plan.
        </p>

        <p>
          Use our calculator to see the typical costs of buying a house in the
          Netherlands.
        </p>

        <div>
          <Calculatecost />
        </div>

        <p>
          Are you searching for a house, have you already found your next dream
          home and considering to buy or have you had your offer to buy
          accepted?
        </p>
        <p>
          The Home Buyers Plan provides everything you need to buy a house in
          the Netherlands.
        </p>
        <p>
          We have developed a complete package of services you will require in
          order to purchase a property.
        </p>
        <p>
          A team of four specialists keep your legal risks minimised, take your
          worries away and negotiate the best price for you.
        </p>
        <p>
          The package is offered at a fixed, transparent and competitive price.
        </p>
        <p>
          Below you will find more information about what is included in the
          Home Buyers Plan.
        </p>

        <div className="text-underlined"> Whats Included ?</div>

        <div className="grid" style={{ marginTop: "20px" }}>
          <InfoBox
            title="Estate agent"
            description="An experienced local real-estate agent who can help you search for properties, provide expert advice, negotiate and protect your interests during the entire purchase process."
            icon="🏠"
          />
          <InfoBox
            title="Building report"
            description="A building inspector who visits and checks the condition of the property and delivers an extensive construction report detailing short, medium and long term maintenance costs."
            icon="🏠"
          />
          <InfoBox
            title="Appraisal report"
            description="A local, certified appraiser visits the property and creates an appraisal report about the property. This report will be required for your mortgage and is accepted by all banks."
            icon="🏠"
          />
          <InfoBox
            title="Notary"
            description="A local notary will draw up the transfer and mortgage deeds, sign them together with all parties. Finally, the notary registers ownership at the government and hands over the keys to you."
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

        {/* <Grid container direction="row" spacing={1}>
          <BasicCard />
        </Grid> */}

        <Box>
          <Buyingtable />
        </Box>

        <Box>
          <Buyingtable2 />
        </Box>
      </div>
    </div>
  );
};

export default Buying;
