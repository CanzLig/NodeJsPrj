const teamService = require('../services/team.service');

const newTeam = async (req, res, next) => {
    const { name, teamLead_id } = req.body;
    let info = {
        name,teamLead_id
    }

    await teamService.insert(info)
        .then(data => res.json(data))
        .catch(err => next(err));
}

const allTeam = async (req, res, next) => {
     await teamService.getAll()
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

const getTeam = async (req, res, next) => {
    const { id } = req.params;
    await teamService.getById(id)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

const updateTeam = async (req, res, next) => {
    const { id } = req.params;
    const { name, teamLead_Id } = req.body;
    let info = {
        name,teamLead_Id
    }

    await teamService.modifyById(id, info)
        .then(data => data[0] != 0 ? res.json({"message" : "Update Successful"}) : next("No data updated"))
        .catch(err => next(err));
}

const deleteTeam = async (req, res, next) => {
    const { id } = req.params;
    await teamService.remove(id)
        .then(data => data[0] != 0 ? res.json({"message" : "Successfully Delete"}) : next("No data deleted"))
        .catch(err => next(err));
}

module.exports = {
    newTeam,
    allTeam,
    getTeam,
    updateTeam,
    deleteTeam
};