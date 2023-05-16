import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {LeftTabNewContextProvider} from './src/context/LeftTabNewContext2';
import {RightTabNewContextProvider} from './src/context/RightTabNewContext';
import {BottomTabs} from './src/navigation/BottomTabs';
import {
  LeftTabMiniStoreInstance,
  StoreProvider,
} from './src/mobx/leftTabMiniStore';

// export const App = () => {
//   return (
//     <NavigationContainer>
//       <LeftTabNewContextProvider>
//         <RightTabNewContextProvider>
//           <BottomTabs />
//         </RightTabNewContextProvider>
//       </LeftTabNewContextProvider>
//     </NavigationContainer>
//   );
// };

export const App = () => {
  return (
    <NavigationContainer>
      <StoreProvider store={LeftTabMiniStoreInstance}>
        <BottomTabs />
      </StoreProvider>
    </NavigationContainer>
  );
};
