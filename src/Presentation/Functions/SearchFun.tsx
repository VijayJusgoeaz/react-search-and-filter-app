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

function SearchItem({
  itemList,
  searchTxt,
  itemPrice,
  category,
}: {
  itemList: ItemType[];
  searchTxt?: string;
  itemPrice?: number;
  category?: string[];
}) {
  function customSearchAlgorithm(item: ItemType) {
    if (
      search_by_itemName(item) &&
      search_by_itemPrice(item) &&
      search_by_categoryName(item)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function search_by_itemName(item: ItemType) {
    return searchTxt
      ? item.item_name.toLowerCase().includes(searchTxt.toLowerCase())
      : true;
  }

  function search_by_itemPrice(item: ItemType) {
    console.log("itemPrice", itemPrice);
    if (itemPrice) {
      if (item.selling_price >= itemPrice) {
        return true;
      } else {
        console.log("Preice is larger", item.selling_price);
        return false;
      }
    } else {
      return true;
    }
  }

  function search_by_categoryName(item: ItemType) {
    console.log("category", category);
    if (category && category.length > 0) {
      console.log("Present");
      return category.includes(item.item.category.category_name);
    } else {
      return true;
    }
  }

  return itemList.filter(customSearchAlgorithm);
}

export default SearchItem;
