import { Suspense } from "react";
import { Fighter } from "./api/Classes/Fighter";
import BaseSchema from "./components/BaseSchema";
import Loading from "./components/Loading";
import ErrorBoundary from "./ErrorBoundary";
import Router from "./Router";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <BaseSchema />
        <Router />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
