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
      <Link to="/signup">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
      </Link>
      <Link to="/item2">
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Activities" />
        </ListItem>
      </Link>
      <Link to="/item">
        <ListItem button>
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Items" />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Matches" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Spare Button" />
      </ListItem>
    </div>
  );
};
export default Sidebar;
