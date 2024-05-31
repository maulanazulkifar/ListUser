import {Box, Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import UserService from "../../Services/UserService";
import {useUser} from "../../utils/UserContext.tsx";
import UserListContainer from "../../Components/UserListContainer";

const ListUserPage = () => {
    const { updateUsers} = useUser();

    useEffect(() => {
        fetchUser();
    },[])

    const fetchUser = async () => {
        try {
            const user = await UserService();
            updateUsers(user);
        } catch (error) {
            console.error("Error fetching user:", error);
            // Handle error appropriately, e.g., show a message to the user
        }
    }
  return(
      <Container maxWidth="xl">
          <Typography sx={{padding: 3}} variant={"h4"} align={'center'}>User List</Typography>
          <Box paddingBottom={2}>
              <Button
                  component="label"
                  role={undefined}
                  variant="contained"
              >
                  Add User
              </Button>
          </Box>
          <UserListContainer/>
      </Container>
  )
}

export default ListUserPage;