import { signal } from "@preact/signals";
import useClock from "../hook/useClock";

const Clock = () => {
    const time = useClock();
    
    return (
        <div>
            {time.value.toLocaleTimeString()}
        </div>
    );
}

export default Clock;