"use client"
import React, { useState } from "react";
import m1 from '../../../public/images/pageImages/m1.jpg'
import selling_small from '../../../public/images/otherimages/selling_small.jpg'

import { Box, Button, Grid } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/navigation";
import BasicCard from "../../components/SellingCard";
import { grey } from "@mui/material/colors";
import DirectionsWalkSharpIcon from '@mui/icons-material/DirectionsWalkSharp';
import DirectionsRunSharpIcon from '@mui/icons-material/DirectionsRunSharp';
import DirectionsBikeSharpIcon from '@mui/icons-material/DirectionsBikeSharp';


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
                <div className="text-underlined"> Renting a property in the Netherlands</div>
            </div>

            <p>Renting a property in the Netherlands can be a confusing process, full of pitfalls, often hidden costs and complex contracts that are difficult to terminate.</p>
            <p>First you need to find suitable properties that meet your criteria, visit different ones and then start the process of negotiating the price and contract conditions. It is very important to have an expert helping you during this process. With your interests at heart our agents know what to watch out for and understand the Dutch language as well as the legalities.</p>
            <p>At Welocate we have created the Home Renters Plan to help expats rent a property for short, medium or long stay. Our experts can help you through all steps to find the right rental home for you.</p>
            <div>
                <div className="text-underlined">The Home Renters Plan</div>
            </div>


            <div className="image25-content75" >
                <div className="wid-25">
                    <Image className="small-image" src={selling_small} />

                </div>
                <div className="wid-75">
                    <p>Are you searching for a house or apartment to rent? If so, the Home Renters Plan is the ideal solution for you.</p>
                    <p>We have developed a complete package of services for a fixed price to assist you. The Home Renters Plan takes all your worries away through the entire renting process.</p>
                    <p>We will be there to help you right from the start to find suitable properties that are within your budget and specified requirements</p>
                </div>

            </div>


            <div>
                <div className="text-underlined">Renting Your Property</div>
                <p>We Help different Types Of Landlords :</p>
                <ul style={{ color: 'grey' }}>
                    <li>You currently own a property you wish to rent out.</li>
                    <li>You wish to rent out the property you live in but need to change your mortgage to allow this.</li>
                    <li>You wish to buy an investment property with a mortgage that you want to rent out.</li>
                </ul>
                <p>Detailed below are the stages involved in renting, how we can help, as well as things you may need to consider if you have an existing or are arranging a new mortgage on your property.</p>
            </div>



            <div>
                <div className="text-underlined">Home Renters Plan Options</div>
                <p>The first step is for you to decide which option of the Home Renters Plan best fits your needs. This depends on where you are in your rental journey and the level of support that you may require.
                    In the steps below, we use the following symbols so you can easily see what is included with the four packages we offer:</p>
                <p style={{ color:'green' }}> Standard<DirectionsWalkSharpIcon />  Premium<DirectionsRunSharpIcon /> Premium+ <DirectionsBikeSharpIcon /></p>

            </div>



            <Grid item container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className="text-underlined">STEP 1
                        <div className="standard-premium-icons" >
                            <DirectionsWalkSharpIcon />
                            <DirectionsRunSharpIcon />
                            <DirectionsBikeSharpIcon />
                        </div>
                    </div>
                    <p>The first step is for us to discuss your requirements and assess the property.
                        This is at no cost with no obligation. We can advise how to maximise your rental income,
                        help you throughout the process and give advice on styling that will improve your return.
                    </p>


                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className="text-underlined"> STEP 2 Property Presentation
                        <div className="standard-premium-icons" >
                            <DirectionsWalkSharpIcon />
                            <DirectionsRunSharpIcon />
                            <DirectionsBikeSharpIcon />
                        </div>
                    </div>
                    <p>We will create the advertisement in consultation with you and, if required,
                        use a professional photographer to take extensive photos as well as create an official measurement report and floor plan.
                        This will ensure your property is presented in the most attractive way to appeal to prospective tenants.
                    </p>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className="text-underlined">STEP 3 Property Advertising
                    <div className="standard-premium-icons" >
                            <DirectionsWalkSharpIcon />
                            <DirectionsRunSharpIcon />
                            <DirectionsBikeSharpIcon />
                        </div>
                    
                    </div>
                    <p>We will advertise your property on the most well-known rental platforms,
                        promote through social media as well as inform our own network about the property.
                        This will ensure maximum exposure for your property to the most suitable tenants.
                    </p>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className="text-underlined">STEP 4
                    <div className="standard-premium-icons" >
                            <DirectionsWalkSharpIcon />
                            <DirectionsRunSharpIcon />
                            <DirectionsBikeSharpIcon />
                        </div>
                    </div>
                    <p>The first step is for us to discuss your requirements and assess the property.
                        This is at no cost with no obligation. We can advise how to maximise your rental income,
                        help you throughout the process and give advice on styling that will improve your return.
                    </p>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className="text-underlined">STEP 5
                    <div className="standard-premium-icons" >
                            <DirectionsWalkSharpIcon />
                            <DirectionsRunSharpIcon />
                            <DirectionsBikeSharpIcon />
                        </div>
                    
                    </div>
                    <p>The first step is for us to discuss your requirements and assess the property.
                        This is at no cost with no obligation. We can advise how to maximise your rental income,
                        help you throughout the process and give advice on styling that will improve your return.
                    </p>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className="text-underlined">STEP 6
                    <div className="standard-premium-icons" >
                            <DirectionsWalkSharpIcon />
                            <DirectionsRunSharpIcon />
                            <DirectionsBikeSharpIcon />
                        </div>
                    </div>
                    <p>The first step is for us to discuss your requirements and assess the property.
                        This is at no cost with no obligation. We can advise how to maximise your rental income,
                        help you throughout the process and give advice on styling that will improve your return.
                    </p>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className="text-underlined">STEP 7</div>
                    <p>The first step is for us to discuss your requirements and assess the property.
                        This is at no cost with no obligation. We can advise how to maximise your rental income,
                        help you throughout the process and give advice on styling that will improve your return.
                    </p>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className="text-underlined">STEP 8</div>
                    <p>The first step is for us to discuss your requirements and assess the property.
                        This is at no cost with no obligation. We can advise how to maximise your rental income,
                        help you throughout the process and give advice on styling that will improve your return.
                    </p>

                </Grid>
            </Grid>


        </div>

    );
}