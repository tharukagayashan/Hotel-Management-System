const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

process.env.SECRET_KEY = "secret";

router.route("/register").post((req, res) => {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const age = Number(req.body.age);
    const email = req.body.email;
    const password = req.body.password;

    const userObj = {
        first_name, last_name, age, email, password
    }

    User.findOne({
        email: req.body.email
    })
        .then((data) => {
            if (!data) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userObj.password = hash;
                    User.create(userObj).then((user) => {
                        res.json(userObj.email + " Registered successfully");
                    })
                        .catch((err) => {
                            res.json("Error " + err);
                        })
                })
            } else {
                console.log("User already registered!!!");
            }


        }).catch((err) => {
            console.log(err);
        })

});

router.route("/login").post((req, res) => {

    User.findOne({
        email: req.body.email
    })
        .then((user) => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const userData = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        age: user.age,
                        email: user.email
                    }

                    var token = jwt.sign(userData,process.env.SECRET_KEY,{
                        expiresIn:2000
                    });

                    res.send(token);
                }
                else{
                    res.json("Cannot find a user in the system");
                }
            }
            else{
                res.json("Cannot find a user in the system");
            }
        })

});

router.route("/profile").get((req,res)=>{
    var decodeToken = jwt.verify(req.header['authorization'],process.env.SECRET_KEY);

    User.findOne({
        _id:decodeToken.id
    })
    .then((data)=>{
        if(data){
            res.json(data);
        }
        else{
            res.send("User does not exist");
        }
    }).catch((err)=>{
        res.send(err);
    })
});

module.exports = router;