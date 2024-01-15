"use client"
import React, { useState } from "react";
import m1 from '../../../public/images/pageImages/m1.jpg'

import { Box, Button, Grid } from "@mui/material";
import Calculatecost from '../../components/Calculatecost'
import BasicCard from "../../components/BuyingCard";
import Buyingtable from "../../components/Buyingtable";
import Buyingtable2 from '../../components/Buyingtable2';
import Image from "next/image";
import { useRouter } from "next/navigation";


const Buying = () => {

    const router = useRouter();

    const handleNavigation = () => {
      // Example: Navigate to the '/about' page
      router.push('/contact?/=meetingform');
    };



    const [showCalculateCost, setShowCalculateCost] = useState(false);

    const handleClick = () => {
        setShowCalculateCost(!showCalculateCost);
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
                <div className="text-underlined"> Buying House in India</div>


                <p>Buying a house can be exciting as well as stressful, especially if you don't have detailed knowledge of the process, market or legal obligations.</p>

                <p>It starts with finding the property you wish to purchase in the right neighbourhood. Once you've find a house you need check the state and construction of the house, figure out what it's worth followed by negotiations on price and conditions and finally the legal completion.</p>

                <p>Since 2004 we've been helping Expats buy their perfect home at the best price in the Netherlands, taking all their worries away. We've created a complete package to provide everything you need from start to finish, the Home Buyers Plan.</p>


                <p>Use our calculator to see the typical costs of buying a house in the Netherlands.</p>


                <div>
                    <Calculatecost />
                </div>


                <p>Are you searching for a house, have you already found your next dream home and considering to buy or have you had your offer to buy accepted?</p>
                <p>The Home Buyers Plan provides everything you need to buy a house in the Netherlands.</p>
                <p>We have developed a complete package of services you will require in order to purchase a property.</p>
                <p>A team of four specialists keep your legal risks minimised, take your worries away and negotiate the best price for you.</p>
                <p>The package is offered at a fixed, transparent and competitive price.</p>
                <p>Below you will find more information about what is included in the Home Buyers Plan.</p>


                <div className="text-underlined"> Whats Included ?</div>

                <Grid container direction="row" spacing={1}>
                    <BasicCard />

                </Grid>

                <Box>

                    <Buyingtable />
                </Box>

                <Box>
                    <Buyingtable2 />
                </Box>


            </div>

        </div>

    );
}

export default Buying;
