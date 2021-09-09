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
      <View style={styles.View_380_2503}>
        <View style={styles.View_380_2504}>
          <View style={styles.View_380_2505} />
        </View>
      </View>
      <View style={styles.View_380_2506}>
        <Text style={styles.Text_380_2506}>or</Text>
      </View>
      <View style={styles.View_380_2507}>
        <Text style={styles.Text_380_2507}>Maktoub</Text>
      </View>
      <View style={styles.View_380_2508}>
        <View style={styles.View_380_2509} />
        <View style={styles.View_380_2510}>
          <Text style={styles.Text_380_2510}>Sign Up</Text>
        </View>
        <View style={styles.View_380_2511} />
        <View style={styles.View_380_2512}>
          <Text style={styles.Text_380_2512}>Sign In</Text>
        </View>
        <View style={styles.View_380_2513} />
      </View>
      <View style={styles.View_380_2523}>
        <View style={styles.View_380_2525}>
          <View style={styles.View_I380_2525_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I380_2525_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I380_2525_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I380_2525_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I380_2525_218_141}
            />
            <View style={styles.View_I380_2525_218_146}>
              <View style={styles.View_I380_2525_218_146_218_148}>
                <Text style={styles.Text_I380_2525_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_380_2526}>
        <View style={styles.View_380_2527} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0910/6585/a65cfe0872d472b5c181063b1010fc91"
          }}
          style={styles.ImageBackground_380_2528}
        />
        <View style={styles.View_380_2530}>
          <Text style={styles.Text_380_2530}>Username</Text>
        </View>
      </View>
      <View style={styles.View_380_2531}>
        <View style={styles.View_380_2532} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e949/3469/c9bb014357e63c24abf23150ab561f25"
          }}
          style={styles.ImageBackground_380_2533}
        />
        <View style={styles.View_380_2535}>
          <Text style={styles.Text_380_2535}>Email Adress</Text>
        </View>
      </View>
      <View style={styles.View_380_2536}>
        <View style={styles.View_380_2537} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac23/8762/04aa7af3b5ca20400dcd4a3c424b5e84"
          }}
          style={styles.ImageBackground_380_2538}
        />
        <View style={styles.View_380_2540}>
          <Text style={styles.Text_380_2540}>Password</Text>
        </View>
      </View>
      <View style={styles.View_380_2541}>
        <View style={styles.View_380_2542} />
        <View style={styles.View_380_2543}>
          <Text style={styles.Text_380_2543}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_380_2561}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e8b/4675/39c4e30ba16d638939c76a78ba91a128"
          }}
          style={styles.ImageBackground_380_2562}
        />
        <View style={styles.View_380_2563}>
          <Text style={styles.Text_380_2563}>Sign Up with Facebook</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/1558/1d2bdab4ba6596edd9559f53cad39e44"
          }}
          style={styles.ImageBackground_380_2564}
        />
      </View>
      <View style={styles.View_380_2566}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1096/eaaf/daa1268f005fbfb8653098fce1f72c35"
          }}
          style={styles.ImageBackground_380_2567}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3522/13a6/0d3c6cafe05a2d3653576f0b0ef6755b"
          }}
          style={styles.ImageBackground_380_2568}
        />
      </View>
      <View style={styles.View_380_2569}>
        <Text style={styles.Text_380_2569}>Sign Up with Google</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_380_2503: {
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
  View_380_2504: {
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
  View_380_2505: {
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
  View_380_2506: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_380_2506: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2507: {
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
  Text_380_2507: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2508: {
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
  View_380_2509: {
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
  View_380_2510: {
    width: wp("30.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_380_2510: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2511: {
    width: wp("0.5333333333333333%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_380_2512: {
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.33333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_380_2512: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2513: {
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
  View_380_2523: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%")
  },
  View_380_2525: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I380_2525_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I380_2525_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I380_2525_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.367943101893357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%")
  },
  ImageBackground_I380_2525_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I380_2525_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I380_2525_218_146: {
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
  View_I380_2525_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I380_2525_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2526: {
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
  View_380_2527: {
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
  ImageBackground_380_2528: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  View_380_2530: {
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
  Text_380_2530: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2531: {
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
  View_380_2532: {
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
  ImageBackground_380_2533: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  View_380_2535: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_380_2535: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2536: {
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
  View_380_2537: {
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
  ImageBackground_380_2538: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  View_380_2540: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_380_2540: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2541: {
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
  View_380_2542: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(108, 24, 187, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_380_2543: {
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
  Text_380_2543: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_380_2561: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_380_2562: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_380_2563: {
    width: wp("54.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_380_2563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.47999998927116394,
    textTransform: "none"
  },
  ImageBackground_380_2564: {
    width: wp("6.233043416341146%"),
    height: hp("3.400121490812041%"),
    top: hp("2.125076127182588%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8568115234374982%")
  },
  View_380_2566: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("40.16393442622951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_380_2567: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_380_2568: {
    width: wp("6.233043416341146%"),
    minWidth: wp("6.233043416341146%"),
    height: hp("3.400121490812041%"),
    minHeight: hp("3.400121490812041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8568115234374982%"),
    top: hp("1.8417327130427097%"),
    resizeMode: "cover"
  },
  View_380_2569: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("42.349726775956285%"),
    justifyContent: "flex-start"
  },
  Text_380_2569: {
    color: "rgba(102, 108, 142, 1)",
    fontSize: 13,
    fontWeight: "600",
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
