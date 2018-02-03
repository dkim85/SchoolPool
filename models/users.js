module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1, 30] }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1, 10] }
      },
      email: {
        type: DataTypes.STRING      },
      memo: {
        type: DataTypes.STRING
      }
    });
    freezeTableName: true;

    users.associate = function(models){
        users.belongsTo(models.lists, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return users;
  };
