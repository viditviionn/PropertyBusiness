import Grid from "@mui/material/Grid"
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import p5 from '../../../public/images/propertyImages/p5.jpg'
import Image from "next/image";


export default function aboutus() {
   
    return (
        <div>
            <div>
                <div className="text-underlined"> Who are WE ?</div>
            </div>
            <p>
                Welocate is a Dutch company dedicated to quality and excellent service to help expats
                moving and settling in the Netherlands. Its founder moved from the United Kingdom to the Netherlands almost twenty years ago and has experienced many of the things that an expat will face. Having learned many lessons in this time, it is our goal to ensure expats receive all
                the help they need, to avoid the pitfalls, whilst also given a fair deal with best value for money services.
            </p>
            <div style={{marginLeft:20}}>

            <Grid item container>
                <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Grid item xs={12} sm={6} lg={6} md={6}>
                        <RocketLaunchSharpIcon color="primary" size='large' />
                        <b>Our mission</b>
                        <p style={{width:'100%'}}>Deliver what the customer really needs with the best possible service at prices that are fair and known up front, no surprises.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} md={6}>
                        <RemoveRedEyeSharpIcon color="primary" size='large' />
                        <b>Our Vision</b>
                        <p>To become the market leader in all services required by expats in the Netherlands and to bring innovations to the market using new technology.</p>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} md={6} >
                        <FavoriteTwoToneIcon color="primary" size='large' />
                        <b>Our Values</b>
                        <p>To ensure that expats are treated honestly and fairly.</p>
                    </Grid>

                </Grid>


                <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Image src={p5} />

                </Grid>
            </Grid>
            </div>


            <div className="text-underlined"> Why Choose Us ?</div>
            <p>When moving house or relocating from another country, it is important you can rely on somebody to help that you can trust. Somebody that understands the challenges you may face and can stand with you whilst making one of the most important moves and decisions in your life.</p>
            <p>At Welocate we are passionate about helping expats and dedicated to our service to support you, whenever you need our help. Every year we help hundreds of expats moving and settling in the Netherlands. Feedback from our customers is important to us and we measure and try to improve where necessary. Our client satisfaction rates are extremely high which is shown by the number of expats that refer family, friends and colleagues to us.

            </p>

            <div className="text-underlined"> Why Customers Say ?</div>
            <p>Welcome to our Reviews section! Here, you'll find genuine feedback from our valued customers. Dive in to hear their stories, experiences, and insights about our products and services.</p>

        </div>
    )
}