import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import VpnKeyIcon from '@mui/icons-material/VpnKey'; // Key icon
import NoteIcon from '@mui/icons-material/Note'; // Notepad icon
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import HomeIcon from '@mui/icons-material/Home';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Relocatingcards() {
  return (
    <>
    {/* // Card1# */}
    <Box sx={{margin:2}}>
    <Card sx={{ minWidth: 275 ,backgroundColor:'grey'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <IconButton color="primary">
                <GroupsIcon fontSize='large' />
              </IconButton>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      
    </Card>
    </Box>
    {/* // Card2# */}
    <Box sx={{margin:2}}>
<Card sx={{ minWidth: 275 ,backgroundColor:'grey'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <IconButton color="primary">
                <CameraAltIcon fontSize='large' />
              </IconButton>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
     
    </Card></Box>


        {/* // Card3# */}
        <Box sx={{margin:2}}>
<Card sx={{ minWidth: 275 ,backgroundColor:'grey'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <IconButton color="primary">
                <HomeIcon fontSize='large' />
              </IconButton>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
     
    </Card></Box>

        {/* // Card4# */}
        <Box sx={{margin:2}}>
<Card sx={{ minWidth: 275 ,backgroundColor:'grey'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <IconButton color="primary">
                <GavelIcon fontSize='large' />
              </IconButton>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
     
    </Card></Box>
    </>
  );
}