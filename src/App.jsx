import './App.css'
import Register from "./components/Register";

//리액트에서 리렌더링 되는 세가지 상황
//1. 자신이 관리하는 state값이 변경되었을때
//2.자신이 제공받는 props의 값이 변경되었을때
//3.자신의 부모 컴포넌트가 리렌더링 될 때


//최상위 부모컴포넌트App
function App() {

  return (
    <>
    <Register />
 
     
    </>
  );
}

export default App
