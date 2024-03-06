import{useState} from 'react';


//자식컴포넌트2 카운트
const Counter =() =>{
    const [count, setCount]  = useState(0);
  
    return(
      <div>
    <h1>{count}</h1>
      <button onClick={()=>{
      setCount(count + 1);
     }}>
      +
    </button>
  </div>
  );
   };

   export default Counter;