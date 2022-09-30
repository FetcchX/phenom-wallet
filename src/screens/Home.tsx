import { ImageBackground, ScrollView, View } from "react-native";
import { HomeTop } from "../componet/HomeTop";
import { Header } from "../componet/shared/header";
import { Safe } from "../componet/shared/safe";

export const Main = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ImageBackground source={require("../../assets/v.png")}>
        <Safe>
          <Header />
          <View>
            <HomeTop navigation={navigation} />
          </View>
        </Safe>
      </ImageBackground>
    </ScrollView>
  );
};