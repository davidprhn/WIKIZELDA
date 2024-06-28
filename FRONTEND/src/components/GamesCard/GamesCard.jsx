import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { green, grey } from "@mui/material/colors";
import "./GamesCard.css";
import { Box } from "@mui/material";

export default function OcarinaOfTimeCard({ gameBody }) {
  return (
    <>
      <Card 
        className="card"
        sx={{ maxWidth: 1500, height: "1000px", backgroundColor: green[200] }}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <p>Title: {gameBody.name}</p>
            <p>Launch year: {gameBody.launch_year}</p>
            <p>Duration: {gameBody.duration}</p>
            <p>Difficulty: {gameBody.dificulty}</p>
            <p>
              <a href={gameBody.guide}>Acceso a la guía</a>
            </p>
            <img src={gameBody.game_image} />
          </Typography>
          <Box>
            <button>Comment</button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
