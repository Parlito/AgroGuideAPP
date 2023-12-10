import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    height: 100px;
    padding: 0px 20px;
    padding-top: ${statusBarHeight}px;
    justify-content: space-between;
    align-items: center;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    width: 79%;
    background-color: #D3D3D3;
    border-radius: 16px;
    justify-content: flex-end;
    align-items: center;
`;

export const Input = styled.TextInput`
    flex: 1;
    padding: 2px 10px;
    color: black;
`;

export const Search = styled.Image.attrs({ resizeMode: "contain",})`
    width: 18px;
    margin-right: 10px;
`;

export const Logo = styled.Image.attrs({ resizeMode: "contain",})`
    width: 64px;
    margin-right: 10px;
`;