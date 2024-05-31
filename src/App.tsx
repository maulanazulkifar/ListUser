
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import UserCard from "./Components/UserCard";
import {Box, Container, Typography} from "@mui/material";
import {User} from "./Interfaces/User.ts";
import {createContext, useEffect, useState} from "react";
import UserService from "./Services/UserService";

const UserContext = createContext<User[]>([])
function App() {

    const [user, setUser] = useState<User[]>([]);

    useEffect(() => {
        fetchUser();
    },[])

    const fetchUser = async () => {
        try {
            const user = await UserService();
            setUser(user);
        } catch (error) {
            console.error("Error fetching user:", error);
            // Handle error appropriately, e.g., show a message to the user
        }
    }
  return (
    <UserContext.Provider value={user}>
        <Container maxWidth="xl">
            <Typography sx={{padding: 3}} variant={"h4"} align={'center'}>User List</Typography>
            <Box sx={{ display: 'flex' }} flexWrap={'wrap'} rowGap={2} columnGap={2} justifyContent={'center'}>
                {
                    user.map((user:User) => {
                        return(
                            <Box key={user.id}>
                                <UserCard
                                    address={user.address}
                                    company={user.company}
                                    email={user.email} id={user.id}
                                    name={user.name} phone={user.phone}
                                    username={user.username}
                                    website={user.website}/>
                            </Box>
                        )
                    })
                }
            </Box>
        </Container>
    </UserContext.Provider>
  )
}

export default App
