// import React from "react";
// import UniqueID from "./components/UniqueID";

// const App = () => {
//   return (
//     <div>
//       <UniqueID />
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
//         molestias aperiam quod aliquam quae mollitia labore soluta dicta,
//         perferendis doloribus.
//         <UniqueID />
//       </p>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import useFetch from "./useFetch";

// const App = () => {
//   //   const [data, setData] = useState(null);
//   //   useEffect(() => {
//   //     fetch("https://jsonplaceholder.typicode.com/todos")
//   //       .then((res) => res.json())
//   //       .then((data) => setData(data));
//   //   }, []);

//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
//   return (
//     <div>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import FocusInput from "./components/FocusInput";
// import Timer from "./components/Timer";

// const App = () => {
//   return (
//     <div>
//       <FocusInput />
//       <Timer />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useRef } from "react";

// const App = () => {
//   const element = useRef(null);
//   const focusInput = () => {
//     element.current.focus();
//     element.current.value = "Dhiman";
//   };

//   console.log(element);
//   return (
//     <div>
//       <input type="text" ref={element} />
//       <button onClick={() => focusInput()}>Focus & Write Dhiman</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useReducer } from "react";

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };

//     case "decrement":
//       return { ...state, count: state.count - 1 };

//     case "reset":
//       return { ...state, count: 0 };

//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       <h1>Count: {state.count}</h1>
//     </div>
//   );
// };

// export default App;

// import { UserProvider } from "./UserContext";
// import UpdateUser from "./components/UpdateUser";
// import UserProfile from "./components/UserProfile";

// import React from "react";

// const App = () => {
//   return (
//     <UserProvider>
//       <UserProfile />
//       <UpdateUser />
//     </UserProvider>
//   );
// };

// export default App;

// import { createContext } from "react";

// import React from "react";
// import ComponentA from "./components/ComponentA";

// export const Data = createContext();
// export const Data1 = createContext();

// const App = () => {
//   const name = "Dhiman by context-api";
//   const age = "21 years by context-api";
//   return (
//     <div>
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//           <ComponentA />
//         </Data1.Provider>
//       </Data.Provider>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import BasicEffect from "./components/BasicEffect";
// import CounterEffect from "./components/CounterEffect";

// const App = () => {
//   return (
//     <div>
//       <BasicEffect />
//       <CounterEffect />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await res.json();
//       if (data && data.length) {
//         setData(data);
//       }
//     }
//     getData();
//   }, []);
//   return (
//     <div>
//       <ul>
//         {data.map((todo) => (
//           <section id={todo.id}>
//             <li>{todo.title}</li>
//             <li>Body---{todo.body}</li>
//           </section>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// // We setup useEffect hook to run some code WHEN
// // Compponent renders for the first time
// // and whenever it re-renders
// // and some data in our component changed.

// import { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);
//   const [something, setSomething] = useState(0);

//   useEffect(() => {
//     if (value > 0) {
//       console.log("Call use effect");
//       document.title = `Increment ${value}`;
//     }
//   }, [value]);

//   return (
//     <div>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click Me</button>
//       <button onClick={() => setSomething(something + 1)}>Click Me</button>
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import { useState } from 'react'
// import CopyInput from './components/CopyInput';

// const App = () => {
//   const [counter,setCounter]=useState(0);

//   return (
//     <div>
//       <h1>Counter</h1>
//       <h2>{counter}</h2>
//       <button onClick={()=>setCounter(counter+1)}>+</button>
//       <button onClick={()=>setCounter(counter-1)}>-</button>
//       <CopyInput/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Switcher from './components/Switcher'

// const App = () => {
//   return (
//     <div>
//         <Switcher/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import CopyInput from './components/CopyInput'

// const App = () => {
//   return (
//     <div>
//         <CopyInput/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Counter from './components/Counter'
// import TodoList from './components/TodoList'
// import Profile from './components/Profile'
// import ShoopingList from './components/ShoopingList'

// const App = () => {
//   return (
// <section>
//     <Counter/>
//     <TodoList/>
//     <Profile/>
//     <ShoopingList/>
// </section>
// )
// }

// export default App

// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   const [count,setCount]=useState(0)
//   const handleClickInc=()=>{
//     setCount(count+1);
//   }
//   const handleClickDec=()=>{
//     setCount(count-1);
//   }

//   return (
//     <section>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleClickInc}>+</button>
//       <button onClick={handleClickDec}>-</button>
//     </section>
//   )
// }

// export default App

