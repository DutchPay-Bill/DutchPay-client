import { Box } from "@mui/material";
import { MyAccountMenu } from "../../containers";
import styles from "./MyAccount.module.scss"; 

export default function MyAccount() {
  return (
    <>
      <Box className={styles.container}>
      <MyAccountMenu />
      </Box>
    </>
  )
}