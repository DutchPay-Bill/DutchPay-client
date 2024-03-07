import { API_URL } from "./access"

interface PhoneLogin {
    phone_number: string;
    password: string;
}

export const phoneLogin = async (value: PhoneLogin) => {
    console.log(JSON.stringify(value))
    try {
        const response = await fetch(API_URL + "/v1/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(value),
        })
        return response
    } catch (error) {
        console.error("An error occurred:", error);
    }
}