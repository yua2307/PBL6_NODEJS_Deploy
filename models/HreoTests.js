const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HreoTests', {
    Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Language: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LimitTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ExtraProperties: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ConcurrencyStamp: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CreationTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreatorId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    LastModificationTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastModifierId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    DeleterId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    DeletionTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HreoTests',
    schema: 'test',
    timestamps: false,
    indexes: [
      {
        name: "PK_HreoTests",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
