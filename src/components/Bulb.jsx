import{useState} from "react";



//자식컴포넌트조명
//state를 props로 넘기는 법 
const Bulb=()=>{
    //값,함수
   //리액트는 일바변수가 리렌덩이 되지않음, 그래서 가변적인 값을 만들 때state를 사용해야함
     const [light, setLight]  = useState("OFF"); 
     return(
       <div>{light=="ON" ?(
         <h1 style={ {backgroundColor : "orange"}}>ON</h1>
       ) : (
       <h1 style={ {backgroundColor : "gray"}}>OFF</h1>
       )}
   
       <button onClick={()=>{
             setLight(light === 'ON'? "OFF":"ON");
   
           }}
           >
             {light === "ON"? "끔":"켬"}
           </button>
       </div>
     );
   
   };

   export default Bulb;
   