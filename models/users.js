module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1, 30] }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING
    },
      memo: {
        type: DataTypes.STRING
      },
      postid:{
          type:DataTypes.STRING,
          allowNull: false,
          validate: {len:[1]}
      }
    });
    freezeTableName: true;
    return users;
  };
