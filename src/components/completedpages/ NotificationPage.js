import RectangleItems from "../RectangleItems";
import Titlebar from "../Titlebar";
import { makeStyles } from "@material-ui/core/styles";
import { useCallback } from "react";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const NotificationPage = () => {
  const [notifications, setNotifications] = setState([]);

  // Get request, to get all the rectangle items.
  // The request will be used to map to rectangle items.

  // When this page loads, call the get request.

  // Followed the format in Album
  useEffect(() => {
    getRequest(setNotifications);
  }, []);

  const renderRectangleItems = useCallback(() => {
    notifications.map((post) => {
      // FILL IN WHEN API COMES
      // IF WANT TO SORT BY GREEN, YELLOW, RED, THEN SORT HERE
      // NOTIFICATIONS.SORT( ... ).MAP( ... )
      return <RectangleItems post />;
    });
  });

  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <Titlebar name={"Notifications"} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {renderRectangleItems}
      </main>
    </div>
  );
};

export default NotificationPage;
