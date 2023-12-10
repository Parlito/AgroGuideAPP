import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 100px;
    margin: 5px auto;
    align-items: center;
    justify-content: center; 
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    opacity:0.8;
    border-radius: 16px;
`;

export const Title = styled.Text`
    position: absolute;
    font-size: 30px;
    color:  white;
    font-weight: bold;
    text-shadow: 2px 2px 5px black;
    margin: auto auto;
`;

export const SubTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: green;
    margin: auto auto;
`;