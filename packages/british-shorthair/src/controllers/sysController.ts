const { 
    system,
    bios,
} = require("systeminformation");

const getSys = async () => {
    try {
        const data = await system();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const getBios = async () => {
    try {
        const data = await bios();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}

module.exports = {
    getSys,
    getBios,
}