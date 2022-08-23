import styled from "styled-components";
import { ChannelHeader, MessageList, MessageInput } from "stream-chat-react";

const Container = styled.div`
  width: 100%;
  height: 100%;

  .stc-chat-header-livestream {
    width: 100%;
    height: 100%;
  }

  .stc-chat__list {
    height: calc(100vh - 70px);
  }

  .str-chat__input-float-wrapper {
    position: absolute;
    bottom: 20px;
    width: 100%;
  }
`;

const ChannelBody = () => {
  return (
    <Container>
      <ChannelHeader />
      <MessageList />
      <MessageInput />
    </Container>
  );
};

export default ChannelBody;
