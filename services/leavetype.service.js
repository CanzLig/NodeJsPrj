const { LeaveType } = require('../models');

const insert = async (leavetype) => {
    return await LeaveType.create(leavetype);
}

const getAll = async () => {
    return await LeaveType.findAll({});
}

const modifyById = async (id, leavetype) => {
    return await LeaveType.update(leavetype, { where: { id: id}});
}

const remove = async (id) => {
    return await LeaveType.destroy({ where: { id: id}}); 
}

module.exports = {
    insert,
    getAll,
    modifyById,
    remove
}