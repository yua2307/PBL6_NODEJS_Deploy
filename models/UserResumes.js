const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "UserResumes",
    {
      Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      ResumeName: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      JobTitle: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      FileId: {
        type: DataTypes.TEXT,
        allowNull: true,
        references: {
          model: "FileInformations",
          key: "Id",
        },
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
      tableName: "UserResumes",
      schema: "user",
      timestamps: false,
      indexes: [
        {
          name: "IX_UserResumes_FileId",
          fields: [{ name: "FileId" }],
        },
        {
          name: "PK_UserResume",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
