import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Box,
} from "@mui/material";
import { blue } from "@mui/material/colors";

// Assuming you have an array of reviews
const reviews = [
  //...your reviews array
  {
    name: "James McNaughton",
    date: "January 3, 2024",
    rating: 5,
    comment:
      "Was a great service, as non-native Dutch speakers unfamiliar with the house buying system they explained and arranged everything for us. Found a great estate agent to help with our second viewings and give us advice, and arranged notary and",
    avatarLetter: "J",
  },
  {
    name: "James McNaughton",
    date: "January 3, 2024",
    rating: 5,
    comment:
      "Was a great service, as non-native Dutch speakers unfamiliar with the house buying system they explained and arranged everything for us. Found a great estate agent to help with our second viewings and give us advice, and arranged notary and",
    avatarLetter: "J",
  },
  {
    name: "James McNaughton",
    date: "January 3, 2024",
    rating: 5,
    comment:
      "Was a great service, as non-native Dutch speakers unfamiliar with the house buying system they explained and arranged everything for us. Found a great estate agent to help with our second viewings and give us advice, and arranged notary and",
    avatarLetter: "J",
  },
  {
    name: "James McNaughton",
    date: "January 3, 2024",
    rating: 5,
    comment:
      "Was a great service, as non-native Dutch speakers unfamiliar with the house buying system they explained and arranged everything for us. Found a great estate agent to help with our second viewings and give us advice, and arranged notary and",
    avatarLetter: "J",
  },
  {
    name: "James McNaughton",
    date: "January 3, 2024",
    rating: 5,
    comment:
      "Was a great service, as non-native Dutch speakers unfamiliar with the house buying system they explained and arranged everything for us. Found a great estate agent to help with our second viewings and give us advice, and arranged notary and",
    avatarLetter: "J",
  },
  {
    name: "James McNaughton",
    date: "January 3, 2024",
    rating: 5,
    comment:
      "Was a great service, as non-native Dutch speakers unfamiliar with the house buying system they explained and arranged everything for us. Found a great estate agent to help with our second viewings and give us advice, and arranged notary and",
    avatarLetter: "J",
  },
  {
    name: "James McNaughton",
    date: "January 3, 2024",
    rating: 5,
    comment:
      "Was a great service, as non-native Dutch speakers unfamiliar with the house buying system they explained and arranged everything for us. Found a great estate agent to help with our second viewings and give us advice, and arranged notary and",
    avatarLetter: "J",
  },
  {
    name: "James McNaughton",
    date: "January 3, 2024",
    rating: 5,
    comment:
      "Was a great service, as non-native Dutch speakers unfamiliar with the house buying system they explained and arranged everything for us. Found a great estate agent to help with our second viewings and give us advice, and arranged notary and",
    avatarLetter: "J",
  },
];

const ReviewCard = ({ review }) => (
  <Card
    raised
    sx={{
      maxWidth: 465,
      borderRadius: 2,
      // m: , // margin-bottom for spacing between cards
    }}
  >
    <CardContent
      sx={{
        "&:last-child": {
          paddingBottom: "16px", // Override MUI CardContent bottom padding
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 1,
        }}
      >
        <Avatar sx={{ bgcolor: blue[500], marginRight: 2 }}>
          {review.avatarLetter}
        </Avatar>
        <Box flexGrow={1}>
          <Typography gutterBottom variant="subtitle1" component="div" >
            {review.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="read-only"
              value={review.rating}
              readOnly
              size="small"
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: 1 }}
            >
              {review.date}
            </Typography>
          </Box>
        </Box>
        <img
          src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" // Replace with the path to your Google logo
          alt="Google"
          style={{ width: "20px", height: "20px", alignSelf: "flex-start" }}
        />
      </Box>
      <Box
        // sx={{
        //   ...styles.customScrollbar,
        //   maxHeight: '4.5em',
        //   overflowY: 'scroll', // Use overflowY for vertical scroll
        //   // ... other styles
        // }}
        className="custom-scrollbar"
        sx={{
          maxHeight: '4.5em', // Adjust as needed
          overflowY: 'auto',
           
        }}
      >
        <Typography variant="body2" color="text.secondary" width={"95%"}>
          {review.comment}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const ReviewSection = () => {
  return (
    <Grid container spacing={2} >
      {/* This provides spacing around each Grid item */}
      {reviews.map((review, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} >
          <ReviewCard review={review} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReviewSection;