
import "./Main.css";

const Main =() =>{

    const user ={
        name:"ginny",
        isLogin:true,
    };

    if(user.isLogin){ 
    return <div className="logout">logout</div>;
    }else{
        return <div>login</div>;
    }
  };
  
  export default Main;