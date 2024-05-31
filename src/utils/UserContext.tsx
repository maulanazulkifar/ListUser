import React, { createContext, useContext, useState } from "react";
import { User } from "../Interfaces/User.ts";

interface UserContextType {
    users: User[];
    updateUsers: (newUsers: User[]) => void;
}

const UserContext = createContext<UserContextType>({
    users: [],
    updateUsers: () => {},
});

const UserProvider: React.FC = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    const updateUsers = (newUsers: User[]) => {
        setUsers(newUsers);
    };

    return (
        <UserContext.Provider value={{ users, updateUsers }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { UserProvider, useUser };
