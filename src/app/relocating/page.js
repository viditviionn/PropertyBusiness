"use client";
import React, { useState } from "react";
import m1 from "../../../public/images/pageImages/m1.jpg";
import selling_small from "../../../public/images/otherimages/selling_small.jpg";

import { Box, Button, Grid } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Relocatingcards from "@/components/Relocatingcards";
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
          <Image src={m1} alt="m1 image" />
        </div>
        <div className="image-text">
          Moving to the Netherlands? Find out how we can make your move
          stress-free
        </div>

        <div onClick={handleNavigation} className="image-button">
          <Button variant="contained">Book Now</Button>
        </div>
      </div>
      <div style={{ margin: "30px" }}>
        <div>
          <div className="text-underlined"> Relocating a home in the India</div>
        </div>

        <p>
          Relocating to the Netherlands is exciting, but it could be daunting
          and time-consuming. Whether you are moving for work, study, or
          personal reasons, there are a multitude of things to consider and
          organize. From finding a suitable home to navigating the complexities
          of Dutch bureaucracy, it can be overwhelming to try and manage
          everything on your own.
        </p>
        <p>
          This is where Welocate comes in - we are here to help make your move
          as smooth and stress-free as possible. Our team of experienced
          professionals understand the challenges of moving to a new country and
          provide you with a comprehensive range of services to meet your
          specific needs. Let us take care of the details so that you can focus
          on the excitement of starting your new life in the Netherlands.
        </p>
        <div>
          <div className="text-underlined">How Can we Help You ?</div>
        </div>
        <div className="image25-content75">
          <div className="wid-25" style={{ margin: "20px", marginTop: "30px" }}>
            <Image className="small-image" src={selling_small} alt="image" />
          </div>
          <div className="wid-75">
            <p>
              Are you relocating to the Netherlands and searching for help to
              arrange the relocation?
            </p>
            <p>
              Welocate have been helping expats to settle into their new homes
              since 2004, so you can be assured we have the expertise and
              infrastructure to provide a seamless and professional service
              taking away most stresses from relocating to another country.
            </p>
            <p>
              We can help you finding a suitable home, help arrange a visa or
              residence permit, setting up a bank account and social
              integration.
            </p>
            <p>
              Below you can find more information about the relocation service
              and how we're able to help you.
            </p>
          </div>
        </div>

        {/* <Grid container direction="row" spacing={1}>
          <Relocatingcards />
        </Grid> */}
        <div className="grid" style={{ marginTop: "20px" }}>
          <InfoBox
            title="Finding a home"
            description="Finding a suitable place to live is one of the most important and time-consuming aspects of relocating. You need to research the different areas, property types, and rental or purchase options that are available. Additionally, you'll need to consider the costs, local amenities, and transportation options to ensure you find the right fit for your needs.
            We help you find the most suitable home, help with arranging the utilities and help arrange the move to the new home."
            icon="🏠"
          />
          <InfoBox
            title="Visa/Residence permit"
            description="Depending on your nationality and the reason for your move to the Netherlands, you may need to apply for a visa or residence permit to legally stay in the Netherlands. This can be a complex process, so it's important to research and understand the requirements and deadlines to avoid any complications.We can help you arranging the required applications for a visa or residence permit to ensure you have the right documents when moving."
            icon="🏠"
          />
          <InfoBox
            title="Bank account/Tax"
            description="Setting up a bank account and managing your finances is crucial for daily life. You'll need to research different banking options, open an account, and transfer any funds you may have. It's also important to understand the tax system and any regulations that may apply to you.

            We can provide information and options of different banks in the Netherlands where you can open an account and arrange a specialist to help you with tax advice and your tax return."
            icon="🏠"
          />
          <InfoBox
            title="Integrating"
            description="Moving to a new country can be daunting, especially if you're unfamiliar with the local language and culture. Finding ways to meet people and integrate into the community is important for your well-being and overall experience.

            We can help you and your family with your social integration in the Netherlands. This could include help with finding schools for your childern, local groups, clubs, or activities, but also arrange participation in language classes or cultural events."
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
