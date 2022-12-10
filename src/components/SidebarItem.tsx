import "../styles/Sidebar.css";

type SidebarProps = {
    name: string,
}

const SidebarItem = (props: SidebarProps) => {
    const { name } = props;

    return (
        <li className="sidebar-item">
            {name}
        </li>
    );
}

export default SidebarItem;