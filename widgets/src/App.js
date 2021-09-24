import React from "react";
// import Accordion from "./components/Accordion";
// import Count from "./components/Count";
// import Search from "./components/Search";
import Translator from "./components/Translator";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

// const options = [
//   {
//     label: 'the color red',
//     value: 'red'
//   },
//   {
//     label: 'the color green',
//     value: 'green'
//   },
//   {
//     label: 'the color blue',
//     value: 'blue'
//   }
// ]

const App = () => {
  

  return (
    <div>
        
      <Translator />
      {/* <Search /> */}
      {/* <Count count={count} onClick={countButtonHandler} onBackButtonClick={backButtonHandler}/> */}
    </div>
  );
};
export default App;
