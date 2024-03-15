import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

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
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    setAuthenticated: Dispatch<SetStateAction<boolean>>
}

const defaultValue: ContextProps = {
    userData: [],
    setUserData: () => {},
    dataChanged: true,
    setDataChanged: () => {},
    authenticated: false,
    open: false,
    setOpen: ()=> {},
    setAuthenticated: ()=> {}
};

export const PublicData = createContext<ContextProps>(defaultValue);

const GlobalState = ({ children }: Props) => {
    const [userData, setUserData] = useState<User[]>([]);
    const [dataChanged, setDataChanged] = useState<boolean>(true);
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <PublicData.Provider value={{ userData, setUserData, dataChanged, setDataChanged, authenticated, setAuthenticated, open, setOpen }}>
            {children}
        </PublicData.Provider>
    );
};

export default GlobalState;