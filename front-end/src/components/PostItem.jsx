import React from "react";
import '../css/Post.css';

export default function PostItem() {
  return (
    <div className="post-item">
      <p className="post-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis iste
        amet ad accusantium? Dolorum ad ab quidem libero voluptatum quam quaerat
        necessitatibus, commodi ipsum debitis qui distinctio id dolore autem.
      </p>
      <div className="post-footer">
        <div className="post-infors">
          <span>by TuanTran</span>
          <span>Date: 2/4/2023</span>
        </div>
        <div className="post-edit-delete">
          <span>Edit</span>
          <span>Delete</span>
          <span className="delete-question">Are you sure ?</span>
          <span>Yes</span>
          <span>No</span>
        </div>
      </div>
      <div className="post-edit-form">
        <form className="edit-form">
          <textarea
            type="text"
            name="content"
            id="content"
            className="content"
            placeholder="What's happend?"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            omnis? Magnam tempora eveniet consequatur ratione, explicabo tempore
            praesentium sint voluptatem possimus, facilis dolorum non quisquam
            dolor impedit quas atque eaque?
          </textarea>
          <div className="btn-container">
            <button className="btn" type="button">
              Update
            </button>
            <button className="btn" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
