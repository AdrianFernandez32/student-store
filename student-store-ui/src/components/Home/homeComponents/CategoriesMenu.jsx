import React, { useState } from 'react';
import {
  useDisclosure,
  Button,
  ScaleFade,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Categories = () => {
  const options = [
    {
      title: 'All Categories',
      index: 1,
    },
    {
      title: 'Clothing',
      index: 2,
    },
    {
      title: 'Food',
      index: 3,
    },
    {
      title: 'Accessories',
      index: 4,
    },
    {
      title: 'Tech',
      index: 5,
    },
  ];
  const { isOpen, onToggle } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === item ? null : item
    );
  };

  return (
    <div className='flex w-2/3 justify-around items-center'>
      <Button onClick={onToggle}>
        <HamburgerIcon />
      </Button>
      <Tabs>
        <TabList>
          {options.map((option) => (
            <Tab key={option.index}>
              <ScaleFade key={option.index} initialScale={0.9} in={isOpen}>
                <Box
                  p='40px'
                  color='black'
                  mt='4'
                  bg='teal.500'
                  rounded='md'
                  shadow='md'
                  cursor='pointer'
                  onClick={() => handleClick(option)}
                >
                  {option.title}
                </Box>
              </ScaleFade>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {options.map((option) => (
            <TabPanel key={option.index}>{option.index}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Categories;