// import React from 'react'
// import ExampleOne from './components/ExampleOne'
// import ExampleTwo from './components/ExampleTwo'
// import ExampleThree from './components/ExampleThree'

// const App = () => {
//   return (
//     <section>
//         <ExampleOne/>
//         <ExampleTwo/>
//         <ExampleThree/>
//     </section>
//   )
// }

// export default App

// import React, {useState} from 'react'
// import ComponentOne from './components/ComponentOne';
// import ComponentTwo from './components/ComponentTwo';

// const App = () => {

//     const [count,setCount]=useState(0);

//   return (
//     <section>
//         <ComponentOne count={count} onClickHandler={()=>setCount(count+1)} />
//         <ComponentTwo count={count} onClickHandler={()=>setCount(count+1)}/>
//     </section>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const [movies,setMovies]=useState([
//         {id:1,title:'Spider Man',ratings:3},
//         {id:2,title:'Batman Returns',ratings:6}
//     ])

//     const handleChangeName=()=>{
//         setMovies(movies.map((m)=>(
//             m.id === 1 ? {...movies,title:"John Wick 5"} : m
//         )))
//     }

//   return (
//     <section>
//         {movies.map((f)=>(
//             <li key={Math.random()}>{f.title}</li>
//         ))}
//         <button onClick={handleChangeName}>Change Name</button>
//     </section>

//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const [movie,setMovie]=useState({
//         title:"Chhichhore",
//         rating:9.8,
//     })

//     const handleRatingChange=()=>{
//         // const copyMovie={...movie,rating:8}
//         // setMovie(copyMovie)

//         setMovie({...movie,rating:8})
//     }

//   return (
//     <section>
//         <h1>Title: {movie.title}</h1>
//         <h1>Rating: {movie.rating}</h1>
//         <button onClick={handleRatingChange}>Change Rating</button>
//     </section>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const [friends,setFriends]=useState(['Alex','John'])
//     const handleAddFriend=()=>{
//         setFriends([...friends,"Dhiman"])
//     }
//     const handleRemoveFriend=()=>{
//         setFriends(friends.filter((f)=>f!="John"))
//     }
//     const updateOneFriend=()=>{
//         setFriends(friends.map((f)=>(
//             f=="Alex"?"Alex Baena":f
//         )))
//     }
//   return (
//     <section>
//         {friends.map((f)=>(
//             <li key={Math.random()}>{f}</li>
//         ))}

//         <button onClick={handleAddFriend}>Add New Friend</button>
//         <button onClick={handleRemoveFriend}>Remove a Friend</button>
//         <button onClick={updateOneFriend}>Update one Friend</button>
//     </section>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const [count,setCount]=useState(0);
//     const increment=()=>setCount(count+1)
//     const decrement=()=>setCount(count-1)
//   return (
//     <section>
//         <h1>{count}</h1>
//         <button onClick={increment}>+</button>
//         <button onClick={decrement}>-</button>
//     </section>
//   )
// }

// export default App

// import React from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Button = () => {
//   const handleClick = () => console.log(Math.round(Math.random() * 10));
//   return <button onClick={handleClick}>Click</button>;
// };

// const Copy = () => {
//   const copyHandler = () => {
//     console.log("stop stealing my content");
//     toast.warn("Stop stealing my content");
//   };
//   return (
//     <>
//       <p onCopy={copyHandler}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem. Ut,
//         ab voluptas natus praesentium nisi veniam expedita exercitationem quae.
//       </p>
//       <ToastContainer position="top-center" />
//     </>
//   );
// };

// const Move = () => {
//     const moveHandler=()=>{
//         alert("Mouse move event fired")
//         console.log("Mouse moved here")
//     }
//   return (
//     <p onMouseMove={moveHandler}>
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sunt
//       unde repudiandae? Optio eum sed sequi quo harum consectetur commodi!
//     </p>
//   );
// };

// const App = () => {
//   return (
//     <section>
//       <Button />
//       <Copy />
//       <Move/>
//     </section>
//   );
// };

// export default App;

// import React from 'react'
// import './components/index.css'
// import { FaCartArrowDown } from 'react-icons/fa'

// const App = () => {
//   return <section>
//     <FaCartArrowDown/>
//   </section>
// }

// export default App

// import React from 'react'

// const App=()=>{
//   const styles={color:"white",backgroundColor:"teal",padding:"2rem"};
//   return (
//     <section>
//       <h1 style={styles}>Inline Style</h1>
//     </section>
//   )
// }

