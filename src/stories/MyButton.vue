

<script>
import { styled } from "@egoist/vue-emotion";

export default {
  name: 'MyButton',
  props: {
    },
    data() {
    },
    methods: {
    },
  render() {
    const Button = styled.button`
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
  

return(
  <Container>
    <Button> This my button component. </Button>
  </Container>
);

}
}
</script>
