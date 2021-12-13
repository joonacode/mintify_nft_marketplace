import Sidebar from '@/components/Sidebar';
import { useWindowSize } from '@/hooks';
import { COLOR_THEME } from '@/theme';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Footer, Navbar } from '../components';

const DashboardLayout = ({ children }) => {
  const bg = useColorModeValue(
    COLOR_THEME.secondaryLight,
    COLOR_THEME.secondaryDark,
  );

  const { width } = useWindowSize();

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Box>
        <Navbar toggleSidebar={toggleSidebar} />
        <Flex>
          <Sidebar statusSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          <Box
            ml={width > 768 ? '290px' : '0px'}
            flex='1'
            pt={'40px'}
            pos='relative'
            zIndex={1}
            bg={bg}
          >
            <Box px={{ base: 3, md: 6 }}>{children}</Box>
            <Footer />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DashboardLayout;
