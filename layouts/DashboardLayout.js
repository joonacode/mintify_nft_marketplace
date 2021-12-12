import Sidebar from '@/components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../components';

const DashboardLayout = ({ children }) => {
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
          bg='#FCFCFC'
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
