"use client"
import React, { useState } from "react";
import m1 from '../../../public/images/pageImages/m1.jpg'
import selling_small from '../../../public/images/otherimages/selling_small.jpg'

import { Box, Button, Grid } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Relocatingcards from "@/components/Relocatingcards";


     

export default function Page() {

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
                    <Button variant='contained'>Book Now</Button>
                </div>
            </div>

            <div>
                <div className="text-underlined"> Relocating a home in the India</div>
            </div>

            <p>Relocating to the Netherlands is exciting, but it could be daunting and time-consuming. Whether you are moving for work, study, or personal reasons, there are a multitude of things to consider and organize. From finding a suitable home to navigating the complexities of Dutch bureaucracy, it can be overwhelming to try and manage everything on your own.</p>
            <p>This is where Welocate comes in - we are here to help make your move as smooth and stress-free as possible. Our team of experienced professionals understand the challenges of moving to a new country and provide you with a comprehensive range of services to meet your specific needs. Let us take care of the details so that you can focus on the excitement of starting your new life in the Netherlands.</p>
            <div>
                <div className="text-underlined">How Can we Help You ?</div>
            </div>


            <div className="image25-content75" >
                <div className="wid-25">
                    <Image className="small-image" src={selling_small} alt="image" />

                </div>
                <div className="wid-75">
                    <p>Are you relocating to the Netherlands and searching for help to arrange the relocation?
</p>
                    <p>Welocate have been helping expats to settle into their
                         new homes since 2004, so you can be assured we have the expertise and
                          infrastructure to provide a seamless and professional service taking away most stresses from relocating to another country.</p>
                    <p>We can help you finding a suitable home, help arrange a visa or residence permit, setting up a bank account and social integration.</p>
                    <p>Our goal is to sell your property at the best possible price in the shortest amount of time.</p>
                    <p>Below you can find more information about the relocation service and how we're able to help you.</p>
                </div>

            </div>

            <Grid container direction="row" spacing={1}>
                <Relocatingcards />

            </Grid>
        </div>
    );
}