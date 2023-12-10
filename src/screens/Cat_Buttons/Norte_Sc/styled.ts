import styled  from "styled-components/native";
import  Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
    flex:1;
    background-color: white;
`;

export const Title = styled.Text`
    padding-top: ${statusBarHeight}px;
    font-size: 50px;
    font-weight: bold;
    margin-top: 20px;
    color: green;
    margin: 20px auto;
    text-shadow: 0 0 3px green;
`;

export const SubTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: green;
    margin: 10px auto;
`;