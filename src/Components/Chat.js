import React from "react";
import posed from "react-pose";
import Person from "./Person";

const ChatWindow = posed.ol({
  visible: {
    staggerChildren: 120
  },
  hidden: {
    staggerChildren: 100
  }
});

const MessageItem = posed.li({
  visible: {
    x: 0,
    opacity: 1
  },
  hidden: {
    x: ({ fromDirection }) => (fromDirection === "left" ? -350 : 350),
    opacity: 0
  }
});

function formatTime(date) {
  return `${date.getHours()}:${date.getMinutes()}`;
}

function formatDate(date) {
  return `${date.getDate()}/${date.getMonth()}`;
}

function Chat({ messages, person, visible, onAnimComplete }) {
  return (
    <ChatWindow
      className="chat"
      pose={visible ? "visible" : "hidden"}
      onPoseComplete={onAnimComplete}
    >
      {messages.map(m => (
        <MessageItem
          className={`container ${m.isOwner ? "sent" : "received"}`}
          fromDirection={m.isOwner ? "right" : "left"}
          key={m.id}
        >
          {person && !m.isOwner && (
            <div className="person-container">
              <Person {...person} active={false} />
            </div>
          )}
          <div className="message">
            <div>{m.text}</div>
            <div className="date">
              <div className="time">{formatTime(m.date)}</div>
              <div className="date">{formatDate(m.date)}</div>
            </div>
          </div>
        </MessageItem>
      ))}
    </ChatWindow>
  );
}

export default Chat;
