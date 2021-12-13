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
import React from 'react';
import { ButtonTheme } from '.';
import Logo from './Logo';

const Navbar = () => {
  const bg = useColorModeValue('#fff', COLOR_THEME.primaryDark);
  const bgInput = useColorModeValue('#F2F2F2', COLOR_THEME.primaryGray);
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

  return (
    <Box
      zIndex={10}
      background={bg}
      pos='sticky'
      top={0}
      py={4}
      boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.12)'}
    >
      <Container w='full' maxW={'full'} px={'30px'}>
        <Flex alignItems={'center'}>
          <Box w={250}>
            <Logo />
          </Box>
          <Flex
            ml={7}
            justifyContent={'space-between'}
            alignItems={'center'}
            flex={1}
          >
            <HStack spacing={'25px'}>
              {listMenu.map((item, i) => (
                <Box pos='relative' cursor={'pointer'} key={i}>
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
                      bottom={'-25px'}
                    ></Box>
                  )}
                </Box>
              ))}
            </HStack>
            <Flex alignItems={'center'}>
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
              <HStack spacing={'15px'}>
                <ButtonTheme />
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
              <Flex ml={7} cursor={'pointer'} alignItems={'center'}>
                <Box>
                  <Image
                    src='/profile.png'
                    alt='profile'
                    width={36}
                    height={36}
                  />
                </Box>
                <Text ml={3}>Leslie Alexander</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
