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
      <View style={styles.View_397_2105}>
        <View style={styles.View_397_2106}>
          <View style={styles.View_397_2107} />
        </View>
      </View>
      <View style={styles.View_397_2108}>
        <Text style={styles.Text_397_2108}>or</Text>
      </View>
      <View style={styles.View_397_2109}>
        <Text style={styles.Text_397_2109}>Maktoub</Text>
      </View>
      <View style={styles.View_397_2110}>
        <View style={styles.View_397_2111} />
        <View style={styles.View_397_2112}>
          <Text style={styles.Text_397_2112}>Sign Up</Text>
        </View>
        <View style={styles.View_397_2113} />
        <View style={styles.View_397_2114}>
          <Text style={styles.Text_397_2114}>Sign In</Text>
        </View>
        <View style={styles.View_397_2115} />
      </View>
      <View style={styles.View_397_2116}>
        <View style={styles.View_397_2117} />
        <View style={styles.View_397_2118}>
          <Text style={styles.Text_397_2118}>Sign Up with Google</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bc4/41a8/395ef30ad9f3a4177a17720addec5d96"
          }}
          style={styles.ImageBackground_397_2119}
        />
      </View>
      <View style={styles.View_397_2120}>
        <View style={styles.View_397_2121} />
        <View style={styles.View_397_2122}>
          <Text style={styles.Text_397_2122}>Sign Up with Facebook</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c000/e58d/e065ab69997d57cf01714a28299bc5fa"
        }}
        style={styles.ImageBackground_397_2123}
      />
      <View style={styles.View_397_2125}>
        <View style={styles.View_397_2127}>
          <View style={styles.View_I397_2127_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I397_2127_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I397_2127_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I397_2127_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I397_2127_218_141}
            />
            <View style={styles.View_I397_2127_218_146}>
              <View style={styles.View_I397_2127_218_146_218_148}>
                <Text style={styles.Text_I397_2127_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_397_2128}>
        <View style={styles.View_397_2129} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0910/6585/a65cfe0872d472b5c181063b1010fc91"
          }}
          style={styles.ImageBackground_397_2130}
        />
        <View style={styles.View_397_2132}>
          <Text style={styles.Text_397_2132}>Username</Text>
        </View>
      </View>
      <View style={styles.View_397_2133}>
        <View style={styles.View_397_2134} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e949/3469/c9bb014357e63c24abf23150ab561f25"
          }}
          style={styles.ImageBackground_397_2135}
        />
        <View style={styles.View_397_2137}>
          <Text style={styles.Text_397_2137}>Email Adress</Text>
        </View>
      </View>
      <View style={styles.View_397_2138}>
        <View style={styles.View_397_2139} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac23/8762/04aa7af3b5ca20400dcd4a3c424b5e84"
          }}
          style={styles.ImageBackground_397_2140}
        />
        <View style={styles.View_397_2142}>
          <Text style={styles.Text_397_2142}>Password</Text>
        </View>
      </View>
      <View style={styles.View_397_2143}>
        <View style={styles.View_397_2144} />
        <View style={styles.View_397_2145}>
          <Text style={styles.Text_397_2145}>Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_397_2105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546447%")
  },
  View_397_2106: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_397_2107: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(34, 36, 47, 1)"
  },
  View_397_2108: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333333%"),
    top: hp("52.86885245901639%"),
    justifyContent: "flex-start"
  },
  Text_397_2108: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2109: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("10.51912568306011%"),
    justifyContent: "flex-start"
  },
  Text_397_2109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2110: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2111: {
    width: wp("45.6%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 144, 144, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 7
  },
  View_397_2112: {
    width: wp("30.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2112: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2113: {
    width: wp("0.5333333333333333%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_397_2114: {
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.33333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2115: {
    width: wp("45.6%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.266666666666666%"),
    backgroundColor: "rgba(146, 144, 144, 1)",
    borderColor: "rgba(146, 144, 144, 1)",
    borderWidth: 7
  },
  View_397_2116: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_397_2117: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(243, 244, 246, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_397_2118: {
    width: wp("45.33333333333333%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    justifyContent: "flex-start"
  },
  Text_397_2118: {
    color: "rgba(102, 108, 142, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2119: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    resizeMode: "cover"
  },
  View_397_2120: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_397_2121: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(243, 244, 246, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_397_2122: {
    width: wp("51.2%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.799999999999997%"),
    justifyContent: "flex-start"
  },
  Text_397_2122: {
    color: "rgba(102, 108, 142, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2123: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  View_397_2125: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%")
  },
  View_397_2127: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I397_2127_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I397_2127_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I397_2127_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.367943101893357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%")
  },
  ImageBackground_I397_2127_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18502604166667%")
  },
  ImageBackground_I397_2127_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I397_2127_218_146: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I397_2127_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I397_2127_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2128: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("58.333333333333336%")
  },
  View_397_2129: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_397_2130: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  View_397_2132: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_397_2132: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2133: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("67.4863387978142%")
  },
  View_397_2134: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_397_2135: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  View_397_2137: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_397_2137: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2138: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("77.45901639344262%")
  },
  View_397_2139: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_397_2140: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  View_397_2142: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_397_2142: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2143: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("87.43169398907104%")
  },
  View_397_2144: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 194, 42, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_397_2145: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_397_2145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
