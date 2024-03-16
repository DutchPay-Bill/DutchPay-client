import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./RecentBill.module.scss";
import { useEffect, useState } from "react";
import { getBillHistory } from "../../utils/fetchApi";

interface RecentBillData {
  id: number;
  user_id: number;
  payment_method_id: number;
  description: string;
  discount: number;
  tax: number;
  service: number;
  total_price: string;
  date: string;
  is_completed: boolean;
}

export default function RecentBill() {
  const [recentBill, setRecentBill] = useState<RecentBillData | null>(null); // State to store the recent bill data

  useEffect(() => {
    // Fetch bill history when component mounts
    const fetchBillHistory = async () => {
      try {
        const response = await getBillHistory(); // Call getBillHistory function
        if (response) { // Check if response is not undefined
          const data = await response.json();
          if (response.ok) {
            // If response is successful, set the recent bill data
            setRecentBill(data.data[0]); // Assuming you only need the first bill data
          } else {
            console.error("Failed to fetch bill history:", data.message);
          }
        } else {
          console.error("Failed to fetch bill history: Response is undefined");
        }
      } catch (error) {
        console.error("An error occurred while fetching bill history:", error);
      }
    };

    fetchBillHistory();
  }, []);

  return (
    <>
      <Box className={styles.recentBill}>
        <Typography className={styles.title}>Recent Bill</Typography>
        {recentBill && ( // Render if recentBill data is available
          <Box className={styles.billDetails}>
            <Box className={styles.billInfo}>
              <Typography className={styles.billName}>
                {recentBill.description}
              </Typography>
              {/* Render other bill details */}
              <Typography className={styles.viewDetails}>View Details</Typography>
            </Box>
            <Box className={styles.receivables}>
              <Box className={styles.receivablesInfo}>
                <Typography className={styles.taxBill}>
                  Tax {recentBill.tax} %
                </Typography>
                <Typography className={styles.discountBill}>
                  Discount {recentBill.discount} %
                </Typography>
              </Box>
              <Box className={styles.pendingInfo}>
                <Box className={styles.copyBillUrlContainer}>
                  <Typography className={styles.totalPrice}>
                    RP {recentBill.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={styles.userDetails}>
              <Grid container spacing={0.2} className={styles.boxUser}>
                {/* Render user avatars */}
              </Grid>
              <Typography className={styles.date}>{new Date(recentBill.date).toLocaleDateString()}</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
