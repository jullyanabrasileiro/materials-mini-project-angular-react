import PropTypes from 'prop-types'; 

const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      Delete
    </button>
  );
};


DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired, 
};

export default DeleteButton;
