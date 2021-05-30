import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Select from 'react-validation/build/select';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { SET_MESSAGE } from '../actions/types';
import { update } from '../actions/auth';
import { required, validContactNumber, validDob, validEmail, validName, validPanNumber } from '../helpers/validation';

class Profile extends Component {

    constructor(props) {
        super(props);

        const user = this.props.user;
        if (user) {
            this.state = {
                customerId: user.customerId,
                name: user.name,
                email: user.email,
                username: user.username,
                password: user.password,
                guardianType: user.guardianType,
                guardianName: user.guardianName,
                address: user.address,
                citizenship: user.citizenship,
                stateR: user.state,
                country: user.country,
                gender: user.gender,
                maritalStatus: user.maritalStatus,
                number: user.number,
                dob: user.dob,
                accountType: user.accountType,
                branchName: user.branchName,
                initialDepositAmount: user.initialDepositAmount,
                identificationProofType: user.identificationProofType,
                identificationDocumentNumber: user.identificationDocumentNumber,
                referenceAccountHolderName: user.referenceAccountHolderName,
                referenceAccountHolderAccNo: user.referenceAccountHolderAccNo,
                referenceAccountHolderAddress: user.referenceAccountHolderAddress,
                successful: false
            }
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

    handleSubmit = (e) => {
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
                    payload: "Age must be between 18 and 96",
                });
                this.setState({ successful: false });
            } else {
                let citizenStatus = age <= 60 ? 'Normal' : 'Senior';
                let initialDepositAmount = this.state.accountType === "Saving" ? 5000 : 0;
                console.log(initialDepositAmount)

                const userData = {
                    name: this.state.name,
                    email: this.state.email,
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

                this.props.dispatch(
                    update(userData)
                ).then(() => {
                    this.setState({ successful: true });
                }).catch(() => {
                    this.setState({ successful: false });
                })
            }
        }
    }

    render() {
        const { user: currentUser } = this.props;
        const { message } = this.props;

        if (!currentUser) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">

                                        <div className="mt-3">
                                            <h4>{currentUser.name}</h4>
                                            <p className="text-secondary mb-1">{currentUser.accountType} Account</p>
                                            <p className="text-secondary mb-1">{currentUser.address}</p>
                                            <p className="text-secondary mb-1">{currentUser.country}</p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Email</h6>
                                            <span className="text-secondary">{currentUser.email}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Contact</h6>
                                            <span className="text-secondary">{currentUser.number}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">

                                <Form onSubmit={this.handleSubmit} ref={(c) => { this.form = c; }}>
                                    {!this.state.successful && (
                                        <div className="card-body">
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        value={this.state.name}
                                                        onChange={this.onChangeName}
                                                        validations={[required, validName]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Guardian Type</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="guardianType"
                                                        value={this.state.guardianType}
                                                        onChange={this.onChangeGuardianType}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Guardian Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="guardianName"
                                                        value={this.state.guardianName}
                                                        onChange={this.onChangeGuardianName}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Address</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="address"
                                                        value={this.state.address}
                                                        onChange={this.onChangeAddress}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Citizenship</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="citizenship"
                                                        value={this.state.citizenship}
                                                        onChange={this.onChangeCitizenship}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Country</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <CountryDropdown
                                                        value={this.state.country}
                                                        className="form-control"
                                                        name="country"
                                                        onChange={(val) => this.onChangeCountry(val)}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">State</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <RegionDropdown
                                                        disableWhenEmpty={true}
                                                        country={this.state.country}
                                                        value={this.state.stateR}
                                                        className="form-control"
                                                        name="state"
                                                        onChange={(val) => this.onChangeState(val)}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Email</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="email"
                                                        value={this.state.email}
                                                        onChange={this.onChangeEmail}
                                                        validations={[required, validEmail]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Gender</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Select name='gender' className="form-control" value={this.state.gender} onChange={this.onChangeGender} validations={[required]}>
                                                        <option value=''>Select a gender</option>
                                                        <option value='Male'>Male</option>
                                                        <option value='Female'>Female</option>
                                                        <option value='Others'>Others</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Marital Status</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="emamaritalStatusil"
                                                        value={this.state.maritalStatus}
                                                        onChange={this.onChangeMaritalStatus}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Contact Number</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="number"
                                                        value={this.state.number}
                                                        onChange={this.onChangeNumber}
                                                        validations={[required, validContactNumber]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Date of Birth</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="date"
                                                        className="form-control"
                                                        name="dob"
                                                        value={this.state.dob}
                                                        onChange={this.onChangeDob}
                                                        validations={[required, validDob]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Account Type</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Select name='accountType' className="form-control" value={this.state.accountType} onChange={this.onChangeAccountType} validations={[required]}>
                                                        <option value=''>Select account type</option>
                                                        <option value='Saving'>Saving</option>
                                                        <option value='Salary'>Salary</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Branch Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="branchName"
                                                        value={this.state.branchName}
                                                        onChange={this.onChangeBranchName}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Identification Proof Type</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Select name='identificationProofType' className="form-control" value={this.state.identificationProofType} onChange={this.onChangeIdentificationProofType} validations={[required]}>
                                                        <option value=''>Select ID proof</option>
                                                        <option value='PAN'>PAN</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Identification Document Number</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="identificationDocumentNumber"
                                                        value={this.state.identificationDocumentNumber}
                                                        onChange={this.onChangeIdentificationDocumentNumber}
                                                        validations={[required, validPanNumber]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Reference Account Holder Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="referenceAccountHolderName"
                                                        value={this.state.referenceAccountHolderName}
                                                        onChange={this.onChangeReferenceAccountHolderName}
                                                        validations={[required, validName]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Reference Account Holder Account Number</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="referenceAccountHolderAddress"
                                                        value={this.state.referenceAccountHolderAddress}
                                                        onChange={this.onChangeReferenceAccountHolderAddress}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3"></div>
                                                <div className="col-sm-9 text-secondary">
                                                    <button className="btn btn-outline-dark px-4 font-weight-bold">Save Changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {message && (
                                        <div className="form-group">
                                            <div
                                                className={this.state.successful ? "alert alert-success" : "alert alert-danger"}
                                                role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton style={{ display: "none" }} ref={(c) => { this.checkBtn = c; }} />
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    const { message } = state.message;
    return {
        user,
        message
    };
}

export default connect(mapStateToProps)(Profile);