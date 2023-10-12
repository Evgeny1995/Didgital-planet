import "./App.css";
import { GlobeLayout } from "./components/molecules/globeLayout/globeLayout";
import MainBlock from "./components/templates/mainBlock";
import { Provider } from "react-redux";
import store from "@/store/index.js";
import Portal from "@/components/molecules/portal/portal.jsx";
import Modal from "@/components/molecules/modal/modal.jsx";

function App() {
  return (
    <Provider store={store}>
      <GlobeLayout>
        <MainBlock />
      </GlobeLayout>
      <Portal>
        <Modal />
      </Portal>
    </Provider>
  );
}

export default App;
