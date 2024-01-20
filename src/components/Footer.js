import { Button } from "@mui/material"

export default function Footer() {
    return (
        <div>

            <div style={{ marginLeft: '30px',marginTop:'100px' }}>



                <div style={{ fontSize: 25, color: 'grey', marginTop: 20, marginBottom: 20 }}>Interested Feel free to Call us ?</div>
                <p>
                    <Button className="button-green" variant='contained'>Send Us a Message ?</Button>
                    <Button style={{ marginLeft: 20 }} variant='contained'>Call Us?</Button>
                </p>

                <div style={{display:'flex',marginTop:'40px'}}>
                    <p style={{color:'blue', fontSize:'15px'}}>2024  ©  PropertyBV    info@property.com   +91(0)20 760 8282   Privacy policy</p>
                   
                
                </div>
            </div>
        </div>
    )
}