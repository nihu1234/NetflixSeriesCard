import "./EV.css";
export const Eventhandling = () => {
  const handleButtonClick = (event) => {
   console.log(event);
    console.log(event.target);

    
    
    alert("Hey I am onClick Event");
  };
  const handlewelcomeUser = (user) =>{
        console.log(`Hey ${user}, Welcome`);
        

    };
//Function component with named functions;
  return (
    <>
    <button onClick={handleButtonClick}>Click Me</button>

    <br />
    {/*Fat arrow function*/}
    <button onClick = {(event) => handleButtonClick(event) }>click Me 2</button>
    <br />
    {/*inline function handlers*/}
    <button onClick ={(event) => console.log(event)}>Inline Function</button>
    <br/>
    {/*inline  arrow function*/}
    <button onClick = {() => alert("Hey i am inline event function")}> Inline Arr function</button>
    <br/>
    {/* Passing arguments in inline function */}
    {/*<button onClick = {handlewelcomeUser}>click Me</button>*/}
     <button onClick = {() => handlewelcomeUser("vindo")}>click Me</button>
    </>
    
  );
};
