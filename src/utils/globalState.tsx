import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { getUserProfile, userLogout } from './fetchApi';

interface Props {
    children: ReactNode;
}

interface User {
    user_id: number;
    username: string;
    phone_number: string;
    fullname: string;
    email: string;
}

interface ContextProps {
    userData: User[];
    setUserData: Dispatch<SetStateAction<User[]>>;
    dataChanged: boolean;
    setDataChanged: Dispatch<SetStateAction<boolean>>;
    authenticated: boolean;
    login: () => void;
    logout: () => void;
}

const defaultValue: ContextProps = {
    userData: [],
    setUserData: () => {},
    dataChanged: true,
    setDataChanged: () => {},
    authenticated: true,
    login: () => {},
    logout: () => {}
};

export const PublicData = createContext<ContextProps>(defaultValue);

const GlobalState = ({ children }: Props) => {
    const [userData, setUserData] = useState<User[]>([]);
    const [dataChanged, setDataChanged] = useState<boolean>(true);
    const [authenticated, setAuthenticated] = useState<boolean>(true);

    const login = async () => {
        const response = await getUserProfile()
        const data = await response?.json()
        if(response?.status === 400){
            setAuthenticated(false)
        }else {
            setUserData(data)
            setAuthenticated(true);
        }
    };

    const logout = async () => {
        await userLogout()
            setAuthenticated(false);
    };

    return (
        <PublicData.Provider value={{ userData, setUserData, dataChanged, setDataChanged, authenticated, login, logout }}>
            {children}
        </PublicData.Provider>
    );
};

export default GlobalState;