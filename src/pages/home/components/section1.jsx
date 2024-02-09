import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



// export const FirstSectionComponent = () => {

//     const [age, setAge] = useState("18")

//     const changeAge = () => {

//         setAge("19")
//     }

//     return (
//         <>

//             <h1 className="text-red-400"> Hello {age}</h1>
//             <button onClick={changeAge} className='bg-red-300 p-3 rounded-full  outline  '>Change Your age</button>

//         </>

//     );
// };

// export const FirstSectionComponent = () => {
//     const [switcher, setSwitcher] = useState(true)

//     return (
//         <>
//             <h1 className={`text-center ${switcher ? "text-red-500" : "text-blue-800"}`}>
//                 Hello world in {switcher ? <span>Red</span> : <span>Blue</span>} </h1>

//         </>
//     );


// };




// export const FirstSectionComponent = () => {

//     const [switcher, setSwitcher] = useState("active")


//     return (
//         <>
//             <h1 className={`text-center ${switcher == "active" ? "text-red-500" : "text-blue-800"}`}
// >Hello world in {switcher == "active" ? <span>  Red  </span> : <span> Blue</span>} </h1 >

//         </>
//     );
// };




// export const FirstSectionComponent = () => {

//     const [myFirstVariable, setMyFirstVariable] = useState("meryem");

//     const [myInput, setMyInput] = useState("");

//     const changing = () => {
//         setMyFirstVariable(myInput)
//         setMyInput("")
//     }


//     return (
//         <>

//             <h1>my name is  {myFirstVariable}</h1>

//             <input onChange={(e) => { setMyInput(e.target.value) }} value={myInput} className='outline-double  bg-orange-400 w-75 h-50' type="text" />

//             <button  className ="bg-orange-500 border-4" onClick={changing} >Click</button>

//         </>
//     );
// };



/*array */


// export const FirstSectionComponent = () => {

//     const [myArray, setMyArray] = useState(["mehdi", "achraf", "oussama"])



//     return (
//         <>

//             <h1>This is  my array</h1>


//             {
//                 myArray.map((element, index) =>
//                     <>
//                         <h3 value={index}>Hello {element}</h3>
//                     </>
//                 )
//             }

//         </>
//     );
// };


// import myLogo from "../../../assets/img/logo.jpg";
// import webleekLogo from "../../../assets/img/vector.jpg"


// export const FirstSectionComponent = () => {

//     const [productName, setProductName] = useState("")
//     const [productPrice, setProductPrice] = useState(0)



//     const [myProduct, setMyProduct] = useState([
//         {
//             title: "pc portable",
//             price: 300,
//             image: myLogo
//         },
//         {
//             title: "pc Post",
//             price: 400,
//             image: webleekLogo
//         },
//         {
//             title: "Phone ",
//             price: 200,
//             image: myLogo
//         },
//         {
//             title: "Tablet",
//             price: 250,
//             image: myLogo
//         },
//         {
//             title: "chi7aja",
//             price: <del>250</del>,
//             image: webleekLogo
//         },





//     ])


//     const addProduct = () => {

//         let newProduct = {
//             title: productName,
//             price: productPrice,
//             image: myLogo
//         }

//         let newTab = [...myProduct]
//         newTab.push(newProduct)
//         setMyProduct(newTab)





//         setProductName("")
//         setProductPrice("")

//     }

//     const changePrice = (index) => {
//         let newPrice = parseInt(prompt("What is the new price "))

//         let newTab = [...myProduct]
//             newTab[index].price = newPrice
//         setMyProduct(newTab)

//     }



//     return (
//         <>
//             <div className="flex items-center justify-around bg-gray-500">

//                 <input onChange={(e) => setProductName(e.target.value)} value={productName} placeholder='Add new product' className='w-25 py-2' type="text" />
//                 <input onChange={(e) => setProductPrice(e.target.value)} value={productPrice} placeholder=' Add price' className='w-25 py-2' type="number" />
//                 <button onClick={addProduct} className='px-5 py-2 rounded-full bg-red-400'>Add</button>

//             </div>

//             <div className="bg-dark h-[100vh] flex gap-4 flex-wrap">


//                 {
//                     myProduct.map((element, index) =>
//                         <div key={index} className="w-[23%] h-[40vh] bg-white">
//                             <div className="h-75 bg-red-500 flex items-center justify-center overflow-hidden  outline outline-black">
//                                 <img width={200} src={element.image} alt="" />

//                             </div>
//                             <div className=" flex items-center justify-around h-25">
//                                 <h3>{element.title}</h3>
//                                 <p>{element.price}</p>
//                                 <button onClick={()=>{ changePrice(index) }}>Change Price</button>
//                             </div>
//                         </div>
//                     )


//                 }
//             </div> 
//         </>

//     );

// };


// export function FirstSectionComponent() {
//     const [todos, setTodos] = useState([])
//     const [inputValue, setInputValue] = useState('')

//     function Change(e) {
//         setInputValue(e.target.value)
//     }




