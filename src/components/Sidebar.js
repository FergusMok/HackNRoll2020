import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GroupIcon from "@material-ui/icons/Group";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to="/notifications">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
      </Link>
      <Link to="/main">
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Activities" />
        </ListItem>
      </Link>
    </div>
  );
};
export default Sidebar;
