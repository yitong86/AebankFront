import React from 'react';
import BorderCard from "../components/common/BorderCard"

const Loan = (props) => {

  const {accountNumber,id} = props.Loan

  return (
    <BorderCard  onClick={() => props.onSelect(id)}>
     
      <p>{accountNumber}</p>
    </BorderCard>
  )
}

export default Loan ;