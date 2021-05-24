import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from 'react-validation/build/select';
import CheckButton from "react-validation/build/button";
import { required, validAmount, validDate, validName } from '../helpers/validation';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import userService from '../services/userService';

class Loan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loanType: "",
            loanAmount: "",
            loanApplyDate: "",
            durationOfLoan: "",
            courseFee: "",
            course: "",
            fathersName: "",
            fathersOccupation: "",
            fathersTotalExp: "",
            fathersExpWithCurrentCompnay: "",
            rationCardNo: "",
            annualIncome: "",
            companyName: "",
            designation: "",
            totalExp: "",
            expWithCurrentCompany: "",
            message: ""
        };
    }

    onChangeLoanType = (e) => {
        this.setState({ loanType: e.target.value, });
    }

    onChangeLoanAmount = (e) => {
        this.setState({ loanAmount: e.target.value, });
    }

    onChangeLoanApplyDate = (e) => {
        this.setState({ loanApplyDate: e.target.value, });
    }

    onChangeDurationOfTheLoan = (e) => {
        this.setState({ durationOfLoan: e.target.value, });
    }

    onChangeCourseFee = (e) => {
        this.setState({ courseFee: e.target.value, });
    }

    onChangeCourse = (e) => {
        this.setState({ course: e.target.value, });
    }

    onChangeFathersName = (e) => {
        this.setState({ fathersName: e.target.value, });
    }

    onChangeFathersOccupation = (e) => {
        this.setState({ fathersOccupation: e.target.value, });
    }

    onChangeFathersTotalExp = (e) => {
        this.setState({ fathersTotalExp: e.target.value, });
    }

    onChangeFathersExpWithCurrentCompnay = (e) => {
        this.setState({ fathersExpWithCurrentCompnay: e.target.value, });
    }

    onChangeRationCardNo = (e) => {
        this.setState({ rationCardNo: e.target.value, });
    }

    onChangeAnnualIncome = (e) => {
        this.setState({ annualIncome: e.target.value, });
    }

    onChangeCompanyName = (e) => {
        this.setState({ companyName: e.target.value, });
    }

    onChangeDesignation = (e) => {
        this.setState({ designation: e.target.value, });
    }

    onChangeTotalExp = (e) => {
        this.setState({ totalExp: e.target.value, });
    }

    onChangeExpWithCurrentCompany = (e) => {
        this.setState({ expWithCurrentCompany: e.target.value, });
    }

    renderSelectedForm = (option) => {
        switch (option) {
            case 'Educational':
                return (
                    <>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Course Fee</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="courseFee"
                                    value={this.state.courseFee}
                                    onChange={this.onChangeCourseFee}
                                    validations={[required, validAmount]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Course</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={this.state.course}
                                    onChange={this.onChangeCourse}
                                    validations={[required]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Father's Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="fathersName"
                                    value={this.state.fathersName}
                                    onChange={this.onChangeFathersName}
                                    validations={[required, validName]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Father's Occupation</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="fathersOccupation"
                                    value={this.state.fathersOccupation}
                                    onChange={this.onChangeFathersOccupation}
                                    validations={[required]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Father's Total Experience</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="fathersTotalExp"
                                    value={this.state.fathersTotalExp}
                                    onChange={this.onChangeFathersTotalExp}
                                    validations={[required]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Father's Experience With Current Company</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="fathersExpWithCurrentCompnay"
                                    value={this.state.fathersExpWithCurrentCompnay}
                                    onChange={this.onChangeFathersExpWithCurrentCompnay}
                                    validations={[required]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Ration Card No</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="rationCardNo"
                                    value={this.state.rationCardNo}
                                    onChange={this.onChangeRationCardNo}
                                    validations={[required]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Annual Income</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="annualIncome"
                                    value={this.state.annualIncome}
                                    onChange={this.onChangeAnnualIncome}
                                    validations={[required, validAmount]}
                                />
                            </div>
                        </div>
                    </>
                )
            case 'Personal':
            case 'House':
                return (
                    <>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Annual Income</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="annualIncome"
                                    value={this.state.annualIncome}
                                    onChange={this.onChangeAnnualIncome}
                                    validations={[required, validAmount]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Company Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="companyName"
                                    value={this.state.companyName}
                                    onChange={this.onChangeCompanyName}
                                    validations={[required]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Designation</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="designation"
                                    value={this.state.designation}
                                    onChange={this.onChangeDesignation}
                                    validations={[required]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Total Experience</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="totalExp"
                                    value={this.state.totalExp}
                                    onChange={this.onChangeTotalExp}
                                    validations={[required]}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Exp with Current Company</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="expWithCurrentCompany"
                                    value={this.state.expWithCurrentCompany}
                                    onChange={this.onChangeExpWithCurrentCompany}
                                    validations={[required]}
                                />
                            </div>
                        </div>
                    </>
                )
            default:
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ message: "" });
        this.setState({ successful: false });

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            let rateOfInterest = this.state.loanType === "Educational" ? 7 : 14;
            let userData = {};
            if (this.state.loanType === "Educational") {
                userData = {
                    loanType: this.state.loanType,
                    loanAmount: this.state.loanAmount,
                    loanApplyDate: this.state.loanApplyDate,
                    rateOfInterest: rateOfInterest,
                    durationOfLoan: this.state.durationOfLoan,
                    courseFee: this.state.courseFee,
                    course: this.state.course,
                    fathersName: this.state.fathersName,
                    fathersOccupation: this.state.fathersOccupation,
                    fathersTotalExp: this.state.fathersTotalExp,
                    fathersExpWithCurrentCompnay: this.fathersExpWithCurrentCompnay,
                    rationCardNo: this.state.rationCardNo,
                    annualIncome: this.state.annualIncome
                }
                userService.applyEducationLoan(userData)
                    .then(() => {
                        this.setState({ successful: true });
                        this.setState({ message: `${this.state.loanType} Loan Applied with rate of interest ${rateOfInterest} %` });
                    })
            } else {
                userData = {
                    loanType: this.state.loanType,
                    loanAmount: this.state.loanAmount,
                    loanApplyDate: this.state.loanApplyDate,
                    rateOfInterest: rateOfInterest,
                    durationOfLoan: this.state.durationOfLoan,
                    annualIncome: this.state.annualIncome,
                    companyName: this.state.companyName,
                    designation: this.state.designation,
                    totalExp: this.state.totalExp,
                    expWithCurrentCompany: this.state.expWithCurrentCompany
                }
                userService.applyPeronsalLoan(userData)
                    .then(() => {
                        this.setState({ successful: true });
                        this.setState({ message: `${this.state.loanType} Loan Applied with rate of interest ${rateOfInterest} %` });
                    })
            }

        }
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/login" />;
        }
        return (
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-8 offset-sm-2">
                            <h2 className="text-center mt-3">Apply Loan</h2>
                            <div className="card">

                                <Form onSubmit={this.handleSubmit} ref={(c) => { this.form = c; }}>
                                    {!this.state.successful && (
                                        <div className="card-body">

                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Loan Type</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Select name='loanType' className="form-control" value={this.state.loanType} onChange={this.onChangeLoanType} validations={[required]}>
                                                        <option value=''>Select loan type</option>
                                                        <option value='Educational'>Educational</option>
                                                        <option value='Personal'>Personal</option>
                                                        <option value='House'>House</option>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Loan Amount</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="loanAmount"
                                                        value={this.state.loanAmount}
                                                        onChange={this.onChangeLoanAmount}
                                                        validations={[required, validAmount]}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Loan Apply Date</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Input
                                                        type="date"
                                                        className="form-control"
                                                        name="loanApplyDate"
                                                        value={this.state.loanApplyDate}
                                                        onChange={this.onChangeLoanApplyDate}
                                                        validations={[required, validDate]}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Loan Duration</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Select name='durationOfLoan' className="form-control" value={this.state.durationOfLoan} onChange={this.onChangeDurationOfTheLoan} validations={[required]}>
                                                        <option value=''>Select duration</option>
                                                        <option value='5'>5 Years</option>
                                                        <option value='10'>10 Years</option>
                                                        <option value='15'>15 Years</option>
                                                        <option value='20'>20 Years</option>
                                                    </Select>
                                                </div>
                                            </div>

                                            {this.renderSelectedForm(this.state.loanType)}

                                            <div className="row">
                                                <div className="col-sm-3"></div>
                                                <div className="col-sm-9 text-secondary">
                                                    <button className="btn btn-primary px-4">
                                                        Apply
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {this.state.message && (
                                        <div className="form-group">
                                            <div
                                                className={this.state.successful ? "alert alert-success" : "alert alert-danger"}
                                                role="alert"
                                            >
                                                {this.state.message}
                                            </div>
                                        </div>
                                    )}

                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={(c) => {
                                            this.checkBtn = c;
                                        }}
                                    />

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
    const { isLoggedIn } = state.auth;
    return {
        isLoggedIn
    };
}

export default connect(mapStateToProps)(Loan);