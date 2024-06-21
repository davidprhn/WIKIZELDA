import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { green, grey } from "@mui/material/colors";
import './PostCard.css'
import { motion } from 'framer-motion'

export default function PostCard({ postBody }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: 360,
      }}
      transition={{
        duration: 0.9,
      }}
    >
      <Card
        className="card"
        sx={{ maxWidth: 345, height: "200px", backgroundColor: green[200] }}
      >
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
    </motion.div>
  );
}
