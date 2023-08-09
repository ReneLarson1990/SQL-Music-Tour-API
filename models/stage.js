'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, Stage_Event, Set_Time }) {
      // events 
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: Stage_Event
      })

      // set times 
      Stage.hasMany(Set_Time, {
        foreignKey: "stage_id",
        as: "set_times"
      })
    }
  }
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stage',
    timestamps: false
  });
  return Stage;
};