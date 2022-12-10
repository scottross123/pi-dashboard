import { signal, useSignalEffect } from "@preact/signals";

const time = signal(new Date())

const useClock = () => {
    useSignalEffect(() => {
        const id = setInterval(() => {
            time.value = new Date();
          }, 1000);
          return () => clearInterval(id);
    });
    return time;
}

export default useClock;