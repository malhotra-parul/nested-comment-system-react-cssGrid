import React, { useState } from "react";

const Comment = ({ comment }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [reply, setReply] = useState("");
  const [child, setChild] = useState(comment.children);
  const [edit, setEdit] = useState(false);

  const nestedComments = (child || []).map((comment) => (
    <Comment comment={comment} key={comment.id} />
  ));

  const toggleChildren = () => {
    setShowChildren(!showChildren);
  };

  const addReply = (e) => {
    setShowInput(!showInput);
  };

  const changeValue = (e) => {
    console.log("change value");
    setReply(e.target.value);
  };

  const postReply = (e) => {
    const newComment = {
      id: 600,
      postedBy: "Child Guy",
      content: reply,
      children: []
    };
    setChild([...child, newComment]);
  };

  const editComment = (e) => {
    setEdit(!edit);
    setReply(comment.content);
  };

  const save = (e) => {
    console.log(reply);
    comment.content = reply;
    setEdit(false);
  };

  return (
    <div className="comment-box">
      <div className="author">{comment.postedBy}: </div>
      <div className="buttons">
        <button className="edit" onClick={editComment}>
          Edit
        </button>
        {edit && (
          <>
            {" "}
            <textarea rows="5" value={reply} onChange={changeValue}>
              {reply}
            </textarea>
            <button onClick={save}>Save</button>
          </>
        )}
        <button className="delete">Delete</button>
      </div>
      <div className="content">{comment.content}</div>
      <button className="reply" onClick={addReply}>
        Add a Reply
      </button>
      {showInput && (
        <div className="textarea">
          <textarea rows="5" value={reply} onChange={changeValue}>
            {reply}
          </textarea>
          <button onClick={postReply}>Post Reply</button>
        </div>
      )}
      <button className="toggle" onClick={toggleChildren}>
        Toggle comments
      </button>
      {showChildren && <div className="child">{nestedComments}</div>}
    </div>
  );
};

export default Comment;
