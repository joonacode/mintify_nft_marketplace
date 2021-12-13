import { COLOR_THEME } from '@/theme';
import {
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NftItem = ({ data }) => {
  function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const { colorMode } = useColorMode();

  const bg = useColorModeValue('#fff', '#272A34');
  const textColor = useColorModeValue(
    COLOR_THEME.primaryBlack,
    COLOR_THEME.primaryGreen,
  );

  return (
    <Box
      bg={bg}
      // _hover={{ shadow: 'lg', transition: '.2s ease-in-out' }}
      position={'relative'}
      // transition={'.5s ease-in-out'}
      rounded={'lg'}
      overflow={'hidden'}
      shadow={'md'}
    >
      <Box
        justifyContent={'center'}
        display={'flex'}
        alignItems={'flex-end'}
        pos='relative'
        h={'156px'}
        bg={generateRandomColor()}
      >
        <Box bottom={'-5px'} pos='relative'>
          <Image
            height={140}
            width={140}
            src={`https://avatars.dicebear.com/api/open-peeps/${
              data.username + generateRandomColor().replace('#', '')
            }.svg`}
            alt='2'
          />
        </Box>
      </Box>
      <Box p={4} minH='110px'>
        <Link href={'/'} passHref>
          <Text mb={1} cursor={'pointer'} color={textColor}>
            {data.username}
          </Text>
        </Link>
        <Text
          color={colorMode === 'light' ? '#22B9CA' : '#828282'}
          fontSize={'sm'}
        >
          {data.last_name}
        </Text>
      </Box>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        p={4}
        borderTop={`1px solid ${
          colorMode === 'light' ? '#F2F2F2' : COLOR_THEME.primaryGray
        }`}
      >
        <Text size='sm' color={textColor}>
          Fixed Price
        </Text>
        <Button
          size={'sm'}
          variant='outline'
          colorScheme={'myGreen'}
          rounded={'3xl'}
        >
          0.001 ETH
        </Button>
      </Flex>
    </Box>
  );
};

export default NftItem;
