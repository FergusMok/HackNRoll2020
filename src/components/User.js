import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Titlebar from "./Titlebar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./CSS/User.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  avatarLarge: {
    width: "100%",
    height: "100%",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  fixedHeight: {
    height: 240,
  },
  fixedWidth: {
    width: 240,
  },
  fixedSquare: {
    height: 240,
    width: 240,
  },
  fixedHigherHeight: {
    height: 340,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  itemButton: {
    display: "flex",
  },
}));

function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    // This is the placeholder
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip label={data.label} className={classes.chip} />
          </li>
        );
      })}
    </Paper>
  );
}

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Item = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHigherHeightPaper = clsx(classes.paper, classes.fixedHigherHeight);
  const fixedWidthPaper = clsx(classes.paper, classes.fixedWidth);
  const fixedSquarePaper = clsx(classes.paper, classes.fixedSquare);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const applyButton = (
    <>
      <Button className={classes.itembutton} variant="outlined" color="primary" onClick={handleClickOpen}>
        Confirm Matching
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm to share contact with user?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Matching will allow both users to contact each other. Your contact information will be released to the other
            user, and vice versa, upon confirming with both parties.
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
  );

  return (
    <div style={{ display: "flex" }}>
      <Titlebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedSquarePaper}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                  className={classes.avatarLarge}
                />
              </Paper>
              <br />
              <Paper className={fixedWidthPaper}>
                <p style={{ marginLeft: "auto", marginRight: "auto" }}> Bobbo3000 </p>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHigherHeightPaper}>
                <ImageGallery items={images} />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <h1>Badminton Racquets!</h1>
                <p>
                  Hello, I have some badminton racquets to lend out. Costs: $3/hr each. Quantity : x2 Collection @ Utown
                  Residence
                </p>
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={9}>
              <Paper>
                Tags
                {ChipsArray()}
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedWidthPaper}>{applyButton}</Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Item;
