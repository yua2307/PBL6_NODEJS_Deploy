const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "InvitationPosts",
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
      ApplicantId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      InvitationPostStatus: {
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
      tableName: "InvitationPosts",
      schema: "post",
      timestamps: false,
      indexes: [
        {
          name: "IX_InvitationPosts_ApplicationId",
          fields: [{ name: "ApplicationId" }],
        },
        {
          name: "IX_InvitationPosts_PostId",
          fields: [{ name: "PostId" }],
        },
        {
          name: "PK_InvitationPosts",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
