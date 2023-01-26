import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
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
              <td>
                <Link to={`/order/${"aasdasdasd"}`}>
                  <AiOutlineEye />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
