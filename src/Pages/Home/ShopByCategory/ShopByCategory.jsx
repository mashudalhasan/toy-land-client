import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Content 1</h2>
          <p>This is the content for Tab 1.</p>
        </TabPanel>
        <TabPanel>
          <h2>Content 2</h2>
          <p>This is the content for Tab 2.</p>
        </TabPanel>
        <TabPanel>
          <h2>Content 3</h2>
          <p>This is the content for Tab 3.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
