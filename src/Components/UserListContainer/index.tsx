import {User} from "../../Interfaces/User.ts";
import {Box} from "@mui/material";
import UserCard from "../UserCard";
import {useUser} from "../../utils/UserContext.tsx";
import {useEffect, useState} from "react";

const UserListContainer = () => {
  const {users} = useUser();

  const [data, setDataUser] = useState([])
  useEffect(() => {
    setDataUser(users)
  },[users])

  return(
      <Box sx={{ display: 'flex' }} flexWrap={'wrap'} rowGap={2} columnGap={2} justifyContent={'space-between'}>
        {
          data.map((user:User) => {
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
  )
}

export default UserListContainer;