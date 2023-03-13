import React from 'react';
import BorderCard from "../components/common/BorderCard"

const SavingAccount = (props) => {

  const {accountNumber,id} = props.SavingAccount
  
  return (
    <BorderCard onClick={() => props.onSelect(id)}>
     
      <p>{accountNumber}</p>
    </BorderCard>
  )
}

export default SavingAccount;


