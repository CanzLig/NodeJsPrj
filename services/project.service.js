const { Team, Project, Employee } = require('../models');

const insert = async (data) => {
   return await Project.create(data);
}

const getAll = async () => {
    return await Project.findAll({
        include: [{
            model: Team,
            as:'Team',
            attributes: ['name']
        },{
            model: Employee,
            as:'Developer',
            attributes: ['firstname','lastname']
        }]
    });
}

const getById = async (id) => {
    return await Project.findOne({ 
        where: { id: id },
        include: [{
            model: Employee,
            as:'Developer',
            attributes: ['firstname','lastname']
        },
        {
            model: Team,
            as:'Team',
            attributes: ['name'],
            include: [{
                model: Employee,
                as:'teamleader',
                attributes: ['id','firstname','lastname']
            }]
        }]
    });
}

const modifyById = async (id) => {
    return await Project.update(info, { where: { id }});
}

const remove = async (id) => {
    return await Project.destroy({ where: { id }});
}

module.exports = {
    insert,
    getAll,
    getById,
    modifyById,
    remove
}