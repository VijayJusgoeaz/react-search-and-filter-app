import { Divider, Form } from "antd";
import { useEffect, useState } from "react";
import products from "../../../../assets/ProductList/items-data.json";
import SearchItem from "../../../Functions/SearchFun";
import ProductTable from "../Comp/ProdTable";
import SubmitBtn from "../Comp/SubmitBtn";
import SearchInputField from "../Comp/SearchInputField";
import SliderInput from "../Comp/SliderInput";
import CategoryInput from "../Comp/CategoryInput";

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

  const [productList, setProductList] = useState<ItemType[]>(products);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [selectedcategoryList, setSelectedcategoryList] = useState<string[]>(
    []
  );

  var categoryListTemp: any[] = [];

  // get category list from json data
  function getAllCategory() {
    productList.map((item: ItemType) => {
      categoryListTemp.push(item.item.category.category_name);
    });
  }

  // get category list from json data and remove dupliate values
  useEffect(() => {
    getAllCategory();
    const uniqueNumbers = [...new Set(categoryListTemp)];
    setCategoryList(uniqueNumbers);
  }, []);

  const handleSearch = (e: any) => {
    // call custom search algorithm
    var temp = SearchItem({
      itemList: products,
      searchTxt: e.search,
      itemPrice: e.priceInput,
      category: selectedcategoryList,
    });
    setProductList(temp);
  };

  // to keep track of category list and check box
  const handleCategoryChange = (e: any) => {
    if (e.target.checked) {
      setSelectedcategoryList([...selectedcategoryList, e.target.value]);
    } else {
      setSelectedcategoryList(
        selectedcategoryList.filter((item) => item != e.target.value)
      );
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
              <SearchInputField />

              {/* Price Ranger Selector Slider Input */}
              <SliderInput />

              {/* Category Field */}
              <CategoryInput
                categoryList={categoryList}
                selectedcategoryList={selectedcategoryList}
                handleCategoryChange={()=>handleCategoryChange}
              />
              {/* Search Button */}
              <SubmitBtn />
            </Form>
          </div>
          {/* Rendering Products List  */}
          <div>
            <Divider>
              <div className="text-kFontSmall text-slate-400 opacity-70 font-light">
                Products
              </div>
            </Divider>
          </div>
          {/* Products Table */}
          <ProductTable productList={productList} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
