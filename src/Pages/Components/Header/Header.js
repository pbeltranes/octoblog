import "./Header.css";
// script.js
import "nes.css/css/nes.min.css";
import {
  IconButton,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";


const navLinks = [
  { title: `blog`, path: `/blog` },
  { title: `about`, path: `/about-me` },
];

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton>
        <Container className="navDisplayFlex">
          <List
            component="nav"
            aria-labelledby="main navigation"
            className="navDisplayFlex"
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className="linkText">
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
