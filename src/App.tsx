import React from "react";
import { Provider } from "./components/ui/provider";
import Navbar from "./components/navbar";
import { Flex } from "@chakra-ui/react";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Provider>
      <Flex direction="column">
        <Navbar />
        <Homepage />
        <Aboutpage />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Flex>
    </Provider>
  );
}

export default App;
