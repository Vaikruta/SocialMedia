import { BiDotsHorizontalRounded, BiPaperPlane } from "react-icons/bi";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChatDots, BsBookmarkStar } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";

const Post = ({ username, id, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5 ">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <BiDotsHorizontalRounded className="h-5" />
      </div>
      {/* img */}
      <img src={img} className="object-cover" />
      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <AiOutlineHeart className="btn" size={25} />
          <BsChatDots className="btn" size={25} />
          <BiPaperPlane className="btn" size={25} />
        </div>
        <BsBookmarkStar size={25} />
      </div>
      {/* captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
      </p>

      {/* comments */}
      <form className="flex items-center p-4 space-x-2">
        <RiEmotionHappyLine className="h-7" size={30} />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a Comment"
        />
        <button className="text-xl text-blue-500 font-semibold">Post</button>
      </form>
      {/* inputbox */}
    </div>
  );
};

export default Post;
