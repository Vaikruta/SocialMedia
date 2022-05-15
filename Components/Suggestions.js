import faker from "@faker-js/faker";
import { useEffect, useState } from "react";

const Suggestions = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setProfiles(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">People You may Know</h3>
        <button className=" text-gray-600 font-semibold">Check All</button>
      </div>
      {profiles.map((person) => (
        <div key={person.id} className="flex items-center justify-between mt-3">
          <img
            src={person.avatar}
            alt=""
            className="rounded-full w-10 h-10 border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{person.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {person.company.name}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
