import React, { Component } from "react";
// import logo from "./logo.svg";

const styles = {
  root: {
    width: "40%",
    margin: "auto",
    padding: 10,
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: 16,
  },
  imageContainer: {
    display: "inline-block",
    width: "50",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  commentContainer: {
    display: "inline-block",
    marginLeft: 16,
    textAlign: "left",
    verticalAlign: "top",
  },
  nameText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  contentText: {
    color: "black",
    fontSize: 16,
  },
};

class Comment extends Component {
  render() {
    const { name, content } = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.imageContainer}>
          <img src="images/MainPage/people5.jpg" alt="" style={styles.image} />
        </div>
        <div style={styles.commentContainer}>
          <div style={styles.nameText}>{name}</div>
          <span style={styles.contentText}>{content}</span>
        </div>
      </div>
    );
  }
}

export default Comment;
