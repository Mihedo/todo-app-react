import React from "react";
import TodoApp from "./TodoApp";

function App() {
  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };
  
  return (
    <div>
      <TodoApp />
    </div>
  );
}

export default App;
