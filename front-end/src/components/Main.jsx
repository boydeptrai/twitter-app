import React from "react";
import Form from "./Form";
import PostList from "./PostList";
import Header from "./Header";

export default function Main() {
  return (
    <div className="container">
     <Header />
      <div>
        <Form />
        <PostList />
      </div>
    </div>
  );
}
