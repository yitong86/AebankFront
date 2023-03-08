import React from 'react';
import BorderCard from "../components/common/BorderCard"

const CheckingAccount = (props) => {

  const {accountNumber} = props.CheckingAccount

  return (
    <BorderCard>
     
      <p>{accountNumber}</p>
    </BorderCard>
  )
}

export default CheckingAccount;