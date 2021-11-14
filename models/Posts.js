const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Posts",
    {
      Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Language: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PostStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DateRange: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IsHidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      ExtraProperties: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ConcurrencyStamp: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      CreationTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      CreatorId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      LastModificationTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      LastModifierId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      IsDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      DeleterId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      DeletionTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Posts",
      schema: "post",
      timestamps: false,
      indexes: [
        {
          name: "PK_Posts",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
