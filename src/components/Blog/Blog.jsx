import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {
    cover_image,
    author_img,
    author_name,
    reading_time,
    title,
    hashtags,
    posted_date,
  } = blog;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    handleAddBookmark(blog);
  };

  return (
    <div className="py-5">
      {/* Cover Image */}
      <img
        className="rounded-xl w-full"
        src={cover_image}
        alt="Cover picture"
      />

      {/* Author Information */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 mt-4 mb-4">
          <img
            className="w-15 h-15 rounded-full"
            src={author_img}
            alt="Author Image"
          />

          <div>
            <h2 className="text-2xl font-bold">{author_name}</h2>
            <h3 className="text-gray-400">{posted_date}</h3>
          </div>
        </div>

        {/* Reading Time + Bookmark */}
        <div className="flex items-center gap-2">
          <span>{reading_time} min read</span>

          <button
            onClick={handleBookmark}
            className={`cursor-pointer ${
              isBookmarked ? "text-red-500" : "text-black"
            }`}
          >
            <CiBookmark size={25} />
          </button>
        </div>
      </div>

      {/* Blog Information */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        {/* Hashtags */}
        <p>
          {hashtags.map((hashtag, index) => (
            <span key={index} className="mr-2">
              {hashtag}
            </span>
          ))}
        </p>

        {/* Mark as Read */}
        <p>
          <button
            onClick={() => handleMarkAsRead(reading_time)}
            className="cursor-pointer text-green-600 underline"
          >
            Mark as read
          </button>
        </p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
