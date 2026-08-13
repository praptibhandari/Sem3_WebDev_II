// import React, { useState } from "react";
// import Child from "./Child.jsx";

// const MemoDemo = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>{count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Add
//       </button>

//       <Child />
//     </div>
//   );
// };

// export default MemoDemo;



// import React, { useState } from "react";
// import Child from "./Child.jsx";

// const MemoDemo = () => {
//   const [count, setCount] = useState(0);

//   let res= 0;
//   for(let i=0 ; i<1000000; i++){
//     res+=i
//   }
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Add
//       </button>

//       <Child /><h2>{count}</h2>
//     </div>
//   );
// };

// export default MemoDemo;



import React, { useState, useCallback } from "react";
import Child from "./Child";

const MemoDemo = () => {
  const [count, setCount] = useState(0);

let obj = {
  id: 1,
  name: "omi"
};

localStorage.setItem("key", JSON.stringify(obj));

let data = localStorage.getItem("key");

console.log(data);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Add
      </button>

      <Child onClick={handleClick} />
    </div>
  );
};

export default MemoDemo;
