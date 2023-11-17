import { Form, Button } from "antd";

const SubmitBtn = () => {
  return (
    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="bg-sky-500 w-full hover:!bg-sky-500 my-kSpace_10"
      >
        Search
      </Button>
    </Form.Item>
  );
};

export default SubmitBtn;
