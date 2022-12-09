import "../styles/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1 className="sidebar-title">HomePi</h1>
            <ul>
                <li>Dashboard</li>
                <li>SenseHat</li>
                <li>Containers</li>
            </ul>
        </div>
    )
}

export default Sidebar;