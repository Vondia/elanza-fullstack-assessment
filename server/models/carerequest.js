"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class careRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  careRequest.init(
    {
      clientName: DataTypes.STRING,
      careNeeded: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      extraInformation: DataTypes.TEXT,
      statusOpen: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "careRequest",
    }
  );
  return careRequest;
};
