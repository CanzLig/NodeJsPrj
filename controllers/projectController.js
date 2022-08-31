const projectService = require('../services/project.service');

const newProject = async (req, res, next) => {
    const { name, implementerId,TeamId } = req.body;
    let info = {
        name,implementerId,TeamId
    }
    await projectService.insert(info)
        .then(data => res.json(data))
        .catch(err => next(err));
}

const allProject = async (req, res, next) => {
    await projectService.getAll()
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

const getProject = async (req, res, next) => {
    const { id } = req.params;
    await projectService.getProject(id)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, implementerId,TeamId,status } = req.body;
    let info = {
        name, implementerId,TeamId,status
    }
    await projectService.modifyById(id, info)
        .then(data => data[0] != 0 ? res.json({"message" : "Update Successful"}) : next("No data updated"))
        .catch(err => next(err));
}

const deleteProject = async (req, res) => {
    const { id } = req.params;

    await projectService.remove(id)
        .then(data => data[0] != 0 ? res.json({"message" : "Successfully Delete"}) : next("No data deleted"))
        .catch(err => next(err));
}

module.exports = {
    newProject,
    allProject,
    getProject,
    updateProject,
    deleteProject
}