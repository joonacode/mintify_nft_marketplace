import { DashboardLayout } from '@/layouts';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MdListAlt, MdGridView } from 'react-icons/md';
import { CardList } from '@/components';
const Home = () => {
  return (
    <>
      <DashboardLayout>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Heading as='h2' size={'lg'} fontWeight={'bold'}>
            Cryptographics
          </Heading>
          <Button bg='#22B9CA' color={'white'}>
            Create new item
          </Button>
        </Flex>
        <Flex mt={7} justifyContent={'space-between'} alignItems={'center'}>
          <HStack spacing={'10px'}>
            <Menu>
              <MenuButton
                as={Button}
                fontWeight={'normal'}
                rightIcon={<ChevronDownIcon />}
              >
                Recent
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                fontWeight={'normal'}
                rightIcon={<ChevronDownIcon />}
              >
                Low to hight
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                fontWeight={'normal'}
                rightIcon={<ChevronDownIcon />}
              >
                All
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Flex>
            <IconButton
              opacity={'0.3'}
              roundedRight={0}
              aria-label='Search database'
              icon={<MdGridView />}
            />
            <IconButton
              roundedLeft={0}
              aria-label='Search database'
              icon={<MdListAlt />}
            />
          </Flex>
        </Flex>
        <Box mt={5} mb={'100px'}>
          <CardList />
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Home;
