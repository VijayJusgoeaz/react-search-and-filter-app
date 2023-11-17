import { Form, Checkbox } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

interface Props {
  categoryList: any[];
  selectedcategoryList: string[];
  handleCategoryChange: Function;
}

const CategoryInput = ({
  categoryList,
  selectedcategoryList,
  handleCategoryChange,
}: Props) => {
  type FieldType = {
    categoryList?: [];
  };

  return (
    <div>
      <Text>Select category</Text>
      <Form.Item<FieldType> name="categoryList">
        <div className="my-kSpace_10 ">
          {categoryList.map((item: string, index: number) => {
            return (
              <Checkbox
                checked={selectedcategoryList.includes(item) ? true : false}
                key={index}
                value={item}
                onChange={handleCategoryChange()}
              >
                {item}
              </Checkbox>
            );
          })}
        </div>
      </Form.Item>
    </div>
  );
};

export default CategoryInput;
