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
      <View style={styles.View_388_2140}>
        <Text style={styles.Text_388_2140}>San Diego</Text>
      </View>
      <View style={styles.View_388_2141}>
        <Text style={styles.Text_388_2141}>Events</Text>
      </View>
      <View style={styles.View_388_2142}>
        <Text style={styles.Text_388_2142}>Cars</Text>
      </View>
      <View style={styles.View_388_2143}>
        <View style={styles.View_388_2145}>
          <View style={styles.View_I388_2145_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I388_2145_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I388_2145_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I388_2145_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I388_2145_218_141}
            />
            <View style={styles.View_I388_2145_218_146}>
              <View style={styles.View_I388_2145_218_146_218_148}>
                <Text style={styles.Text_I388_2145_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_388_2146}>
        <View style={styles.View_388_2147} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb77/a6db/edfc42fe4e0accebc12d6c9ecf3f8036"
          }}
          style={styles.ImageBackground_388_2148}
        />
        <View style={styles.View_388_2149}>
          <Text style={styles.Text_388_2149}>Spring Festival</Text>
        </View>
        <View style={styles.View_388_2150}>
          <View style={styles.View_388_2151} />
          <View style={styles.View_388_2153}>
            <Text style={styles.Text_388_2153}>$50</Text>
          </View>
        </View>
        <View style={styles.View_388_2154}>
          <Text style={styles.Text_388_2154}>July 11 2021 </Text>
        </View>
      </View>
      <View style={styles.View_388_2155}>
        <View style={styles.View_388_2156} />
        <View style={styles.View_388_2157}>
          <Text style={styles.Text_388_2157}>Tesla Model X</Text>
        </View>
        <View style={styles.View_388_2158}>
          <View style={styles.View_388_2159} />
          <View style={styles.View_388_2161}>
            <Text style={styles.Text_388_2161}>$60,000</Text>
          </View>
        </View>
        <View style={styles.View_388_2162}>
          <Text style={styles.Text_388_2162}>July 11 2021 </Text>
        </View>
      </View>
      <View style={styles.View_388_2163}>
        <View style={styles.View_388_2164} />
        <View style={styles.View_388_2165}>
          <Text style={styles.Text_388_2165}>Lamborghini Urus</Text>
        </View>
        <View style={styles.View_388_2166}>
          <View style={styles.View_388_2167} />
          <View style={styles.View_388_2169}>
            <Text style={styles.Text_388_2169}>$200,000</Text>
          </View>
        </View>
        <View style={styles.View_388_2170}>
          <Text style={styles.Text_388_2170}>July 9 2021 </Text>
        </View>
      </View>
      <View style={styles.View_388_2171}>
        <View style={styles.View_388_2172} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb77/a6db/edfc42fe4e0accebc12d6c9ecf3f8036"
          }}
          style={styles.ImageBackground_388_2173}
        />
        <View style={styles.View_388_2174}>
          <Text style={styles.Text_388_2174}>Blue Moon Dance</Text>
        </View>
        <View style={styles.View_388_2175}>
          <View style={styles.View_388_2176} />
          <View style={styles.View_388_2178}>
            <Text style={styles.Text_388_2178}>$70</Text>
          </View>
        </View>
        <View style={styles.View_388_2179}>
          <Text style={styles.Text_388_2179}>July 25 2021 </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ee9/d0a8/6e3b70c3647b342aa788cc63eaddeaec"
        }}
        style={styles.ImageBackground_388_2180}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cbd/7ca0/36eff581a46170328b805e6b27485c14"
        }}
        style={styles.ImageBackground_388_2181}
      />
      <View style={styles.View_388_2182}>
        <View style={styles.View_388_2183}>
          <View style={styles.View_388_2184}>
            <View style={styles.View_388_2185} />
            <View style={styles.View_388_2186}>
              <View style={styles.View_388_2187} />
              <View style={styles.View_388_2188} />
            </View>
            <View style={styles.View_388_2189}>
              <View style={styles.View_388_2190} />
              <View style={styles.View_388_2191}>
                <Text style={styles.Text_388_2191}>Account</Text>
              </View>
              <View style={styles.View_388_2192}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cf2/8101/d85cc3586797f970c86b85a7f14af7e7"
                  }}
                  style={styles.ImageBackground_388_2193}
                />
              </View>
            </View>
            <View style={styles.View_388_2198}>
              <View style={styles.View_388_2199} />
              <View style={styles.View_388_2200}>
                <Text style={styles.Text_388_2200}>Inbox</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7668/ecce/467249d2771e6d28ca14b035eebaf54b"
                }}
                style={styles.ImageBackground_388_2201}
              />
            </View>
            <View style={styles.View_388_2202}>
              <View style={styles.View_388_2203} />
              <View style={styles.View_388_2204}>
                <Text style={styles.Text_388_2204}>Create</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/571e/2e49d7d043234f7e304c316d9b00b734"
                }}
                style={styles.ImageBackground_388_2205}
              />
            </View>
            <View style={styles.View_388_2206}>
              <View style={styles.View_388_2207} />
              <View style={styles.View_388_2208}>
                <Text style={styles.Text_388_2208}>Classifieds</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4fb/986a/3c5cc23e3064efd2f50c850582f02fdb"
                }}
                style={styles.ImageBackground_388_2209}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a958/99d8/eb6e81f920e503a4217b6ce8b9124071"
          }}
          style={styles.ImageBackground_388_2210}
        />
        <View style={styles.View_388_2212}>
          <Text style={styles.Text_388_2212}>Home</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4fc/c4b6/5457c94f67e85e29220cb7659ad7fd99"
        }}
        style={styles.ImageBackground_388_2213}
      />
      <View style={styles.View_388_2214}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5911/5252/1a65402171f6b98bc0c2d743a832f25d"
          }}
          style={styles.ImageBackground_388_2215}
        />
        <View style={styles.View_388_2216}>
          <Text style={styles.Text_388_2216}>Houses</Text>
        </View>
      </View>
      <View style={styles.View_388_2217}>
        <Text style={styles.Text_388_2217}>Cars</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fcc/2d0a/ece977db9f881fd3d363c998056cb7d3"
        }}
        style={styles.ImageBackground_388_2218}
      />
      <View style={styles.View_388_2219}>
        <Text style={styles.Text_388_2219}>Jobs</Text>
      </View>
      <View style={styles.View_388_2220}>
        <Text style={styles.Text_388_2220}>Fashion</Text>
      </View>
      <View style={styles.View_388_2221}>
        <Text style={styles.Text_388_2221}>Sports</Text>
      </View>
      <View style={styles.View_388_2222}>
        <Text style={styles.Text_388_2222}>Furniture</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e53/11e3/7a493a5bbdfc487f4a6a7c88541a5a6d"
        }}
        style={styles.ImageBackground_388_2223}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad47/4ade/153bd547ffe49743c0b3ac675b17d72f"
        }}
        style={styles.ImageBackground_388_2224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41f8/ecfb/589b129c290204fd815f90e2b3a8a117"
        }}
        style={styles.ImageBackground_388_2225}
      />
      <View style={styles.View_388_2234}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e270/2248/8aa630d27505e8d732bd5a2deba54f36"
          }}
          style={styles.ImageBackground_388_2235}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3424/59ce/7b59089e25f52d232311c421b11cb9b6"
          }}
          style={styles.ImageBackground_388_2236}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb92/1077/ce3ca9ab1caa8ffd25ff89e2e05dcf84"
        }}
        style={styles.ImageBackground_395_2104}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_388_2140: {
    width: wp("34.93333333333333%"),
    top: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_388_2140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2141: {
    width: wp("34.93333333333333%"),
    top: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    justifyContent: "flex-start"
  },
  Text_388_2141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2142: {
    width: wp("34.93333333333333%"),
    top: hp("65.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_388_2142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2143: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_388_2145: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I388_2145_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I388_2145_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I388_2145_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679305946892075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I388_2145_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I388_2145_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_I388_2145_218_146: {
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
  View_I388_2145_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I388_2145_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2146: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("35.24590163934426%")
  },
  View_388_2147: {
    width: wp("40%"),
    height: hp("24.726775956284154%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_388_2148: {
    width: wp("40%"),
    height: hp("13.958185748324366%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_388_2149: {
    width: wp("37.333333333333336%"),
    top: hp("11.748633879781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "center"
  },
  Text_388_2149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2150: {
    width: wp("8.533333333333333%"),
    height: hp("3.0054644808743167%"),
    top: hp("18.032786885245905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%")
  },
  View_388_2151: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1.8420943796960358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261621093750001%")
  },
  View_388_2153: {
    width: wp("8.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_388_2153: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2154: {
    width: wp("18.933333333333334%"),
    top: hp("21.448087431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "flex-start"
  },
  Text_388_2154: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2155: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("70.49180327868852%")
  },
  View_388_2156: {
    width: wp("40%"),
    height: hp("24.726775956284154%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_388_2157: {
    width: wp("37.333333333333336%"),
    top: hp("11.748633879781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "center"
  },
  Text_388_2157: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2158: {
    width: wp("18.4%"),
    height: hp("3.0054644808743167%"),
    top: hp("18.032786885245898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%")
  },
  View_388_2159: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1.8421277322404421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261621093750001%")
  },
  View_388_2161: {
    width: wp("18.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_388_2161: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2162: {
    width: wp("22.666666666666664%"),
    top: hp("21.448087431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "flex-start"
  },
  Text_388_2162: {
    color: "rgba(167, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2163: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("70.49180327868852%")
  },
  View_388_2164: {
    width: wp("40%"),
    height: hp("24.726775956284154%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_388_2165: {
    width: wp("38.4%"),
    top: hp("11.748633879781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    justifyContent: "center"
  },
  Text_388_2165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2166: {
    width: wp("18.4%"),
    height: hp("3.0054644808743167%"),
    top: hp("18.032786885245898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%")
  },
  View_388_2167: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1.8421277322404421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261621093750001%")
  },
  View_388_2169: {
    width: wp("18.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_388_2169: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2170: {
    width: wp("20.266666666666666%"),
    top: hp("21.448087431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    justifyContent: "flex-start"
  },
  Text_388_2170: {
    color: "rgba(167, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2171: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("24.726775956284154%"),
    minHeight: hp("24.726775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("35.24590163934426%")
  },
  View_388_2172: {
    width: wp("40%"),
    height: hp("24.726775956284154%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(40, 40, 40, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_388_2173: {
    width: wp("40%"),
    height: hp("13.958185748324366%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_388_2174: {
    width: wp("37.333333333333336%"),
    top: hp("11.748633879781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    justifyContent: "center"
  },
  Text_388_2174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2175: {
    width: wp("8.533333333333333%"),
    height: hp("3.0054644808743167%"),
    top: hp("18.032786885245905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_388_2176: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1.8420943796960358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261621093749994%")
  },
  View_388_2178: {
    width: wp("8.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_388_2178: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2179: {
    width: wp("22.666666666666664%"),
    top: hp("21.448087431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    justifyContent: "flex-start"
  },
  Text_388_2179: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_388_2180: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("13.586956295159345%"),
    minHeight: hp("13.586956295159345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("70.49180327868852%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_388_2181: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("13.636363920618278%"),
    minHeight: hp("13.636363920618278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("70.49180327868852%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_388_2182: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.59016393442623%")
  },
  View_388_2183: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_388_2184: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_388_2185: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_388_2186: {
    width: wp("100%"),
    height: hp("4.700770143602715%"),
    top: hp("6.774635523394821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_388_2187: {
    width: wp("100%"),
    height: hp("4.700770143602715%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_388_2188: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.7322404371584526%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_388_2189: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_388_2190: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_388_2191: {
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("4.918032786885263%"),
    justifyContent: "flex-start"
  },
  Text_388_2191: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2192: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.3181904443626196%"),
    minHeight: hp("3.3181904443626196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.200000000000003%"),
    top: hp("1.1060370773565467%")
  },
  ImageBackground_388_2193: {
    width: wp("5.866666666666666%"),
    height: hp("3.3181909654961252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_388_2198: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_388_2199: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_388_2200: {
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("4.918032786885263%"),
    justifyContent: "flex-start"
  },
  Text_388_2200: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_388_2201: {
    width: wp("6.4%"),
    height: hp("3.3181907049293726%"),
    top: hp("1.6590889685792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    resizeMode: "cover"
  },
  View_388_2202: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_388_2203: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_388_2204: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600000000000001%"),
    top: hp("4.918032786885263%"),
    justifyContent: "flex-start"
  },
  Text_388_2204: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_388_2205: {
    width: wp("6.933333333333333%"),
    height: hp("3.5947064884373403%"),
    top: hp("1.3825963755122785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%"),
    resizeMode: "cover"
  },
  View_388_2206: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_388_2207: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_388_2208: {
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("5.054644808743163%"),
    justifyContent: "flex-start"
  },
  Text_388_2208: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_388_2209: {
    width: wp("5.333333333333334%"),
    height: hp("2.765159137913438%"),
    top: hp("2.073861210724047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%")
  },
  ImageBackground_388_2210: {
    width: wp("6.4%"),
    height: hp("3.3181907049293726%"),
    top: hp("1.3825963755122785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_388_2212: {
    width: wp("8%"),
    top: hp("4.977266905737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    justifyContent: "flex-start"
  },
  Text_388_2212: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_388_2213: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("18.852459016393443%"),
    resizeMode: "cover"
  },
  View_388_2214: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("18.579234972677597%")
  },
  ImageBackground_388_2215: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_388_2216: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_388_2216: {
    color: "rgba(244, 244, 244, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2217: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("22.950819672131146%"),
    justifyContent: "flex-start"
  },
  Text_388_2217: {
    color: "rgba(244, 244, 244, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_388_2218: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("18.579234972677597%"),
    resizeMode: "cover"
  },
  View_388_2219: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("22.950819672131146%"),
    justifyContent: "flex-start"
  },
  Text_388_2219: {
    color: "rgba(244, 244, 244, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2220: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("22.950819672131146%"),
    justifyContent: "flex-start"
  },
  Text_388_2220: {
    color: "rgba(244, 244, 244, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2221: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("22.950819672131146%"),
    justifyContent: "flex-start"
  },
  Text_388_2221: {
    color: "rgba(244, 244, 244, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2222: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%"),
    top: hp("22.950819672131146%"),
    justifyContent: "flex-start"
  },
  Text_388_2222: {
    color: "rgba(244, 244, 244, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_388_2223: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.733333333333334%"),
    top: hp("18.852459016393443%"),
    resizeMode: "cover"
  },
  ImageBackground_388_2224: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("18.852459016393443%"),
    resizeMode: "cover"
  },
  ImageBackground_388_2225: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("18.852459016393443%"),
    resizeMode: "cover"
  },
  View_388_2234: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("91.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%")
  },
  ImageBackground_388_2235: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_388_2236: {
    width: wp("4.571428426106771%"),
    height: hp("2.3419203002596163%"),
    top: hp("1.5612993084016438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0477864583333343%")
  },
  ImageBackground_395_2104: {
    width: wp("3.2%"),
    height: hp("0.9367681591888595%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
