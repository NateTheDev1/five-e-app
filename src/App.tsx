import { Suspense } from "react";
import BaseSchema from "./components/BaseSchema";
import Loading from "./components/Loading";
import Router from "./Router";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BaseSchema />
      <Router />
    </Suspense>
  );
};

export default App;
