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
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <Box
      zIndex={10}
      background={'#fff'}
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
              {/* #22B9CA */}
              <Box pos='relative'>
                <Text fontSize={'md'}>Dashboard</Text>
                <Box
                  w='56px'
                  h={'4px'}
                  background={'#22B9CA'}
                  pos='absolute'
                  bottom={'-25px'}
                ></Box>
              </Box>
              <Text fontSize={'md'}>About Us</Text>
              <Text fontSize={'md'}>FAQ</Text>
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
                  background={'#F2F2F2'}
                  rounded={'xl'}
                  type='text'
                  placeholder='Search artwork'
                />
              </InputGroup>
              <HStack spacing={'15px'}>
                <IconButton
                  aria-label='message'
                  rounded='full'
                  icon={
                    <Image
                      width={20}
                      height={20}
                      src='/icons/message.svg'
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
                      src='/icons/notification.svg'
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
                      src='/icons/wallet.svg'
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
