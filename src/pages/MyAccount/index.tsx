import React from 'react';
import { Header } from '../../components';
import styles from './MyAccount.module.scss'; 
const MyAccount: React.FC = () => {

  return (
    <div className={styles.root}> 
      <Header />
    </div>
  );
};

export default MyAccount;
