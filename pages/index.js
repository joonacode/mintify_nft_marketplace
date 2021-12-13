import { DashboardLayout } from '@/layouts';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MdListAlt, MdGridView } from 'react-icons/md';
import { NftList } from '@/components';
import { COLOR_THEME } from '@/theme';
const Home = () => {
  const bgTheme = useColorModeValue(
    COLOR_THEME.primaryBlue,
    COLOR_THEME.primaryGreen,
  );
  const colorTheme = useColorModeValue(
    COLOR_THEME.primaryLight,
    COLOR_THEME.primaryBlack,
  );
  const themeGreenBlue = useColorModeValue(
    COLOR_THEME.primaryBlack,
    COLOR_THEME.primaryGreen,
  );

  return (
    <>
      <DashboardLayout>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Heading as='h2' size={'lg'} fontWeight={'bold'}>
            Cryptographics
          </Heading>
          <Button bg={bgTheme} color={colorTheme}>
            Create new item
          </Button>
        </Flex>
        <Flex
          wrap={'wrap'}
          mt={6}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <HStack mt={2} spacing={'10px'}>
            <Menu>
              <MenuButton
                as={Button}
                fontWeight={'normal'}
                rightIcon={<ChevronDownIcon />}
                color={themeGreenBlue}
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
                color={themeGreenBlue}
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
                color={themeGreenBlue}
              >
                All
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Flex mt={2} ml={'auto'}>
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
        <Box mt={5} mb={'50px'}>
          <NftList />
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Home;
