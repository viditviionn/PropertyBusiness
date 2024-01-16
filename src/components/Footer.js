import { Button } from "@mui/material"

export default function Footer() {
    return (
        <div>

            <div style={{ marginLeft: '20px' }}>



                <div style={{ fontSize: 25, color: 'grey', marginTop: 20, marginBottom: 20 }}>Interested Feel free to Call us ?</div>
                <p>
                    <Button variant='contained'>Send Us a Message ?</Button>
                    <Button style={{ marginLeft: 20 }} variant='contained'>Call Us?</Button>
                </p>
            </div>
        </div>
    )
}