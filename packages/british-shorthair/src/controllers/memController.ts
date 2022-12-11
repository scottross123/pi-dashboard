const {
    mem,
    memLayout,
} = require("systeminformation");

const getMem = async () => {
    try {
        const data = await mem();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
};

const getMemLayout = async () => {
    try {
        const data = await memLayout();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
};

module.exports = {
    getMem,
    getMemLayout,
};