"use client"

import { Button } from '@mui/material'
import m2 from '../../public/images/pageImages/m2.jpg'
import Image from 'next/image'
import '../css/home.css'
import {useRouter} from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    // Example: Navigate to the '/about' page
    router.push('/contact/meetingform');
  };

  return (
    <div>
      <div>
        <Image src={m2} alt='m1 image' />

      </div>
      <div className='image-text'>
        Buying Renting or Renting RentingOut
        A home in India
      </div>
      <div className='image-button'>
        <Button onClick={handleNavigation} variant='contained'>Book a free Meeting</Button>
      </div>
      <div className='content-button wrapper'>


        <p className='content-written'>
          Whether you have just moved to the Netherlands and about to rent or have been here for a few years and are ready to buy a new home, we are here for you.
          Our packages for buying, selling, renting out and renting are customised to your specific requirements and providing everything you need at a fixed and transparent price.
        </p>

        <p>Whether you are moving to Amsterdam, The Hague, Rotterdam or anywhere else in the Netherlands, we have a network of local agents that will help you with everything you need.
        </p>
        <div className='button-group-right'>
          <Button variant='contained'>Contact Us</Button>
          <Button variant='contained'>Send Us message</Button>
          <Button variant='contained'>Request a Service</Button>
        </div>
      </div>

      <div className='text-underlined'>
        ABN AMRO, Rabobank or ING Bank clients
      </div>
      <p>Are you a customer of ABN AMRO, Rabobank or ING Bank? If so, we offer everything you need to arrange your mortgage with them such as appraisal reports, construction checks, energy labels and a free notary service as well as the complete Home Buyers Plan package, all at a special price.</p>

      <p>To request any of these products, click on the 'Request a service' button and complete the form.</p>
    </div>
  )
}
