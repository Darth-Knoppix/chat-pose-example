import React, { useState, useEffect } from "react";
import { getFriends, getMessages} from './api';
import Header from "./Components/Header";
import Chat from "./Components/Chat";
import PersonSelector from "./Components/PersonSelector";
import Composer from './Components/Composer';

import "./App.css";


function App() {
  const [iteration, setInteration] = useState(0);
  const [visible, setVisible] = useState(true);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeFriend, setActiveFriend] = useState({});

  const onChatAnimComplete = () => {
    if (!visible) {
      const friends = getFriends();
      friends[2].active = true;
      setActiveFriend(friends[2]);

      setFriends(friends);
      setMessages(getMessages());
      setVisible(true);
    }
  };

  useEffect(() => {
    setVisible(v => !v);
  }, [iteration]);


  return (
    <div className="wrapper">
      <div className="chrome">
        <div className="pane">
          <Header
            name={activeFriend.name}
            onShuffle={() => setInteration(1 + iteration)}
          />
          <PersonSelector people={friends} />
        </div>

        <Chat
          messages={messages}
          person={activeFriend}
          visible={visible}
          onAnimComplete={onChatAnimComplete}
        />
        <Composer />
      </div>
    </div>
  );
}

export default App;
