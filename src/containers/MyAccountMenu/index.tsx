import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@material-ui/icons/Security';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PrivacyTipIcon from '@material-ui/icons/PrivacyTip';x
import { Box, Button } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MyAccountMenu: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleMenuClick = (path: string) => {
    history.push(path);
  };

  return (
    <Box className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          onClick={() => handleMenuClick('/my-account/my-package')}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="My Package" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('/my-account/settings')}>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('/my-account/settings')}>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Account Security" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('/my-account/settings')}>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('/my-account/settings')}>
          <ListItemIcon>
            <PrivacyTipIcon />
          </ListItemIcon>
          <ListItemText primary="Privacy" />
        </ListItem>
      </List>

      <Box className={styles.loginMenu}>
        <img className={styles.logo} src={logo} alt="Dutch Pay Logo" />

        <Box className={styles.phoneNumberSection}>
          <Select defaultValue="+62" className={styles.phoneNumberSelect}>
            <MenuItem value="+62">+62</MenuItem>
            <MenuItem value="+23">+23</MenuItem>
          </Select>
          <TextField className={styles.phoneNumberInput} />
        </Box>
        <ButtonLogin buttonText="Login" />

        <Divider className={styles.divider}> or </Divider>

        <Box className={styles.socialLoginSection}>
          <Button className={styles.socialLoginButton}>
            <img className={styles.icon} src={googleLogo} alt="Google Logo" /> Login with Gmail
          </Button>
          <Button className={styles.socialLoginButton}>
            <img className={styles.icon} src={appleLogo} alt="Apple Logo" /> Login with Apple
          </Button>
        </Box>

        <Typography className={styles.text}>
          Not registered yet? <RouterLink to="/register" className={styles.signInLink}>Sign in</RouterLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default MyAccountMenu;
