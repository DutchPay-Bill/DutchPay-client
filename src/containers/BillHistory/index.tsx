import { Box } from "@mui/material";
import { BillHistory } from "../../components";
import styles from './BillHistory.module.scss'

export default function index() {
  return (
    <Box className={styles.historyBox}>
      <BillHistory />
    </Box>
  )
}
