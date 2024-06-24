import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProfileCard({ userInfo }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={"https://avatarfiles.alphacoders.com/598/thumb-59816.jpg"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userInfo.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            { userInfo.email } { userInfo.birthday_date }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit profile</Button>
      </CardActions>
    </Card>
  );
}
