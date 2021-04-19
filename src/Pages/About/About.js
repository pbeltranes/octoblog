import Paul from "./paul.png";
import Header from "../Components/Header/Header";
import "./About.css";
// script.js
import "nes.css/css/nes.min.css";
import { Typography, Paper, Grid, Container } from "@material-ui/core";

function About() {
  const english =
    "English: Engineer of UDP and developer Fullstack Node in the practice, I like develop software (more that the Back than the Front). I cofound of two startups and one consultant of software developement. I like music house, tech, funk, I like mix music, I practiced crossfit until mi knee permise me. my redaction is like we say in Chile: 'Es como el pico' this mean that is really suck.";
  const spanish =
    " Español: Ingeniero de la UDP y Desarrollador Fullstack Nodejs en la práctica. Me gusta el desarrollo de software (más el Back que Front). Participe en la fundación de dos emprendimientos y una consultora de desarrollo de software. Me gusta el House, Tech y el Funk, me gusta mezclar musica, practicaque crossfit hasta que mi rodilla me lo permitio. Mi redacción en buen chileno es como el pico (mala).";
  return (
    <div className="App">
      
      <Container maxWidth="lg">  
      <Header />
      
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          spacing={1}
        >
          {" "}
          <Paper elevation={0}>
            <Grid item xs={12}>
              <Typography
                className="nes-balloon from-left margin-ballon"
                variant="body2"
                component="h2"
              >
                {english}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <img src={Paul} className="head-render" alt="logo" />
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
