import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


export default function TopBar() {
    const [fontsLoaded] = useFonts({
        'Outfit-Bold': require("../assets/fonts/Outfit-Bold.ttf")
    })

    if (!fontsLoaded) {
        return <Text>noooo</Text>
    }

    return(
        <View style={styles.container}>
            <Pressable>
                <Feather name="settings" size={34} color="white" />
            </Pressable> 
            <Text style={styles.heading}>Habby</Text>
            <View style={styles.space} />
            <Pressable>
                <AntDesign name="pluscircleo" size={31} color="white" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "95%",
        marginTop: 40
    },
    heading: {
        color: "white",
        fontFamily: "Outfit-Bold",
        fontSize: 25,
        paddingTop: 3
    },
    space: {
        width: "45%"
    }
})