import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function PostCard({ postBody }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <ThumbUpIcon />
        <Typography>Like</Typography>
      </CardActions>
    </Card>
  );
}
