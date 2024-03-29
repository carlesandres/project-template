'use client';
import MyButton from 'components/MyButton';

const ClientComponent = () => {
  const handleClick = () => {
    alert('click');
  };

  return (
    <div>
      <MyButton onClick={handleClick}>Click me!</MyButton>
    </div>
  );
};

export default ClientComponent;
