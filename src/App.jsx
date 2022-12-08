import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useStateValue } from "./providers/StateProvider";
import { auth } from "./firebase";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
