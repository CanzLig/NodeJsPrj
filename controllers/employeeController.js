// const { Employee, LeaveDate, LeaveType, Team } = require('../models');
const employeeService = require('../services/employee.service');
const jwt = require("jsonwebtoken");

const addEmployee = async (req, res, next) => {
    const { firstName, middleName, 
        lastName, position, 
        username, password,TeamId } = req.body;

    let info = {
        firstname: firstName,
        middlename: middleName,
        lastname: lastName,
        position: position,
        username: username,
        password: password,
        TeamId
    }
    await employeeService.insert(info)
        .then(employee => res.json(employee))
        .catch(err => next(err));
}

const getAllEmployees = (req, res, next) => {
     employeeService.getAll().then(employee => res.json(employee))
        .catch(err => next(err));
}

const getEmployee = async (req, res, next) => {
    const { id } = req.params;

    await employeeService.getById(id)
        .then(employee => employee ? res.json(employee) : res.sendStatus(404))
        .catch(err => next(err))
}

const updateEmployee = async (req, res, next) => {
    const { id } = req.params;
    const { firstName, middleName, 
        lastName, position, 
        username, password,
        TeamId, role } = req.body;

    let info = {
        firstname: firstName,
        middlename: middleName,
        lastname: lastName,
        position: position,
        username: username,
        password: password,
        TeamId, role
    }
    await employeeService.modifyById(id, info)
        .then(employee => employee[0] != 0 ? res.json({ message : "Successfully Update"}) : next("No data updated"))
        .catch(err => next(err));
}

const deleteEmployee = async (req, res, next) => {
    const { id } = req.params;
    await employeeService.remove(id)
        .then(employee => employee[0] != 0 ? res.json({ message: "Successfully Delete" }) : next("No data Deleted"))
        .catch(err => next(err));
}

module.exports = {
    addEmployee,
    getAllEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
}