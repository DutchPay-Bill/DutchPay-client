import { Box, Button } from "@mui/material";
import { Add, FormatListBulleted, Home } from "@mui/icons-material";

const PublicLayout = () => {
  return (
    <Box
      height={50}
      min-width="100%" //belum center
      sx={{
        px: 2,
        mb: 2,
        mx: 2,
        position: "fixed",
        left: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#1E1E1E",
        borderRadius: 5,
      }}
    >
      <Button>
        <Box
          height={30}
          width="40vw"
          sx={{
            p: 0,
            m: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#E4FF63",
            borderRadius: 2,
            gap: 1,
          }}
        >
          <Home sx={{ color: "#131313" }} fontSize="small" />
          <h6 style={{ color: "#131313" }}>Home</h6>
        </Box>
      </Button>
      <Button>
        <Box
          height={30}
          sx={{
            p: 0,
            m: 0,
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#1E1E1E",
            borderRadius: 2,
          }}
        >
          <Add sx={{ color: "#fff" }} fontSize="medium" />
          <h6 style={{ margin: 0, color: "#fff" }}>New Bill</h6>
        </Box>
      </Button>
      <Button>
        <Box
          height={30}
          sx={{
            p: 0,
            m: 0,
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#1E1E1E",
            borderRadius: 2,
          }}
        >
          <FormatListBulleted sx={{ color: "#fff" }} fontSize="medium" />
          <h6 style={{ margin: 0, color: "#fff" }}>History</h6>
        </Box>
      </Button>
    </Box>
  );
};

export default PublicLayout;
