module.exports = (sequelize, DataTypes) => {
    const LeaveType = sequelize.define("LeaveType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: { 
            type: DataTypes.STRING
        },
        code: { 
            type: DataTypes.STRING
        },
    });

    LeaveType.associate = models => {
        LeaveType.hasMany(models.LeaveDate, {
            onDelete: 'SET NULL',
        });
    }

    return LeaveType;
}