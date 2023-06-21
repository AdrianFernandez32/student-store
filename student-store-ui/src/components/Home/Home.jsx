import React, { useState } from 'react';
import './Home.css';
import { spectacularTitle, utilityButtons } from '../../assets/styles';
import merchIcon from '../../assets/images/merchandise.png';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { Search2Icon, QuestionIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import Categories from './homeComponents/CategoriesMenu';

export default function Home() {
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

  const [selectedCategory, setSelectedCategory] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedCategory(option);
  };

  return (
    <div className='home gap-4'>
      {/* Spectacular */}
      <div
        id='spectacular'
        className='w-2/3 bg-green-200 h-[350px] flex justify-center items-center gap-16 p-3'
      >
        <div className='w-1/2'>
          <h1 className={spectacularTitle}>Welcome!</h1>
          <h1 className={spectacularTitle}>Find Your Merch!</h1>
          <h5 className='text-xl font-bold'>
            We have all kinds of goodies. Click on any of the items to start
            filling up your shopping cart. Checkout whenever you're ready.
          </h5>
        </div>
        <img src={merchIcon} alt='Merch icon' className='h-[200px]' />
      </div>
      {/* Utility */}
      <div className='flex justify-center content-center w-2/3 gap-3'>
        {/* Searchbar */}
        <div className='flex justify-center items-center gap-2  w-1/2'>
          <Search2Icon />
          <Input
            type='search'
            placeholder='Search'
            className='p-2 w-[80%] border border-green-500 rounded-lg'
          />
        </div>
        {/* Help */}
        <button className={utilityButtons}>
          <QuestionIcon />
          <h1 className='text-xl font-semibold'>Help</h1>
        </button>
        {/* Cart */}
        <button className={utilityButtons}>
          <FiShoppingCart />
          <h1 className='text-xl font-semibold'>Cart</h1>
        </button>
        {/* Categories menu */}
      </div>
      <Categories
        options={options}
        selectedOption={selectedCategory}
        handleOptionClick={handleOptionClick}
      />
    </div>
  );
}
