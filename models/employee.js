module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname:  { 
            type: DataTypes.STRING,
            allowNull: false
        },
        middlename: { 
            type: DataTypes.STRING
        },
        lastname: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        position: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        username: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        }
    },{
        indexes: [
            // Create a unique index on email
            {
              unique: true,
              fields: ['username']
            },
            {
              fields: ['password']
            },
        ]
    });

    Employee.associate = models => {
        Employee.hasMany(models.LeaveDate, {
            onDelete: 'SET NULL',
        });
        Employee.belongsTo(models.Team)
    }

    return Employee;
}