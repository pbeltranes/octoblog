import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "nes.css/css/nes.min.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 400,
    marginBottom: 40,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "flex-shrink",
  },
  cover: {
    width: 400,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function PreviewCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props);
  const content = props.article;
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography align="left" gutterBottom variant="h5" component="h2">
            {content.title}
          </Typography>
          <Typography
            variant="body2"
            align="justify"
            color="textSecondary"
            maxLength="250"
          >
            {content.resume}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button className="nes-btn" size="small" color="primary" component={Link} to={`/blog/${content.path}`}>
              Learn More
          </Button>
        </CardActions>
        <div className={classes.controls}></div>
      </div>
      <CardMedia
        className={classes.cover}
        image={"https://source.unsplash.com/random/300x300"}
        title="Live from space album cover"
      />
    </Card>
  );
}
