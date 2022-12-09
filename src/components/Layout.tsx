import { JSX } from "preact/jsx-runtime";
import "../styles/Layout.css";

type LayoutProps = {
    children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
    const { children } = props;
    
    return (
        <div className="layout-container">
           {children} 
        </div>
    )
}

export default Layout;