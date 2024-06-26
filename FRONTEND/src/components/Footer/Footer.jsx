
import { Box, Grid, Container, Button } from "@mui/material";
import "../Footer/Footer.css"

function Footer() {
  const elements = [
    {
      header: "Help",
      links: ["Contact", "Support", "Privacy"],
    },
    {
      header: "Account",
      links: ["Login", "Register", "Nuevo"],
    },
    {
      header: "Messages",
      links: ["Backup", "History", "Roll"],
    },
  ];

  function generateFooterElements() {
    const footerElements = elements.map((column, idx) => {
      return (
        <Grid key={idx} item xs={12} md={4}>
          <Box borderBottom={1}>
            <Button className="typography-header">
              {column.header}
            </Button>
          </Box>
          {column.links.map((link, idx) => {
            return (
              <Box key={idx}>
                <Button className="typography-link">{link}</Button>
              </Box>
            );
          })}
        </Grid>
      );
    });
    return footerElements;
  }

  return (
    <footer>
      <Box bgcolor="#3c6e3c" color="#ffffff" padding={2}>
        <Container>
          <Grid container columnSpacing={2}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
