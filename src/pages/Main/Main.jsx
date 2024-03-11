import { Routes, Route } from "react-router-dom";

import Home from "../../routes/Home";
import About from "../../routes/About";
import Team from "../../routes/Team";
import Process from "../../routes/Process";
import Blog from "../../routes/Blog";
import Category from "../../routes/Category";
import Post from "../../routes/Post";
import Contact from "../../routes/Contact";
import NotFound from "../../routes/NotFound";

import "./main.scss";

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="team" element={<Team />}></Route>
        <Route path="process" element={<Process />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="blog/:categoryId" element={<Category />}></Route>
        <Route path="blog/:categoryId/:postId" element={<Post />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
