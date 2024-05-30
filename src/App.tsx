
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import UserCard from "./Components/UserCard";
import {Box, Container, Typography} from "@mui/material";

function App() {
    const loopNumber: number[] = [1,2,3,4,5,6,7,8,9,10];
  return (
    <>
        <Container maxWidth="xl">
            <Typography>User List</Typography>
            <Box sx={{ display: 'flex' }} flexWrap={'wrap'} rowGap={2} columnGap={2} justifyContent={'center'}>
                {
                    loopNumber.map(() => {
                        return(
                            <UserCard/>
                        )
                    })
                }
            </Box>
        </Container>
    </>
  )
}

export default App
