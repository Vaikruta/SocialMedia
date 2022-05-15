import { BsCamera2 } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../Atoms/ModalAtom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  console.log(session);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className=" flex justify-between max-w-6xl mx-5 lg:mx-auto  ">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="inline-grid lg:hidden cursor-pointer mt-2 "
        >
          <BsCamera2 size={50} />
        </div>
        <div className="hidden lg:inline-grid flex-shrink-0 mt-4">
          <h2 onClick={() => router.push("/")} className="font-sans text-2xl">
            Picshare
          </h2>
        </div>

        {/* middle-search-input-field */}
        <div className=" max-w-xs">
          <div className="mt-1 relative p-3  rounded-md  ">
            <div className=" absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <BsSearch size={15} className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <AiFillHome
            onClick={() => router.push("/")}
            className="navBtn"
            size={25}
          />
          <AiOutlineMenu
            size={25}
            className="cursor-pointer sm:hidden"
            onClick={handleMenu}
          />
          {session ? (
            <>
              <div className="relative navBtn">
                <BiPaperPlane className="navBtn rotate-45" size={25} />
                <div className="absolute -top-2 -right-1 text-xs bg-red-500 rounded-full flex items-center h-5 w-5 justify-center animate-pulse text-gray-200 ">
                  3
                </div>
              </div>
              <AiOutlinePlusCircle
                onClick={() => setOpen(true)}
                className="navBtn"
                size={25}
              />
              <HiUserGroup className="navBtn" size={25} />
              <AiOutlineHeart className="navBtn" size={25} />
              <img
                src={session.user.image}
                alt=""
                className="h-10 rounded-full cursor-pointer"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}

          {/* Mobile */}
          {/* <div className={menu ? "block" : "hidden"}> */}
          <div className={menu ? "relative" : "hidden"}>
            <div className=" absolute flex flex-col space-y-6 right-[70px] top-10">
              <div className="relative   ">
                <BiPaperPlane className=" rotate-45" size={25} />
                <div className="absolute -top-2 -right-1 text-xs bg-red-500 rounded-full flex items-center h-5 w-5 justify-center animate-pulse text-gray-200 ">
                  3
                </div>
              </div>

              <AiOutlinePlusCircle className=" " size={25} />

              <HiUserGroup className=" " size={25} />

              <AiOutlineHeart className=" " size={25} />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