// const App = () => {
//   // return <section>
//   //   <h1 style={{color:"black", backgroundColor:"aqua", padding:"2rem"}}>Inline Style</h1>
//   // </section>

// }

// import React from 'react'
// import Weather from './components/Weather'
// import UserStatus from './components/UserStatus'
// import Greeting from './components/Greeting'

// const App = () => {
//       return (
//         <div>
//           <Weather temperature={40} />
//           <UserStatus loggedIn={true} isAdmin={false}/>
//           <Greeting timeOfDay={new Date()} />
//         </div>
//       )
// }

// export default App

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// import React from "react";

// const Password = ({ isValid }) => {
//   // if(isValid){
//   //   return <ValidPassword/>
//   // }
//   // return <InvalidPassword/>

//   return isValid ? <ValidPassword /> : <InvalidPassword />;
// };

// const Cart = () => {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"];

//   return (
//     <div>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

//       <ul>
//         <h3>Products</h3>
//         {items.map((item)=>(
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Password isValid={true} />
//       <Cart />
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import Person from './components/Person'
// import Product from './components/Product'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div>
//       <Person name="Dhiman" age={20} />
//       <Product name="Laptop" price={100}/>

//       <Card>
//         <h1>My Card 1</h1>
//         <p>This is some content for card1</p>
//       </Card>
//       <Card>
//         <h1>My Card 2</h1>
//         <p>This is some content for card2</p>
//       </Card>
//       <Card>
//         <h1>My Card 3</h1>
//         <p>This is some content for card3</p>
//       </Card>

//     </div>
//   )
// }

// export default App

// // import React from 'react'

// // const App = () => {
// //   return (

// //   <User name="Dhiman"
// //   age={22} isMarried={false} hobbies={['Reading', 'Football']}
// //   img="https://wallpapers.com/images/hd/cristiano-ronaldo-shoulder-shot-nnxwmwt8azejq8l3.jpg"

// //   />

// //   )
// // }

// // // const User=(props)=>{
// // //   console.log(props)
// // //   return <section>
// // //     <h1>{props.name}</h1>
// // //     <h1>{props.age}</h1>
// // //     <h1>{props.isMarried}</h1>
// // //     <h1>{props.hobbies}</h1>
// // //     <img src={props.img} alt={props.name} width={200}/>
// // //   </section>
// // // }

// // const User=({name,age,isMarried,hobbies,img})=>{
// //   return <section>
// //     <h1>{name}</h1>
// //     <h1>{age}</h1>
// //     <h1>{isMarried}</h1>
// //     <h1>{hobbies}</h1>
// //     <img src={img} alt={name} width={200}/>
// //   </section>
// // }

// // export default App

// // // // import MainContent from "./components/MainContent"
// // // // import Header from "./components/Header";
// // // // import Footer from "./components/Footer";

// // // import UserList from "./components/UserList";

// // // const App = () => {
// // //   // const numbers=[1,2,3,4,5];
// // //   // const usersInfo=[
// // //   //   {
// // //   //     username:"John",
// // //   //     email:"john@gmail.com",
// // //   //     location:"USA"
// // //   //   },
// // //   //   {
// // //   //     username:"James",
// // //   //     email:"james@gmail.com",
// // //   //     location:"Canada"
// // //   //   },
// // //   //   {
// // //   //     username:"Seth",
// // //   //     email:"seth@gmail.com",
// // //   //     location:"UK"
// // //   //   },

// // //   // ]

// // //   // {/* {numbers.map((number)=>(
// // //   //       <ul key={Math.random()}>
// // //   //         <li>{number}</li>
// // //   //       </ul>
// // //   //     ))} */}

// // //   return (
// // //       <UserList/>
// // //       // {/* <Header/>
// // //       // <MainContent/>
// // //       // <Footer/> */}

// // //       // {/* {usersInfo.map((user)=>(
// // //       //   <ul key={Math.random()}>
// // //       //     <li>{user.username}</li>
// // //       //     <li>{user.email}</li>
// // //       //     <li>{user.location}</li>
// // //       //   </ul>
// // //       // ))} */}

// // //       // {/* Destructuring the above code */}

// // //       // {/* {usersInfo.map(({username,email,location})=>(
// // //       //   <ul key={Math.random()}>
// // //       //     <li>{username}</li>
// // //       //     <li>{email}</li>
// // //       //     <li>{location}</li>
// // //       //   </ul>
// // //       // ))} */}

// // //   );
// // // };

// // // export default App;
