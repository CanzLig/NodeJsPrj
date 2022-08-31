const leaveTypeService = require('../services/leavetype.service');

const addLeaveType = async (req, res, next) => {
    const { name, code } = req.body;
    let info = {
        name: name,
        code: code
    }
    await leaveTypeService.insert(info)
        .then(data => res.json(data))
        .catch(err => next(err));
}

const allLeaveType = async (req, res, next) => {
    await leaveTypeService.getAll()
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

const updateLeaveType = async (req, res, next) => {
    const { id } = req.params;
    const { name, code } = req.body;
    let info = {
        name: name,
        code: code
    }

    await leaveTypeService.modifyById(id, info)
        .then(data => data[0] != 0 ? res.json({"message" : "Update Successful"}) : next("No data updated"))
        .catch(err => next(err));
}

const deleteLeaveType = async (req, res, next) => {
    const { id } = req.params;
    
    await leaveTypeService.remove(id)
        .then(data => data[0] != 0 ? res.json({"message" : "Successfully Delete"}) : next("No data deleted"))
        .catch(err => next(err));
}

module.exports = {
    addLeaveType,
    allLeaveType,
    updateLeaveType,
    deleteLeaveType
}