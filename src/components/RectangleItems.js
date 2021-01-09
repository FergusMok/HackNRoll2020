import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxHeight: 100,
    position: "relative",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  status: {
    position: "absolute",
    top: "15px",
    right: "50px",
  },
  itembutton: {
    position: "absolute",
    top: "50px",
    right: "50px",
  },
});

export default function RectangleItems({ post }) {
  const classes = useStyles();

  // CHANGE WHEN API COMES
  console.log("TIKTIK : ");
  console.log(post);

  const postUsersMatched = post.usersMatched;
  const numberOfMatches = postUsersMatched.length;
  const userID = post.userID;
  const postTitle = post.title;
  const postBody = post.body;

  const isMatched = numberOfMatches > 0 ? true : false;
  const history = useHistory();
  const status = isMatched ? "MATCHED" : "WAITING FOR MATCH";

  const handleOnClick = () => {
    history.push({
      pathname: "/applicants",
      search: "",
      state: { postUsersMatched },
    });
  };

  const confirmMatchButton = () =>
    isMatched ? (
      <>
        <Button
          onClick={handleOnClick}
          className={classes.itembutton}
          variant="outlined"
          color="primary"
        >
          View Applicants!
        </Button>
      </>
    ) : (
      <> </>
    );

  {
    /*         <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm to match with user?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Matching will allow both users to contact each other. Your contact
              information will be released to the other user, and vice versa.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    ) : (
      <> </>
    );
  // #E5F9E7 GREEN
  // #FFF8DB YELLOW
 */
  }

  return (
    <Card
      className={classes.root}
      style={{ backgroundColor: isMatched ? "#E5F9E7" : "#FFF8DB" }}
    >
      <CardContent>
        <Typography
          className={classes.status}
          color="textSecondary"
          gutterBottom
        >
          {status}
        </Typography>
        <Typography variant="h5" component="h2">
          {postTitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {postBody}
        </Typography>
        {confirmMatchButton()}
      </CardContent>
    </Card>
  );
}
