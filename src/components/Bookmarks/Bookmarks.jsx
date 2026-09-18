import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 rounded-xl space-y-2 mt-12">
      {/* Reading Time */}
      <h2 className="text-2xl px-4 py-3 bg-purple-200 border rounded-xl">
        Spent time on read: {readingTime} min
      </h2>

      {/* Bookmarked Blogs */}
      <div className="bg-slate-200 rounded-xl py-2">
        <h2 className="text-2xl px-4 pt-3">
          Bookmarked Blogs: {bookmarks.length}
        </h2>

        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
