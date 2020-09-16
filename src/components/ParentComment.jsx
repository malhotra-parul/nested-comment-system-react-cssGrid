import React, { useState, useEffect } from "react";
import { dummyData } from "./comments";
import Comment from "./Comment";

const ParentComment = () => {
  const [comments, setComments] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [reply, setReply] = useState("");

  useEffect(() => {
    setComments(dummyData.comments);
  }, []);

  const addReply = () => {
    setShowInput(!showInput);
  };

  const changeValue = (e) => {
    setReply(e.target.value);
  };

  const postReply = (e) => {
    const newComment = {
      id: 600,
      postedBy: "NewGuy",
      content: reply,
      children: []
    };
    setComments([...comments, newComment]);
  };
  return (
    <div className="comment">
      <button onClick={addReply}>Add Reply!</button>
      {showInput && (
        <div className="textarea">
          <textarea rows="5" value={reply} onChange={changeValue}>
            {reply}
          </textarea>
          <button onClick={postReply}>Post Reply</button>
        </div>
      )}
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default ParentComment;
