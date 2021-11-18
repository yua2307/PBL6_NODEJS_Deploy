const userResumeRepository = require("../repositories/UserResumeRepository");
module.exports = {
  async getAll(req, res) {
    try {
      const list = await userResumeRepository.getAll();
      res.status(200).send(list);
    } catch (err) {
      res.status(500).send();
    }
  },

  async getAllByUserId(req, res) {
    try {
      const listUserResume = await userResumeRepository.getAllByUserId(
        req.params.userId
      );

      res.status(201).send(listUserResume);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async getById(req, res) {
    try {
      const listUserResume = await userResumeRepository.getById(req.params.id);
      res.status(201).send(listUserResume);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async deleteById(req, res) {
    try {
      await userResumeRepository.deleteById(req.params.id);

      res.status(201).send(req.params.id);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async create(req, res) {
    try {
      const userResume = {
        ...req.body,
        CreationTime: new Date(),
      };
      console.log(userResume);
      const userResumeNew = await userResumeRepository.create(userResume);
      res.status(201).send(userResumeNew);
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  async update(req, res) {
    try {
      const userResumeUpdate = {
        ...req.body,
        LastModificationTime: new Date(),
      };
      
      const userResumeNew = await userResumeRepository.update(userResumeUpdate);
      res.status(201).send(userResumeNew);
    } catch (err) {}
  },
};
