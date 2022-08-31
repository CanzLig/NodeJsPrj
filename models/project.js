module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("Project", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:  { 
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        }
        
    });

    Project.associate = models => {
        Project.belongsTo(models.Team, {
            as:'Team'
        })
        Project.belongsTo(models.Employee, {
            as: 'Developer',
            foreignKey: {
                name: 'implementerId'
            }
        })
    }

    return Project;
}