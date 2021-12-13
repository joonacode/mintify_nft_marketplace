import Sidebar from '@/components/Sidebar';
import { COLOR_THEME } from '@/theme';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../components';

const DashboardLayout = ({ children }) => {
  const bg = useColorModeValue(
    COLOR_THEME.secondaryLight,
    COLOR_THEME.secondaryDark,
  );

  return (
    <Box>
      <Navbar />
      <Flex>
        <Sidebar />
        <Box
          ml='290px'
          flex='1'
          px={6}
          pt={'40px'}
          pos='relative'
          zIndex={1}
          bg={bg}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
