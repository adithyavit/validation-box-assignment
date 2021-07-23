import styled from "@emotion/styled";

const MyButton = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default {
  component: { MyButton },
  title: "Components/Button",
};

export const Primary = () => ({
  components: { MyButton },
  render() {
    return (
      <div>
        <h1>abcd</h1>
        <MyButton>hello</MyButton>
        <MyButton>hello</MyButton>
        <MyButton>hello</MyButton>
      </div>
    );
  },
});
