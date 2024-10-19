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
    <div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5', }}>

      <h1 style={{paddingBottom:20,}}>Order a Hamburger</h1>
      <form onSubmit={handleSubmit} 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#f5f5f5', }}>
        <div style={{paddingBottom:20}}>
          <label >
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div style={{paddingBottom:20}}>
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
        <div style={{paddingBottom:20}}>
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
        <div style={{paddingBottom:20}}>
          <label style={{ display: 'flex',justifyContent: 'center', marginBottom: 5 }}>
            Special Request:

          </label>
          <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              rows="4"
              cols="50"
            />

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
