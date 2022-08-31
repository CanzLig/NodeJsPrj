module.exports = (sequelize, DataTypes) => {
    const LeaveDate = sequelize.define("LeaveDate", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dateFrom: { 
            type: DataTypes.DATEONLY
        },
        dateTo: { 
            type: DataTypes.DATEONLY
        },
    });

    LeaveDate.associate = models => {
        LeaveDate.belongsTo(models.Employee);
        LeaveDate.belongsTo(models.LeaveType);
    };

    return LeaveDate;
}