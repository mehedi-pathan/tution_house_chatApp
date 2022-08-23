import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  .loading_text {
    background: #333;
    padding: 20px;
    font-size: 14px;
  }

  .loading_text {
    color: #ccc;
  }
`;

const ChannelListContainer = (children, loading) => {
  const loadingText = "Channel is loading";

  return (
    <Container>
      {loading ? <div className="loading_text">{loadingText}</div> : children}
    </Container>
  );
};

export default ChannelListContainer;
