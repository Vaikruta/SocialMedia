import Post from "./Post";
import Image from "next/image";

const Items = [
  {
    id: "1",
    username: "sanju",
    userImg:
      "https://images.unsplash.com/photo-1573556232974-9a2c5f9c78e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    img: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    caption: "Hello",
  },
  {
    id: "2",
    username: "sanju",
    userImg:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    img: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    caption: "Hello",
  },
];

const Posts = () => {
  return (
    <div>
      <div>
        {Items.map((item) => (
          <Post
            key={item.id}
            id={item.id}
            username={item.username}
            userImg={item.userImg}
            img={item.img}
            caption={item.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
