import { ImageBackground, View } from "react-native";
import { styles } from "./styles";
import backgroundImag from "../../../assets/background.png";
import { Header } from "../../components/Header";
import { SmallPet } from "../../components/SmallPet";
import { ToDoList } from "../../components/ToDoList";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/navigation/types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Tarefas">;

export const Tarefas = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImag} style={styles.backgroundImage} resizeMode="cover">
                <Header />
                <SmallPet />
                <ToDoList />
            </ImageBackground>
        </View>
    );
}
