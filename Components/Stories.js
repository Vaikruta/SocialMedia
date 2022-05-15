import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const { data: session } = useSession();

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestion);
  }, []);

  return (
    <div className=" flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll sm:scrollbar-thin scrollbar-thumb-slate-800">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
