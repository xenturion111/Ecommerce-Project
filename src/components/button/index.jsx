import React from 'react'
import Button from '@mui/material/Button';

const Buttons = (props) => {
    console.log(props)
  return (
    <div>
        <Button style={{ backgroundColor: '#101E29'}} variant="contained">{props.text}</Button>
    </div>
  )
}

export default Buttons