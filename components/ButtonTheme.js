import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

function ButtonTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label='toggle dark mode'
      rounded='full'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
}

export default ButtonTheme;
