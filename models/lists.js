module.exports = function (sequelize, DataTypes) {
  var lists = sequelize.define("lists", {
    departure: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 140] }
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 140] }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: { len: [1] }
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] }
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { len: [1, 10] }
    },
    minMoney: {
      type: DataTypes.STRING,
      validate: { isNumeric: true }
    }
  });
  freezeTableName: true

  lists.associate = function(models){
    lists.hasmany(models.users, {
      onDelete: "cascade"
    })
  }
  return lists;
};


  //departure, destination, dateTime, seats, minMoney, 