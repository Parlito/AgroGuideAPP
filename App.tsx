import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Milho from './src/screens/Buttons/Milho'
import Mandioca from './src/screens/Buttons/Mandioca';
import FeijaoCaupi from './src/screens/Buttons/Feijao-Caupi';
import Banana from './src/screens/Buttons/Banana';
import Manga from './src/screens/Buttons/Manga';
import Cat from './src/screens/Categories';
import Suport from './src/screens/Suport';
import Norte_Sc from './src/screens/Cat_Buttons/Norte_Sc';
import Nordeste_Sc from './src/screens/Cat_Buttons/Nordeste_Sc';
import Sul_Sc from './src/screens/Cat_Buttons/Sul_Sc';
import Sudeste_Sc from './src/screens/Cat_Buttons/Sudeste_Sc';
import Centro_Sc from './src/screens/Cat_Buttons/CentroOeste_Sc';
import Test from './src/screens/Teste';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Teste" component={Test} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Cat" component={Cat} options={{ headerShown: false }}/>
        <Stack.Screen name="Support" component={Suport} options={{ headerShown: false }}/>

        <Stack.Screen name="Norte" component={Norte_Sc}/>
        <Stack.Screen name="Nordeste" component={Nordeste_Sc}/>
        <Stack.Screen name="Centro Oeste" component={Centro_Sc}/>
        <Stack.Screen name="Sul" component={Sul_Sc}/>
        <Stack.Screen name="Sudeste" component={Sudeste_Sc}/>

        <Stack.Screen name="Milho" component={Milho}/>
        <Stack.Screen name="Mandioca" component={Mandioca}/>
        <Stack.Screen name="Feijão Caupi" component={FeijaoCaupi}/>
        <Stack.Screen name="Banana" component={Banana}/>
        <Stack.Screen name="Manga" component={Manga}/>
        
    </Stack.Navigator>
    </NavigationContainer>
  );
}


