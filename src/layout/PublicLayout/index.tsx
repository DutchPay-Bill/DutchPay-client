import { Button } from "@mui/material";
import Box from '@mui/material/Box'
import { Add, FormatListBulleted, Home } from "@mui/icons-material";
import styles from "./PublicLayout.module.scss";

const PublicLayout = () => {
  return (
    <Box className={styles.container}>
      <Button>
        <Box className={styles.homeButton}>
          <Home className={styles.iconBlack} fontSize="small" />
          <h6 className={styles.textHome}>Home</h6>
        </Box>
      </Button>
      <Button>
        <Box className={styles.otherButton}>
          <Add className={styles.iconWhite} fontSize="medium" />
          <h6 className={styles.textButtonWhite}>New Bill</h6>
        </Box>
      </Button>
      <Button>
        <Box className={styles.otherButton}>
          <FormatListBulleted className={styles.iconWhite} fontSize="medium" />
          <h6 className={styles.textButtonWhite}>History</h6>
        </Box>
      </Button>
    </Box>
  );
};

export default PublicLayout;
