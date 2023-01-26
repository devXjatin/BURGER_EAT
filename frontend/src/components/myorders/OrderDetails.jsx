import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        {/* Shipping Details */}
        <div>
          <h1>Shipping</h1>
          <p>
            <strong>Address</strong>
            {"sifbsdifbsdf"}
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h1>Contact</h1>
          <p>
            <strong>Name</strong>
            {"Jatin"}
          </p>
          <p>
            <strong>Phone</strong>
            {"23423424"}
          </p>
        </div>

        {/* Status */}
        <div>
          <h1>Status</h1>
          <p>
            <strong>Order Status</strong>
            {"Processing"}
          </p>
          <p>
            <strong>Placed At</strong>
            {"23/02/2022"}
          </p>
          <p>
            <strong>Delieverd At</strong>
            {"25/02/2022"}
          </p>
        </div>

        {/* Payment Details */}
        <div>
          <h1>Payment</h1>
          <p>
            <strong>Payment Method</strong>
            {"COD"}
          </p>
          <p>
            <strong>Payment Reference</strong>#{"sdfdgd"}
          </p>
          <p>
            <strong>Paid At</strong>
            {"25/02/2022"}
          </p>
        </div>

        {/* Amount */}
        <div>
          <h1>Amount</h1>
          <p>
            <strong>Total Items</strong>₹{2132}
          </p>
          <p>
            <strong>Shipping Charges</strong>₹{200}
          </p>
          <p>
            <strong>Tax</strong>₹{232}
          </p>
          <p>
            <strong>Total Amount</strong>₹{232}
          </p>
        </div>

        {/* Ordered Items Details */}
        <article>
          <h1>Ordered items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span>x<span>{232}</span>{" "}
            </div>
          </div>

          <div>
            <h4>Veg-Cheese Burger</h4>
            <div>
              <span>{14}</span>x<span>{342}</span>{" "}
            </div>
          </div>

          <div>
            <h4>Burger with french fries</h4>
            <div>
              <span>{6}</span>x<span>{499}</span>{" "}
            </div>
          </div>

          <div>
            <h4 style={{fontWeight:800}}>Net Total</h4>
            <div style={{fontWeight:800}}>₹{2132}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
