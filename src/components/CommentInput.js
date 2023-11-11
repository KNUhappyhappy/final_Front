import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
// import "./CommentInput.css";

const CommentInput = ({ onInsert }) => {
  const [value, setValue] = useState({
    name: "",
    content: "",
  });

  const onChangeName = useCallback(
    (e) => {
      setValue({
        name: e.target.value,
        content: value.content,
      });
    },
    [value]
  );

  const onChangeContent = useCallback(
    (e) => {
      setValue({
        name: value.name,
        content: e.target.value,
      });
    },
    [value]
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value.name, value.content);
      setValue({
        name: "",
        content: "",
      });

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="CommunityDetailCommentsTotal" onSubmit={onSubmit}>
      <div className="CommunityDetailCommentsInputBar">
        <input
          classNames="inputNames"
          placeholder="닉네임"
          value={value.name}
          onChange={onChangeName}
        />
        <input
          className="inputComment"
          placeholder="댓글"
          value={value.content}
          onChange={onChangeContent}
        />
        <button type="submit" className="CommentsBtn">
          <MdAdd />
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
