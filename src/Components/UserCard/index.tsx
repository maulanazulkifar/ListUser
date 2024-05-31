import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {User} from "../../Interfaces/User.ts";
import DeleteUserButton from "../DeleteUserButton";
import {useUser} from "../../utils/UserContext.tsx";
import EditUserButton from "../EditUserButton";

const UserCard = (user:User) => {
    const {users} = useUser();

  return (
      <Card sx={{ minWidth: 275 }}>
          <CardContent>
              <Box width={'100%'}>
                  <img src={'https://picsum.photos/200'} alt={'user-avatar'}/>
              </Box>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {user.email}
              </Typography>
              <Typography variant="h5" component="div">
                  {user.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {user.username}
              </Typography>
          </CardContent>
          <CardActions>
              <EditUserButton id={user.id}/>
              <DeleteUserButton id={user.id}/>
          </CardActions>
      </Card>
  );
}

export default UserCard;