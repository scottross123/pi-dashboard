import "../styles/Sidebar.css";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1 className="sidebar-title">HomePi</h1>
            <ul>
                <SidebarItem name="dashboard" />
                <SidebarItem name="sensehat" />
                <SidebarItem name="containers" />
            </ul>
        </div>
    )
}

export default Sidebar;