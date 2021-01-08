import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const AlbumItems = ({ title, description }) => {
  const classes = useStyles();

  // userID
  // matchedUsers
  // id
  // title
  // description
  // endTime

  const history = useHistory();

  return (
    <Grid item key={title} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => history.push("/item")}>
          <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title={title} />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Heading
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ flexWrap: "wrap" }}>
          <Chip label="Basic" />
          <Chip label="Basic" />
          <Chip label="Basic" />
          <Chip label="Basic" />
          <Chip label="Basic" />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AlbumItems;
