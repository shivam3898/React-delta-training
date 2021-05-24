import axios from "axios";
import authHeader from './authHeader';

const API_URL = "http://localhost:8080/api/auth/";
const EDIT_URL = "http://localhost:8080/api/test/";

class AuthService {

    login(username, password) {
        return axios
            .post(API_URL + 'signin', { username, password })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(data) {
        return axios.post(API_URL + 'signup', {
            customerId: data.customerId,
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
            guardianType: data.guardianType,
            guardianName: data.guardianName,
            address: data.address,
            citizenship: data.citizenship,
            state: data.state,
            country: data.country,
            gender: data.gender,
            maritalStatus: data.maritalStatus,
            number: data.number,
            dob: data.dob,
            registrationDate: data.registrationDate,
            accountType: data.accountType,
            branchName: data.branchName,
            citizenStatus: data.citizenStatus,
            initialDepositAmount: data.initialDepositAmount,
            identificationProofType: data.identificationProofType,
            identificationDocumentNumber: data.identificationDocumentNumber,
            referenceAccountHolderName: data.referenceAccountHolderName,
            referenceAccountHolderAccNo: data.referenceAccountHolderAccNo,
            referenceAccountHolderAddress: data.referenceAccountHolderAddress,
        })
    }

    update(data) {
        return axios.put(EDIT_URL + 'edit', {
            name: data.name,
            email: data.email,
            guardianType: data.guardianType,
            guardianName: data.guardianName,
            address: data.address,
            citizenship: data.citizenship,
            state: data.state,
            country: data.country,
            gender: data.gender,
            maritalStatus: data.maritalStatus,
            number: data.number,
            dob: data.dob,
            registrationDate: data.registrationDate,
            accountType: data.accountType,
            branchName: data.branchName,
            citizenStatus: data.citizenStatus,
            initialDepositAmount: data.initialDepositAmount,
            identificationProofType: data.identificationProofType,
            identificationDocumentNumber: data.identificationDocumentNumber,
            referenceAccountHolderName: data.referenceAccountHolderName,
            referenceAccountHolderAccNo: data.referenceAccountHolderAccNo,
            referenceAccountHolderAddress: data.referenceAccountHolderAddress,
        }, { headers: authHeader() }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        })

    }
}

export default new AuthService();