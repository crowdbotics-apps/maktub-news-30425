import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_397_2392}>
        <Text style={styles.Text_397_2392}>
          Brand new Tesla Model X. The new Ludacris update is bananas ! After
          having a test drive, you will not want to drive another car. We are
          open for showings Monday - Friday 9-5 .{" "}
        </Text>
      </View>
      <View style={styles.View_397_2393}>
        <Text style={styles.Text_397_2393}>
          Brand new Tesla Model X. The new Ludacris update is bananas ! After
          having a test drive, you will not want to drive another car. We are
          open for showings Monday - Friday 9-5 .{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828f/3684/af753783fb7dfb1fa01fc0d8415f085b"
        }}
        style={styles.ImageBackground_397_2394}
      />
      <View style={styles.View_397_2395}>
        <View style={styles.View_397_2397}>
          <View style={styles.View_I397_2397_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I397_2397_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I397_2397_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I397_2397_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I397_2397_218_141}
            />
            <View style={styles.View_I397_2397_218_146}>
              <View style={styles.View_I397_2397_218_146_218_148}>
                <Text style={styles.Text_I397_2397_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/6989/2587d6407370401871aef1d6a1e4f934"
        }}
        style={styles.ImageBackground_397_2398}
      />
      <View style={styles.View_397_2400}>
        <Text style={styles.Text_397_2400}>Tesla Model X</Text>
      </View>
      <View style={styles.View_397_2401}>
        <Text style={styles.Text_397_2401}>$60,000</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c607/cfb7/2c905f22b22c123ecb190bbbc2efa1a3"
        }}
        style={styles.ImageBackground_397_2402}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f56/f071/72d6830a3aae41d8a9d7e916d932d31b"
        }}
        style={styles.ImageBackground_397_2403}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f56/f071/72d6830a3aae41d8a9d7e916d932d31b"
        }}
        style={styles.ImageBackground_397_2404}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f56/f071/72d6830a3aae41d8a9d7e916d932d31b"
        }}
        style={styles.ImageBackground_397_2405}
      />
      <View style={styles.View_397_2406} />
      <View style={styles.View_397_2407}>
        <View style={styles.View_397_2408}>
          <Text style={styles.Text_397_2408}>Elon Musk</Text>
        </View>
        <View style={styles.View_397_2409}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c93/812b/8f66dd43fea975c0acc068f1bc92b2c8"
            }}
            style={styles.ImageBackground_397_2410}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a307/484c/0152d7a9c92e235d932ae55fe65d5f22"
            }}
            style={styles.ImageBackground_397_2411}
          />
          <View style={styles.View_397_2412}>
            <Text style={styles.Text_397_2412}>32 x 32</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_397_2413}>
        <View style={styles.View_397_2414} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_397_2415}
        />
        <View style={styles.View_397_2417}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4d4/c206/3ed83aa4b44fd37ac7df6ce2e6ee37f3"
            }}
            style={styles.ImageBackground_397_2418}
          />
          <View style={styles.View_397_2419}>
            <Text style={styles.Text_397_2419}>Message</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/004c/961a/f49d3dffc044df1aa5673f22c8151121"
          }}
          style={styles.ImageBackground_397_2420}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_397_2392: {
    width: wp("79.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("68.5792349726776%"),
    justifyContent: "flex-start"
  },
  Text_397_2392: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4050000011920929,
    textTransform: "none"
  },
  View_397_2393: {
    width: wp("79.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("94.67213114754098%"),
    justifyContent: "flex-start"
  },
  Text_397_2393: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4050000011920929,
    textTransform: "none"
  },
  ImageBackground_397_2394: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087433%"),
    resizeMode: "cover"
  },
  View_397_2395: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2397: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I397_2397_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I397_2397_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I397_2397_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679639472336067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I397_2397_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I397_2397_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I397_2397_218_146: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I397_2397_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I397_2397_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2398: {
    width: wp("3.2%"),
    height: hp("2.8688524590163933%"),
    top: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%")
  },
  View_397_2400: {
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("45.49180327868852%"),
    justifyContent: "flex-start"
  },
  Text_397_2400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2401: {
    width: wp("27.200000000000003%"),
    top: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    justifyContent: "flex-start"
  },
  Text_397_2401: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2402: {
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    top: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.666666666666664%")
  },
  ImageBackground_397_2403: {
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    top: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%")
  },
  ImageBackground_397_2404: {
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    top: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.666666666666664%")
  },
  ImageBackground_397_2405: {
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    top: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%")
  },
  View_397_2406: {
    width: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_397_2407: {
    width: wp("39.46666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("57.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2408: {
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_397_2408: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2409: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_397_2410: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_397_2411: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2412: {
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2412: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2413: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104.91803278688525%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2414: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  ImageBackground_397_2415: {
    width: wp("0.21538461049397786%"),
    height: hp("0.109289619114881%"),
    top: hp("4.398933785860649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.96410319010417%")
  },
  View_397_2417: {
    width: wp("75.73333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%")
  },
  ImageBackground_397_2418: {
    width: wp("75.73333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2419: {
    width: wp("20.04705810546875%"),
    top: hp("1.8981600068305937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.298038736979166%"),
    justifyContent: "flex-start"
  },
  Text_397_2419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_397_2420: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
