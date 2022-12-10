import { signal } from "@preact/signals";
import useClock from "../hook/useClock";
import Card from "./Card";

const ClockCard = () => {
    const date = useClock();
    const today = date.value.toDateString();
    const time = date.value.toLocaleTimeString();

    return (
        <Card
            title={today}
            subtitle={time}
            content={"No special events today."}
        />
    );
}

export default ClockCard;