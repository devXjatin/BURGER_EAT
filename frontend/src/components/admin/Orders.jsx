import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import {GiArmoredBoomerang} from 'react-icons/gi'

const Orders = () => {
  return (
    <section className="myOrdersTable">
      <main>
        <table>
          <thead>
            <tr>
              <th>OrderID</th>
              <th>Status</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#jdfnjdjfg</td>
              <td>Processing</td>
              <td>20</td>
              <td>₹{1000}</td>
              <td>COD</td>
              <td>Jatin</td>
              <td>
                <Link to={`/order/${"aasdasdasd"}`}>
                  <AiOutlineEye />
                </Link>
                <button>
                <GiArmoredBoomerang/>
              </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  )
}

export default Orders