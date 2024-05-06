import { Routes, Route } from "react-router-dom";

import Home from "@/routes/Home/Home";
import About from "@/routes/About/About";
import Team from "@/routes/Team/Team";
import Process from "@/routes/Process/Process";
import Blog from "@/routes/Blog/Blog";
import Category from "@/routes/Category/Category";
import Post from "@/routes/Post/Post";
import Contact from "@/routes/Contact/Contact";
import NotFound from "@/routes/NotFound/NotFound";

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
