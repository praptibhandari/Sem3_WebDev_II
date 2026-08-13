// import React, {memo} from 'react'

// const Child = () => {
//   return (
//     <div>Child:</div>
//   )
// }

// export default  memo(Child)

import React, { memo } from "react";

const Child = ({ onClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
};

export default memo(Child);