const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FileInformations', {
    Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Mime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Application: {
      type: DataTypes.TEXT,
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
    tableName: 'FileInformations',
    schema: 'file',
    timestamps: false,
    indexes: [
      {
        name: "PK_FileInformations",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
