const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NotificationUsers', {
    Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Body: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'NotificationUsers',
    schema: 'notification',
    timestamps: false,
    indexes: [
      {
        name: "PK_NotificationUsers",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
