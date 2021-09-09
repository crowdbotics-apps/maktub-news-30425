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
      <View style={styles.View_349_3225}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/599a/20d7/be696dbe6db1a716d7b27915d9893be9"
          }}
          style={styles.ImageBackground_349_3226}
        />
        <View style={styles.View_349_3227}>
          <Text style={styles.Text_349_3227}>Write a Title</Text>
        </View>
      </View>
      <View style={styles.View_349_3228}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecba/6d01/4e537ce110218abf8d5294e8717b0ad9"
          }}
          style={styles.ImageBackground_349_3229}
        />
        <View style={styles.View_349_3232}>
          <View style={styles.View_349_3234}>
            <View style={styles.View_I349_3234_218_131}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I349_3234_218_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_I349_3234_218_133}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                }}
                style={styles.ImageBackground_I349_3234_218_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_I349_3234_218_141}
              />
              <View style={styles.View_I349_3234_218_146}>
                <View style={styles.View_I349_3234_218_146_218_148}>
                  <Text style={styles.Text_I349_3234_218_146_218_148}>
                    9:41
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_349_3235}>
          <Text style={styles.Text_349_3235}>Write a Classified </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/6989/2587d6407370401871aef1d6a1e4f934"
          }}
          style={styles.ImageBackground_349_3236}
        />
        <View style={styles.View_349_3238}>
          <Text style={styles.Text_349_3238}>Draft</Text>
        </View>
      </View>
      <View style={styles.View_349_3239}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecba/6d01/4e537ce110218abf8d5294e8717b0ad9"
          }}
          style={styles.ImageBackground_349_3240}
        />
        <View style={styles.View_349_3243}>
          <View style={styles.View_349_3245}>
            <View style={styles.View_I349_3245_218_131}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I349_3245_218_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_I349_3245_218_133}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                }}
                style={styles.ImageBackground_I349_3245_218_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_I349_3245_218_141}
              />
              <View style={styles.View_I349_3245_218_146}>
                <View style={styles.View_I349_3245_218_146_218_148}>
                  <Text style={styles.Text_I349_3245_218_146_218_148}>
                    9:41
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_349_3246}>
          <Text style={styles.Text_349_3246}>Write a Classified </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/6989/2587d6407370401871aef1d6a1e4f934"
          }}
          style={styles.ImageBackground_349_3247}
        />
        <View style={styles.View_349_3249}>
          <Text style={styles.Text_349_3249}>Draft</Text>
        </View>
      </View>
      <View style={styles.View_349_3250}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14a0/1cdc/d5b4297698c2fa96c12a8cc5cfabb472"
          }}
          style={styles.ImageBackground_349_3251}
        />
        <View style={styles.View_349_3252}>
          <Text style={styles.Text_349_3252}>Description</Text>
        </View>
      </View>
      <View style={styles.View_349_3253}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/599a/20d7/be696dbe6db1a716d7b27915d9893be9"
          }}
          style={styles.ImageBackground_349_3254}
        />
        <View style={styles.View_349_3255}>
          <Text style={styles.Text_349_3255}>Price</Text>
        </View>
      </View>
      <View style={styles.View_349_3256}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/599a/20d7/be696dbe6db1a716d7b27915d9893be9"
          }}
          style={styles.ImageBackground_349_3257}
        />
        <View style={styles.View_349_3258}>
          <Text style={styles.Text_349_3258}>
            Contact Method (Phone or Email)
          </Text>
        </View>
      </View>
      <View style={styles.View_349_3259}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/599a/20d7/be696dbe6db1a716d7b27915d9893be9"
          }}
          style={styles.ImageBackground_349_3260}
        />
        <View style={styles.View_349_3261}>
          <Text style={styles.Text_349_3261}>Category</Text>
        </View>
      </View>
      <View style={styles.View_349_3262}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b298/7798/6d502d3e1250ccf7480df3fd230bb8b8"
          }}
          style={styles.ImageBackground_349_3263}
        />
        <View style={styles.View_349_3264}>
          <Text style={styles.Text_349_3264}>Add images</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85fb/e545/209f234ea172848e9b831cb9229505be"
        }}
        style={styles.ImageBackground_349_3265}
      />
      <View style={styles.View_349_3267}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/394c/fdd2/397cd26fa343dbab61c0cd11af70cb34"
          }}
          style={styles.ImageBackground_349_3268}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0db1/644e/b8299c4feb4d7121f64b862a33586c46"
          }}
          style={styles.ImageBackground_349_3269}
        />
      </View>
      <View style={styles.View_349_3271}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b8a/6279/905f3cf705e1a63573c75636d482abee"
          }}
          style={styles.ImageBackground_349_3272}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/387b/5b06cf9c7f213aeb5595c441e1d2847a"
          }}
          style={styles.ImageBackground_349_3273}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61c/1e6d/d564473cd29dc485a90bf5a05549c8b7"
        }}
        style={styles.ImageBackground_349_3275}
      />
      <View style={styles.View_349_3277}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9450/a99b/52fc6ba966f77e3870cb35227d61ef83"
          }}
          style={styles.ImageBackground_349_3278}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef4/ea3e/02359cb5fa9d61668a565adb0aff8528"
          }}
          style={styles.ImageBackground_349_3279}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_349_3225: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_349_3226: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3227: {
    width: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_349_3227: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_3228: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%")
  },
  ImageBackground_349_3229: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3232: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3234: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I349_3234_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I349_3234_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_3234_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679639472336063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%")
  },
  ImageBackground_I349_3234_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I349_3234_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134568177937155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_I349_3234_218_146: {
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
  View_I349_3234_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737703%"),
    justifyContent: "flex-start"
  },
  Text_I349_3234_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3235: {
    width: wp("40.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("8.743169398907105%"),
    justifyContent: "flex-start"
  },
  Text_349_3235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3236: {
    width: wp("3.2%"),
    height: hp("2.8688524590163933%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_349_3238: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666666%"),
    top: hp("9.426229508196723%"),
    justifyContent: "flex-start"
  },
  Text_349_3238: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588234782218933,
    textTransform: "none"
  },
  View_349_3239: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%")
  },
  ImageBackground_349_3240: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3243: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3245: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I349_3245_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I349_3245_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_3245_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679639472336063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%")
  },
  ImageBackground_I349_3245_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I349_3245_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134568177937155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_I349_3245_218_146: {
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
  View_I349_3245_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737703%"),
    justifyContent: "flex-start"
  },
  Text_I349_3245_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3246: {
    width: wp("40.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("8.743169398907105%"),
    justifyContent: "flex-start"
  },
  Text_349_3246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3247: {
    width: wp("3.2%"),
    height: hp("2.8688524590163933%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_349_3249: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666666%"),
    top: hp("9.426229508196723%"),
    justifyContent: "flex-start"
  },
  Text_349_3249: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588234782218933,
    textTransform: "none"
  },
  View_349_3250: {
    width: wp("91.46666666666667%"),
    height: hp("12.295081967213115%"),
    top: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_349_3251: {
    width: wp("91.46666666666667%"),
    height: hp("12.295081967213115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3252: {
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.3032786885245855%"),
    justifyContent: "flex-start"
  },
  Text_349_3252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_3253: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("56.14754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_349_3254: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3255: {
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.868852459016388%"),
    justifyContent: "flex-start"
  },
  Text_349_3255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_3256: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("80.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_349_3257: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3258: {
    width: wp("50.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.8688524590164093%"),
    justifyContent: "flex-start"
  },
  Text_349_3258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_3259: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_349_3260: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3261: {
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_349_3261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_3262: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_349_3263: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3264: {
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("3.8251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_349_3264: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_349_3265: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%")
  },
  View_349_3267: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%")
  },
  ImageBackground_349_3268: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_349_3269: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%")
  },
  View_349_3271: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%")
  },
  ImageBackground_349_3272: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_349_3273: {
    width: wp("3.0168739318847657%"),
    height: hp("1.5455296782196546%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  ImageBackground_349_3275: {
    width: wp("5.6000015258789055%"),
    height: hp("1.6393446531452118%"),
    top: hp("71.58469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%")
  },
  View_349_3277: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%")
  },
  ImageBackground_349_3278: {
    width: wp("1%"),
    height: hp("0.5122950819672131%"),
    top: hp("0.7172131147540988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  ImageBackground_349_3279: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
