module.exports = {
  HOST: "52.188.14.64",
  USER: "postgres",
  PASSWORD: "123456",
  DB: "Hreo",
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
