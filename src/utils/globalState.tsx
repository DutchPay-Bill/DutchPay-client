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
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const defaultValue: ContextProps = {
    userData: [],
    setUserData: () => {},
    dataChanged: true,
    setDataChanged: () => {},
    authenticated: true,
    login: () => {},
    logout: () => {},
    open: false,
    setOpen: ()=> {}
};

export const PublicData = createContext<ContextProps>(defaultValue);

const GlobalState = ({ children }: Props) => {
    const [userData, setUserData] = useState<User[]>([]);
    const [dataChanged, setDataChanged] = useState<boolean>(true);
    const [authenticated, setAuthenticated] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);

    const login = async () => {
        try {
            const response = await getUserProfile()
            const data = await response?.json()
            if(response?.ok){
                setAuthenticated(true);
                setUserData(data)
            }else {
                setAuthenticated(false)
            } 
        } catch (error) {
            console.error(error)
        }
    };

    const logout = async () => {
        await userLogout()
            setAuthenticated(false);
    };

    return (
        <PublicData.Provider value={{ userData, setUserData, dataChanged, setDataChanged, authenticated, login, logout, open, setOpen }}>
            {children}
        </PublicData.Provider>
    );
};

export default GlobalState;