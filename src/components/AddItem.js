import React from 'react';

const AddItem = () => {
  return (
    <form action="#" onsubmit="myFunction()">
      <button className="todo-button" type="submit">
          <i className="fas fa-plus"></i>
      </button>
      <input className='todo-input' type='text' />
    </form>
  );
};

export default AddItem;
