import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { COLOR_THEME } from '@/theme';
const Sidebar = () => {
  const bg = useColorModeValue('#fff', COLOR_THEME.primaryDark);

  const listMenu = [
    {
      name: 'Status',
      isActive: false,
      subMenu: [
        {
          name: 'Sub menu 1',
          statusSubMenu: false,
        },
        {
          name: 'Sub menu 2',
          statusSubMenu: false,
        },
      ],
    },
    {
      name: 'Price',
      isActive: false,
      subMenu: [
        {
          name: 'Sub menu 1',
          statusSubMenu: false,
        },
        {
          name: 'Sub menu 2',
          statusSubMenu: false,
        },
      ],
    },
    {
      name: 'Collections',
      isActive: false,
      subMenu: [
        {
          name: 'Sub menu 1',
          statusSubMenu: false,
        },
        {
          name: 'Sub menu 2',
          statusSubMenu: false,
        },
      ],
    },
    {
      name: 'Chains',
      isActive: false,
      subMenu: [
        {
          name: 'Sub menu 1',
          statusSubMenu: false,
        },
        {
          name: 'Sub menu 2',
          statusSubMenu: false,
        },
      ],
    },
    {
      name: 'Categories',
      isActive: false,
      subMenu: [
        {
          name: 'Sub menu 1',
          statusSubMenu: false,
        },
        {
          name: 'Sub menu 2',
          statusSubMenu: false,
        },
      ],
    },
    {
      name: 'Sale',
      isActive: false,
      subMenu: [
        {
          name: 'Sub menu 1',
          statusSubMenu: false,
        },
        {
          name: 'Sub menu 2',
          statusSubMenu: false,
        },
      ],
    },
  ];

  return (
    <Box
      position={'fixed'}
      left={0}
      zIndex={2}
      background={bg}
      pl={'30px'}
      minH='90vh'
      maxH='100vh'
      h='full'
      pr={'25px'}
      pt={'50px'}
      w={'290px'}
      boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.12)'}
    >
      <Accordion allowToggle>
        {listMenu.map((menu, i) => (
          <AccordionItem borderTop={i === 0 && 'none'} key={i}>
            <h2>
              <AccordionButton _focus={{ border: 'none' }}>
                <Box flex='1' textAlign='left'>
                  {menu.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {menu.subMenu.map((sub, isub) => (
                <Box
                  key={isub}
                  cursor={'pointer'}
                  mb={isub !== menu.subMenu.length - 1 ? 2 : 0}
                  pl={2}
                >
                  <Text>
                    {menu.name} - {sub.name}
                  </Text>
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Sidebar;
