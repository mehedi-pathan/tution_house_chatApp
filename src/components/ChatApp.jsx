//import style sheet
import "./ChatApp.scss";

//import components
import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat, LoadingIndicator } from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import styled from "styled-components";
import CustomeChannelList from "./CustomeChannelList";
import ChannelBody from "./ChannelBody";
import { Channel } from "stream-chat-react";

const Container = styled.div`
  display: flex;
  .lefy_column {
    width: 300px;
  }
  .right_column {
    flex: 1;
  }
`;

//import chat api
const API_KEY = "vwaxh5d7dqvg";
// const API_KEY = process.env.REACT_TUTION_CHAT_API_KEY;

const USER1 = {
  id: "user1",
  name: "user1",
  image: "https://picsum.photos/200/300",
};
const USER2 = {
  id: "user2",
  name: "user2",
  image: "https://picsum.photos/200/300",
};
const USER3 = {
  id: "user3",
  name: "user3",
  image: "https://picsum.photos/200/300",
};

const users = [USER1, USER2, USER3];

const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

const ChatApp = () => {
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);

  //fro create new channel
  const [addingChannel, setAddingChannel] = useState(false);

  useEffect(() => {
    async function initChat() {
      const client = StreamChat.getInstance(API_KEY);

      const user = getRandomUser();
      client.connectUser(user, client.devToken(user.id));

      const channel = client.channel("team", "general", {
        name: "General Channel",
        image: "https://picsum.photos/200/300",
      });

      await channel.create();
      channel.addMembers([user.id]);
      setChannel(channel);

      setChatClient(client);
    }
    initChat();

    return () => {
      if (chatClient) chatClient.disconnectUser();
    };
  }, [chatClient]);

  if (!chatClient || !channel)
    return (
      <>
        Something wrong on chat api <LoadingIndicator />{" "}
      </>
    );
  return (
    <div className="chat_app_container">
      <div className="chat_app">
        <h1>Tution House Chat app</h1>
        <Chat client={chatClient} theme={"messaging light"}>
          <Container>
            <div className="left_column">
              <CustomeChannelList />
            </div>
            <div className="right_column">
              <Channel>
                <ChannelBody />
              </Channel>
            </div>
          </Container>
        </Chat>
      </div>
    </div>
  );
};

export default ChatApp;

// <Channel>
//             <Window>
//               <ChannelHeader />
//               <MessageList />
//               <MessageInput />
//             </Window>
//             <Thread />
//           </Channel>
