import { API_URL } from "./url"

interface PhoneLogin {
    phoneNumber: string;
    password: string;
}

export const phoneLogin = async (value: PhoneLogin) => {
    try {
        const response = await fetch(API_URL + "/v1/auth/login", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
            credentials: "include",
        })
        return response
    } catch (error) {
        console.error("An error occurred:", error);
    }
}