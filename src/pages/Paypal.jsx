import { makeStyles } from '@material-ui/core';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import { selectPrice } from '../features/PriceSlice'

function Paypal() {
  const classes = useStyles();
  const price = useSelector(selectPrice)
  const paypal= useRef()

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: 'CAPTURE',
          purchase_units: [{
            description: 'Netflix subscription',
            amount: {
              currency_code: 'EUR',
              value: price
            }
          }]
        })
      },
    
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },

      onError: (err) => console.log(err),

    }).render(paypal.current)
  }, [])

  return (
    <div ref={paypal} className={classes.root}/>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}))

export default Paypal
