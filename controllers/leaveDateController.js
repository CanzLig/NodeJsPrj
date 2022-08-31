const leaveDateService = require('../services/leavedate.service');

const addLeaveDate = async (req, res, next) => {
        const { EmployeeId, dateFrom, dateTo, LeaveTypeId } = req.body;
        let info = {
            EmployeeId : EmployeeId,
            LeaveTypeId : LeaveTypeId,
            dateFrom : dateFrom,
            dateTo : dateTo
        }
        
        await leaveDateService.insert(info)
            .then(leavedate => res.json(leavedate))
            .catch(err => next(err));
}

const getEmployeeLeavedatePerMonth = async (req, res, next) => {
    const { id } = req.params;
    const { month, year } = req.body;
    await leaveDateService.getLeaveDatePeMonth(id, month, year)
        .then(leavedate => leavedate ? res.json(leavedate) : res.sendStatus(404))
        .catch(err => next(err))
}

const updateLeaveDate = async (req, res, next) => {
    const { id } = req.params;
    const { dateFrom, dateTo } = req.body;
    let info = {
        dateFrom : dateFrom,
        dateTo : dateTo
    }

    await leaveDateService.modifyById(id, info)
        .then(leavedate => leavedate[0] != 0 ? res.json({"message" : "Update Successful"}) : next("No data updated"))
        .catch(err => next(err));
}

const deleteLeaveDate = async(req, res, next) => {
    const { id } = req.params;
    await leaveDateService.remove(id, info)
        .then(leavedate => leavedate[0] != 0 ? res.json({"message" : "Successfully Delete"}) : next("No data deleted"))
        .catch(err => next(err));
}

module.exports = {
    addLeaveDate,
    getEmployeeLeavedatePerMonth,
    updateLeaveDate,
    deleteLeaveDate
}