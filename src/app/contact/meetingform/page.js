import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Datepicker from '../../../components/Datepicker'
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import HouseIcon from '@mui/icons-material/House';
import '../../../css/contact.css'









export default function Page() {

  const options=['Website','Broker','Neighbour',"Other Sources"]
  
//book meeting form

const Book_Meeting_form = <div>
<div className="text-underlined">Free Orientation Meeting</div>

<p >
  Whether you wish to buy, rent, sell or rent out your property, our Welocate specialist consultants can help you.

  To book your appointment, please complete the details below and we will confirm the meeting by email.
</p>


<Grid container spacing={2}>
  {/* Form takes 70% of width */}
  <Grid container spacing={4} xs={12} sm={8}>
    {/* First Part */}
    <Grid item xs={12} sm={3} lg={3} md={3}>
    <div className='contact-nameemail'>
        <div> FirstName*</div>
      </div>
      <TextField fullWidth size='small' variant='outlined' label='FirstName' />
    </Grid>

    {/* Second Part */}
    <Grid item xs={12} sm={3} lg={3} md={3}>
      <div className='contact-nameemail'>
        <div> LastName*</div>
      </div>
      <TextField fullWidth size='small' variant='outlined' label='LastName' />
    </Grid>

    {/* Third Part */}
    <Grid item xs={12} sm={3} lg={6} md={6}>
      <div className='contact-nameemail'>
        <div> Email*</div>
      </div>
      <TextField fullWidth size='small' variant='outlined' label='Email' />
    </Grid>

    {/* Fourth Part */}
    <Grid item xs={12} sm={3} lg={3} md={3}>
      <div className='contact-nameemail'>
        <div> Telephone</div>
      </div>
      <TextField fullWidth size='small' variant='outlined' label='Telephone' />
    </Grid>

    {/* Fifth Part */}
    <Grid item xs={12} sm={3} lg={3} md={3}>
      <div className='contact-nameemail'>
        <div> Area of interest</div>
      </div>
      <TextField fullWidth size='small' variant='outlined' label='' />
    </Grid>

    {/* Sixth Part */}
    <Grid item xs={12} sm={6} lg={6} md={6}>
      <div className='contact-nameemail'>
        <div> How did You find Us?</div>
      </div>
      <TextField select fullWidth size='small' variant='outlined' label='Found_through'>{options.map((option) => (
                <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}</TextField>
    </Grid>





    <Grid item xs={12} sm={3} lg={3} md={3}>
      <div className='contact-nameemail'>
        <div> Meetingtime</div>
      </div>
      <TextField fullWidth size='small' variant='outlined' label='Telephone' />
    </Grid>

    {/* Fifth Part */}
    <Grid item xs={12} sm={3} lg={3} md={3}>
      <div className='contact-nameemail'>
        <div> Preffered Language</div>
      </div>
      <TextField fullWidth size='small' variant='outlined' label='' />
    </Grid>

    {/* Sixth Part */}
    <Grid item xs={12} sm={6} lg={6} md={6}>
      <div className='contact-nameemail'>
        <div>Choose Date</div>
        <Datepicker />
      </div>
    </Grid>

    {/* Seventh Part */}
    <Grid item xs={12} sm={12}>
      <div className='contact-nameemail'>
        <div> Give Comments</div>
      </div>
      <TextField className='message-block' variant='outlined' label='Comments' />
      <div>
        <Button variant='contained'>Request a Meeting</Button>
      </div>
    </Grid>
  </Grid>


  {/* Contact details take 30% of width */}
  <Grid item xs={12} sm={4}>
    {/* Adjust the content of your contact details component */}
    <div>
      <div className='text-underlined' >Contact Details</div>
      <div className='contact-details'>
        <div className='contact-icons'>
          <MailIcon color="primary" /> abc@gmail.com
        </div>
        <div className='contact-icons'>
          <PhoneIcon color="primary" />+31(0) 20 760 8282
        </div>
        <div className='contact-icons'>
          <PublicIcon color="primary" />welocate.com
        </div>
        <div className='contact-icons'>
          <HouseIcon color="primary" />
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
</div>


  return (

    //show forms

    <div style={{ marginLeft: 20,marginTop:20 }}>
      {Book_Meeting_form}

    </div>
  );
}
