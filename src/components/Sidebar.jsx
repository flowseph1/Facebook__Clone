import React from "react";
import "./../Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useStateValue } from "./../components/StateProvider";

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} tittle={user.displayName} />
            <SidebarRow
                Icon={LocalHospitalIcon}
                tittle="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} tittle="Pages" />
            <SidebarRow Icon={PeopleIcon} tittle="Friends" />
            <SidebarRow Icon={ChatIcon} tittle="Messenger" />
            <SidebarRow Icon={StorefrontIcon} tittle="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} tittle="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} tittle="Marketplace" />
        </div>
    );
}

export default Sidebar;
