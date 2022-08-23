import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  .tabs {
    padding: 20px 0;
    border-bottom: 1px solid #333333;

    button {
      mirgin-right: 20px;
      background: none;
      padding: 10px 20px;
      cursor: pointer;
      border: 1px solide #333333;
      &:active {
        background: #333333;
        color: white;
      }
    }
  }
`;

const TABS = [
  { name: "Browse", id: "browse" },
  { name: "Create", id: "create" },
];

const AddingChannel = () => {
  const [activeTab, setactiveTab] = useState(TABS[0].id);
  return (
    <Container>
      <div className="tabs">
        {TABS.map((tab) => (
          <button
            className={activeTab === tab.id ? "active" : undefined}
            key={tab.id}
            onClick={() => setactiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
        {activeTab === "browse" && <></>}
        {activeTab === "create" && <></>}
      </div>
    </Container>
  );
};

export default AddingChannel;
