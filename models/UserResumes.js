const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "UserResumes",
    {
      Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      ResumeName: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      JobTitle: {
        type: DataTypes.TEXT,
        allowNull: true,
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
      FileInformationId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "FileInformations",
          key: "Id",
        },
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: "00000000-0000-0000-0000-000000000000",
      },
    },
    {
      sequelize,
      tableName: "UserResumes",
      schema: "user",
      timestamps: false,
      indexes: [
        {
          name: "IX_UserResumes_FileInformationId",
          fields: [{ name: "FileInformationId" }],
        },
        {
          name: "PK_UserResumes",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
