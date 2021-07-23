<script>
import { styled } from "@egoist/vue-emotion";

export default {
  name: "InputValidation",
  props: {
    validationType: String,
    placeholder: String,
    uniqueId: String,
    getValidationType: Function,
  },
  data() {
    return {
      isValid: false,
      inputStuff: "",
    };
  },
  methods: {
    validateURL() {
      let re;
      if (this.validationType === "email") {
        re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      } else if (this.validationType === "url") {
        re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
      } else {
        re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i;
      }
      this.inputStuff = document.getElementById(this.uniqueId).value;
      this.isValid = re.test(this.inputStuff);
    },
  },
  render() {
    const totalHeight = 100;
    const inputBoxWidth = 40;
    const buttonWidth = 60;
    const TextBoxContainer = styled("div")`
      width: max-content;
      height: ${totalHeight};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    `;

    const InputBox = styled("input")`
      width: ${inputBoxWidth};
      height: ${totalHeight};
      border: ${this.isValid ? "1px solid gray" : "1px solid red"};
      border-radius: 4px 0 0 4px;

      &:focus {
        outline: ${this.isValid ? "1px solid gray" : "1px solid red"};
      }
    `;

    const Button = styled("button")`
      cursor: ${({ isRight }) =>
        isRight ? "pointer" : this.isValid ? "pointer" : "default"};
      width: ${buttonWidth};
      height: ${totalHeight};
      border: ${({ isRight }) =>
        isRight
          ? "1px solid gray"
          : this.isValid
          ? "1px solid gray"
          : "1px solid red"};
      background-color: ${({ isRight }) =>
        isRight ? "white" : this.isValid ? "white" : "red"};
      border-radius: ${({ isRight }) => (isRight ? "0 4px 4px 0" : "0px")};

      &:hover {
        background-color: lightgray;
      }
    `;

    const Icon = styled("font-awesome-icon")`
      color: gray;
    `;

    return (
      <TextBoxContainer>
        <InputBox
          placeholder={this.placeholder}
          id={this.uniqueId}
          onInput={this.validateURL}
          value={this.inputStuff}
        />
        <Button disabled={this.isValid}>
          <Icon icon="check" />
        </Button>
        <Button isRight onClick={() => this.getValidationType(null)}>
          <Icon icon="times" />
        </Button>
      </TextBoxContainer>
    );
  },
};
</script>