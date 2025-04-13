import { useContext } from "react";
import { Data, Data1 } from "../App";

import React from "react";

const ComponentC = () => {
  const userName = useContext(Data);
  const Age = useContext(Data1);
  return (
    <h1>
      My name is: {userName} and i am: {Age}
    </h1>
  );
};

export default ComponentC;

// import { Data } from "../App";
// import { Data1 } from "../App";

// import React from "react";

// const ComponentC = () => {
//   return (
//     <Data.Consumer>
//       {(name) => {
//         // return <h1>{name}</h1>;
//         return (
//           <Data1.Consumer>
//             {(age) => {
//               return (
//                 <h1>
//                   My name is: {name} and I am :{age}
//                 </h1>
//               );
//             }}
//           </Data1.Consumer>
//         );
//       }}
//     </Data.Consumer>
//   );
// };
