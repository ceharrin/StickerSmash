import {StyleSheet, View} from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import {useState} from "react";

const PlaceHolderImage = require("@/assets/images/background-image.png");

export default function Index() {

    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert("No image selected");
        }
    }

    // @ts-ignore
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceHolderImage} selectedImage={selectedImage}/>
            </View>
            <View style={styles.footerContainer}>
                <Button label={"Choose a photo"} theme={"primary"} onPress={pickImageAsync}/>
                <Button label={"Use this photo"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});