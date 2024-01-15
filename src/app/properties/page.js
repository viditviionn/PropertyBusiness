"use client"

import React from "react";

import '../../css/properties.css';
import { Button, Grid } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import Image from "next/image";

const Properties = () => {
    const p1='/images/propertyImages/p1.jpg'
    const p2='/images/propertyImages/p2.jpg'
    const p3='/images/propertyImages/p3.jpg'
    const p4='/images/propertyImages/p4.jpg'
    const p5='/images/propertyImages/p5.jpg'

    const img1 = {
        image: `${p1}`,
        address: "Indore",
        price: "$590"
    }
    const img2 = {
        image: `${p2}`,
        address: "Delhi",
        price: "$590"
    }

    const img3 = {
        image: `${p3}`,
        address: "Mumbai",
        price: "$590"
    }

    const img4 = {
        image: `${p4}`,
        address: "Lucknow",
        price: "$590"
    }



    const images = [img1, img2, img3, img4];

    console.log(images[0].image)

    const handlemap = (location) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(url, "_blank"); // Opens in a new tab
    }

    const handlebook = (id) => {
        console.log(id)

    }
    return (
        <div className="page">
            <h3 className="text-underlined">Renting a home?</h3>
            <p>Looking for a place to rent? Click below to arrange a meeting and we'll explain how we can help you.</p>

            <Button id='button-left' variant="contained">Book a Meeting</Button>
            <h3 className="text-underlined">Properties for Rent</h3>

            {images.map((item, index) => {
                if (index % 2 === 0) {
                    return (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={12} sm={6}>
                                <img src={item.image} alt={`p1 image`} className="property-image" />
                                {item.address}
                                <div>View location On Map<PublicIcon color="primary" onClick={() => { handlemap(item[1]) }} /></div>
                                <h3>price</h3> {item.price}
                                <Button variant="contained" onClick={() => { handlebook(index + 1) }}>Book a Viewing</Button>
                            </Grid>
                            {index + 1 < images.length && (
                                <Grid item xs={12} sm={6}>
                                    <img src={images[index + 1].image} alt={`House ${images[index + 1].image}`} className="property-image" />
                                    {images[index + 1].address}
                                    <div>View location On Map<PublicIcon color='primary' onClick={() => { handlemap(images[index + 1][1]) }} /></div>
                                    <h3>price</h3> {item.price}
                                    <Button variant="contained" onClick={() => { handlebook(index + 1) }}>Book a Viewing</Button>
                                </Grid>
                            )}
                        </Grid>

                    );
                }
                return null;
            })}



        </div>
    );
}

export default Properties;
