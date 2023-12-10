import React from 'react'
import { Container, Icon, IconButton } from './styled'
import { useNavigation } from '@react-navigation/native';



const home = require ("../../../../assets/icons/home.png");
const categories = require("../../../../assets/icons/categories.png");
const profile = require ("../../../../assets/icons/profile.png");

const NavBar = () => {
    const navigation = useNavigation();


    return(
    <Container>
        <IconButton onPress={() => navigation.navigate('Home')}>
            <Icon source={home}/>
        </IconButton>
        <IconButton onPress={() => navigation.navigate('Cat')}>
            <Icon source={categories}/>
        </IconButton>
        <IconButton onPress={() => navigation.navigate('Support')}>
            <Icon source={profile}/>
        </IconButton>
    </Container>
    );

}

export default NavBar