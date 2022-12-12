const {
    osInfo,
    shell,
    versions,
    users,
} = require("systeminformation");

const getOsInfo = async () => {
    try {
        const data = await osInfo();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
};

const getShell = async () => {
    try {
        const data = await shell();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
};

// TODO take in parameter for app
const getVersions = async () => {
    try {
        const data = await versions();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const getUsers = async () => {
    try {
        const data = await users();
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}

module.exports = {
    getOsInfo,
    getShell,
    getUsers,
    getVersions
};