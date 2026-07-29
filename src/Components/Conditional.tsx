import { useState } from "react";

function Conditional() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleLogin = () => {
    if (!isLogin){
        setLoading(true);

        setTimeout(() => {
        setLoading(false);
        setIsLogin(true);
        }, 2000);
    }else{
        setIsLogin(false);
    }
  };

  return (
    <div>
        {loading ? (
        <h2>Loading...</h2>
      ) : isLogin ? (
        <h2>Dashboard</h2>
      ) : (
        <h2>Silakan Login</h2>
      )}
      {isLogin && !loading && (
      <p>Selamat datang di Dashboard 🎉</p>)}

      <button onClick={handleLogin}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Conditional;