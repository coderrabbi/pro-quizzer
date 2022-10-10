import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Statistics from "./components/Statistics/Statistics";
import TopicDetails from "./components/TopicDetails/TopicDetails";
import Topics from "./components/Topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/home",
          loader: async () =>
            fetch(" https://openapi.programming-hero.com/api/quiz"),
          element: <Home />,
        },
        {
          path: "/topics",
          loader: async () =>
            fetch(" https://openapi.programming-hero.com/api/quiz"),
          element: <Topics />,
        },
        {
          path: "/topicdetails/:topicId",
          loader: async ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            ),
          element: <TopicDetails />,
        },
        { path: "/statistics", element: <Statistics /> },
        { path: "/blog", element: <Blog /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
