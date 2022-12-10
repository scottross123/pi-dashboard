import { JSX } from "preact/jsx-runtime";
import "../styles/Main.css";

type MainProps = {
    children: JSX.Element | JSX.Element[]
}

const Main = (props: MainProps) => {
    const { children } = props;

    return (
        <main>
            {children}
        </main>
    );
}

export default Main;