const { Employee, LeaveDate, LeaveType } = require('../models');
const sequelize = require('sequelize');

const insert = async (leaveDate) => {
    return await LeaveDate.create(leaveDate);
}

const getLeaveDatePeMonth = async (id, month, year) => {
    return await LeaveDate.findAll({
        attributes: ['id','dateTo', 'dateFrom', 'EmployeeId', 'LeaveTypeId'],
        where: {
            [sequelize.Op.and]: [
                    { [sequelize.Op.and] : [
                        sequelize.where(sequelize.fn('YEAR', sequelize.col('dateFrom')), year),
                        sequelize.where(sequelize.fn('MONTH', sequelize.col('dateFrom')), month)
                    ]},
                    { EmployeeId: id }
                ]
        }, 
        include: [  { model: Employee, 
                        attributes: ['firstname', 'lastname']
                    }, { model: LeaveType, 
                        attributes: ['name']
                    }] 
    });
}

const modifyById = async (id, leavedate) => {
    return await LeaveDate.update(leavedate, { where: { id: id } });
}

const remove = async (id) => {
    return await LeaveDate.destroy({ where: { id: id }} );
}

module.exports = {
    insert,
    getLeaveDatePeMonth,
    modifyById,
    remove
}