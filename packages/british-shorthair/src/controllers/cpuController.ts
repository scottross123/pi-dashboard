const {
    cpu
} = require("systeminformation");

exports.getCpu = async () => {
    try {
        const data = await cpu();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}
