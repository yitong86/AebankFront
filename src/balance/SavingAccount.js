import React from 'react';
import BorderCard from "../components/common/BorderCard"

const SavingAccount = (props) => {

  const {accountNumber} = props.SavingAccount
  
  return (
    <BorderCard>
     
      <p>{accountNumber}</p>
    </BorderCard>
  )
}

export default SavingAccount;


