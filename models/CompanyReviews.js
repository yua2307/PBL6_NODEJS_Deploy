const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanyReviews', {
    Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    CompanyId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Companies',
        key: 'Id'
      }
    },
    ApplicationId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ApplicantId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'UserInformations',
        key: 'Id'
      }
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
    tableName: 'CompanyReviews',
    schema: 'company',
    timestamps: false,
    indexes: [
      {
        name: "IX_CompanyReviews_ApplicantId",
        fields: [
          { name: "ApplicantId" },
        ]
      },
      {
        name: "IX_CompanyReviews_CompanyId",
        fields: [
          { name: "CompanyId" },
        ]
      },
      {
        name: "PK_CompanyReviews",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
