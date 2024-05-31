import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {User} from "../../Interfaces/User.ts";

const UserCard = (user:User) => {
  return (
      <Card sx={{ minWidth: 275 }}>
          <CardContent>

              <Box width={'100%'}>
                  <img width={'100%'} src={'https://picsum.photos/200'} alt={'user-avatar'}/>
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
              <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small">Learn More</Button>
          </CardActions>
      </Card>
  );
}

export default UserCard;