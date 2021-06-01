module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      isEmail: true,
      unique: true,
      validate: { isEmail: true },
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    imageType: {
      type: Sequelize.STRING,
    },
    imageName: {
      type: Sequelize.STRING,
    },
    imageData: {
      type: Sequelize.BLOB("long"),
    },
    role: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
