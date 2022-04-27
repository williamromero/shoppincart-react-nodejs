const express = require("express")
const app = express(),
      router = express.Router();
const ProductController = require("../controllers/productsController")
const AuthController = require("../controllers/authController")
const AddressController = require("../controllers/addressesController")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.send(':: API is running ::');
})

router.post("/signin", AuthController.signIn)
      .post("/signup", AuthController.signUp);

router.get('/products', ProductController.index)
      .get('/products/:slug', ProductController.show)
      .post('/products', ProductController.create);

router.post('/address/show', AddressController.show_all)
      .post('/address', AddressController.create);

module.exports = router;
