import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Details";
import MailIcon from "@mui/icons-material/Details";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../SideBar/SideBar.css"; // Import your updated CSS file

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const array = [
    {
      title: "The Legend of Zelda Ocarina of Time",
      url: "ocarinaoftime",
    },
    {
      title: "The Legend of Zelda The Wind Waker",
      url: "thewindwaker",
    },
    {
      title: "The Legend of Zelda A Link To The Past",
      url: "alinktothepast",
    },
    {
      title: "The Legend of Zelda Breath of the Wild",
      url: "breathofthewild",
    },
    {
      title: "The Legend of Zelda Tears of the Kingdom",
      url: "tearsofthekingdom",
    },
  ];

  const list = (anchor) => (
    <Box 
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250, fontFamily: 'The Wild Breath of Zelda'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{fontFamily: 'The Wild Breath of Zelda'}}>
        {array.map((obj, index) => (
          <Link sx={{fontFamily: 'The Wild Breath of Zelda'}}
            to={`/${obj.url}`}
            key={index}
            className="sidebar-link" // Apply the sidebar-link class here
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={obj.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}></MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
