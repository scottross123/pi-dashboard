const {
    cpu,
    cpuTemperature,
    cpuCurrentSpeed,
} = require("systeminformation");

const getCpu = async () => {
    try {
        const data = await cpu();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const getCpuTemperature = async () => {
    try {
        const data = await cpuTemperature();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const getCpuCurrentSpeed = async () => {
    try {
        const data = await cpuCurrentSpeed();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    } 
}

module.exports = {
    getCpu,
    getCpuCurrentSpeed,
    getCpuTemperature,
}
