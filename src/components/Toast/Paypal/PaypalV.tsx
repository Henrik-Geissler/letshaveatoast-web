import React from 'react'

interface PaypalVProps {
  purpose: string
  amount: number
  target: string
  sandbox: boolean
  pass: string
}

const PaypalV: React.FC<PaypalVProps> = ({
  purpose,
  amount,
  target,
  sandbox,
  pass,
}) => {
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
        src='https://letshaveatoast.app/img/button.png'
        border='0'
        name='submit'
        alt='PayPal — The safer, easier way to pay online.'
      />
      <img
        alt=''
        border='0'
        src='https://www.paypalobjects.com/en_AU/i/scr/pixel.gif'
        width='1'
        height='1'
      />
      <input type='hidden' name='cmd' value='_donations' />
      <input type='hidden' name='item_name' value={purpose} />
      <input type='hidden' name='amount' value={`${amount}.00`} />
      <input
        type='hidden'
        value='https://letshaveatoast.app/img/logo.png'
        name='image_url'
      />
      <input type='hidden' value='US' name='lc' />
      <input type='hidden' value='EUR' name='currency_code' />
      <input
        type='hidden'
        value='https://letshaveatoast.app/paypal/return.html'
        name='return'
      />
      <input
        type='hidden'
        value='https://letshaveatoast.app/paypal/cancel.html'
        name='cancel_return'
      />
      <input type='hidden' value={pass} name='custom' />
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
