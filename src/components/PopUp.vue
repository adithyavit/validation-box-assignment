<script>
import { styled } from "@egoist/vue-emotion";

export default {
  name: "PopUp",
  props: {
    captureInput: Function,
  },
  render() {
    const itemWidth = 500;
    const itemHeight = 40;
    const items = [
      {
        name: "Link to Email",
        icon: "envelope-square",
        validationType: "email",
      },
      { name: "Link to URL", icon: "file", validationType: "url" },
      { name: "Link to Phone", icon: "mobile-alt", validationType: "phone" },
    ];

    const PopUpWrapper = styled("div")`
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `;

    const Arrow = styled("div")`
      width: 0;
      height: 0;
      border: 5px solid;
      border-left-color: black;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
    `;

    const PopUpDiv = styled("div")`
      width: fit-content;
      height: fit-content;
      background-color: white;
      border: 1px solid black;
      border-radius: 5px;
    `;

    const ListItem = styled("div")`
      cursor: pointer;
      width: ${itemWidth};
      height: ${itemHeight};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: 1px solid black;
      padding: 5px 10px;

      &:hover {
        background-color: lightgray;
      }
    `;

    const Icon = styled("font-awesome-icon")`
      margin-right: 10px;
    `;

    return (
      <PopUpWrapper>
        <PopUpDiv>
          {items.map((item) => (
            <ListItem onClick={() => this.captureInput(item.validationType)}>
              <Icon icon={item.icon} />
              {item.name}
            </ListItem>
          ))}
        </PopUpDiv>
        <Arrow />
      </PopUpWrapper>
    );
  },
};
</script>