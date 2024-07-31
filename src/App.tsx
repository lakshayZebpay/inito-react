import { useState } from "react";
import "./App.css";
import Content from "./components/content";
import Header from "./components/header";
import Footer from "./components/footer";
import useIsMobileScreen from "./hooks/userIsMobileScreen";

function App() {
  const isMobile = useIsMobileScreen().isMobileScreen;
  return (
    <div>
      <Header isMobile={isMobile} />
      <Content isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default App;
