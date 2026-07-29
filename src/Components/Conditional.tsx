import { useState } from "react";

function Conditional() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <button onClick={handleLogin}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Conditional;