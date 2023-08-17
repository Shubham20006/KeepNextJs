import axios from "axios";

export const signin = async (input) => {
    let response = await axios.post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
        input
    );
    return response;
};

export const signup = async (input) => {
    let response = await axios.post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
        input
    );
    return response;
};