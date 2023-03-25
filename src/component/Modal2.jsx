import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table2 from './Table2';
import Table1 from './Table1';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1350,
    // height:400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px"

};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [user, setUser] = React.useState("")
    const Handle = (e) => {
        setUser(e)
        // console.log("ketan", e);
    }
    // console.log(user);

    return (
        <div>
            <Button onClick={handleOpen}>
                <Typography variant="h4" gutterBottom color={"white"}>
                    UNROSTERED FLIGHTS
                </Typography>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }} display={"flex"} justifyContent={"space-between"}>
                        <Box>
                            <Table1 Handle={(e) => Handle(e)} />
                        </Box>
                        <Box borderRight={"1px solid black"}></Box>
                        <Box>
                            <Table2 user={user} />
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}