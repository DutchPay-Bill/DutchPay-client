import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box, TextField, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InputAdornment from "@mui/material/InputAdornment";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import styles from "./ChangeProfile.module.scss";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  bio: Yup.string().required("Bio is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  dob: Yup.date().required("Date of Birth is required"),
});

interface ProfileForm {
  photo: File | null;
  name: string;
  username: string;
  bio: string;
  email: string;
  phone: string;
  dob: Date | string;
}

const ChangeProfile: React.FC = () => {
  const initialValues: ProfileForm = {
    photo: null,
    name: "",
    username: "",
    bio: "",
    email: "",
    phone: "",
    dob: "",
  };

  // const handleAvatarClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setForm({
  //       ...form,
  //       photo: e.target.files[0],
  //     });
  //   }
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = (values: ProfileForm) => {
    // e.preventDefault();
    console.log(values);
  };

  return (
    <Box className={styles.changeProfileMenu}>
      <Box className={styles.toolbar}>
        <RouterLink to="/myaccount">
          <ArrowBackIosNewIcon className={styles.backIcon} />
        </RouterLink>
        <Typography className={styles.changeProfileText}>
          Change Profile
        </Typography>
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }: FormikProps<ProfileForm>) => (
          <Form>
            {/* AVATAR PHOTO PROFILE*/}
            <Box className={styles.avatarContainer}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <IconButton
                    // onClick={handleAvatarClick}
                    className={styles.attachmentIcon}
                  >
                    <BorderColorIcon />
                  </IconButton>
                }
              >
                <Avatar
                  alt="User Avatar"
                  // src={
                  //   form.photo
                  //     ? URL.createObjectURL(form.photo)
                  //     : "/path/to/your/default/avatar-image.jpg"
                  // }
                  className={styles.avatar}
                />
              </Badge>
              {/* <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              /> */}
            </Box>

            {/* PROFILE INFO FORM */}
            <Box className={styles.profileInfoSection1}>
              <Box className={styles.profileInfoSection2}>
                <Typography className={styles.containerTitle}>
                  Profile Info
                </Typography>
                <div className={styles.inputWrapper}>
                  <Typography className={styles.inputLabel}>Name</Typography>
                  <Field name="name">
                    {({ field }) => (
                      <TextField
                        {...field}
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
                        error={errors.name && touched.name}
                        helperText={errors.name && touched.name && errors.name}
                      />
                    )}
                  </Field>
                </div>

                <div className={styles.inputWrapper}>
                  <Typography className={styles.inputLabel}>
                    User Name
                  </Typography>
                  <Field name="username">
                    {({ field }) => (
                      <TextField
                        {...field}
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
                        error={errors.username && touched.username}
                        helperText={
                          errors.username && touched.username && errors.username
                        }
                      />
                    )}
                  </Field>
                </div>

                <div className={styles.inputWrapper}>
                  <Typography className={styles.inputLabel}>Bio</Typography>
                  <Field name="bio">
                    {({ field }) => (
                      <TextField
                        {...field}
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
                        error={errors.bio && touched.bio}
                        helperText={errors.bio && touched.bio && errors.bio}
                      />
                    )}
                  </Field>
                </div>

                <div className={styles.inputWrapper}>
                  <Typography className={styles.inputLabel}>Email</Typography>
                  <Field name="email">
                    {({ field }) => (
                      <TextField
                        {...field}
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
                        error={errors.email && touched.email}
                        helperText={
                          errors.email && touched.email && errors.email
                        }
                      />
                    )}
                  </Field>
                </div>

                <div className={styles.inputWrapper}>
                  <Typography className={styles.inputLabel}>
                    Phone Numbers
                  </Typography>
                  <Field name="phone">
                    {({ field }) => (
                      <TextField
                        {...field}
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
                        error={errors.phone && touched.phone}
                        helperText={
                          errors.phone && touched.phone && errors.phone
                        }
                      />
                    )}
                  </Field>
                </div>

                <div className={styles.inputWrapper}>
                  <Typography className={styles.inputLabel}>
                    Date of Birth
                  </Typography>
                  <Field name="dob">
                    {({ field }) => (
                      <TextField
                        name="dob"
                        type="date"
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
                        error={errors.dob && touched.dob}
                        helperText={errors.dob && touched.dob && errors.dob}
                      />
                    )}
                  </Field>
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
          </Form>
        )}
      </Formik>
      <Box className={styles.shadow}></Box>
    </Box>
  );
};

const fileInputRef = React.createRef<HTMLInputElement>();
export default ChangeProfile;
