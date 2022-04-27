const { Product } = require("../db/models");
const { Op, models } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async index(req, res) {
    let error = new Error("Not Authorized");
    error = { title: error, status: 401, message: "¡Tenemos un problema!" }
    // res.status(error.status).json({ status: error.status, message: error.message })
    await Product.findAll().then((products) => {
      res.json(products);
    });
  },

  async show (req, res) {
    // let query = { where: { slug: req.params.slug } }
    // let options = {
    //       include: [ { model: Company, attributes: ['name', 'logo'] } ], 
    //       order: [ ['id', 'DESC'] ],
    //       where: dataInfo,
    //       raw: true, 
    //       offset: startIndex, 
    //       limit: parseInt(limit)
    //     };
    await Product.findOne({ where: { slug: req.params.slug }, })
      .then((product) => {
        res.json(product);
      })
  },

  async create(req, res) {
    let product = req.body;
    console.log(product)
    await Product.create({
      name: product.name,
      image: product.image,
      description: product.description,
      brand: product.brand,
      category: product.category,
      price: product.price,
      countInStock: product.countInStock,
      rating: product.rating,
      numReviews: product.numReviews,
      uuid: uuidv4(),
      slug: product.name.toLowerCase().replace(" ", "-")
    }).then((product) => {
      res.json(product)
    })
  }
}