//     function Submit(e) {
//         e.preventDefault('')
//         setTodos([...todos, inputValue])
//         setInputValue('')
//     }

//     function Delete(index) {
//         let newTodos = [...todos]
//         newTodos.splice(index, 1)
//         setTodos(newTodos)
//     }
//     return (
//         <>
//             <div className="flex justify-center items-center flex-column border-4 h-75 bg-slate-300 ">
//                 <h1 className="text-black-400 p-2 m-3 "><i>To do List</i></h1>
//                 <form>
//                     <input type='text' value={inputValue} onChange={Change} />
//                     <button onClick={Submit} className='px-5 py-1 m-3 rounded-full bg-orange-700' >Add Todo</button>
//                 </form>
//                 <ul>
//                     {todos.map((todo, index) => (
//                         <li key={index}>{todo}
//                             <button onClick={() => Delete(index)} className='px-5 py-1 m-3 rounded-full bg-orange-700'>Delete</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     )
// }

// import { FaCheckCircle, FaPen, FaRegSave, FaTrash } from "react-icons/fa";
// import { GrPowerReset } from "react-icons/gr";

// export const FirstSectionComponent = () => {

//     const [myInput, setMyInput] = useState("")


//     const [myTasksArray, setMyTasksArray] = useState([])


//     // * add task
//     const addTask = () => {

//         if (myInput != "") {

//             let myTask = {
//                 taskName: myInput, 
//                 done: false
//             }

//             let newTab = [...myTasksArray]


//             newTab.push(myTask)
            
//             setMyTasksArray(newTab)
//             setMyInput("")
//         }

//     }

//     // * check task

//     const checkTask = (task) => {
//         let newTab = [...myTasksArray]

//         newTab[task].done == false ? newTab[task].done = true : newTab[task].done = false;

//         // if (newTab[task].done == false) {
//         //     newTab[task].done = true
//         // } else {
//         //     newTab[task].done = false

//         // }

//         setMyTasksArray(newTab)
//     }

//     //* edit task
//     const editTask = (task) => {

//         let myNewTask = prompt("Insert the new task")

//         let newTab = [...myTasksArray]

//         newTab[task].taskName = myNewTask

//         setMyTasksArray(newTab)

//     }

//     //* delete task

//     const removeTask = (task) => {

//         let newTab = [...myTasksArray]

//         newTab.splice(task, 1)

//         setMyTasksArray(newTab)



//     }




//     return (
//         <>

//             <div className="bg-gradient-to-r from-purple-800 to-blue-300 h-screen flex items-center justify-around flex-col">


//                 <div className=" w-[60%] h-[20vh] flex  items-center justify-evenly">
//                     <input onChange={(e) => { setMyInput(e.target.value) }} value={myInput} placeholder='Add Task Here' className='w-[50%] py-3 px-3 outline rounded-full' type="text" />
//                     <button onClick={addTask} className='bg-red-500 px-4 py-2 rounded-full'>Add Task</button>
//                 </div>
//                 <div className="w-[60%] h-[70vh] outline overflow-y-auto">


//                     {

//                         myTasksArray.map((element, index) =>

//                             <div className={`h-[10vh] outline flex ${element.done ? "bg-green-300" : ""}`}>
//                                 <div className="w-[75%] flex items-center h-100">
//                                     <input value={element.taskName} type="text" className="w-100 py-3 px-3 fw-bold bg-transparent " readOnly />
//                                 </div>
//                                 <div className="w-[25%]  h-100 text-xl flex items-center justify-evenly">
//                                     {
//                                         element.done ?
//                                             <GrPowerReset onClick={() => checkTask(index)} />
//                                             :
//                                             <FaCheckCircle onClick={() => checkTask(index)} />
//                                     }


//                                     <FaPen onClick={() => editTask(index)} />

//                                     <FaTrash onClick={() => removeTask(index)} />
//                                 </div>
//                             </div>
//                         )

//                     }



//                 </div>

//             </div>





//         </>
//     );
// };


// import React from 'react';




// export const FirstSectionComponent = () => {
//     let navigate = useNavigate()

//     return (
//         <>
//             <div className="flex justify-center align-items-center p-5">
//                 <div className=" flex  bg-black w-[30%] h-[75vh]  ">
//                     <div className="flex justify-around items-center w-[100%] h-[40vh] flex-col  m-5 ">
//                         <input className="rounded-end-5" type="text" placeholder="User Name" />
//                         <input className="rounded-end-5" type="text" placeholder="User Prenom" />
//                         <input className="rounded-end-5" type="text" placeholder="User password" />
//                         <div className="flex  w-[20] gap-4">
//                             <button onClick={() => { navigate("/contact") }} className="bg-red-300 rounded-full flex">Sign In </button>
//                             <button className="bg-red-300 rounded-full ">Login In</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>





//         </>
//     );
// };








