const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    User.create({
        customerId: req.body.customerId,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        guardianType: req.body.guardianType,
        guardianName: req.body.guardianName,
        address: req.body.address,
        citizenship: req.body.citizenship,
        state: req.body.state,
        country: req.body.country,
        gender: req.body.gender,
        maritalStatus: req.body.maritalStatus,
        number: req.body.number,
        dob: req.body.dob,
        registrationDate: req.body.registrationDate,
        accountType: req.body.accountType,
        branchName: req.body.branchName,
        citizenStatus: req.body.citizenStatus,
        initialDepositAmount: req.body.initialDepositAmount,
        identificationProofType: req.body.identificationProofType,
        identificationDocumentNumber: req.body.identificationDocumentNumber,
        referenceAccountHolderName: req.body.referenceAccountHolderName,
        referenceAccountHolderAccNo: req.body.referenceAccountHolderAccNo,
        referenceAccountHolderAddress: req.body.referenceAccountHolderAddress
    }).then(user => {
        res.send("User registered successfully");
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user.id,
            customerId: user.customerId,
            name: user.name,
            username: user.username,
            email: user.email,
            guardianType: user.guardianType,
            guardianName: user.guardianName,
            address: user.address,
            citizenship: user.citizenship,
            state: user.state,
            country: user.country,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            number: user.number,
            dob: user.dob,
            registrationDate: user.registrationDate,
            accountType: user.accountType,
            branchName: user.branchName,
            citizenStatus: user.citizenStatus,
            initialDepositAmount: user.initialDepositAmount,
            identificationProofType: user.identificationProofType,
            identificationDocumentNumber: user.identificationDocumentNumber,
            referenceAccountHolderName: user.referenceAccountHolderName,
            referenceAccountHolderAccNo: user.referenceAccountHolderAccNo,
            referenceAccountHolderAddress: user.referenceAccountHolderAddress,
            accessToken: token
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}