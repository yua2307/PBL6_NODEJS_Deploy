const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ApplicantPosts",
    {
      Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      PostId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Posts",
          key: "Id",
        },
      },
      TestId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "HreoTests",
          key: "Id",
        },
      },
      ApplicantId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      ApplicantPostStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ApplicantAnswer: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      TestResult: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      StartTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      TimeUsed: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      TimeFinished: {
        type: DataTypes.REAL,
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
      ApplicationId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "UserInformations",
          key: "Id",
        },
      },
    },
    {
      sequelize,
      tableName: "ApplicantPosts",
      schema: "post",
      timestamps: false,
      indexes: [
        {
          name: "IX_ApplicantPosts_ApplicationId",
          fields: [{ name: "ApplicationId" }],
        },
        {
          name: "IX_ApplicantPosts_PostId",
          fields: [{ name: "PostId" }],
        },
        {
          name: "IX_ApplicantPosts_TestId",
          fields: [{ name: "TestId" }],
        },
        {
          name: "PK_ApplicantPosts",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
