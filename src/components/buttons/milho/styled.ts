import { styled} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 10px auto;
    flex-direction:row;
    margin: 20px auto;
    background-color: green;
    border-radius: 16px;
`;

export const Image = styled.Image`
    width: 150px;
    min-height: 140px;
    border-top-left-radius:16px;
    border-bottom-left-radius:16px;
`;

export const InfoContainer = styled.View`
    flex: 1;
    border-top-right-radius: 16px;
    border-bottom-right-radius:16px;
    border: 1px solid green;
    padding: 10px;
    justify-content: space-around;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: white;
    font-weight: bold;
`;
export const Desc = styled.Text`
    font-size: 10px;
    color: white;
    font-weight: bold;
    text-align: justify;
`;

