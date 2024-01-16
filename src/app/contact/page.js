"use client"
import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import '../../css/contact.css'
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import Button from '@mui/material/Button';
import Datepicker from '../../components/Datepicker'

import HouseIcon from '@mui/icons-material/House';
import { useSearchParams, usePathname } from 'next/navigation';

export default function Page() {

    const handleform=(e)=>{
        e.preventDefault()
        const data=new FormData(e.currentTarget)
        
        const data_to_be_sent={
            name:data.get('name'),
            email:data.get('email'),
            telephone:data.get('telephone')
        }
        console.log(data_to_be_sent)
    }


    // contact form 
    const Contact_Form = <div>
        <div className="text-underlined">Contact Form</div>

        <p >
            Do you have questions about any of our products and services? You can either call us directly or complete the form below and we promise to call you back within 1 hour during office hours. Outside of office hours we will respond by email, or if it's urgent, we will call you.
        </p>

        <form onSubmit={handleform}>
            <Grid item container spacing={2}>
                {/* Form takes 70% of width */}
                <Grid item spacing={4} xs={12} sm={8} >

                    <div className='contact-nameemail'>
                        <div > Name</div>
                        <div > Email</div>
                    </div>

                    <div className='divide-in-two'>
                        <TextField name='name' fullWidth size='small' variant='outlined' label='Name' />
                        <TextField name='email' fullWidth size='small' variant='outlined' label='Email' />
                    </div>
                    <div className='contact-nameemail'>
                        <div > Telephone</div>
                        <div > How did You find Us?</div>
                    </div>
                    <div className='divide-in-two'>
                        <TextField name='telephone' fullWidth size='small' variant='outlined' label='Telephone' />
                        <TextField fullWidth size='small' variant='outlined' label='' />
                    </div>
                    <div className='contact-nameemail'>
                        <div > Message us For more Information</div>
                    </div>
                    <TextField className='message-block' variant='outlined' label='Message' />
                    <div >
                        <Button type='submit' variant='contained' >Send Us a Message</Button>
                    </div>


                </Grid>

                {/* Contact details take 30% of width */}
                <Grid item xs={12} sm={4}>
                    {/* Adjust the content of your contact details component */}
                    <div>
                        <div className='text-underlined'>Contact Details</div>
                        <div className='contact-details'>
                            <div className='contact-icons'>
                                <MailIcon /> abc@gmail.com
                            </div>
                            <div className='contact-icons'>
                                <PhoneIcon />+31(0) 20 760 8282
                            </div>
                            <div className='contact-icons'>
                                <PublicIcon />welocate.com
                            </div>
                            <div className='contact-icons'>
                                <HouseIcon />
                                <div className='contact-housedetail'>
                                    Schweitzerlaan 76 1187 JD AmstelveenNetherlands
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='text-underlined'>Office Hours</div>
                        <div className='contact-details'>
                            <div className='contact-icons'>
                                Monday-Friday: 9am until 5.30pm
                            </div>
                            <div className='contact-icons'>
                                Saturday: Available via email
                            </div>
                            <div className='contact-icons'>
                                Sunday: Available via email
                            </div>


                        </div>
                    </div>
                    <div>
                        <div className='text-underlined'>Company Details</div>
                        <div className='contact-details'>
                            <div className='contact-icons'>
                                Name: Welocate B.V.
                            </div>
                            <div className='contact-icons'>
                                Registration number: 64004147
                            </div>
                            <div className='contact-icons'>
                                VAT number: NL855484330B01
                            </div>


                        </div>
                    </div>
                </Grid>
            </Grid>
        </form>
    </div>

    return (

        //show forms

        <div style={{ marginLeft: 20 }}>
            {Contact_Form}

        </div>





    );
}
