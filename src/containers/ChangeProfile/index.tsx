import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box, TextField, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AttachmentIcon from "@mui/icons-material/Attachment";
import InputAdornment from "@mui/material/InputAdornment";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import styles from "./ChangeProfile.module.scss";

interface ProfileForm {
  photo: File | null;
  name: string;
  username: string;
  bio: string;
  userId: string;
  email: string;
  phone: string;
  pronounce: string;
  dob: Date | string;
}

const ChangeProfile: React.FC = () => {
  const [form, setForm] = useState<ProfileForm>({
    photo: null,
    name: "Dinda Yasmin",
    username: "@dindayasmin",
    bio: "test",
    userId: "@dindayasmin",
    email: "dindayasmin@gmail.com",
    phone: "+6281234567890",
    pronounce: "She/her",
    dob: new Date("1998-05-30"),
  });

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({
        ...form,
        photo: e.target.files[0],
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Box className={styles.changeProfileMenu}>
      <Box className={styles.toolbar}>
        <RouterLink to="/login">
          <ArrowBackIosNewIcon className={styles.backIcon} />
        </RouterLink>
        <Typography className={styles.changeProfileText}>
          Change Profile
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        {/* AVATAR PROFILE*/}
        <Box className={styles.avatarContainer}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton
                onClick={handleAvatarClick}
                className={styles.attachmentIcon}
              >
                <AttachmentIcon />
              </IconButton>
            }
          >
            <Avatar
              alt="User Avatar"
              src={
                form.photo
                  ? URL.createObjectURL(form.photo)
                  : "/path/to/your/default/avatar-image.jpg"
              }
              className={styles.avatar}
            />
          </Badge>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </Box>

        {/* PROFILE INFO FORM */}
        <Box className={styles.profileInfoSection1}>
          <Box className={styles.profileInfoSection2}>
            <Typography className={styles.containerTitle}>
              Profile Info
            </Typography>
            <div className={styles.inputWrapper}>
              <Typography className={styles.inputLabel}>Name</Typography>
              <TextField
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="filled"
                className={styles.personalInfoInput}
                InputProps={{
                  classes: {
                    input: styles.personalInfoInput2,
                  },
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardIosIcon
                        style={{ fontSize: "medium", color: "white" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                  className: styles.inputLabel2,
                }}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Typography className={styles.inputLabel}>User Name</Typography>
              <TextField
                name="username"
                value={form.username}
                onChange={handleChange}
                variant="filled"
                className={styles.personalInfoInput}
                InputProps={{
                  classes: {
                    input: styles.personalInfoInput2,
                  },
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardIosIcon
                        style={{ fontSize: "medium", color: "white" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                  className: styles.inputLabel2,
                }}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Typography className={styles.inputLabel}>Bio</Typography>
              <TextField
                name="bio"
                value={form.bio}
                onChange={handleChange}
                variant="filled"
                className={styles.personalInfoInput}
                InputProps={{
                  classes: {
                    input: styles.personalInfoInput2,
                  },
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardIosIcon
                        style={{ fontSize: "medium", color: "white" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                  className: styles.inputLabel2,
                }}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Typography className={styles.inputLabel}>User id</Typography>
              <TextField
                name="userId"
                value={form.userId}
                onChange={handleChange}
                variant="filled"
                className={styles.personalInfoInput}
                InputProps={{
                  classes: {
                    input: styles.personalInfoInput2,
                  },
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardIosIcon
                        style={{ fontSize: "medium", color: "white" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                  className: styles.inputLabel2,
                }}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Typography className={styles.inputLabel}>Email</Typography>
              <TextField
                name="email"
                value={form.email}
                onChange={handleChange}
                variant="filled"
                className={styles.personalInfoInput}
                InputProps={{
                  classes: {
                    input: styles.personalInfoInput2,
                  },
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardIosIcon
                        style={{ fontSize: "medium", color: "white" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                  className: styles.inputLabel2,
                }}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Typography className={styles.inputLabel}>
                Phone Numbers
              </Typography>
              <TextField
                name="phone"
                value={form.phone}
                onChange={handleChange}
                variant="filled"
                className={styles.personalInfoInput}
                InputProps={{
                  classes: {
                    input: styles.personalInfoInput2,
                  },
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardIosIcon
                        style={{ fontSize: "medium", color: "white" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                  className: styles.inputLabel2,
                }}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Typography className={styles.inputLabel}>Pronounce</Typography>
              <TextField
                name="pronounce"
                value={form.pronounce}
                onChange={handleChange}
                variant="filled"
                className={styles.personalInfoInput}
                InputProps={{
                  classes: {
                    input: styles.personalInfoInput2,
                  },
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardIosIcon
                        style={{ fontSize: "medium", color: "white" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                  className: styles.inputLabel2,
                }}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Typography className={styles.inputLabel}>
                Date of Birth
              </Typography>
              <TextField
                name="dob"
                type="date"
                value={
                  form.dob instanceof Date
                    ? form.dob.toISOString().split("T")[0]
                    : form.dob
                }
                onChange={handleChange}
                variant="filled"
                className={styles.personalInfoInput}
                InputProps={{
                  classes: {
                    input: styles.personalInfoInput2,
                  },
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  shrink: true,
                  className: styles.inputLabel2,
                }}
              />
            </div>

            <div className={styles.inputButton}>
              <Button
                variant="contained"
                type="submit"
                className={styles.confirmButton}
              >
                Confirm changes
              </Button>
              <Button
                variant="contained"
                type="submit"
                className={styles.deleteButton}
              >
                Delete your account
              </Button>
            </div>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

const fileInputRef = React.createRef<HTMLInputElement>();
export default ChangeProfile;
