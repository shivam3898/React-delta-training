module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        customerId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        guardianType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        guardianName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        citizenship: {
            type: Sequelize.STRING,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        maritalStatus: {
            type: Sequelize.STRING,
            allowNull: false
        },
        number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        dob: {
            type: Sequelize.STRING,
            allowNull: false
        },
        registrationDate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        accountType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        branchName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        citizenStatus: {
            type: Sequelize.STRING,
            allowNull: false
        },
        initialDepositAmount: {
            type: Sequelize.STRING,
            allowNull: false
        },
        identificationProofType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        identificationDocumentNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        referenceAccountHolderName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        referenceAccountHolderAccNo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        referenceAccountHolderAddress: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return User;
}