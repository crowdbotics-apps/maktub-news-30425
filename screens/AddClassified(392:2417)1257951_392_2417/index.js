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
      <View style={styles.View_392_2418}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d5/5385/cea334ec528b908bfaa3b4d338bd3179"
          }}
          style={styles.ImageBackground_392_2419}
        />
        <View style={styles.View_392_2420}>
          <Text style={styles.Text_392_2420}>Write a Title</Text>
        </View>
      </View>
      <View style={styles.View_392_2421}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecba/6d01/4e537ce110218abf8d5294e8717b0ad9"
          }}
          style={styles.ImageBackground_392_2422}
        />
        <View style={styles.View_392_2425}>
          <View style={styles.View_392_2427}>
            <View style={styles.View_I392_2427_218_131}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I392_2427_218_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_I392_2427_218_133}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                }}
                style={styles.ImageBackground_I392_2427_218_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_I392_2427_218_141}
              />
              <View style={styles.View_I392_2427_218_146}>
                <View style={styles.View_I392_2427_218_146_218_148}>
                  <Text style={styles.Text_I392_2427_218_146_218_148}>
                    9:41
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_392_2428}>
          <Text style={styles.Text_392_2428}>Write a Classified </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/6989/2587d6407370401871aef1d6a1e4f934"
          }}
          style={styles.ImageBackground_392_2429}
        />
        <View style={styles.View_392_2431}>
          <Text style={styles.Text_392_2431}>Draft</Text>
        </View>
      </View>
      <View style={styles.View_392_2432}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecba/6d01/4e537ce110218abf8d5294e8717b0ad9"
          }}
          style={styles.ImageBackground_392_2433}
        />
        <View style={styles.View_392_2436}>
          <View style={styles.View_392_2438}>
            <View style={styles.View_I392_2438_218_131}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I392_2438_218_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_I392_2438_218_133}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                }}
                style={styles.ImageBackground_I392_2438_218_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_I392_2438_218_141}
              />
              <View style={styles.View_I392_2438_218_146}>
                <View style={styles.View_I392_2438_218_146_218_148}>
                  <Text style={styles.Text_I392_2438_218_146_218_148}>
                    9:41
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_392_2439}>
          <Text style={styles.Text_392_2439}>Write a Classified </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/6989/2587d6407370401871aef1d6a1e4f934"
          }}
          style={styles.ImageBackground_392_2440}
        />
        <View style={styles.View_392_2442}>
          <Text style={styles.Text_392_2442}>Draft</Text>
        </View>
      </View>
      <View style={styles.View_392_2443}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e82/0e37/6e42422e1199f055d90d49084843f699"
          }}
          style={styles.ImageBackground_392_2444}
        />
        <View style={styles.View_392_2445}>
          <Text style={styles.Text_392_2445}>Description</Text>
        </View>
      </View>
      <View style={styles.View_392_2446}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d5/5385/cea334ec528b908bfaa3b4d338bd3179"
          }}
          style={styles.ImageBackground_392_2447}
        />
        <View style={styles.View_392_2448}>
          <Text style={styles.Text_392_2448}>Price</Text>
        </View>
      </View>
      <View style={styles.View_392_2449}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d918/978a/2ff5f18ea5e0195afc48b5de8d8bbfd5"
          }}
          style={styles.ImageBackground_392_2450}
        />
        <View style={styles.View_392_2451}>
          <Text style={styles.Text_392_2451}>
            Contact Method (Phone or Email)
          </Text>
        </View>
      </View>
      <View style={styles.View_392_2452}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d5/5385/cea334ec528b908bfaa3b4d338bd3179"
          }}
          style={styles.ImageBackground_392_2453}
        />
        <View style={styles.View_392_2454}>
          <Text style={styles.Text_392_2454}>Category</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a71/8d0f/0f7694b4825687a43e1cc9616d9d0035"
        }}
        style={styles.ImageBackground_392_2455}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f015/7983/5e5fcdfece316df4f5417513ca5b33c1"
        }}
        style={styles.ImageBackground_392_2457}
      />
      <View style={styles.View_392_2459}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b8a/6279/905f3cf705e1a63573c75636d482abee"
          }}
          style={styles.ImageBackground_392_2460}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/387b/5b06cf9c7f213aeb5595c441e1d2847a"
          }}
          style={styles.ImageBackground_392_2461}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61c/1e6d/d564473cd29dc485a90bf5a05549c8b7"
        }}
        style={styles.ImageBackground_392_2463}
      />
      <View style={styles.View_392_2465}>
        <View style={styles.View_392_2466} />
        <View style={styles.View_392_2467}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d3f/0c15/9d01c5420c5b6d3c41337a8fb2d9214f"
            }}
            style={styles.ImageBackground_392_2468}
          />
        </View>
      </View>
      <View style={styles.View_392_2470}>
        <Text style={styles.Text_392_2470}>Add Images</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_392_2418: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_392_2419: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2420: {
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_392_2420: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_392_2421: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%")
  },
  ImageBackground_392_2422: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2425: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2427: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I392_2427_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I392_2427_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I392_2427_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679639472336063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%")
  },
  ImageBackground_I392_2427_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I392_2427_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134568177937155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I392_2427_218_146: {
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
  View_I392_2427_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737703%"),
    justifyContent: "flex-start"
  },
  Text_I392_2427_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_2428: {
    width: wp("40.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("8.743169398907105%"),
    justifyContent: "flex-start"
  },
  Text_392_2428: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_392_2429: {
    width: wp("3.2%"),
    height: hp("2.8688524590163933%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_392_2431: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666666%"),
    top: hp("9.426229508196723%"),
    justifyContent: "flex-start"
  },
  Text_392_2431: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588234782218933,
    textTransform: "none"
  },
  View_392_2432: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%")
  },
  ImageBackground_392_2433: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2436: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2438: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I392_2438_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I392_2438_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I392_2438_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679639472336063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%")
  },
  ImageBackground_I392_2438_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I392_2438_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134568177937155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I392_2438_218_146: {
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
  View_I392_2438_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737703%"),
    justifyContent: "flex-start"
  },
  Text_I392_2438_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_2439: {
    width: wp("40.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("8.743169398907105%"),
    justifyContent: "flex-start"
  },
  Text_392_2439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_392_2440: {
    width: wp("3.2%"),
    height: hp("2.8688524590163933%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_392_2442: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666666%"),
    top: hp("9.426229508196723%"),
    justifyContent: "flex-start"
  },
  Text_392_2442: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588234782218933,
    textTransform: "none"
  },
  View_392_2443: {
    width: wp("91.46666666666667%"),
    height: hp("12.295081967213115%"),
    top: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_392_2444: {
    width: wp("91.46666666666667%"),
    height: hp("12.295081967213115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2445: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("4.3032786885245855%"),
    justifyContent: "flex-start"
  },
  Text_392_2445: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_392_2446: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("56.14754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_392_2447: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2448: {
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.868852459016388%"),
    justifyContent: "flex-start"
  },
  Text_392_2448: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_392_2449: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("80.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_392_2450: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2451: {
    width: wp("68.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.8688524590164093%"),
    justifyContent: "flex-start"
  },
  Text_392_2451: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_392_2452: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  ImageBackground_392_2453: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2454: {
    width: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_392_2454: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  ImageBackground_392_2455: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_392_2457: {
    width: wp("16%"),
    height: hp("5.46448087431694%"),
    top: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%")
  },
  View_392_2459: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%")
  },
  ImageBackground_392_2460: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_392_2461: {
    width: wp("3.0168739318847657%"),
    height: hp("1.5455296782196546%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  ImageBackground_392_2463: {
    width: wp("5.6000015258789055%"),
    height: hp("1.6393446531452118%"),
    top: hp("71.58469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%")
  },
  View_392_2465: {
    width: wp("16%"),
    height: hp("5.46448087431694%"),
    top: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_392_2466: {
    width: wp("16%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(97, 75, 222, 1)",
    borderColor: "rgba(200, 199, 204, 1)",
    borderWidth: 2
  },
  View_392_2467: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%")
  },
  ImageBackground_392_2468: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2470: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.733333333333334%"),
    top: hp("20.76502732240437%"),
    justifyContent: "flex-start"
  },
  Text_392_2470: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
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
