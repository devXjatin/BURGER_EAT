import React from 'react'

const PlaceOrder = () => {
  return (
    <section className='placeOrder'>
        <main>
            <h1>
                Place Order
            </h1>

            <form action="">
                {/* Cash on Delivery payment*/}
                <div>
                    <label>Cash On Delivery</label>
                    <input type="radio" name='payment'/>
                </div>

                {/* Online payment method */}
                <div>
                    <label>Online</label>
                    <input type="radio" name='payment'/>
                </div>

                <button>Place Order</button>
            </form>
        </main>
    </section>
  )
}

export default PlaceOrder