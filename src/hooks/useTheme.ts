// // src/hooks/useTheme.ts
// import { createContext, useContext } from 'react';
// import { ThemeContextProps } from '@/contants/types';


// // Create the context with an initial value of undefined
// export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// // Custom hook to use the theme context
// export const useTheme = (): ThemeContextProps => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context as ThemeContextProps;
// };
