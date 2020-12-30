import React from 'react'

interface PaypalVProps {
  purpose: string
  amount: number
  amountT: number
  category: number
  message: string
  target: string
  sandbox: boolean
  name: string
  image: string
  buy: boolean
  local: boolean
}

const PaypalV: React.FC<PaypalVProps> = ({
  purpose,
  category,
  amount,
  amountT,
  target,
  sandbox,
  name,
  message,
  image,
  buy,
  local,
}) => {
  console.log(amount)
  const backlink = `http://${
    local ? 'localhost:3000/' : 'letshaveatoast.app/'
  }?n=${encodeURIComponent(name)}&m=${encodeURIComponent(
    message
  )}&c=${category}&a=${amountT}&s=`
  return (
    <form
      action={`https://www${
        sandbox ? '.sandbox' : ''
      }.paypal.com/cgi-bin/webscr`}
      method='post'
      target='_top'
    >
      <input type='hidden' name='business' value={target} />
      <input
        type='image'
        src='img/empty.png'
        name='submit'
        alt='PayPal — The safer, easier way to pay online.'
        id='paypalRun'
      />
      <img
        alt=''
        src='https://www.paypalobjects.com/en_AU/i/scr/pixel.gif'
        width='1'
        height='1'
      />
      <input type='hidden' name='cmd' value={buy ? '_xclick' : '_donations'} />
      <input type='hidden' name='item_name' value={purpose} />
      {/** 
      <input type='hidden' name='cmd' value='_xclick-subscriptions' />
      <input type='hidden' name='a3' value={1} />
      <input type='hidden' name='t3' value={'M'} />
      <input type='hidden' name='p3' value={1} />
      */}
      <input type='hidden' name='amount' value={`${amount}.00`} />
      <input
        type='hidden'
        value={`https://letshaveatoast.app/img/category/${image}.png`}
        name='image_url'
      />
      <input type='hidden' value='US' name='lc' />
      <input type='hidden' value='EUR' name='currency_code' />
      <input type='hidden' value={`${backlink}1`} name='return' />
      <input type='hidden' value={`${backlink}0`} name='cancel_return' />
      <input type='hidden' value='0' name='rm' />
      <input type='hidden' value="Let's have a toast" name='cbt' />
      {/**
      <input
        type='hidden'
        name='notify_url'
        value='http://www.yourdynamicIPNurl/ipn_code.php'
      /> */}
      {/**<input type='hidden' value='2' name='rm' />*/}
      {/**<input type='hidden' value='US' name='lc' />*/}
      {/**<form method="post" action="https://www.sandbox.paypal.com/cgi-bin/webscr">
  <input type="hidden" value="onlinestore@thegreekmerchant.com" name="business">
  <!-- <input type="hidden" name="undefined_quantity" value="1" /> -->
  <input type="hidden" value="Order at The Greek Merchant:&lt;Br /&gt;Goldfish Flock BLG&lt;br /&gt;" name="item_name">
  <input type="hidden" value="NA" name="item_number">
  <input type="hidden" value="22.16" name="amount">
  <input type="hidden" value="5.17" name="shipping">
  <input type="hidden" value="0" name="discount_amount">        
  <input type="hidden" value="0" name="no_shipping">
  <input type="hidden" value="No comments" name="cn">
  <input type="hidden" value="USD" name="currency_code">
  <input type="hidden" value="http://XXX/XXX/XXX/paypal/return" name="return">
  <input type="hidden" value="2" name="rm">      
  <input type="hidden" value="11255XXX" name="invoice">
  <input type="hidden" value="US" name="lc">
  <input type="hidden" value="PP-BuyNowBF" name="bn">
  <input type="submit" value="Place Order!" name="finalizeOrder" id="finalizeOrder" class="submitButton">
</form> */}
    </form>
  )
}

export default PaypalV
