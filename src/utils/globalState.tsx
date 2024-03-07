import { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';

interface Props {
    children: ReactNode;
}

interface User{
    user_id: number;
    username: string;
    phone_number: string;
    fullname: string;
    email: string;
}
interface ContextProps {
    dataChanged: boolean;
    userData : User[];
    setUserData : Dispatch<SetStateAction<[]>>;
    setDataChanged: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: ContextProps = {
    userData : [],
    setUserData : () => {},
    dataChanged: true,
    setDataChanged: () => {}
};

export const PublicData = createContext<ContextProps>(defaultValue);

const GlobalState = ({ children }: Props) => {
    const [userData, setUserData] = useState<[]>([])
    const [dataChanged, setDataChanged] = useState(true)

    return (
        <PublicData.Provider value={{ userData, setUserData, dataChanged, setDataChanged }}>
            {children}
        </PublicData.Provider>
    );
};

export default GlobalState;