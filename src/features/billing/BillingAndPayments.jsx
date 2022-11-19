import React from 'react';

function BillingAndPayments() {
  return (
    <div>
      <h2>Billing & Payments</h2>
      <section>
        <p>Plan details</p>
        <div>
          <div>
            <small>plan</small>
            <p>Tozilla Basic</p>
          </div>
          <div>
            <small>Price</small>
            <p>$9.99/month</p>
          </div>
        </div>
        <p>Cancel Tozilla Basic Plan</p>
      </section>
      <section>
        <p>Billing history</p>
        <div>
          <div>
            <small>Tozilla basic plan subscription - $9.99</small>
            <p>Nov 10, 2022</p>
          </div>
          <div>
            <small>Tozilla basic plan subscription - $9.99</small>
            <p>Nov 10, 2022</p>
          </div>
        </div>
        <p>Cancel Tozilla Basic Plan</p>
      </section>
    </div>
  );
}

export default BillingAndPayments;
