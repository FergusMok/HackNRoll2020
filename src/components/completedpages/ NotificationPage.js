import RectangleItems from "../RectangleItems";
import Titlebar from "../Titlebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const NotificationPage = () => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <Titlebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <RectangleItems />
        <RectangleItems />
        <RectangleItems />
        <RectangleItems />
      </main>
    </div>
  );
};

export default NotificationPage;
