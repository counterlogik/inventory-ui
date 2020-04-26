import React, { useState } from 'react';
import { navigate } from '@reach/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import AddIcon from '@material-ui/icons/Add';

export default function ItemCollection() {
  const tabRoutes = ['/items', '/categories', '/items/add'];
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    setSelectedTabIndex(newTabIndex);
    navigate(tabRoutes[newTabIndex]);
  };

  return (
    <Tabs
      value={selectedTabIndex}
      onChange={handleChange}
      variant='fullWidth'
      indicatorColor='secondary'
      textColor='secondary'
      aria-label='icon label tabs example'
      centered
    >
      <Tab icon={<HomeIcon />} label='items' />
      <Tab icon={<CategoryIcon />} label='categories' />
      <Tab icon={<AddIcon />} label='add item' />
    </Tabs>
  );
}
