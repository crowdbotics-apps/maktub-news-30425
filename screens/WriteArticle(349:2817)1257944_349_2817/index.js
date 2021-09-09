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
      <View style={styles.View_349_2818}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dac/9d7c/1c531db0cc2a50f46034c16f613dcc17"
          }}
          style={styles.ImageBackground_349_2819}
        />
        <View style={styles.View_349_2821}>
          <Text style={styles.Text_349_2821}>Write article</Text>
        </View>
      </View>
      <View style={styles.View_349_2822}>
        <View style={styles.View_349_2823}>
          <Text style={styles.Text_349_2823}>Select category</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1709/a6b2/e734ea8782c234da1f14e78ef1138d5b"
          }}
          style={styles.ImageBackground_349_2824}
        />
        <View style={styles.View_349_2825}>
          <Text style={styles.Text_349_2825}>Select Category</Text>
        </View>
      </View>
      <View style={styles.View_349_2826}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1560/adcc/e4e8f08f90bcc2f4ceb5beb36d279e03"
          }}
          style={styles.ImageBackground_349_2827}
        />
        <View style={styles.View_349_2828}>
          <Text style={styles.Text_349_2828}>Publish now</Text>
        </View>
      </View>
      <View style={styles.View_349_2829}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecba/6d01/4e537ce110218abf8d5294e8717b0ad9"
          }}
          style={styles.ImageBackground_349_2830}
        />
        <View style={styles.View_349_2833}>
          <View style={styles.View_349_2835}>
            <View style={styles.View_I349_2835_218_131}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I349_2835_218_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_I349_2835_218_133}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                }}
                style={styles.ImageBackground_I349_2835_218_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_I349_2835_218_141}
              />
              <View style={styles.View_I349_2835_218_146}>
                <View style={styles.View_I349_2835_218_146_218_148}>
                  <Text style={styles.Text_I349_2835_218_146_218_148}>
                    9:41
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_349_2836}>
          <Text style={styles.Text_349_2836}>Write an article</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/6989/2587d6407370401871aef1d6a1e4f934"
          }}
          style={styles.ImageBackground_349_2837}
        />
        <View style={styles.View_349_2839}>
          <Text style={styles.Text_349_2839}>Draft</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a8/a3de/a7ee081c4cfce664bf9d7e68d2fa04f6"
        }}
        style={styles.ImageBackground_349_2840}
      />
      <View style={styles.View_349_2842}>
        <View style={styles.View_349_2843} />
        <View style={styles.View_349_2844}>
          <Text style={styles.Text_349_2844}>Add Image</Text>
        </View>
        <View style={styles.View_349_2845}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9450/a99b/52fc6ba966f77e3870cb35227d61ef83"
            }}
            style={styles.ImageBackground_349_2846}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef4/ea3e/02359cb5fa9d61668a565adb0aff8528"
            }}
            style={styles.ImageBackground_349_2847}
          />
        </View>
      </View>
      <View style={styles.View_349_2850}>
        <Text style={styles.Text_349_2850}>Add Featured Image</Text>
      </View>
      <View style={styles.View_349_2851}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b55f/5b65/b66ec03edb06199f59e3c26035249b4a"
          }}
          style={styles.ImageBackground_349_2852}
        />
        <View style={styles.View_349_2853}>
          <Text style={styles.Text_349_2853}>Write a Title</Text>
        </View>
      </View>
      <View style={styles.View_349_2854}>
        <Text style={styles.Text_349_2854}>
          Who can resist the mouth-watering pictures in a cookbook? Who doesn’t
          have childhood memories of the fragrances that wafted from the kitchen
          on holidays, and even on regular, ordinary days? Spices, bread baking,
          cookies fresh out of the oven – all these trigger{" "}
        </Text>
      </View>
      <View style={styles.View_349_2884}>
        <Text style={styles.Text_349_2884}>Title</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("115.30054644808743%") },
  View_349_2818: {
    width: wp("94.66666666666667%"),
    height: hp("33.87978142076503%"),
    top: hp("55.32786885245902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  ImageBackground_349_2819: {
    width: wp("94.66666666666667%"),
    height: hp("29.23497267759563%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2821: {
    width: wp("28.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_2821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_349_2822: {
    width: wp("94.66666666666667%"),
    height: hp("9.426229508196721%"),
    top: hp("90.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_349_2823: {
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_2823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_349_2824: {
    width: wp("94.66666666666667%"),
    height: hp("5.46448087431694%"),
    top: hp("3.961748633879793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2825: {
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_349_2825: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_349_2826: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("102.86885245901641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_349_2827: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2828: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("2.322404371584682%"),
    justifyContent: "flex-start"
  },
  Text_349_2828: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_349_2829: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_349_2830: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2833: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2835: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I349_2835_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I349_2835_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2835_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679639472336067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I349_2835_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I349_2835_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I349_2835_218_146: {
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
  View_I349_2835_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I349_2835_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_2836: {
    width: wp("47.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("8.60655737704918%"),
    justifyContent: "flex-start"
  },
  Text_349_2836: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_2837: {
    width: wp("3.2%"),
    height: hp("2.8688524590163933%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_349_2839: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("9.426229508196721%"),
    justifyContent: "flex-start"
  },
  Text_349_2839: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588234782218933,
    textTransform: "none"
  },
  ImageBackground_349_2840: {
    width: wp("5.6000015258789055%"),
    height: hp("1.6393446531452118%"),
    top: hp("96.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%")
  },
  View_349_2842: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_2843: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(200, 199, 204, 1)",
    borderWidth: 2
  },
  View_349_2844: {
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("6.147540983606554%"),
    justifyContent: "flex-start"
  },
  Text_349_2844: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_2845: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%")
  },
  ImageBackground_349_2846: {
    width: wp("1%"),
    height: hp("0.5122950819672131%"),
    top: hp("0.7172131147540952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  ImageBackground_349_2847: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2850: {
    width: wp("47.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("18.169398907103826%"),
    justifyContent: "flex-start"
  },
  Text_349_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_2851: {
    width: wp("94.66666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  ImageBackground_349_2852: {
    width: wp("94.66666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2853: {
    width: wp("25.115645345052084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.415934244791667%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_349_2853: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_2854: {
    width: wp("89.27000325520834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("62.295081967213115%"),
    justifyContent: "flex-start"
  },
  Text_349_2854: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_2884: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("36.33879781420765%"),
    justifyContent: "flex-start"
  },
  Text_349_2884: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
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
