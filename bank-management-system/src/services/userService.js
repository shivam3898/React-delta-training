import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    applyEducationLoan(data) {
        return axios.post(API_URL + "loan/education", {
            loanType: data.loanType,
            loanAmount: data.loanAmount,
            loanApplyDate: data.loanApplyDate,
            rateOfInterest: data.rateOfInterest,
            durationOfLoan: data.durationOfLoan,
            courseFee: data.courseFee,
            course: data.course,
            fathersName: data.fathersName,
            fathersOccupation: data.fathersOccupation,
            fathersTotalExp: data.fathersTotalExp,
            fathersExpWithCurrentCompnay: data.fathersExpWithCurrentCompnay,
            rationCardNo: data.rationCardNo,
            annualIncome: data.annualIncome
        }, { headers: authHeader() })
    }

    applyPeronsalLoan(data) {
        return axios.post(API_URL + "loan/personal", {
            loanType: data.loanType,
            loanAmount: data.loanAmount,
            loanApplyDate: data.loanApplyDate,
            rateOfInterest: data.rateOfInterest,
            durationOfLoan: data.durationOfLoan,
            annualIncome: data.annualIncome,
            companyName: data.companyName,
            designation: data.designation,
            totalExp: data.totalExp,
            expWithCurrentCompany: data.expWithCurrentCompany
        }, { headers: authHeader() })
    }
}

export default new UserService();