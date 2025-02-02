'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band, Event, Stage}) {
      Set_Time.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band',
      })
      Set_Time.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })
      Set_Time.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stage'
      })
    }
  }
  Set_Time.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_id: DataTypes.SMALLINT,
    stage_id: DataTypes.SMALLINT,
    band_id: DataTypes.SMALLINT,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'set_time',
    timestamps: false
  });
  return Set_Time;
};