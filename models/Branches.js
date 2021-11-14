const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Branches",
    {
      Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      City: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ImageUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      CompanyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Companies",
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
      tableName: "Branches",
      schema: "company",
      timestamps: false,
      indexes: [
        {
          name: "IX_Branches_CompanyId",
          fields: [{ name: "CompanyId" }],
        },
        {
          name: "PK_Branches",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
