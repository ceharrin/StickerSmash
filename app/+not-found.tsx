import { View, StyleSheet } from "react-native";
import {Link, Stack} from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen name="not-found" options={{title: "Not Found"}}/>
            <View style={styles.container}>
                <Link href={"/"} style={styles.button}>Go to home screen</Link>
            </View>
            </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    button: {
        color: "#fff",
        fontSize: 20,
        textDecorationLine: "underline",
    },
});