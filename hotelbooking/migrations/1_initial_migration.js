const Migrations = artifacts.require("Migrations");
const Booking = artifacts.require("Booking");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Booking)
};
