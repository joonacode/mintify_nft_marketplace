import { Box } from '@chakra-ui/react';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
const Sidebar = () => {
  return (
    <Box
      position={'fixed'}
      left={0}
      zIndex={2}
      background={'#fff'}
      pl={'30px'}
      minH='90vh'
      maxH='100vh'
      h='full'
      pr={'25px'}
      pt={'50px'}
      w={'290px'}
      boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.12)'}
    >
      <Accordion>
        {Array(8)
          .fill('')
          .map((_, i) => (
            <AccordionItem key={i}>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section {i + 1} title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </Box>
  );
};

export default Sidebar;
