// components/ContactDetails.js
// import styles from './ContactDetails.module.css'; // Importing the CSS module
import styles from "./ContactDetails.module.css"; // Importing the CSS module

export default function ContactDetails() {
  return (
    <div className={styles.contactDetails}>
      {/* <h2>Contact details</h2> */}
      {/* The rest of the contact details go here */}

      <div>
        <div className={styles.detailheading}>Contact details</div>
        <div className={styles.detailText}>info@welocate.com</div>
        <div className={styles.detailText}>+31(0) 20 760 8282</div>
        <div className={styles.detailText}>welocate.com</div>
        <div className={styles.detailText}>Schweitzerlaan 76 1187 JD Amstelveen Netherlands</div>
      </div>

      <div style={{marginTop: "40px"}}>
        <div className={styles.detailheading}>Office Hours</div>
        <div className={styles.detailText}>Monday-Friday: 9am until 5:30pm</div>
        <div className={styles.detailText}>Saturday: Available via email</div>
        <div className={styles.detailText}>Sunday: Available via email</div>
      </div>

      <div style={{marginTop: "40px"}}>
        <div className={styles.detailheading}>Company details</div>
        <div className={styles.detailText}>Name: Property Inc.</div>
        <div className={styles.detailText}>Registraion Number: 45200147</div>
        <div className={styles.detailText}>VAT number: NDFBEFB54531551</div>
      </div>
    </div>
  );
}
