import { isEmail, isBefore, isInt } from 'validator';

export const required = (value) => {
    if (!value || value.length < 1) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}

export const validName = (value) => {
    if (!value.match(/^[a-zA-Z ]*$/)) {
        return (
            <div className="alert alert-danger" role="alert">
                Name must only contain alphabets and spaces
            </div>
        );
    }
}

export const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

export const validContactNumber = (value) => {
    if (!value.match(/^[0-9]{10}$/)) {
        return (
            <div className="alert alert-danger" role="alert">
                Contact number must be of 10 digits
            </div>
        );
    }
};

export const validPanNumber = (value) => {
    if (!value.match(/^[a-zA-Z0-9]{12}$/)) {
        return (
            <div className="alert alert-danger" role="alert">
                Enter a valid PAN number
            </div>
        );
    }
};

export const validDob = (value) => {
    if (!isBefore(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Enter a valid date of birth
            </div>
        );
    }
};

export const validDate = (value) => {
    if (isBefore(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Enter a valid date
            </div>
        );
    }
};

export const validAmount = (value) => {
    if (!isInt(value, { min: 1 })) {
        return (
            <div className="alert alert-danger" role="alert">
                Amount must be greater than 0
            </div>
        );
    }
};