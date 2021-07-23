<script>
import { styled } from "@egoist/vue-emotion";
import PopUp from "./PopUp";

export default {
  name: "TextBox",
  props: {
    getValidationType: Function,
  },
  data() {
    return { isPopUpOpen: false, extLinkClick: false };
  },
  methods: {
    openPopUp() {
      this.isPopUpOpen = !this.isPopUpOpen;
    },
    toggleExtLinkClick() {
      this.extLinkClick = !this.extLinkClick;
    },
  },
  render() {
    const totalHeight = 500;
    const inputBoxWidth = 40;
    const buttonWidth = 60;
    const Container = styled("div")``;
    const TextBoxContainer = styled("div")`
      width: max-content;
      height: ${totalHeight};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    `;
    const InputButton = styled("input")`
      width: ${inputBoxWidth};
      height: ${totalHeight};
      border: 1px solid gray;
      border-radius: none;
      cursor: pointer;
    `;
    const Button = styled("button")`
      cursor: pointer;
      width: ${buttonWidth};
      height: ${totalHeight};
      border: 1px solid darkgray;
      background-color: ${({ isLeft }) =>
        !isLeft && this.extLinkClick ? "#494C53" : "#EDEFF4"};
      border-radius: ${({ isLeft }) =>
        isLeft ? "4px 0 0 4px" : "0 4px 4px 0"};

      &:hover {
        background-color: "#BCC2CC";
      }
    `;

    const Icon = styled("font-awesome-icon")`
      color: gray;
    `;

    return (
      <Container>
        <TextBoxContainer>
          {this.isPopUpOpen && <PopUp captureInput={this.getValidationType} />}
          <Button isLeft onClick={this.openPopUp}>
            <Icon icon="link" />
          </Button>
          <InputButton
            placeholder="URL"
            onClick={() => this.getValidationType("url")}
          />
          <Button onClick={this.toggleExtLinkClick}>
            <Icon icon="external-link-alt" />
          </Button>
        </TextBoxContainer>
      </Container>
    );
  },
};
</script>