import { Box } from "@mui/system";

const SideBarHover = () => {
  return (
    <Box
      style={{
        height: "360px",
        paddingRight: "50px",
        background: "#FFFFFF",
        boxShadow: "5px 7px 50px rgba(22, 31, 41, 0.2)",
        borderRadius: "0px 20px 20px 0px",
        color: "#161F29",
        fontWeight: 400,
        fontSize: "16px",
      }}
    >
      <ul
        style={{
          paddingTop: "50px",
        }}
      >
        <li
          style={{
            paddingBottom: "25px",
          }}
        >
          Video Analytics
        </li>
        <li
          style={{
            paddingBottom: "30px",
          }}
        >
          List Video
        </li>
        <li
          style={{
            paddingBottom: "30px",
          }}
        >
          Upload a Video
        </li>
        <li
          style={{
            paddingBottom: "30px",
          }}
        >
          Download a Code
        </li>
        <li
          style={{
            paddingBottom: "80px",
          }}
        >
          Content Restriction
        </li>
      </ul>
    </Box>
  );
};

export default SideBarHover;
