import  {  useRoutes } from "react-router-dom";

import AlllPosts from './components/AlllPosts';
import Posts from './components/Post';




function App() {
  let routes = useRoutes([
    { path: "/", element: <AlllPosts /> },
    { path: "Posts", element: <Posts /> },
    // ...
  ]);
  
  return routes;
}

export default App;
