import * as React from "react";

import SearchComponent from "src/components/SearchComponent";
import JudgePanelTable from "src/container/list/judgePanel/JudgePanelTable";

// import { Grid}  from "mdi-material-ui";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogTitle,
    Grid,
    IconButton,
    Modal,
    Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

// modal-----------

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#F3F3F4",
    boxShadow: "1px 2px 7px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",

    padding: "20px",

    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // width: 400,
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    // boxShadow: 24,
    // p: 4,
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    padding: "10px",

    // background: "#F3F3F4",

    // "& .MuiDialogContent-root": {
    //     background: "#F3F3F4",
    //     boxShadow: "1px 2px 7px rgba(0, 0, 0, 0.2)",
    //     borderRadius: "10px",
    // },
    // "& .MuiDialogActions-root": {
    //     padding: theme.spacing(1),
    // },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 4, background: "white" }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "#161F29",
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

const StyledSelect = styled(Select)({
    background: "white",
    borderRadius: "0px",
    height: "36px",
    width: "80px",

    // padding: "10px",

    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
});

const StyledMenuItem = styled(MenuItem)({
    width: "80px !important",
    border: "1px solid gray",
});

const index = () => {
    // modal state

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // const [page, setPage] = React.useState(0);

    // const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // const handleChangePage = (event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (
    //     event: React.ChangeEvent<HTMLInputElement>
    // ) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    return (
        <Grid
            container
            style={{
                // height: "800px",
                padding: "20px",
                background: "#FFFFFF",
                boxShadow: "2px 5px 20px rgba(22, 31, 41, 0.1)",
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            <Box
                style={{
                    width: "100%",
                    background: "#ECF8FF",
                    boxShadow: "1px 2px 3px rgba(22, 31, 41, 0.2)",
                    padding: "23px 20px",
                    marginBottom: "20px",
                }}
            >
                <h2
                    style={{
                        fontWeight: "700",
                        fontSize: "16px",

                        color: "#161F29",
                    }}
                >
                    Judge Panel
                </h2>
            </Box>

            {/* grid start */}

            <Grid
                style={{
                    paddingTop: "36px",
                    paddingBottom: "20px",
                }}
                container
                columns={12}
                rowSpacing={{ xs: 10 }}
            >
                <Grid xs={12} md={2}>
                    <Box
                        style={{
                            display: "flex",

                            // border: "2px solid red",
                            textAlign: "center",
                            paddingLeft: "10px",
                        }}
                    >
                        <Box
                            style={{
                                paddingRight: "6px",
                                paddingTop: "5px",
                            }}
                        >
                            <Typography>Show</Typography>
                        </Box>
                        <Box>
                            <StyledSelect placeholder="29">
                                <StyledMenuItem value={10}>10</StyledMenuItem>
                                <StyledMenuItem value={20}>20</StyledMenuItem>
                                <StyledMenuItem value={30}>30</StyledMenuItem>
                            </StyledSelect>
                        </Box>
                        <Box
                            style={{
                                paddingLeft: "6px",
                                paddingTop: "5px",
                            }}
                        >
                            <Typography>entries</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} md={4}>
                    <Box
                        style={
                            {
                                // border: "2px solid red",
                            }
                        }
                    >
                        <SearchComponent />
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box
                        style={{
                            // border: "2px solid red",
                            textAlign: "end",
                        }}
                    >
                        <Button
                            onClick={handleClickOpen}
                            style={{
                                padding: "20px 10px",

                                width: "200px",
                                height: "52px",

                                /* 009EFA */

                                background: "#009EFA",
                                boxShadow:
                                    "0.5px 1px 3px rgba(22, 31, 41, 0.2)",
                                borderRadius: "2px",
                                color: " #FFFFFF",
                                fontWeight: "700",
                                fontSize: "14px",
                            }}
                        >
                            Add New
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItem: "center",
                                        background: "#FFFFFF",
                                        padding: "0px 0px 0px 10px",
                                    }}
                                >
                                    <Box>
                                        <h2
                                            style={{
                                                fontWeight: 700,
                                                fontSize: "16px",
                                                color: "#000000",
                                            }}
                                        >
                                            Edit
                                        </h2>
                                    </Box>
                                    <Box
                                        style={{
                                            paddingTop: "13px",
                                        }}
                                    >
                                        <CloseIcon
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                    </Box>
                                </Box>

                                {/* modal cntent */}
                                <Box
                                    style={{
                                        paddingTop: "30px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItem: "center",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Box>
                                            <label
                                                style={{
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    paddingRight: "20px",
                                                }}
                                            >
                                                Judge Type
                                            </label>
                                        </Box>
                                        <Box>
                                            <input
                                                style={{
                                                    background: "#FFFFFF",
                                                    boxShadow:
                                                        "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                                    padding: "10px",

                                                    border: 0,
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                }}
                                                type="text"
                                                value="Regular"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItem: "center",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Box>
                                            <label
                                                style={{
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    paddingRight: "20px",
                                                }}
                                            >
                                                General Identity
                                            </label>
                                        </Box>
                                        <Box>
                                            <input
                                                style={{
                                                    background: "#FFFFFF",
                                                    boxShadow:
                                                        "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                                    padding: "10px",

                                                    border: 0,
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                }}
                                                type="text"
                                                value="FF_Admin"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItem: "center",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Box>
                                            <label
                                                style={{
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    paddingRight: "20px",
                                                }}
                                            >
                                                Email
                                            </label>
                                        </Box>
                                        <Box>
                                            <input
                                                style={{
                                                    background: "#FFFFFF",
                                                    boxShadow:
                                                        "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                                    padding: "10px",

                                                    border: 0,
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                }}
                                                type="text"
                                                value="email@text.com"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItem: "center",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Box>
                                            <label
                                                style={{
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    paddingRight: "20px",
                                                }}
                                            >
                                                Contest
                                            </label>
                                        </Box>
                                        <Box>
                                            <input
                                                style={{
                                                    background: "#FFFFFF",
                                                    boxShadow:
                                                        "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                                    padding: "10px",

                                                    border: 0,
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                }}
                                                type="text"
                                                value="Contest Name 1"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItem: "center",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Box>
                                            <label
                                                style={{
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    paddingRight: "20px",
                                                }}
                                            >
                                                Contest ID
                                            </label>
                                        </Box>
                                        <Box>
                                            <input
                                                style={{
                                                    background: "#FFFFFF",
                                                    boxShadow:
                                                        "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                                    padding: "10px",

                                                    border: 0,
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                }}
                                                type="text"
                                                value="Contest ID 1"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItem: "center",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Box>
                                            <label
                                                style={{
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    paddingRight: "20px",
                                                }}
                                            >
                                                Eligibility
                                            </label>
                                        </Box>
                                        <Box>
                                            <input
                                                style={{
                                                    background: "#FFFFFF",
                                                    boxShadow:
                                                        "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                                    padding: "10px",

                                                    border: 0,
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                }}
                                                type="text"
                                                value="Super"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItem: "center",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Box>
                                            <label
                                                style={{
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    paddingRight: "20px",
                                                }}
                                            >
                                                Contest Type
                                            </label>
                                        </Box>
                                        <Box>
                                            <input
                                                style={{
                                                    background: "#FFFFFF",
                                                    boxShadow:
                                                        "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                                    padding: "10px",

                                                    border: 0,
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                }}
                                                type="text"
                                                value="Video"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItem: "center",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Box>
                                            <label
                                                style={{
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    paddingRight: "20px",
                                                }}
                                            >
                                                Active Status
                                            </label>
                                        </Box>
                                        <Box>
                                            <input
                                                style={{
                                                    background: "#FFFFFF",
                                                    boxShadow:
                                                        "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
                                                    padding: "10px",

                                                    border: 0,
                                                    color: "#161F29",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                }}
                                                type="text"
                                                value="Active"
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                {/* modal button */}

                                <Box
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        paddingTop: "40px",
                                    }}
                                >
                                    <Box>
                                        <Button
                                            style={{
                                                background: "#FFFFFF",
                                                borderRadius: "3px",
                                                padding: "10px 20.5px",

                                                color: "#161F29",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                textTransform: "none",
                                            }}
                                            autoFocus
                                            onClick={handleClose}
                                        >
                                            Discard
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button
                                            style={{
                                                background: "#009EFA",
                                                borderRadius: "3px",
                                                padding: "10px 20.5px",
                                                color: "#FFFFFF",
                                                fontWeight: 700,
                                                fontSize: "16px",
                                                textTransform: "none",
                                            }}
                                            autoFocus
                                            onClick={handleClose}
                                        >
                                            Save changes
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Modal>

                        {/* modal */}
                        {/* <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle
                                id="customized-dialog-title"
                                onClose={handleClose}
                            >
                                New Judge
                            </BootstrapDialogTitle>
                            {/* <DialogContent dividers>
                                <Typography gutterBottom>
                                    Cras mattis consectetur purus sit amet
                                    fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum
                                    at eros.
                                </Typography>
                                <Typography gutterBottom>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Vivamus
                                    sagittis lacus vel augue laoreet rutrum
                                    faucibus dolor auctor.
                                </Typography>
                                <Typography gutterBottom>
                                    Aenean lacinia bibendum nulla sed
                                    consectetur. Praesent commodo cursus magna,
                                    vel scelerisque nisl consectetur et. Donec
                                    sed odio dui. Donec ullamcorper nulla non
                                    metus auctor fringilla.
                                </Typography>
                            </DialogContent> */}
                        {/* <Box>
                            <h2>ghvbhbhkjb</h2>
                        </Box>

                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>
                                <Button
                                    style={{
                                        background: "#009EFA",
                                        borderRadius: "3px",
                                        padding: "10px 20.5px",
                                        color: "#FFFFFF",
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        textTransform: "none",
                                    }}
                                    autoFocus
                                    onClick={handleClose}
                                >
                                    Save changes
                                </Button>
                            </Box>
                            <Box>
                                <Button
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "3px",
                                        padding: "10px 20.5px",
                                        color: "#161F2       9",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        textTransform: "none",
                                    }}
                                    autoFocus
                                    onClick={handleClose}
                                >
                                    Discard
                                </Button>
                            </Box>
                        </Box> */}
                        {/* </BootstrapDialog> */}
                    </Box>
                </Grid>
            </Grid>

            {/* end */}

            {/* table component */}

            <JudgePanelTable />
        </Grid>
    );
};

export default index;
