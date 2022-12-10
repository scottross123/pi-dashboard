import { JSX } from "preact/jsx-runtime";
import "../styles/Card.css";

type CardProps = {
    title?: string,
    subtitle?: string,
    content?: string | JSX.Element,
}

const Card = (props: CardProps) => {
    const { title, content, subtitle } = props;

    return (
        <article className="card">
            <header>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </header>
            <div>
                <p>
                    {content}
                </p>
            </div>
            <footer>
                ffooter
            </footer>
        </article>
    );
}

export default Card;