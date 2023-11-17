import {
  Divider,
  Form,
  Input,
  Image,
  Tag,
  Slider,
  Button,
  Table,
  Checkbox,
} from "antd";
import { useEffect, useState } from "react";
import products from "../../../../assets/ProductList/items-data.json";
import { Typography } from "antd";
import SearchItem from "../../../Functions/SearchFun";
import { ColumnsType } from "antd/es/table";

const { Text } = Typography;

const HomePage = () => {
  type ItemType = {
    item_name: string;
    selling_price: number;
    item: ItemCategory;
  };

  type ItemCategory = {
    category: {
      category_id: number;
      category_name: string;
      id: string;
    };
  };

  type FieldType = {
    search?: string;
    priceInput?: string;
    categoryList?: [];
  };

  const [productList, setProductList] = useState<ItemType[]>(products);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [selectedcategoryList, setSelectedcategoryList] = useState<string[]>(
    []
  );

  const columns: ColumnsType<ItemType> = [
    {
      title: "Item Name",
      dataIndex: "item_name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "selling_price",
      key: "price",
    },
    {
      title: "Category",
      render: (item) => item.item.category.category_name,
      key: "category",
    },
  ];

  var categoryListTemp: any[] = [];

  function getAllCategory() {
    productList.map((item: ItemType) => {
      categoryListTemp.push(item.item.category.category_name);
      console.log(categoryListTemp);
    });
  }

  useEffect(() => {
    getAllCategory();
    console.log("categoryList", categoryList);
    const uniqueNumbers = [...new Set(categoryListTemp)];
    setCategoryList(uniqueNumbers);
  }, []);

  const handleSearch = (e: any) => {
    console.log(e.categoryList);

    var temp = SearchItem({
      itemList: products,
      searchTxt: e.search,
      itemPrice: e.priceInput,
      category: selectedcategoryList,
    });
    setProductList(temp);
  };

  const handleCategoryChange = (e: any) => {
    if (e.target.checked) {
      setSelectedcategoryList([...selectedcategoryList, e.target.value]);
    } else {
      setSelectedcategoryList(
        selectedcategoryList.filter((item) => item != e.target.value)
      );
      // selectedcategoryList = selectedcategoryList.filter(
      //   (item) => item != e.target.value
      // );
    }
  };

  return (
    <div className="bg-sky-500 h-screen flex justify-center items-center ">
      <div className="bg-white lg:w-1/2 rounded-xl  p-kSpace_10 h-3/4 overflow-scroll">
        <div>
          {/* Form */}
          <div className="m-kSpace_10">
            <div className="my-kSpace_10">Search for products</div>
            <Form onFinish={handleSearch} initialValues={{ priceInput: 200 }}>
              {/* Search Input Field */}
              <Form.Item<FieldType>
                name="search"
                // rules={[{ required: true, message: "Please enter a value" }]}
              >
                <Input
                  placeholder="Search any product..."
                  onChange={(e) => {
                    // console.log(e.target.value);
                  }}
                />
              </Form.Item>
              {/* Slider */}
              <Text>Set Minimum Price range</Text>
              <Form.Item<FieldType> name="priceInput">
                <Slider max={1000} />
              </Form.Item>
              {/* Category Field */}
              <Text>Select category</Text>
              <Form.Item<FieldType> name="categoryList">
                <div className="my-kSpace_10 ">
                  {categoryList.map((item: string, index: number) => {
                    return (
                      <Checkbox
                        checked={
                          selectedcategoryList.includes(item) ? true : false
                        }
                        key={index}
                        value={item}
                        onChange={handleCategoryChange}
                      >
                        {item}
                      </Checkbox>
                    );
                  })}
                </div>
              </Form.Item>
              {/* Search Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-sky-500 w-full hover:!bg-sky-500 my-kSpace_10"
                >
                  Search
                </Button>
              </Form.Item>
            </Form>
          </div>
          {/* Products List Render */}
          <div>
            <Divider>
              <div className="text-kFontSmall text-slate-400 opacity-70 font-light">
                Products
              </div>
            </Divider>
          </div>
          {/* Products Map */}
          <div className="">
            <Table
              dataSource={productList}
              columns={columns}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
