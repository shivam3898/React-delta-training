const db = require("../models")
const User = db.user

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.editUser = (req, res) => {
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        user.update({
            name: req.body.name,
            email: req.body.email,
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
            accountType: req.body.accountType,
            branchName: req.body.branchName,
            citizenStatus: req.body.citizenStatus,
            initialDepositAmount: req.body.initialDepositAmount,
            identificationProofType: req.body.identificationProofType,
            identificationDocumentNumber: req.body.identificationDocumentNumber,
            referenceAccountHolderName: req.body.referenceAccountHolderName,
            referenceAccountHolderAccNo: req.body.referenceAccountHolderAccNo,
            referenceAccountHolderAddress: req.body.referenceAccountHolderAddress
        })
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
            accessToken: req.token
        })
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}

exports.educationLoan = (req, res) => {
    res.status(200).send("Applied for Education load");
}

exports.otherLoan = (req, res) => {
    res.status(200).send("Applied for Home/Personal Loan");
}