import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Select from 'react-validation/build/select';

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import { SET_MESSAGE } from '../actions/types';
import { Link } from 'react-router-dom';
import { required, validContactNumber, validDob, validEmail, validName, validPanNumber } from '../helpers/validation';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            guardianType: '',
            guardianName: '',
            address: '',
            citizenship: '',
            stateR: '',
            country: '',
            gender: '',
            maritalStatus: '',
            number: '',
            dob: '',
            accountType: '',
            branchName: '',
            identificationProofType: '',
            identificationDocumentNumber: '',
            referenceAccountHolderName: '',
            referenceAccountHolderAccNo: '',
            referenceAccountHolderAddress: '',
            successful: false
        }
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    onChangeGuardianType = (e) => {
        this.setState({ guardianType: e.target.value });
    }

    onChangeGuardianName = (e) => {
        this.setState({ guardianName: e.target.value });
    }

    onChangeAddress = (e) => {
        this.setState({ address: e.target.value });
    }

    onChangeCitizenship = (e) => {
        this.setState({ citizenship: e.target.value });
    }

    onChangeState = (e) => {
        this.setState({ stateR: e });
    }

    onChangeCountry = (e) => {
        this.setState({ country: e });
    }

    onChangeGender = (e) => {
        this.setState({ gender: e.target.value });
    }

    onChangeMaritalStatus = (e) => {
        this.setState({ maritalStatus: e.target.value });
    }

    onChangeNumber = (e) => {
        this.setState({ number: e.target.value });
    }

    onChangeDob = (e) => {
        this.setState({ dob: e.target.value });
    }

    onChangeAccountType = (e) => {
        this.setState({ accountType: e.target.value });
    }

    onChangeBranchName = (e) => {
        this.setState({ branchName: e.target.value });
    }

    onChangeIdentificationProofType = (e) => {
        this.setState({ identificationProofType: e.target.value });
    }

    onChangeIdentificationDocumentNumber = (e) => {
        this.setState({ identificationDocumentNumber: e.target.value });
    }

    onChangeReferenceAccountHolderName = (e) => {
        this.setState({ referenceAccountHolderName: e.target.value });
    }

    onChangeReferenceAccountHolderAccNo = (e) => {
        this.setState({ referenceAccountHolderAccNo: e.target.value });
    }

    onChangeReferenceAccountHolderAddress = (e) => {
        this.setState({ referenceAccountHolderAddress: e.target.value });
    }

    handleRegister = (e) => {
        e.preventDefault();

        this.setState({ successful: false });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            let ageDiff = Date.now() - new Date(this.state.dob).getTime();
            let ageDate = new Date(ageDiff);
            let age = Math.abs(ageDate.getFullYear() - 1970);

            if (age < 18 || age > 96) {
                this.props.dispatch({
                    type: SET_MESSAGE,
                    payload: "Age must be between 18 and 96 to register",
                });
                this.setState({ successful: false });
            } else {
                let customerId = "X" + "-" + Math.floor(Math.random() * (999 - 100 + 1) + 100);
                let citizenStatus = age <= 60 ? 'Normal' : 'Senior';
                let registrationDate = new Date().toJSON().slice(0, 10);
                let initialDepositAmount = this.state.accountType === "Saving" ? 5000 : 0;

                const userData = {
                    customerId: customerId,
                    name: this.state.name,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    guardianType: this.state.guardianType,
                    guardianName: this.state.guardianName,
                    address: this.state.address,
                    citizenship: this.state.citizenship,
                    state: this.state.stateR,
                    country: this.state.country,
                    gender: this.state.gender,
                    maritalStatus: this.state.maritalStatus,
                    number: this.state.number,
                    dob: this.state.dob,
                    registrationDate: registrationDate,
                    accountType: this.state.accountType,
                    branchName: this.state.branchName,
                    citizenStatus: citizenStatus,
                    initialDepositAmount: initialDepositAmount,
                    identificationProofType: this.state.identificationProofType,
                    identificationDocumentNumber: this.state.identificationDocumentNumber,
                    referenceAccountHolderName: this.state.referenceAccountHolderName,
                    referenceAccountHolderAccNo: this.state.referenceAccountHolderAccNo,
                    referenceAccountHolderAddress: this.state.referenceAccountHolderAddress,
                }

                console.log(userData);

                this.props.dispatch(
                    register(userData)
                ).then(() => {
                    this.setState({ successful: true });
                }).catch(() => {
                    this.setState({ successful: false });
                })

            }
        }

    }

    render() {
        const { message } = this.props;

        return (
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-8 offset-sm-2">
                            <h2 class="text-center mt-3">Register</h2>
                            <div className="card">

                                <Form onSubmit={this.handleRegister} ref={(c) => { this.form = c; }}>
                                    {!this.state.successful && (
                                        <div className="card-body">

                                            <div className="row mb-sm-3">
                                                <div className="col-sm-12 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        value={this.state.name}
                                                        onChange={this.onChangeName}
                                                        validations={[required, validName]}
                                                        placeholder="Full Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-sm-3">
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="username"
                                                        value={this.state.username}
                                                        onChange={this.onChangeUsername}
                                                        validations={[required]}
                                                        placeholder="Username"
                                                    />
                                                </div>

                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        value={this.state.password}
                                                        onChange={this.onChangePassword}
                                                        validations={[required]}
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>


                                            <div className="row mb-3">
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="guardianType"
                                                        value={this.state.guardianType}
                                                        onChange={this.onChangeGuardianType}
                                                        validations={[required]}
                                                        placeholder="Guardian Type"
                                                    />
                                                </div>
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="guardianName"
                                                        value={this.state.guardianName}
                                                        onChange={this.onChangeGuardianName}
                                                        validations={[required]}
                                                        placeholder="Guardian Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-12 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="address"
                                                        value={this.state.address}
                                                        onChange={this.onChangeAddress}
                                                        validations={[required]}
                                                        placeholder="Address"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="citizenship"
                                                        value={this.state.citizenship}
                                                        onChange={this.onChangeCitizenship}
                                                        validations={[required]}
                                                        placeholder="Citizenship"
                                                    />
                                                </div>
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="emamaritalStatusil"
                                                        value={this.state.maritalStatus}
                                                        onChange={this.onChangeMaritalStatus}
                                                        validations={[required]}
                                                        placeholder="Marital Status"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-6 text-secondary">
                                                    <CountryDropdown
                                                        value={this.state.country}
                                                        className="form-control"
                                                        name="country"
                                                        onChange={(val) => this.onChangeCountry(val)}
                                                        validations={[required]}
                                                        placeholder="Country"
                                                    />
                                                </div>
                                                <div className="col-sm-6 text-secondary">
                                                    <RegionDropdown
                                                        disableWhenEmpty={true}
                                                        country={this.state.country}
                                                        value={this.state.stateR}
                                                        className="form-control"
                                                        name="state"
                                                        onChange={(val) => this.onChangeState(val)}
                                                        validations={[required]}
                                                        placeholder="State"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="email"
                                                        value={this.state.email}
                                                        onChange={this.onChangeEmail}
                                                        validations={[required, validEmail]}
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="number"
                                                        value={this.state.number}
                                                        onChange={this.onChangeNumber}
                                                        validations={[required, validContactNumber]}
                                                        placeholder="Contact Number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-12 text-secondary">
                                                    <Select name='gender' className="form-control" value={this.state.gender} onChange={this.onChangeGender} validations={[required]}>
                                                        <option value=''>Select your gender</option>
                                                        <option value='Male'>Male</option>
                                                        <option value='Female'>Female</option>
                                                        <option value='Others'>Others</option>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0 mt-sm-2">Date of Birth</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="date"
                                                        className="form-control"
                                                        name="dob"
                                                        value={this.state.dob}
                                                        onChange={this.onChangeDob}
                                                        validations={[required, validDob]}
                                                        placeholder="Date of Birth"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-6 text-secondary">
                                                    <Select name='accountType' className="form-control" value={this.state.accountType} onChange={this.onChangeAccountType} validations={[required]}>
                                                        <option value=''>Select account type</option>
                                                        <option value='Saving'>Saving</option>
                                                        <option value='Salary'>Salary</option>
                                                    </Select>
                                                </div>
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="branchName"
                                                        value={this.state.branchName}
                                                        onChange={this.onChangeBranchName}
                                                        validations={[required]}
                                                        placeholder="Branch Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-6 text-secondary">
                                                    <Select name='identificationProofType' className="form-control" value={this.state.identificationProofType} onChange={this.onChangeIdentificationProofType} validations={[required]}>
                                                        <option value=''>Select ID proof</option>
                                                        <option value='PAN'>PAN</option>
                                                    </Select>
                                                </div>
                                                <div className="col-sm-6 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="identificationDocumentNumber"
                                                        value={this.state.identificationDocumentNumber}
                                                        onChange={this.onChangeIdentificationDocumentNumber}
                                                        validations={[required, validPanNumber]}
                                                        placeholder="Identification Document Number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">

                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-12 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="referenceAccountHolderName"
                                                        value={this.state.referenceAccountHolderName}
                                                        onChange={this.onChangeReferenceAccountHolderName}
                                                        validations={[required, validName]}
                                                        placeholder="Reference Account Holder Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-12 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="referenceAccountHolderAccNo"
                                                        value={this.state.referenceAccountHolderAccNo}
                                                        onChange={this.onChangeReferenceAccountHolderAccNo}
                                                        validations={[required]}
                                                        placeholder="Reference Account Holder Account Number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-12 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="referenceAccountHolderAddress"
                                                        value={this.state.referenceAccountHolderAddress}
                                                        onChange={this.onChangeReferenceAccountHolderAddress}
                                                        validations={[required]}
                                                        placeholder="Reference Account Holder Adderss"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-3"></div>
                                                <div className="col-sm-9 text-secondary">
                                                    <button className="btn btn-outline-dark px-4 font-weight-bold">Sign Up</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {message && (
                                        <div className="form-group">
                                            <div
                                                className={this.state.successful ? "alert alert-success" : "alert alert-danger"}
                                                role="alert"
                                            >
                                                {message}
                                                {this.state.successful && <Link to="/login">Login Here</Link>}
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton style={{ display: "none" }} ref={(c) => { this.checkBtn = c; }} />
                                </Form>
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        )
    }
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(Register);