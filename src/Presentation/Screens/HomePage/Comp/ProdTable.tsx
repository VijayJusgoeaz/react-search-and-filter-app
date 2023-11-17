import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

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

interface Props {
  productList: ItemType[];
}

const ProductTable = ({ productList }: Props) => {
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
  return (
    <div className="">
      <Table dataSource={productList} columns={columns} pagination={false} />
    </div>
  );
};

export default ProductTable;
