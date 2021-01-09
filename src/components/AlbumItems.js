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

const AlbumItems = ({ title, description, id, category }) => {
  const classes = useStyles();

  // userID
  // matchedUsers
  // id
  // title
  // description
  // endTime

  const history = useHistory();
  const isItem = category;
  console.log(isItem);
  const colorOfCard = isItem === "true" ? "#85D9BF" : "#CFA76E";

  return (
    <Grid item key={title} xs={12} sm={6} md={4}>
      <Card
        className={classes.card}
        style={{ backgroundColor: { colorOfCard } }}
      >
        <CardActionArea onClick={() => history.push(`/item/${id}`)}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default AlbumItems;
