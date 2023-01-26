import React from 'react'
import {Country, State} from "country-state-city"

const Order = () => {
  return (
    <section className='order'>
        <main>
            <h1>Order Details</h1>
            <form action="">
                {/* Address details */}
                <div>
                    <label>Address</label>
                    <input type="text" placeholder='Address'/>
                </div>

                {/* City Details */}
                <div>
                    <label>City</label>
                    <input type="text" placeholder='City'/>
                </div>

                {/* Select Country */}
                <div>
                    <label>Country</label>
                    <select>
                        <option value="">Country</option>
                        {
                            Country && Country.getAllCountries().map(item=>(
                                <option value={item.isoCode} key={item.isoCode}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                
                {/* Select State */}
                <div>
                    <label>State</label>
                    <select>
                        <option value="">State</option>
                        {
                            State && State.getStatesOfCountry('IN').map(item=>(
                                <option value={item.isoCode} key={item.isoCode}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                
                {/* Pincode */}
                <div>
                    <label>Pincode</label>
                    <input type="text" placeholder='Pincode'/>
                </div>
                
                {/* Contact Number */}
                <div>
                    <label>Phone</label>
                    <input type="text" placeholder='Phone'/>
                </div>

                {/* place order button */}
                <button type='submit'>Place Order</button>
            </form>
        </main>
    </section>
  )
}

export default Order