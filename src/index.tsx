import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ErrorBoundary, init } from "@sentry/react";

function App() {
  return <button onClick={methodDoesNotExist}>Break the world</button>;
}

const Error = () => {
  return <div>Error</div>;
};

init({
  dsn:
    "https://a69543e995d4435d9a37ee665bf33525@o1297308.ingest.sentry.io/6526248"
});

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
