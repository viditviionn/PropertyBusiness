"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "../../css/contact.css";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import HouseIcon from "@mui/icons-material/House";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";
import styles from './components/contact.module.css'; // Your page-specific styles

export default function Page() {
  const [message_sent, setMessage_sent] = useState(false);

  const options = ["Website", "Broker", "Neighbour", "Other Sources"];

  const handleform = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const data_to_be_sent = {
      name: data.get("name"),
      email: data.get("email"),
      telephone: data.get("telephone"),
      found_through: data.get("found_through"),
      text: data.get("message"),
    };
    try {
      const response = await axios.post("/api/emailsend", data_to_be_sent);
      console.log(response.data);
      if (response.data.message === "Email sent successfully") {
        setMessage_sent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // contact form
  const Contact_Form = (
    <div>
      <div className="text-underlined">Contact Form</div>

      <p>
        Do you have questions about any of our products and services? You can
        either call us directly or complete the form below and we promise to
        call you back within 1 hour during office hours. Outside of office hours
        we will respond by email, or if it's urgent, we will call you.
      </p>

      {message_sent ? (
        <p>Message is sent Succesffuly Thankyou</p>
      ) : (
        <form onSubmit={handleform}>
          <Grid container spacing={2}>
            {/* Form takes 70% of width */}
            <Grid container spacing={4} xs={12} sm={8}>
              {/* First Part */}

              {/* First Part */}
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <div className="contact-nameemail">
                  <div>Name*</div>
                </div>
                <TextField
                  name="name"
                  fullWidth
                  size="small"
                  variant="outlined"
                  label="Name"
                />
              </Grid>

              {/* First Part */}
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <div className="contact-nameemail">
                  <div> Email*</div>
                </div>
                <TextField
                  name="email"
                  fullWidth
                  size="small"
                  variant="outlined"
                  label="Email"
                />
              </Grid>

              {/* First Part */}
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <div className="contact-nameemail">
                  <div> Telephone*</div>
                </div>
                <TextField
                  name="telephone"
                  fullWidth
                  size="small"
                  variant="outlined"
                  label="PhoneNO"
                />
              </Grid>

              {/* First Part */}
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <div className="contact-nameemail">
                  <div> Found Through*</div>
                </div>
                <TextField
                  select
                  name="found_through"
                  fullWidth
                  size="small"
                  variant="outlined"
                  label="Found Through"
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div className="contact-nameemail">
                  <div> MessageUs</div>
                </div>
                <TextField
                  name="text"
                  className="message-block"
                  variant="outlined"
                  label="MessageUs"
                />
                <div>
                  <Button type="submit" variant="contained">
                    Send Us Message
                  </Button>
                </div>
              </Grid>
            </Grid>

            {/* Contact details take 30% of width */}
            <Grid item xs={12} sm={4}>
              {/* Adjust the content of your contact details component */}
              <div>
                <div className="text-underlined">Contact Details</div>
                <div className="contact-details">
                  <div className="contact-icons">
                    <MailIcon color="primary" /> abc@gmail.com
                  </div>
                  <div className="contact-icons">
                    <PhoneIcon color="primary" />
                    +31(0) 20 760 8282
                  </div>
                  <div className="contact-icons">
                    <PublicIcon color="primary" />
                    welocate.com
                  </div>
                  <div className="contact-icons">
                    <HouseIcon color="primary" />
                    <div className="contact-housedetail">
                      Schweitzerlaan 76 1187 JD AmstelveenNetherlands
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-underlined">Office Hours</div>
                <div className="contact-details">
                  <div className="contact-icons">
                    Monday-Friday: 9am until 5.30pm
                  </div>
                  <div className="contact-icons">
                    Saturday: Available via email
                  </div>
                  <div className="contact-icons">
                    Sunday: Available via email
                  </div>
                </div>
              </div>
              <div>
                <div className="text-underlined">Company Details</div>
                <div className="contact-details">
                  <div className="contact-icons">Name: Welocate B.V.</div>
                  <div className="contact-icons">
                    Registration number: 64004147
                  </div>
                  <div className="contact-icons">
                    VAT number: NL855484330B01
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
  return (
    <div className={styles.contactPage}>
      <ContactForm />
      <ContactDetails />
      {/* Add any additional layout or components needed */}
    </div>
  );
}
