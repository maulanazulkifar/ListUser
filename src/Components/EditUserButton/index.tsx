import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import * as React from "react";
import {useUser} from "../../utils/UserContext.tsx";
import {useEffect, useState} from "react";
import {DialogTitle, Stack, TextField} from "@mui/material";
import {User} from "../../Interfaces/User.ts";

const EditUserButton = (id:number) => {
    const {users, updateUsers} = useUser();
    const [open, setOpen] = useState(false);
    const [user, setUser]= useState({
        username: '',
        name: '',
        email: '',
    });

    const handleClickOpen = () => {
        setOpen(true);
        const index = users.findIndex(user => user.id === id.id);
        setUser(users[2]);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        editData(users, id).finally(() => {
            setOpen(false);
        })
    };

    const editData = async (users: User[], userId: number) => {
        const index = users.findIndex(user => user.id === userId.id);
        if (index !== -1) {
            const updatedUsers = [...users];
            const updatedUser = { ...updatedUsers[index] };
            updatedUser.username = user.username;
            updatedUser.name = user.name;
            updatedUser.email = user.email;
            updatedUsers[index] = updatedUser;
            updateUsers(updatedUsers);
            console.log(updatedUsers);
            console.log(`User with ID ${userId} edited successfully.`);
            return true;
        } else {
            console.log(`User with ID ${userId} not found.`);
            return false;
        }
    };


    return(
      <React.Fragment>
          <Button size="small" onClick={handleClickOpen}>Edit</Button>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle>Edit User</DialogTitle>
              <DialogContent id="alert-dialog-title">
                  <Stack spacing={2} paddingTop={1}>
                      <TextField
                          id="outlined-controlled"
                          label="Username"
                          value={user.username}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                              setUser({ ...user, username: event.target.value });
                          }}
                      />
                      <TextField
                          id="outlined-controlled"
                          label="Name"
                          value={user.name}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                              setUser({ ...user, name: event.target.value });
                          }}
                      />
                      <TextField
                          id="outlined-controlled"
                          label="Email"
                          value={user.email}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                              setUser({ ...user, email: event.target.value });
                          }}
                      />
                  </Stack>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleEdit} autoFocus>
                      Submit
                  </Button>
                  <Button onClick={handleClose} autoFocus color={'secondary'}>
                      Cancel
                  </Button>
              </DialogActions>
          </Dialog>
      </React.Fragment>
  )
}

export default EditUserButton;