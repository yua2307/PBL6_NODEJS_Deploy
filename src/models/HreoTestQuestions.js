const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "HreoTestQuestions",
    {
      Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      OrderIndex: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Answers: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Result: {
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
      TestId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: "00000000-0000-0000-0000-000000000000",
        references: {
          model: "HreoTests",
          key: "Id",
        },
      },
    },
    {
      sequelize,
      tableName: "HreoTestQuestions",
      schema: "test",
      timestamps: false,
      indexes: [
        {
          name: "IX_HreoTestQuestions_TestId",
          fields: [{ name: "TestId" }],
        },
        {
          name: "PK_HreoTestQuestions",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
