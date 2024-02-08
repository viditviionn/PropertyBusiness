// components/ContactForm.js
// import styles from './ContactForm.module.css'; // Importing the CSS module
import { Button } from '@mui/material';
import styles from './ContactForm.module.css'; // Importing the CSS module

export default function ContactForm() {
  return (
    <div className={styles.contactForm}>
      {/* <h2>Contact form</h2> */}
      <div className={styles.detailheading}>Contact form</div>

      <div className='contact-p'>Do you have questions about any of our products and services? You can either call us directly or complete the form below and we promise to call you back within 1 hour during office hours. Outside of office hours we will respond by email, or if it's urgent, we will call you.</div>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="telephone">Telephone:</label>
          <input type="tel" id="telephone" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="find-us">How did you find us?:</label>
          <select id="find-us">
            <option value="">Select...</option>
            <option value="internet">Internet</option>
            <option value="friend">Friend</option>
            <option value="advertisement">Advertisement</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message"></textarea>
        </div>
        {/* <button className='button' type="submit">Send message</button> */}
        <Button  variant="contained">
            Send message
          </Button>
      </form>
    </div>
  );
}
