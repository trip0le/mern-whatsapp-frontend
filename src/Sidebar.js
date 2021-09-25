import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="data:image/jpeg;base64,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" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
          <div className="sidebar__searchContainer">
              <SearchOutlined/>
              <input placeholder="Search or Start a new chat" type="text"/>
          </div>
      </div>
      <div className="sidebar_chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
