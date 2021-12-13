import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { COLOR_THEME } from '@/theme';
import { ButtonTheme } from '.';
import Logo from './Logo';
import { useWindowSize } from '@/hooks';
const Sidebar = ({ statusSidebar, toggleSidebar }) => {
  const bg = useColorModeValue('#fff', COLOR_THEME.primaryDark);
  const borderColor = useColorModeValue('#fff', COLOR_THEME.primaryGray);
  const { width } = useWindowSize();

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

  const SidebarContent = () => (
    <>
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
    </>
  );

  if (width > 768) {
    return (
      <Box
        position={'fixed'}
        left={0}
        zIndex={2}
        pb={'50px'}
        background={bg}
        pl={'30px'}
        minH='90vh'
        maxH='93vh'
        h='full'
        pr={'25px'}
        pt={'50px'}
        w={'290px'}
        boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.12)'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'space-between'}
        borderRight={`1px solid ${borderColor}`}
      >
        {<SidebarContent />}
        <ButtonTheme />
      </Box>
    );
  }

  return (
    <Drawer isOpen={statusSidebar} placement='left' onClose={toggleSidebar}>
      <DrawerOverlay />
      <DrawerContent bg={bg} borderRight={`1px solid ${borderColor}`}>
        <DrawerCloseButton />
        <DrawerHeader>
          <Logo />
        </DrawerHeader>
        <DrawerBody>{<SidebarContent />}</DrawerBody>
        <DrawerFooter>
          <ButtonTheme />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
