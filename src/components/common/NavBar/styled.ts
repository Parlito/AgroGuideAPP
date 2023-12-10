import  styled  from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 60px;
    background-color: green;
    position: absolute;
    bottom: 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px 20px;
`;

export const IconButton = styled.TouchableOpacity``;

export const Icon = styled.Image.attrs({resizeMode: "contain",})`
    width: 30px;
`;