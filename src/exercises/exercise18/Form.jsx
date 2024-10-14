import { useState } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderChips, setOrderChips] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || orderChips === '' || !termsAccepted) {
      alert('Please fill in all required fields.');
      return;
    }

    alert(`Order placed successfully!\nName: ${name}\nEmail: ${email}\nChips: ${orderChips}\nSpecial Request: ${specialRequest}`);
  };

  return (
    <div>
      <h1>Order a Hamburger</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Do you want to order chips?
            <select
              value={orderChips}
              onChange={(e) => setOrderChips(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Special Request:
            <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              rows="4"
              cols="50"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            I have read and agreed to the terms and conditions
          </label>
        </div>
        <button type="submit">Make an Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
