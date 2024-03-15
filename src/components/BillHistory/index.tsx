import { Avatar, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styles from "./BillHistory.module.scss";
import dummyAvatar from "../../assets/images/dummyavatar.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

interface BillData {
  name: string;
  date: string;
  avatars: string[];
  value: string;
  totalValue: string;
}

export default function BillHistory() {
  const [FullScreen, setFullScreen] = useState(false);
  const [billData, setBillData] = useState(dummyBillData);

  const viewAllDataClick = () => {
    setFullScreen(!FullScreen);
  };

  const handleDeleteClick = (index: number) => {
    const updatedBillData = [...billData];
    updatedBillData.splice(index, 1);
    setBillData(updatedBillData);
  };

  return (
    <>
      <Box
        className={`${styles.background} ${
          FullScreen ? styles.fullScreen : ""
        }`}
      >
        <Box className={styles.container}>
          <Box className={styles.header}>
            <Typography className={styles.title}>Your bills history</Typography>
            <Typography className={styles.viewAll} onClick={viewAllDataClick}>
              {FullScreen ? (
                <>
                  <KeyboardArrowLeftIcon className={styles.arrowIcon} />
                  Hide All
                </>
              ) : (
                <>
                  View All
                  <KeyboardArrowRightIcon className={styles.arrowIcon} />
                </>
              )}
            </Typography>
          </Box>
          <Box
            className={`${styles.scrollbox} ${
              FullScreen ? styles.fullscrollBox : ""
            }`}
          >
            {billData.map((bill, index) => (
              <Box key={index} className={styles.billContainer}>
                <Box className={styles.billDetails}>
                  <Typography className={styles.billName}>
                    {bill.name}
                  </Typography>
                  <Box className={styles.deleteBox}>
                    <Typography className={styles.billDate}>
                      {bill.date}
                    </Typography>
                    <Box
                      className={styles.deleteBackground}
                      onClick={() => handleDeleteClick(index)}
                    >
                      <DeleteIcon className={styles.deleteIcon} />
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.billAmount}>
                  <Grid container spacing={0.2} className={styles.avatarBox}>
                    {bill.avatars.map((avatar, avatarIndex) => (
                      <Grid item key={avatarIndex}>
                        <Avatar
                          className={styles.avatar}
                          src={avatar}
                          alt={`avatar-${avatarIndex}`}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Box className={styles.bill}>
                    <Typography className={styles.billValue}>
                      {bill.value}
                    </Typography>
                    <Typography className={styles.totalValue}>
                      {bill.totalValue}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={styles.shadow}></Box>
      </Box>
    </>
  );
}

const dummyBillData: BillData[] = [
  {
    name: "Hangout Resto Jakarta",
    date: "19-12-2023",
    avatars: [dummyAvatar, dummyAvatar, dummyAvatar, dummyAvatar],
    value: "Rp 320 k",
    totalValue: "/ Rp 460 k",
  },
  {
    name: "Hangout Resto Jakarta",
    date: "19-12-2023",
    avatars: [dummyAvatar, dummyAvatar, dummyAvatar, dummyAvatar],
    value: "Rp 320 k",
    totalValue: "/ Rp 460 k",
  },
  {
    name: "Hangout Resto Jakarta",
    date: "19-12-2023",
    avatars: [dummyAvatar, dummyAvatar, dummyAvatar, dummyAvatar],
    value: "Rp 320 k",
    totalValue: "/ Rp 460 k",
  },
  {
    name: "Hangout Resto Jakarta",
    date: "19-12-2023",
    avatars: [dummyAvatar, dummyAvatar, dummyAvatar, dummyAvatar],
    value: "Rp 320 k",
    totalValue: "/ Rp 460 k",
  },
  {
    name: "Hangout Resto Jakarta",
    date: "19-12-2023",
    avatars: [dummyAvatar, dummyAvatar, dummyAvatar, dummyAvatar],
    value: "Rp 320 k",
    totalValue: "/ Rp 460 k",
  },
  {
    name: "Hangout Resto Jakarta",
    date: "19-12-2023",
    avatars: [dummyAvatar, dummyAvatar],
    value: "Rp 320 k",
    totalValue: "/ Rp 460 k",
  },
  {
    name: "Hangout Resto Jakarta",
    date: "19-12-2023",
    avatars: [dummyAvatar, dummyAvatar, dummyAvatar],
    value: "Rp 320 k",
    totalValue: "/ Rp 460 k",
  },
  {
    name: "Another Place",
    date: "20-12-2023",
    avatars: [dummyAvatar, dummyAvatar],
    value: "Rp 250 k",
    totalValue: "/ Rp 400 k",
  },
  {
    name: "Another Place",
    date: "20-12-2023",
    avatars: [
      dummyAvatar,
      dummyAvatar,
      dummyAvatar,
      dummyAvatar,
      dummyAvatar,
      dummyAvatar,
      dummyAvatar,
      dummyAvatar,
      dummyAvatar,
    ],
    value: "Rp 250 k",
    totalValue: "/ Rp 400 k",
  },
  {
    name: "Another Place",
    date: "20-12-2023",
    avatars: [dummyAvatar, dummyAvatar],
    value: "Rp 250 k",
    totalValue: "/ Rp 400 k",
  },
  {
    name: "Another Place",
    date: "20-12-2023",
    avatars: [dummyAvatar, dummyAvatar],
    value: "Rp 250 k",
    totalValue: "/ Rp 400 k",
  },
  {
    name: "Another Place",
    date: "20-12-2023",
    avatars: [dummyAvatar, dummyAvatar],
    value: "Rp 250 k",
    totalValue: "/ Rp 400 k",
  },
];
