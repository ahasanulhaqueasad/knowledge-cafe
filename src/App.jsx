import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (reading_time) => {
    setReadingTime((previousTime) => previousTime + reading_time);
  };

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="md:flex gap-4">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </div>
  );
}

export default App;
