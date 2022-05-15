import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        alt=""
        className="rounded-full border p-[2px] w-20 h-20"
      />
      <div className="flex-1 mx-4">
        <h1 className="font-bold"> {session?.user?.username}</h1>
        <h2 className="text-sm text-gray-400">Welcome to PicShare</h2>
      </div>
      <button onClick={signOut} className="text-violet-600">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
