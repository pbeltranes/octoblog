import Mario from "./tenor.gif";
import "./App.css";
import Header from "./Components/Header/Header"
import PreviewCard from "../Components/PreviewCard";
// script.js
import "nes.css/css/nes.min.css";
import {
  Typography,
  Paper,
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";


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
      <Header />
      <body>
        <Typography variant="h3" component="h2">
          Blog <img src={Mario} className="Mario" alt="logo" />
        </Typography>

       
        <h2>
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
                  <PreviewCard article={article} />
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
