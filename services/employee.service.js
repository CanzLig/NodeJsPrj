const { Employee, LeaveDate, LeaveType, Team } = require('../models');

const insert = async (employee) => {
    return await Employee.create(employee);
}

const getAll = async () => {
    return await Employee.findAll({ 
        include: [{
            model: Team,
            attributes: ['name']
        }]
    });
}

const getById = async (id) => {
    return await Employee.findOne({ where: { id: id }, 
        include: [{ 
            model: LeaveDate, 
            attributes: ['dateFrom', 'dateTo'],
            include: [{
                model: LeaveType,
                attributes: ['name'],
            }]
        },{
            model: Team,
            attributes: ['name']
        }] 
    });
}

const modifyById = async (id, employee) => {
    return await Employee.update(employee, { where: { id: id } });
}

const remove = async (id) => {
    return await Employee.destroy({ where: { id: id }} );
}

module.exports = {
    insert,
    getAll,
    getById,
    modifyById,
    remove
}