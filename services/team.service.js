const { Employee, Team, Project } = require('../models');

const insert = async (data) => {
   return await Team.create(data);
}

const getAll = async () => {
    return await Team.findAll({
        attributes: ['name'],
        include: [{
            model: Employee,
            as:'teamleader',
            attributes: ['id','firstname','lastname']
        }]
    });
}

const getById = async (id) => {
    return await Team.findAll({
        attributes: ['id','name'],
        where: { id: id },
        include: [{
            model: Employee,
            as:'teamleader',
            attributes: ['id','firstname','lastname']
        }, {
            model: Employee,
            as:'members',
            // where: { id : { [sequelize.Op.ne]: Team.teamLead_Id }},
            attributes: ['id','firstname','lastname']
        }, {
            model: Project,
            as: 'projects'
        }]
    });
}

const modifyById = async (id, data) => {
    return await Team.update(data, { where: { id }});
}

const remove = async (id) => {
    return await Team.destroy({ where: { id }});
}

module.exports = {
    insert,
    getAll,
    getById,
    modifyById,
    remove
}