import { Box } from "@mui/system";

type Props = {
    children: React.ReactNode;
    selectedItem: object | undefined;
};
const SideBarHover = (props: Props) => {
    // console.log("selectedItem on hover", selectedItem);

    return (
        <Box
            sx={{
                position:"relative",
                left: "195px",
                top: "-40px",

                // height: "360px",
                zIndex: 9999,
                width: "300px",
                background: "#FFFFFF",
                boxShadow: "5px 7px 50px rgba(22, 31, 41, 0.2)",
                borderRadius: "0px 20px 20px 0px",
                color: "#161F29",
                fontWeight: 400,
                fontSize: "16px",
                padding:'10px',
            }}
        >
            
            {(props.selectedItem && props.selectedItem?.children) ? props.selectedItem.children.map((item: any, i: number) => {
                return (
                        <ul key = {i}
                            style={{
                              alignItems:'center'

                                // paddingTop: "50px",
                            }}
                        >
                            <li
                                style={
                                    {
                                        margin:"10px"
                                    }
                                }
                            >
                                {item.title}
                            </li>
                        </ul>
                );
            }) : null}
        </Box>
    );
};

export default SideBarHover;
