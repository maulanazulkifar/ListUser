import {User} from "../../Interfaces/User.ts";


const UserService = async (): Promise<User[]> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export default UserService;