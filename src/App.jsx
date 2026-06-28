import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import LearningHub from "./pages/LearningHub";
import Contact from "./pages/Contact";
import RootLayout from "./layout/RootLayout";

const App = () => {

  // ROUTES
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="learninghub" element={<LearningHub />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
