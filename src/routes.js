//  Routes Component

import Home from "./routerViews/Home";
import Content from "./routerViews/Content";
import About from "./routerViews/About";
import ShowBlogs from "./routerViews/ShowBlogs";
import ReadSingleBlog from "./routerViews/ReadSingleBlog";
import MainComponent from "./vuexExample/MainComponent";
export default [
  { path: "/", component: Home },
  { path: "/content", component: Content },
  { path: "/about", component: About },
  { path: "/showBlogs", component: ShowBlogs },
  { path: "/showBlogs/:id", component: ReadSingleBlog },
  { path: "/storeActions", component: MainComponent }
];
