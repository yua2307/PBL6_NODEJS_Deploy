var DataTypes = require("sequelize").DataTypes;
var _ApplicantPosts = require("./ApplicantPosts");
var _Branches = require("./Branches");
var _Companies = require("./Companies");
var _CompanyReviews = require("./CompanyReviews");
var _FileInformations = require("./FileInformations");
var _HreoTestQuestions = require("./HreoTestQuestions");
var _HreoTests = require("./HreoTests");
var _InterestedPosts = require("./InterestedPosts");
var _InvitationPosts = require("./InvitationPosts");
var _Posts = require("./Posts");
var _UserInformations = require("./UserInformations");
var ___EFMigrationsHistory = require("./__EFMigrationsHistory");

function initModels(sequelize) {
  
  var Companies = _Companies(sequelize, DataTypes);
  var Branches = _Branches(sequelize, DataTypes);
  var UserInformations = _UserInformations(sequelize, DataTypes);
  var CompanyReviews = _CompanyReviews(sequelize, DataTypes);
  var HreoTests = _HreoTests(sequelize, DataTypes);
  var Posts = _Posts(sequelize, DataTypes);
  var HreoTestQuestions = _HreoTestQuestions(sequelize, DataTypes);
  var ApplicantPosts = _ApplicantPosts(sequelize, DataTypes);
  var FileInformations = _FileInformations(sequelize, DataTypes);
  var InterestedPosts = _InterestedPosts(sequelize, DataTypes);
  var InvitationPosts = _InvitationPosts(sequelize, DataTypes);

  var __EFMigrationsHistory = ___EFMigrationsHistory(sequelize, DataTypes);

  Branches.belongsTo(Companies, { as: "Company", foreignKey: "CompanyId" });
  Companies.hasMany(Branches, { as: "Branches", foreignKey: "CompanyId" });
  UserInformations.belongsTo(Branches, {
    as: "Branch",
    foreignKey: "BranchId",
  });
  Branches.hasMany(UserInformations, {
    as: "UserInformations",
    foreignKey: "BranchId",
  });

  CompanyReviews.belongsTo(Companies, {
    as: "Company",
    foreignKey: "CompanyId",
  });
  Companies.hasMany(CompanyReviews, {
    as: "CompanyReviews",
    foreignKey: "CompanyId",
  });
  CompanyReviews.belongsTo(UserInformations, {
    as: "Applicant",
    foreignKey: "ApplicantId",
  });
  UserInformations.hasMany(CompanyReviews, {
    as: "CompanyReviews",
    foreignKey: "ApplicantId",
  });
  ApplicantPosts.belongsTo(HreoTests, { as: "Test", foreignKey: "TestId" });
  HreoTests.hasMany(ApplicantPosts, {
    as: "ApplicantPosts",
    foreignKey: "TestId",
  });
  ApplicantPosts.belongsTo(Posts, { as: "Post", foreignKey: "PostId" });
  Posts.hasMany(ApplicantPosts, { as: "ApplicantPosts", foreignKey: "PostId" });
  InterestedPosts.belongsTo(Posts, { as: "Post", foreignKey: "PostId" });
  Posts.hasMany(InterestedPosts, {
    as: "InterestedPosts",
    foreignKey: "PostId",
  });
  InvitationPosts.belongsTo(Posts, { as: "Post", foreignKey: "PostId" });
  Posts.hasMany(InvitationPosts, {
    as: "InvitationPosts",
    foreignKey: "PostId",
  });
  ApplicantPosts.belongsTo(UserInformations, {
    as: "Application",
    foreignKey: "ApplicationId",
  });
  UserInformations.hasMany(ApplicantPosts, {
    as: "ApplicantPosts",
    foreignKey: "ApplicationId",
  });
  InterestedPosts.belongsTo(UserInformations, {
    as: "Application",
    foreignKey: "ApplicationId",
  });
  UserInformations.hasMany(InterestedPosts, {
    as: "InterestedPosts",
    foreignKey: "ApplicationId",
  });
  InvitationPosts.belongsTo(UserInformations, {
    as: "Application",
    foreignKey: "ApplicationId",
  });
  UserInformations.hasMany(InvitationPosts, {
    as: "InvitationPosts",
    foreignKey: "ApplicationId",
  });
  HreoTestQuestions.belongsTo(HreoTests, { as: "Test", foreignKey: "TestId" });
  HreoTests.hasMany(HreoTestQuestions, {
    as: "HreoTestQuestions",
    foreignKey: "TestId",
  });

  return {
    ApplicantPosts,
    Branches,
    Companies,
    CompanyReviews,
    FileInformations,
    HreoTestQuestions,
    HreoTests,
    InterestedPosts,
    InvitationPosts,
    Posts,
    UserInformations,
    __EFMigrationsHistory,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
