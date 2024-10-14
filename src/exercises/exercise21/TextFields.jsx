import { useState } from 'react';

const TextFields = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input1 || !input2) {
      alert('Please fill in all fields.');
    } else {
      alert(`Inputs submitted: ${input1}, ${input2}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Input 1:
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Input 2:
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextFields;
