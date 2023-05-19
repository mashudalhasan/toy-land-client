import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "./ShopCard";

const ShopByCategory = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);

  const getCategoryShops = (category) => {
    return shops.filter((shop) => shop.subCategory === category);
  };

  return (
    <div className="mb-10">
      <h2 className="text-center text-3xl font-semibold mb-5">
        Shop By Category
      </h2>
      <Tabs>
        <TabList>
          <Tab>Cars</Tab>
          <Tab>Trucks</Tab>
          <Tab>Airplanes</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {getCategoryShops("Cars").map((shop) => (
              <ShopCard key={shop._id} shop={shop} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {getCategoryShops("Trucks").map((shop) => (
              <ShopCard key={shop.price} shop={shop} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {getCategoryShops("Airplanes").map((shop) => (
              <ShopCard key={shop.price} shop={shop} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
