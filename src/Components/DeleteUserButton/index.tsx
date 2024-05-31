import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {User} from "../../Interfaces/User.ts";
import {useUser} from "../../utils/UserContext.tsx";

const DeleteUserButton = (id:number) => {
    const {users, updateUsers} = useUser();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        deleteData(users, id).finally(() => {
            setOpen(false);
        })
    };

    const deleteData = async (users:User, userId: number) => {
        const index = users.findIndex(user => user.id === userId.id);
        if (index !== -1) {
            const userData= users;
            userData.splice(index, 1);
            updateUsers(JSON.parse(JSON.stringify(userData)));
            console.log(userData);
            console.log(`User with ID ${userId} deleted successfully.`);
            return true;
        } else {
            console.log(`User with ID ${userId} not found.`);
            return false;
        }
    }

    return (
        <React.Fragment>
            <Button size="small" color={'error'} onClick={handleClickOpen}>Delete</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent id="alert-dialog-title">
                    {"Are you sure you want to delete this user?"}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete} autoFocus color={'error'}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DeleteUserButton;