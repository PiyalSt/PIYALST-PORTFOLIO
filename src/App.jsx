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
import LearningList from "./pages/LearningList";
import ReactPage from "./learn-pages/ReactPage";

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
        <Route path="learning-list" element={<LearningList />} />
        <Route path="react" element={<ReactPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
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
