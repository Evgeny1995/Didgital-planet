import "./App.css";
import { GlobeLayout } from "./components/molecules/globeLayout/globeLayout";
import MainBlock from "./components/templates/mainBlock";
import { Provider } from "react-redux";
import store from "@/store/index.js";
import { Router, Routes } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Routes>
    <GlobeLayout>
      <Provider store={store}>
        <MainBlock />
      </Provider>
    </GlobeLayout>
    // </Routes>
    // </Router>
  );
}

export default App;
