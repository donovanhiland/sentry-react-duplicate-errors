import "./styles.css";
import { ErrorBoundary } from "@sentry/react";
import React from "react";

export default function App() {
  return <button onClick={methodDoesNotExist}>Break the world</button>;
}
