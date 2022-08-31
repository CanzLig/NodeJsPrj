module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:  { 
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });

    Team.associate = models => {
        Team.belongsTo(models.Employee, {
                as: 'teamleader',
                foreignKey: {
                    name: 'teamLead_Id'
                }
            });
        Team.hasMany(models.Employee, {
            as: 'members',
            onDelete: 'SET NULL',
            foreignKey: { 
                name: models.Employee.TeamId
             }
        });
        Team.hasMany(models.Project, {
            as: 'projects',
            onDelete: 'SET NULL'
        })

    }

    return Team;
}