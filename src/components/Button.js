import React from 'react';

function Button({title="Add",onClick,...props}) {
  return (
    <button
         type="button"
         onClick={onClick}
         className="ml-4  bg-yellow-500 text-white px-4  rounded-md hover:bg-gray-400 focus:outline-none"
           style={{...props}}
           >
              {title}
    </button>
  );
}

export default Button;
