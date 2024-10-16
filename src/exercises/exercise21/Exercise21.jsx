import SliderComponent from './SliderComponent';
import DeleteButton from './DeleteButton';
import TextFields from './TextFields';

const Exercise21 = () => {
  const handleDelete = () => {
    alert('Delete action executed!'); 
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Exercise 21</h1>
      
      <h2>Slider</h2>
      <SliderComponent />

      <h2>Delete Button</h2>
      <DeleteButton onClick={handleDelete} />
      
      <h2>Text Fields</h2>
      <TextFields />
    </div>
  );
};

export default Exercise21;
