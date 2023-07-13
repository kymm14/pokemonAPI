import "./App.scss";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
