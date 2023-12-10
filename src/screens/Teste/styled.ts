import { styled} from "styled-components/native";

export const VIDEO_HEIGHT = 180;
export const SCREEN_SPACE = 24;

export const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
`;

export const Container2 = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.7);
    align-items: center;
    justify-content: center;
`;

export const Image1 = styled.Image`
    width: 310px;
    height: 220px;
    margin: 10px;
`;

export const InfoContainer = styled.View`
    margin: 10px;
    height: 90%;
    width: 90%;
    align-content: center;
    border-radius: 16px;
    padding: 10px;
    background-color: green;
`;

export const InfoContainer2 = styled.View`
    margin: 10px;
    height: 90%;
    width: 90%;
    align-content: center;
    border-radius: 16px;
    border: 1px solid green;
    padding: 10px;
    background-color: green;
`;

export const InfoContainer3 = styled.View`
    margin: 10px;
    height: 40%;
    width: 90%;
    align-content: center;
    border-radius: 16px;
    border: 1px solid green;
    padding: 10px;
    background-color: green;
`;

export const Title = styled.Text`
    font-size: 40px;
    color: green;
    font-weight: bold;
    text-align: center;
`;

export const Title2 = styled.Text`
    font-size: 25px;
    color: white;
    font-weight: bold;
    text-align: center;
`;

export const Title3 = styled.Text`
    font-size: 25px;
    color: green;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
`;

export const Desc = styled.Text`
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: justify;
`;

export const Button1 = styled.TouchableOpacity`
    background-color: white;
    border-radius: 16px;
    align-items: start;
    justify-content: start;
`;

export const Player = styled.View`
    width: 100%;
    height: 180px;
    align-items: center;
    justify-content: center;
    margin-bottom:48px;
`;