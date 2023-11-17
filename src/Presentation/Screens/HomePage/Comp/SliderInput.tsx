import { Form,  Slider } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

const SliderInput = () => {
  type FieldType = {
    priceInput?: string;
  };
  return (
    <div>
      <Text>Set Minimum Price range</Text>
      <Form.Item<FieldType> name="priceInput">
        <Slider max={1000} />
      </Form.Item>
    </div>
  );
};

export default SliderInput;
