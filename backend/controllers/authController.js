const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../db/models");
const { Op, models } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const authConfig = require("../config/auth");

module.exports = {
  async signIn(req, res) {
    console.log("SignIn :: API");
    let { email, password } = req.body;
    let user = await User.findOne({ where: { email: email, }, })
    if (!user) {
      res.status(404).json({
        message: "Usuario con este correo no ha sido encontrado.",
      });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });
        let { id, name, email, isAdmin, uuid, createdAt, updatedAt } = user
        // user.setDataValue("token", token);
        let userObj = {
          id: id,
          email: email,
          isAdmin: isAdmin,
          name: name,
          token: token,
          uuid: uuid,
          createdAt: createdAt,
          updatedAt: updatedAt,
        }
        res.json({
          user: userObj,
          message: "El usuario se ha iniciado sesion satisfactoriamente.",
        });
      } else {
        res.status(401).json({ message: "Contraseña inválida" });
      }
    }
  },

  signUp(req, res) {
    console.log("SignUp :: API");
    let password = bcrypt.hashSync( req.body.password, Number.parseInt(authConfig.rounds) );
    User.create({ name: req.body.name, email: req.body.email, password: password, isAdmin: false, uuid: uuidv4() })
      .then(async (user) => {
        // let profile = await Profile.create({ gender: 'M', userId: user.id });
        let token = jwt.sign({ user: user }, authConfig.secret, { expiresIn: authConfig.expires, });
        user.setDataValue("token", token);
        res.json({
          user,
          message: "Su usuario ha sido creado",
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Algo no está bien. Por favor, revisa los campos a rellenar para crear tu usuario.",
          error: err.errors[0].instance.id,
        });
      });
  },  
}
