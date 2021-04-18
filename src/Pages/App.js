import Paul from "./paul.svg";
import Mario from "./tenor.gif";
import "./App.css";
import PreviewCard from "../Components/PreviewCard";
// script.js
import "nes.css/css/nes.min.css";
import { Typography, Paper, Grid } from "@material-ui/core";


function App() {
  const listArticles = [
    {
      title: "titulo 1",
      resume:
        "Lorem Ipsum es simplemente el texto de relleno de las impresas, Lorem Ipsum es simplemente el texto de relleno de las impresas",
      avatar: "url_image",
      path: "path-1",
      tags: ["front", "api"],
      Header: "https://source.unsplash.com/random/1200x800",
      coments: {
        userId: "",
      },
    },
    {
      title: "titulo 2 del art",
      resume:
        "Lorem Ipsum es simplemente el texto de relleno de las impresas.Lorem Ipsum es simplemente el texto de relleno de las impresas",
      avatar: "url_image",
      path: "path-2",
      tags: ["back", "general"],
      Header: "https://source.unsplash.com/random/1200x800",
    },
    {
      title: "title",
      resume:
        "Lorem Ipsum es simplemente el texto de relleno de las impresas. Lorem Ipsum es simplemente el texto de relleno de las impresas",
      avatar: "url_image",
      path: "path-3",
      tags: ["front", "mongoose"],
      Header: "https://source.unsplash.com/random/1200x800",
      coments: {
        userId: "",
      },
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={Paul} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <body>
        <Typography variant="h3" component="h2">
          @Pbeltranes  <img src={Mario} className="Mario" alt="logo" />
        </Typography>
       
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs>
            <Paper elevation={0}>
              <Typography className="nes-container" variant="body2" component="h2">
                Español: Ingeniero de la UDP y Desarrollador Fullstack Nodejs en
                la práctica. Me gusta el desarrollo de software (más el Back que
                Front). Participe en la fundación de dos emprendimientos y una
                consultora de desarrollo de software. Me gusta el House, Tech y
                el Funk, me gusta mezclar musica, practicaque crossfit hasta que
                mi rodilla me lo permitio. Mi redacción en buen chileno es como
                el pico (mala).
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className="nes-container" elevation={0}>
              <Typography variant="body2" component="h2">
                English: Engineer of UDP and developer Fullstack Node in the
                practice, I like develop software (more that the Back than the
                Front). I cofound of two startups and one consultant of software
                developement. I like music house, tech, funk, I like mix music,
                I practiced crossfit until mi knee permise me. my redaction is
                like we say in Chile: "Es como el pico" this mean that is really
                suck.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <h2>
          {"List of articles"}
          <ul>
            <li>
              {" "}
              Articulo 1 <a href="google.com">English </a> -{" "}
              <a href="google.com"> Spanish </a>
            </li>
          </ul>
          <div style={{ padding: 20 }}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
              spacing={2}
            >
              {listArticles.map((article, key) => (
                <Grid item xs key={key}>
                  <PreviewCard article={article}  />
                </Grid>
              ))}
            </Grid>
          </div>
        </h2>
      </body>
    </div>
  );
}

export default App;
