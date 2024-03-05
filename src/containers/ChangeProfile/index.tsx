import React, { useState } from "react";
import { Button, TextField, Grid, Typography, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
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
  dob: string;
}

const ChangeProfile: React.FC = () => {
  const [form, setForm] = useState<ProfileForm>({
    photo: null,
    name: "Dinda Yasmin",
    username: "@dindayasmin",
    bio: "",
    userId: "@dindayasmin",
    email: "dindayasmin@gmail.com",
    phone: "+6281234567890",
    pronounce: "She/her",
    dob: "May,30th 1998",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({
        ...form,
        photo: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Change Profile</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            onChange={handlePhotoChange}
            className={styles.photoCameraInput}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Bio"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="User ID"
            name="userId"
            value={form.userId}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Pronounce"
            name="pronounce"
            value={form.pronounce}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date of Birth"
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
        </Grid> */}
      </Grid>
    </form>
  );
};

export default ChangeProfile;
