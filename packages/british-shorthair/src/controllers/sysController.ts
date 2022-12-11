const { 
    system,
    bios,
} = require("systeminformation");

exports.getSys = async () => {
    try {
        const data = await system();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}

exports.getBios = async () => {
    try {
        const data = await bios();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}