//     return (
//         <>
//             <h1>My favorite color is {color}!</h1>
//             <div className="bg-red-100 gap-4 flex items-center">
//                 <button
//                     type="button"
//                     onClick={() => setColor("blue")}  >Blue</button>
//                 <button
//                     type="button"
//                     onClick={() => setColor("red")}
//                 >Red</button>
//                 <button
//                     type="button"
//                     onClick={() => setColor("pink")}
//                 >Pink</button>
//                 <button
//                     type="button"
//                     onClick={() => setColor("green")}
//                 >Green</button>

//             </div>
//         </>
//     );
// };


























// const [count, setCount] = useState(0);
// const [calculation, setCalculation] = useState(0);

// useEffect(() => {
//     setCalculation(() => count * 2);
// }, [count]); // <- add the count variable here

// return (
//     <>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount((c) => c + 1)}>+</button>
//         <p>Calculation: {calculation}</p>
//     </>
// );


// const [count, setCount] = useState(0);

// useEffect(() => {

//     setTimeout(() => {

//         setCount((count) => count + 1);
//     }, 1000);
// });

// return (
//     <>
//         <h1>I have rendered {count} times!</h1>
//     </>
// )

// const [count, setCount] = useState(0);
// const [calculation, setCalculation] = useState(0);

// useEffect(() => {
//     setCalculation(() => count * 2);
// }, [count]);

// return (
//     <>
//         <div className="flex justify-center items-center flex-col w-[100%] h-[70vh] bg-gray-300">
//             <p>Count: {count}</p>
//             <button className="rounded-full  bg-red-500 rounded-end" onClick={() => setCount((M) => M + 1)}>+</button>
//             <p>Calculation: {calculation}</p>

//             <p>Count: {count}</p>
//             <button onClick={() => setCount((M) => M - 1)}>-</button>
//             <p>Calculation: {calculation}</p>

//         </div>

//     </>
// );

// }
// };

// import mylogo from "../../../assets/img/logo.jpg"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// export const FirstSectionComponent = () => {
//     return (
//         <div className="flex items-center h-[75vh]  justify-center gap-4  bg-red-100">
//             <div>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="mylogo" src="{element.img}" />
//                     <Card.Body>
//                         <Card.Title>Batman</Card.Title>
//                         <Card.Title>1959</Card.Title>

//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the
//                             bulk of the card's content.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>

//             </div>
//         </div>);
// }

// import myLogo from "../../../assets/image/Amazing Spider-Man.jpg";
// import webleekLogo from "../../../assets/image/Spider-Man No Way Home.jpg"
// import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";



// export const FirstSectionComponent = () => {

//     const [productName, setProductName] = useState("")
//     const [productPrice, setProductPrice] = useState(0)



//     const [myProduct, setMyProduct] = useState([
//         {
//             title: "Spider-Man",
//             date: 1995,
//             image: myLogo
//         },
//         {
//             title: "pc Post",
//             date: 1965,
//             image: webleekLogo
//         },
//         {
//             title: "Phone ",
//             date: 2000,
//             image: myLogo
//         },
//         {
//             title: "Tablet",
//             date: 1595,
//             image: myLogo
//         },
//         {
//             title: "chi7aja",
//             date: <del>1985</del>,
//             image: webleekLogo
//         },



//     ])


//     const addProduct = () => {

//         let newProduct = {
//             title: productName,
//             price: productPrice,
//             image: myLogo
//         }

//         let newTab = [...myProduct]
//         newTab.push(newProduct)
//         setMyProduct(newTab)





//         setProductName("")
//         setProductPrice("")

//     }

//     const changePrice = (index) => {
//         let newPrice = parseInt(prompt("What is the new price "))

//         let newTab = [...myProduct]
//         newTab[index].price = newPrice
//         setMyProduct(newTab)

//     }



//     return (
//         <>
//             {/* <div className="flex items-center justify-around bg-gray-500">

//                 <input onChange={(e) => setProductName(e.target.value)} value={productName} placeholder='Add new product' className='w-25 py-2' type="text" />
//                 <input onChange={(e) => setProductPrice(e.target.value)} value={productPrice} placeholder=' Add price' className='w-25 py-2' type="number" />
//                 <button onClick={addProduct} className='px-5 py-2 rounded-full bg-red-400'>Add</button>

//             </div> */}
//             <nav className="flex items-center ">
//                 <h1>Movies</h1>
//                 <input type="text" placeholder="inser your " />
//             </nav>

//             <div className="bg-dark h-[100vh] flex gap-4 flex-wrap">


//                 {
//                     myProduct.map((element, index) =>
//                         <div key={index} className="w-[23%] h-[50vh]  bg-white">
//                             <div className="h-75 bg-red-200 flex items-center justify-center overflow-hidden focus:outline-red-400 outline outline-black">
//                                 <img width={200} src={element.image} alt="" />

//                             </div>
//                             <div className=" flex items-center justify-center flex-col  h-25">
//                                 <h3>{element.title}</h3>
//                                 <p>{element.date}</p>
//                                 {/* <button onClick={() => { changePrice(index) }}>Change Price</button> */}
//                             </div>
//                         </div>
//                     )


//                 }
//             </div>
//         </>

//     );

// };

