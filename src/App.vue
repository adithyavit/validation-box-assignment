<script>
import { styled } from "@egoist/vue-emotion";
import TextBox from "./components/TextBox";
import InputValidation from "./components/InputValidation";

export default {
  name: "App",
  components: {
    TextBox,
    InputValidation,
  },
  data() {
    return {
      validationType: null,
    };
  },
  methods: {
    getValidationType(type) {
      this.validationType = type;
    },
  },
  render() {
    const WrapperDiv = styled("div")`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `;

    return (
      <WrapperDiv>
        {this.validationType === null ? (
          <TextBox getValidationType={this.getValidationType} />
        ) : (
          <InputValidation
            getValidationType={this.getValidationType}
            validationType={this.validationType}
            uniqueId="input-validator"
            placeholder={this.validationType.toUpperCase()}
          />
        )}
      </WrapperDiv>
    );
  },
};
</script>
