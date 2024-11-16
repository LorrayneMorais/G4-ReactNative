import { ImageBackground, View } from "react-native";
import { styles } from "./styles";
import backgroundImag from "../../../assets/background.png";
import { Header } from "../../components/Header";
import { SmallPet } from "../../components/SmallPet";
import { ToDoList } from "../../components/ToDoList";

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
