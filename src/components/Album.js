import React, { useState, useEffect, useCallback } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AlbumItems from "./AlbumItems";
import { AlbumDisplay } from "./AlbumDisplay";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { activeRequests, requestsMadeByUser } from "./API/API";
import { Link } from "react-router-dom";

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
  absolute: {
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(6),
  },
}));

const Album = () => {
  //const classes = useStyles();
  const [ranklist, setRanklist] = useState([]);

  function setList(slt) {
    setRanklist(slt);
  }

  useEffect(() => {
    activeRequests(setList);
  }, []);

  return (
    <React.Fragment>
      {/* <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {(() => {
              console.log("DSfsad");
              console.log(renderItems());
              console.log("sfsfsd");
            })()}
          </Grid>
        </Container>
      </main>
      <Link to="/create">
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" className={classes.absolute}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Link> */}
      <AlbumDisplay cards={ranklist}></AlbumDisplay>
    </React.Fragment>
  );
};
export default Album;
