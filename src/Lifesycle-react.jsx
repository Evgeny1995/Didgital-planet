import { useEffect, useRef, useState } from "react";
import "./App.css";
import { GlobeLayout } from "./components/molecules/globeLayout/globeLayout";
import MainBlock from "./components/templates/mainBlock";

function App() {
  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  const [state, setState] = useState();

  const inputRef = useRef(null);

  // ... Common logic before render

  // 1.
  useEffect(() => {
    // componentDidMount
    // Запросы на сервер (первичные для отрисовки интерфейсов) => setState(...data)

    return () => {
      // componentWillUnmount
    };
  }, []);

  // 2.
  useEffect(() => {
    // componentDidMount
    // componentDidUpdate (props and state were changed)

    return () => {
      // componentWillUnmount
    };
  });

  // 3.
  useEffect(() => {
    // componentDidMount
    // componentWillUpdate (state)

    return () => {
      // componentWillUnmount
    };
  }, [state]);

  return (
    <GlobeLayout ref={inputRef}>
      <MainBlock />
    </GlobeLayout>
  );
}

export default App;
