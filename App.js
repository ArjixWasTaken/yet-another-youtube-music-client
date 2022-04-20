import * as React from "react";

import { SafeAreaView } from "react-native";
import PlayerUI from "./screens/PlayerUI";
export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView
                style={{
                    paddingTop: "10%",
                }}
            >
                <PlayerUI />
            </SafeAreaView>
        );
    }
}
