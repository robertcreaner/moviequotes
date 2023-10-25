import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MovieQuoteScreen} from '../screens/MovieQuoteScreen';

const MovieQuoteStack = createNativeStackNavigator();

export default () => {
  return (
    <MovieQuoteStack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <MovieQuoteStack.Screen
        options={({navigation}) => ({
          headerTitle: 'Movie Quotes',
          headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: '700',
            fontSize: 20,
          },
        })}
        name="MovieQuoteScreen"
        component={MovieQuoteScreen}
      />
    </MovieQuoteStack.Navigator>
  );
};
