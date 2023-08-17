import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../Home';
import { ArticleDetails } from '../ArticleDetails';

const Stack = createNativeStackNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Articles',
          }}
        />
        <Stack.Screen
          name="ArticleDetails"
          component={ArticleDetails}
          options={{
            title: 'Article',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
