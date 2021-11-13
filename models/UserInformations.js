const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "UserInformations",
    {
      Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      BranchId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Branches",
          key: "Id",
        },
      },
      WorkAddress: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      GithubLink: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Language: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Major: {
        type: DataTypes.INTEGER,
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
      tableName: "UserInformations",
      schema: "user",
      timestamps: false,
      indexes: [
        {
          name: "IX_UserInformations_BranchId",
          fields: [{ name: "BranchId" }],
        },
        {
          name: "PK_UserInformations",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
