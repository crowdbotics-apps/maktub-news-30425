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
      <View style={styles.View_392_2158}>
        <View style={styles.View_392_2159}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00f8/bf4e/055ff0f30cce99d88ed71223b09fd3a5"
            }}
            style={styles.ImageBackground_392_2160}
          />
          <View style={styles.View_392_2161}>
            <Text style={styles.Text_392_2161}>Start writing your article</Text>
          </View>
        </View>
        <View style={styles.View_392_2162}>
          <Text style={styles.Text_392_2162}>Write article</Text>
        </View>
      </View>
      <View style={styles.View_392_2163}>
        <View style={styles.View_392_2164}>
          <Text style={styles.Text_392_2164}>Select category</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/442f/d29b/d599e1877044b95820e47e3bb9be562f"
          }}
          style={styles.ImageBackground_392_2165}
        />
        <View style={styles.View_392_2166}>
          <Text style={styles.Text_392_2166}>Select Category</Text>
        </View>
      </View>
      <View style={styles.View_392_2167}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1560/adcc/e4e8f08f90bcc2f4ceb5beb36d279e03"
          }}
          style={styles.ImageBackground_392_2168}
        />
        <View style={styles.View_392_2169}>
          <Text style={styles.Text_392_2169}>Publish now</Text>
        </View>
      </View>
      <View style={styles.View_392_2170}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecba/6d01/4e537ce110218abf8d5294e8717b0ad9"
          }}
          style={styles.ImageBackground_392_2171}
        />
        <View style={styles.View_392_2174}>
          <View style={styles.View_392_2176}>
            <View style={styles.View_I392_2176_218_131}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I392_2176_218_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_I392_2176_218_133}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                }}
                style={styles.ImageBackground_I392_2176_218_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_I392_2176_218_141}
              />
              <View style={styles.View_I392_2176_218_146}>
                <View style={styles.View_I392_2176_218_146_218_148}>
                  <Text style={styles.Text_I392_2176_218_146_218_148}>
                    9:41
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_392_2177}>
          <Text style={styles.Text_392_2177}>Write an article</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/6989/2587d6407370401871aef1d6a1e4f934"
          }}
          style={styles.ImageBackground_392_2178}
        />
        <View style={styles.View_392_2180}>
          <Text style={styles.Text_392_2180}>Draft</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61c/1e6d/d564473cd29dc485a90bf5a05549c8b7"
        }}
        style={styles.ImageBackground_392_2181}
      />
      <View style={styles.View_392_2183}>
        <View style={styles.View_392_2184} />
        <View style={styles.View_392_2185}>
          <Text style={styles.Text_392_2185}>Add Image</Text>
        </View>
        <View style={styles.View_392_2213}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9450/a99b/52fc6ba966f77e3870cb35227d61ef83"
            }}
            style={styles.ImageBackground_392_2214}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef4/ea3e/02359cb5fa9d61668a565adb0aff8528"
            }}
            style={styles.ImageBackground_392_2215}
          />
        </View>
      </View>
      <View style={styles.View_392_2192}>
        <Text style={styles.Text_392_2192}>Add Featured Image</Text>
      </View>
      <View style={styles.View_392_2193}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/599a/20d7/be696dbe6db1a716d7b27915d9893be9"
          }}
          style={styles.ImageBackground_392_2194}
        />
        <View style={styles.View_392_2195}>
          <Text style={styles.Text_392_2195}>Write a Title</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("115.30054644808743%") },
  View_392_2158: {
    width: wp("91.46666666666667%"),
    height: hp("33.7431693989071%"),
    top: hp("60.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  View_392_2159: {
    width: wp("91.46666666666667%"),
    height: hp("29.23497267759563%"),
    top: hp("4.508196721311471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_392_2160: {
    width: wp("91.46666666666667%"),
    height: hp("29.23497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2161: {
    width: wp("37.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_392_2161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_392_2162: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_2162: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_392_2163: {
    width: wp("91.46666666666667%"),
    height: hp("10.10928961748634%"),
    top: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_392_2164: {
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_392_2164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_392_2165: {
    width: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2166: {
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.284153005464482%"),
    justifyContent: "flex-start"
  },
  Text_392_2166: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_392_2167: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("102.86885245901641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_392_2168: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2169: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("2.322404371584682%"),
    justifyContent: "flex-start"
  },
  Text_392_2169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_392_2170: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_392_2171: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2174: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2176: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I392_2176_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I392_2176_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I392_2176_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679639472336067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I392_2176_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I392_2176_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I392_2176_218_146: {
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
  View_I392_2176_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I392_2176_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_2177: {
    width: wp("44.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("8.743169398907105%"),
    justifyContent: "flex-start"
  },
  Text_392_2177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_392_2178: {
    width: wp("3.2%"),
    height: hp("2.8688524590163933%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_392_2180: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("9.289617486338798%"),
    justifyContent: "flex-start"
  },
  Text_392_2180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588234782218933,
    textTransform: "none"
  },
  ImageBackground_392_2181: {
    width: wp("5.6000015258789055%"),
    height: hp("1.6393446531452118%"),
    top: hp("53.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%")
  },
  View_392_2183: {
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
  View_392_2184: {
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
  View_392_2185: {
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6.147540983606554%"),
    justifyContent: "flex-start"
  },
  Text_392_2185: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_2213: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%")
  },
  ImageBackground_392_2214: {
    width: wp("1%"),
    height: hp("0.5122950819672131%"),
    top: hp("0.7172131147540952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  ImageBackground_392_2215: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2192: {
    width: wp("47.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("17.62295081967213%"),
    justifyContent: "flex-start"
  },
  Text_392_2192: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_392_2193: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%")
  },
  ImageBackground_392_2194: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_392_2195: {
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_392_2195: {
    color: "rgba(0, 0, 0, 1)",
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
