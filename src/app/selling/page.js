"use client"
import React, { useState } from "react";
import m1 from '../../../public/images/pageImages/m1.jpg'
import selling_small from '../../../public/images/otherimages/selling_small.jpg'

import { Box, Button, Grid } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/navigation";
import BasicCard from "../../components/SellingCard";
import { grey } from "@mui/material/colors";




export default function page() {

    const router = useRouter();

    const handleNavigation = () => {
        // Example: Navigate to the '/about' page
        router.push('/contact/meetingform');
    };

    return (
        <div className="page">
            <div>
                <div>
                    <Image src={m1} alt='m1 image' />
                </div>
                <div className='image-text'>
                    SChedule meeting to buy a home in India
                </div>

                <div onClick={handleNavigation} className='image-button'>
                    <Button onClick={handleNavigation} variant='contained'>Book Now</Button>
                </div>
            </div>

            <div>
                <div className="text-underlined"> Selling your house in the India</div>
            </div>

            <p>Selling a house can be a long, complicated and stressful process, especially if you are not experienced in the Dutch real-estate market or know the legal requirements and your obligations.</p>
            <p>Most people who sell their house in the Netherlands use the services of a professional real-estate agent to take care of the entire process. However, how do you know if you've chosen the best real-estate agent to sell your property?</p>
            <p>Welocate created the Home Sellers Plan, especially for expats. We only use local real-estate agents with a proven track-record, delivering the best quality and service to make sure you get the best agents available.</p>
            <div>
                <div className="text-underlined">The Home Sellers Plan</div>
            </div>


            <div className="image25-content75" >
                <div className="wid-25">
                    <Image className="small-image" src={selling_small} />

                </div>
                <div className="wid-75">
                    <p>Are you looking to sell your property and need the help of a professional real-estate agent?</p>
                    <p>The Home Sellers Plan provides everything you need to sell a house in the Netherlands</p>
                    <p>Our local real-estate agent will ensure your property is presented professionally and will advise on your legal obligations.</p>
                    <p>Our goal is to sell your property at the best possible price in the shortest amount of time.</p>
                    <p>The package is offered at a fixed, transparent and competitive price to avoid surprises afterwards.</p>
                    <p>Below you will find more information about what is included in the Home Sellers Plan.</p>
                </div>

            </div>

            <div>
                <div className="text-underlined">Whats Included?</div>
            </div>

            <Grid container direction="row" spacing={1}>
                <BasicCard />

            </Grid>

        





        </div>
    )
}