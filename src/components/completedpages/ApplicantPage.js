import RectangleUsers from "../RectangleUsers";
import Titlebar from "../Titlebar";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { redirectingFn } from "../API/LoginHandler";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const ApplicantPage = () => {
  const classes = useStyles();
  const location = useLocation();

  const renderRectangleUsers = location.state.postUsersMatched.map((users) => {
    return <RectangleUsers user={users} />;
  });
  // A get request here, based on object_id, so as to get the match of user_name and telegram_ids

  return (
    <div style={{ display: "flex" }}>
      {redirectingFn()}

      <Titlebar name={"Applicant Page"} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {renderRectangleUsers}
      </main>
    </div>
  );
};

export default ApplicantPage;
