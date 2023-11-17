import { Form, Input } from "antd";

const SearchInputField = () => {
  type FieldType = {
    search?: string;
  };
  return (
    <div>
      <Form.Item<FieldType> name="search">
        <Input placeholder="Search any product..." />
      </Form.Item>
    </div>
  );
};

export default SearchInputField;
