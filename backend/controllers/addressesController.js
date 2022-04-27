const { Address } = require("../db/models");
const { Op, models } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async create(req, res) {
    let content = req.body.address;
    let { address, country, depto, town, other_description, user_id } = content;
    console.log(req.body)
    await Address.create({
      address: address,
      country: country,
      depto: depto,
      town: town,
      otherDescription: other_description,
      userId: user_id,
    }).then((address) => {
      res.json(address)
    })
  }, 

  async show_all(req, res) {
    let id = 2;
    await Address.findAll({
      where: {
        userId: id,
      },
    }).then(async (result) => {
      console.log(result);
      res.json(result);
    });
  }
}
