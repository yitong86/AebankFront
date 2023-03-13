import React from 'react';
import BorderCard from "../components/common/BorderCard"

const CheckingAccount = (props) => {

  const {accountNumber,id} = props.CheckingAccount

  return (
    <BorderCard  onClick={() => props.onSelect(id)}>
     
      <p>{accountNumber}</p>
    </BorderCard>
  )
}

export default CheckingAccount;