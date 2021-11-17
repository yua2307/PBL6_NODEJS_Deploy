const db = require("../config/connectDB");
const UserResume = db.UserResumes;
module.exports = {
  getAll() {
    return UserResume.findAll();
  },
  getAllByUserId(UserId) {
    return UserResume.findAll({ where: { UserId } });
  },

  getById(Id) {
    return UserResume.findByPk(Id);
  },

  deleteById(Id) {
    return UserResume.destroy({
      where: { Id },
    });
  },

  create(userResume) {
    return UserResume.create(userResume);
  },

  update(userResume) {
    return UserResume.update(userResume, {
      where: { Id: userResume.Id },
    });
  },
};
