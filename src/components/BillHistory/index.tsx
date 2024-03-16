import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from './BillHistory.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router
import { API_URL } from '../../utils/access';

interface BillData {
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

export default function BillHistory() {
  const [FullScreen, setFullScreen] = useState(false);
  const [billData, setBillData] = useState<BillData[]>([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/history') {
      setFullScreen(true);
    } else {
      setFullScreen(false);
    }
  }, [location]);

  useEffect(() => {
    const getBillHistory = async () => {
      try {
        const response = await fetch(API_URL + "/v1/bill", {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setBillData(data.data); // Assuming the response directly contains the bill history array
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    getBillHistory();
  }, []);

  const handleDeleteClick = (index: number) => {
    const updatedBillData = [...billData];
    updatedBillData.splice(index, 1);
    setBillData(updatedBillData);
  };

  // const getRandomColor = () => {
  //   // getRandomColor function remains unchanged
  // };

  // const getUserAvatarColor = (userName: string) => {
  //   // getUserAvatarColor function remains unchanged
  // };

  return (
    <>
      <Box className={`${styles.background} ${FullScreen ? styles.fullScreen : ''}`}>
        <Box className={styles.container}>
          <Box className={styles.header}>
            <Typography className={styles.title}>
              Your bills history
            </Typography>
            {location.pathname !== '/history' && (
              <>
                {!FullScreen && (
                  <Typography className={styles.viewAll} onClick={() => setFullScreen(true)}>
                    View All
                    <KeyboardArrowRightIcon className={styles.arrowIcon} />
                  </Typography>
                )}
                {FullScreen && (
                  <Typography className={styles.viewAll} onClick={() => setFullScreen(false)}>
                    <KeyboardArrowLeftIcon className={styles.arrowIcon} />
                    Hide All
                  </Typography>
                )}
              </>
            )}
          </Box>
          <Box className={`${styles.scrollbox} ${FullScreen ? styles.fullscrollBox : ''}`}>
            {billData.map((bill, index) => (
              <Box key={index} className={styles.billContainer}>
                <Box className={styles.billDetails}>
                  <Typography className={styles.billName}>
                    {bill.description}
                  </Typography>
                  <Box className={styles.deleteBox}>
                    <Typography className={styles.billDate}>
                      {new Date(bill.date).toLocaleDateString()}
                    </Typography>
                    <Box className={styles.deleteBackground} onClick={() => handleDeleteClick(index)}>
                      <DeleteIcon className={styles.deleteIcon} />
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.billAmount}>
                  <Box className={styles.discountBox}>
                    <Typography className={styles.taxBill}>
                      Tax {bill.tax} %
                    </Typography>
                    <Typography className={styles.discountBill}>
                      Discount {bill.discount} %
                    </Typography>
                  </Box>
                  <Box className={styles.bill}>
                    <Typography className={styles.billValue}>
                      RP {bill.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                    {/* Assuming totalValue is not needed */}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
