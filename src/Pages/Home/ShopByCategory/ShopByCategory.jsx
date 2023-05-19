import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "./ShopCard";

const ShopByCategory = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);

  const getCategoryShops = (category) => {
    return shops.filter((shop) => shop.subCategory === category);
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Shop By Category</h2>
      <Tabs>
        <TabList>
          <Tab>Cars</Tab>
          <Tab>Trucks</Tab>
          <Tab>Airplanes</Tab>
        </TabList>

        <TabPanel>
          {getCategoryShops("Cars").map((shop) => (
            <ShopCard key={shop.price} shop={shop} />
          ))}
        </TabPanel>
        <TabPanel>
          {getCategoryShops("Trucks").map((shop) => (
            <ShopCard key={shop.price} shop={shop} />
          ))}
        </TabPanel>
        <TabPanel>
          {getCategoryShops("Airplanes").map((shop) => (
            <ShopCard key={shop.price} shop={shop} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
