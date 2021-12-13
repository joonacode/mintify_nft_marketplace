import { COLOR_THEME } from '@/theme';
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { MdMenu, MdOutlineSearch } from 'react-icons/md';
import React, { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import Logo from './Logo';
import { useWindowSize } from '@/hooks';

const Navbar = ({ toggleSidebar }) => {
  const bg = useColorModeValue('#fff', COLOR_THEME.primaryDark);
  const bgInput = useColorModeValue('#F2F2F2', COLOR_THEME.primaryGray);
  const borderColor = useColorModeValue('#fff', COLOR_THEME.primaryGray);
  const colorActive = useColorModeValue(
    COLOR_THEME.primaryBlue,
    COLOR_THEME.primaryGreen,
  );

  const { colorMode } = useColorMode();

  const listMenu = [
    {
      name: 'Dashboard',
      isActive: true,
    },
    {
      name: 'About Us',
      isActive: false,
    },
    {
      name: 'FAQ',
      isActive: false,
    },
  ];

  const { width } = useWindowSize();
  const [dropdownProfile, setDropdownProfile] = useState(false);

  return (
    <Box
      zIndex={10}
      background={bg}
      pos='sticky'
      top={'-1px'}
      boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.12)'}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Container w='full' maxW={'full'} px={{ base: 3, md: 6 }}>
        <Flex
          w={'full'}
          alignItems={'center'}
          justifyContent={{ base: 'space-between', md: 'flex-start' }}
        >
          {width > 768 ? (
            <Box w={320}>
              <Logo />
            </Box>
          ) : (
            <IconButton
              onClick={toggleSidebar}
              aria-label='notification'
              rounded='full'
              icon={<MdMenu />}
            />
          )}
          <Flex
            py={4}
            overflowX={'auto'}
            ml={{ base: 0, md: 7 }}
            justifyContent={{ base: 'flex-end', md: 'space-between' }}
            alignItems={'center'}
            w={'full'}
            className='hide_scroll'
          >
            {width > 768 && (
              <HStack mr={10} spacing={'25px'}>
                {listMenu.map((item, i) => (
                  <Box
                    width={'max-content'}
                    pos='relative'
                    cursor={'pointer'}
                    key={i}
                  >
                    <Text
                      color={
                        item.isActive && colorMode === 'dark'
                          ? colorActive
                          : colorMode === 'dark'
                          ? '#fff'
                          : '#333333'
                      }
                      fontSize={'md'}
                    >
                      {item.name}
                    </Text>
                    {item.isActive && (
                      <Box
                        w='56px'
                        h={'4px'}
                        background={colorActive}
                        pos='absolute'
                        bottom={'-24px'}
                      ></Box>
                    )}
                  </Box>
                ))}
              </HStack>
            )}

            <Flex alignItems={'center'}>
              {width > 768 && (
                <InputGroup mr={7} w={'300px'}>
                  <InputLeftElement
                    pl={'20px'}
                    pointerEvents='none'
                    children={
                      <Image
                        src='/icons/search.svg'
                        alt='search'
                        width={16}
                        height={16}
                      />
                    }
                  />
                  <Input
                    pl={'50px'}
                    border={'none'}
                    background={bgInput}
                    rounded={'xl'}
                    type='text'
                    placeholder='Search artwork'
                  />
                </InputGroup>
              )}

              <HStack spacing={'15px'}>
                {width <= 768 && (
                  <IconButton
                    aria-label='search'
                    rounded='full'
                    icon={<MdOutlineSearch />}
                  />
                )}
                <IconButton
                  aria-label='message'
                  rounded='full'
                  icon={
                    <Image
                      width={20}
                      height={20}
                      src={`/icons/message${
                        colorMode === 'dark' ? '_light' : ''
                      }.svg`}
                      alt='message'
                    />
                  }
                />
                <IconButton
                  aria-label='notification'
                  rounded='full'
                  icon={
                    <Image
                      width={20}
                      height={20}
                      src={`/icons/notification${
                        colorMode === 'dark' ? '_light' : ''
                      }.svg`}
                      alt='notification'
                    />
                  }
                />
                <IconButton
                  aria-label='wallet'
                  rounded='full'
                  icon={
                    <Image
                      width={20}
                      height={20}
                      src={`/icons/wallet${
                        colorMode === 'dark' ? '_light' : ''
                      }.svg`}
                      alt='wallet'
                    />
                  }
                />
              </HStack>
              <Menu
                onClose={() => setDropdownProfile(false)}
                onOpen={() => setDropdownProfile(true)}
              >
                <MenuButton colorScheme='pink'>
                  <Flex
                    width={'max-content'}
                    ml={7}
                    cursor={'pointer'}
                    alignItems={'center'}
                  >
                    <Box pos='relative' top={'2px'}>
                      <Image
                        src='/profile.png'
                        alt='profile'
                        width={36}
                        height={36}
                      />
                    </Box>
                    {width > 768 && <Text ml={3}>Leslie Alexander</Text>}
                  </Flex>
                </MenuButton>
                {dropdownProfile && (
                  <MenuList>
                    <MenuGroup title='Profile'>
                      <MenuItem>My Account</MenuItem>
                      <MenuItem>Payments</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </MenuGroup>
                    {width <= 768 && (
                      <>
                        <MenuDivider />
                        <MenuGroup title='Help'>
                          <MenuItem>Docs</MenuItem>
                          <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                      </>
                    )}
                  </MenuList>
                )}
              </Menu>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
