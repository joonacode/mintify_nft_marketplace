import { fake_list } from '@/fake_data';
import { COLOR_THEME } from '@/theme';
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import CardItem from './Nfttem';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const NftList = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('#fff', COLOR_THEME.primaryGray);
  const colorPagination = useColorModeValue(
    COLOR_THEME.primaryBlack,
    '#828282',
  );
  const colorActive = useColorModeValue(
    COLOR_THEME.primaryBlue,
    COLOR_THEME.primaryGreen,
  );

  return (
    <>
      <Box bg={bg} padding={'14px'} rounded='lg'>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {fake_list.map((data, i) => (
            <CardItem data={data} key={i} />
          ))}
        </SimpleGrid>
      </Box>
      <Flex mt={8} alignItems={'center'} justifyContent={'space-between'}>
        <Flex>
          <Text>Results 1 - 20</Text>
          <Text ml={2} color={colorPagination}>
            out of 90
          </Text>
        </Flex>
        <Flex alignItems={'center'}>
          <Text fontSize={'2xl'} cursor={'pointer'}>
            <MdKeyboardArrowLeft />
          </Text>
          {Array(4)
            .fill('')
            .map((_, i) => (
              <Text
                cursor={'pointer'}
                color={
                  i === 0 ? colorActive : colorMode === 'dark' ? '#fff' : '#333'
                }
                mx={2}
                key={i}
              >
                {i + 1}
              </Text>
            ))}
          <Text fontSize={'2xl'} cursor={'pointer'}>
            <MdKeyboardArrowRight />
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default NftList;
