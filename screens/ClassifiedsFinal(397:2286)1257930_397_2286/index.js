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
      <View style={styles.View_397_2287}>
        <Text style={styles.Text_397_2287}>San Diego</Text>
      </View>
      <View style={styles.View_397_2288}>
        <Text style={styles.Text_397_2288}>Events</Text>
      </View>
      <View style={styles.View_397_2289}>
        <Text style={styles.Text_397_2289}>Cars</Text>
      </View>
      <View style={styles.View_397_2290}>
        <View style={styles.View_397_2292}>
          <View style={styles.View_I397_2292_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I397_2292_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I397_2292_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I397_2292_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I397_2292_218_141}
            />
            <View style={styles.View_I397_2292_218_146}>
              <View style={styles.View_I397_2292_218_146_218_148}>
                <Text style={styles.Text_I397_2292_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_397_2293}>
        <View style={styles.View_397_2294} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb77/a6db/edfc42fe4e0accebc12d6c9ecf3f8036"
          }}
          style={styles.ImageBackground_397_2295}
        />
        <View style={styles.View_397_2296}>
          <Text style={styles.Text_397_2296}>Spring Festival</Text>
        </View>
        <View style={styles.View_397_2297}>
          <View style={styles.View_397_2298} />
          <View style={styles.View_397_2300}>
            <Text style={styles.Text_397_2300}>$50</Text>
          </View>
        </View>
        <View style={styles.View_397_2301}>
          <Text style={styles.Text_397_2301}>July 11 2021 </Text>
        </View>
      </View>
      <View style={styles.View_397_2302}>
        <View style={styles.View_397_2303} />
        <View style={styles.View_397_2304}>
          <Text style={styles.Text_397_2304}>Tesla Model X</Text>
        </View>
        <View style={styles.View_397_2305}>
          <View style={styles.View_397_2306} />
          <View style={styles.View_397_2308}>
            <Text style={styles.Text_397_2308}>$60,000</Text>
          </View>
        </View>
        <View style={styles.View_397_2309}>
          <Text style={styles.Text_397_2309}>July 11 2021 </Text>
        </View>
      </View>
      <View style={styles.View_397_2310}>
        <View style={styles.View_397_2311} />
        <View style={styles.View_397_2312}>
          <Text style={styles.Text_397_2312}>Lamborghini Urus</Text>
        </View>
        <View style={styles.View_397_2313}>
          <View style={styles.View_397_2314} />
          <View style={styles.View_397_2316}>
            <Text style={styles.Text_397_2316}>$200,000</Text>
          </View>
        </View>
        <View style={styles.View_397_2317}>
          <Text style={styles.Text_397_2317}>July 9 2021 </Text>
        </View>
      </View>
      <View style={styles.View_397_2318}>
        <View style={styles.View_397_2319} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb77/a6db/edfc42fe4e0accebc12d6c9ecf3f8036"
          }}
          style={styles.ImageBackground_397_2320}
        />
        <View style={styles.View_397_2321}>
          <Text style={styles.Text_397_2321}>Blue Moon Dance</Text>
        </View>
        <View style={styles.View_397_2322}>
          <View style={styles.View_397_2323} />
          <View style={styles.View_397_2325}>
            <Text style={styles.Text_397_2325}>$70</Text>
          </View>
        </View>
        <View style={styles.View_397_2326}>
          <Text style={styles.Text_397_2326}>July 25 2021 </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ee9/d0a8/6e3b70c3647b342aa788cc63eaddeaec"
        }}
        style={styles.ImageBackground_397_2327}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cbd/7ca0/36eff581a46170328b805e6b27485c14"
        }}
        style={styles.ImageBackground_397_2328}
      />
      <View style={styles.View_397_2329}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e88/6078/cfbcbc602a7cbd72a5c07bfdf3fc585e"
          }}
          style={styles.ImageBackground_397_2330}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba07/fd4f/e94943cc0e89214d04909ea971eca2b3"
          }}
          style={styles.ImageBackground_397_2331}
        />
      </View>
      <View style={styles.View_397_2333}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c62/168b/481d153cafb896d884499325568d1337"
          }}
          style={styles.ImageBackground_397_2334}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/772e/c29a/c516d1bd7faf1bb2be9285815b571fb8"
          }}
          style={styles.ImageBackground_397_2335}
        />
      </View>
      <View style={styles.View_397_2337}>
        <View style={styles.View_397_2338}>
          <Text style={styles.Text_397_2338}>Jobs</Text>
        </View>
        <View style={styles.View_397_2339}>
          <Text style={styles.Text_397_2339}>Houses</Text>
        </View>
        <View style={styles.View_397_2340}>
          <Text style={styles.Text_397_2340}>Cars</Text>
        </View>
      </View>
      <View style={styles.View_397_2341}>
        <View style={styles.View_397_2342}>
          <Text style={styles.Text_397_2342}>Latest</Text>
        </View>
      </View>
      <View style={styles.View_397_2343}>
        <View style={styles.View_397_2344}>
          <View style={styles.View_397_2345}>
            <View style={styles.View_397_2346} />
            <View style={styles.View_397_2347}>
              <View style={styles.View_397_2348} />
              <View style={styles.View_397_2349} />
            </View>
            <View style={styles.View_397_2350}>
              <View style={styles.View_397_2351} />
              <View style={styles.View_397_2352}>
                <Text style={styles.Text_397_2352}>Account</Text>
              </View>
              <View style={styles.View_397_2353}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cf2/8101/d85cc3586797f970c86b85a7f14af7e7"
                  }}
                  style={styles.ImageBackground_397_2354}
                />
              </View>
            </View>
            <View style={styles.View_397_2359}>
              <View style={styles.View_397_2360} />
              <View style={styles.View_397_2361}>
                <Text style={styles.Text_397_2361}>Inbox</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7668/ecce/467249d2771e6d28ca14b035eebaf54b"
                }}
                style={styles.ImageBackground_397_2362}
              />
            </View>
            <View style={styles.View_397_2363}>
              <View style={styles.View_397_2364} />
              <View style={styles.View_397_2365}>
                <Text style={styles.Text_397_2365}>Create</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/571e/2e49d7d043234f7e304c316d9b00b734"
                }}
                style={styles.ImageBackground_397_2366}
              />
            </View>
            <View style={styles.View_397_2367}>
              <View style={styles.View_397_2368} />
              <View style={styles.View_397_2369}>
                <Text style={styles.Text_397_2369}>Classifieds</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b91e/7f6b/16171b31f53b614b123557ba39e25f63"
                }}
                style={styles.ImageBackground_397_2370}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a958/99d8/eb6e81f920e503a4217b6ce8b9124071"
          }}
          style={styles.ImageBackground_397_2371}
        />
        <View style={styles.View_397_2373}>
          <Text style={styles.Text_397_2373}>Home</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_397_2287: {
    width: wp("34.93333333333333%"),
    top: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.800000000000004%"),
    justifyContent: "flex-start"
  },
  Text_397_2287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2288: {
    width: wp("34.93333333333333%"),
    top: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    justifyContent: "flex-start"
  },
  Text_397_2288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2289: {
    width: wp("34.93333333333333%"),
    top: hp("65.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_397_2289: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2290: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2292: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I397_2292_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I397_2292_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I397_2292_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679305946892075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I397_2292_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I397_2292_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I397_2292_218_146: {
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
  View_I397_2292_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I397_2292_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2293: {
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
  View_397_2294: {
    width: wp("40%"),
    height: hp("24.726775956284154%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(42, 43, 48, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_397_2295: {
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
  View_397_2296: {
    width: wp("37.333333333333336%"),
    top: hp("11.748633879781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "center"
  },
  Text_397_2296: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2297: {
    width: wp("8.533333333333333%"),
    height: hp("3.0054644808743167%"),
    top: hp("18.032786885245905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%")
  },
  View_397_2298: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1.8420943796960358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261621093750001%")
  },
  View_397_2300: {
    width: wp("8.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2300: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2301: {
    width: wp("22.666666666666664%"),
    top: hp("21.448087431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "flex-start"
  },
  Text_397_2301: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2302: {
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
  View_397_2303: {
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
  View_397_2304: {
    width: wp("37.333333333333336%"),
    top: hp("11.748633879781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "center"
  },
  Text_397_2304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2305: {
    width: wp("18.4%"),
    height: hp("3.0054644808743167%"),
    top: hp("18.032786885245898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%")
  },
  View_397_2306: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1.8421277322404421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261621093750001%")
  },
  View_397_2308: {
    width: wp("18.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2308: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2309: {
    width: wp("22.666666666666664%"),
    top: hp("21.448087431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "flex-start"
  },
  Text_397_2309: {
    color: "rgba(167, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2310: {
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
  View_397_2311: {
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
  View_397_2312: {
    width: wp("38.4%"),
    top: hp("11.748633879781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    justifyContent: "center"
  },
  Text_397_2312: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2313: {
    width: wp("18.4%"),
    height: hp("3.0054644808743167%"),
    top: hp("18.032786885245898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%")
  },
  View_397_2314: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1.8421277322404421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261621093750001%")
  },
  View_397_2316: {
    width: wp("18.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2316: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2317: {
    width: wp("20.266666666666666%"),
    top: hp("21.448087431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    justifyContent: "flex-start"
  },
  Text_397_2317: {
    color: "rgba(167, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2318: {
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
  View_397_2319: {
    width: wp("40%"),
    height: hp("24.726775956284154%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(42, 43, 48, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_397_2320: {
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
  View_397_2321: {
    width: wp("38.666666666666664%"),
    top: hp("12.568306010928957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%"),
    justifyContent: "center"
  },
  Text_397_2321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2322: {
    width: wp("8.533333333333333%"),
    height: hp("3.0054644808743167%"),
    top: hp("18.032786885245905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_397_2323: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1.8420943796960358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261621093749994%")
  },
  View_397_2325: {
    width: wp("8.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2325: {
    color: "rgba(17, 140, 79, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2326: {
    width: wp("22.666666666666664%"),
    top: hp("21.448087431693992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    justifyContent: "flex-start"
  },
  Text_397_2326: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2327: {
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
  ImageBackground_397_2328: {
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
  View_397_2329: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("90.02732240437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.33333333333334%")
  },
  ImageBackground_397_2330: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_397_2331: {
    width: wp("5.714285278320313%"),
    height: hp("2.927400245041144%"),
    top: hp("1.9516574880464646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.809733072916657%")
  },
  View_397_2333: {
    width: wp("3.733333587646484%"),
    height: hp("1.9125684362943054%"),
    top: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.4%")
  },
  ImageBackground_397_2334: {
    width: wp("3.733333587646484%"),
    height: hp("1.9125684362943054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_397_2335: {
    width: wp("3.2%"),
    height: hp("0.9367681591888595%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%")
  },
  View_397_2337: {
    width: wp("52.53333333333333%"),
    height: hp("2.73224043715847%"),
    top: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_397_2338: {
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2338: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2339: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2339: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2340: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2340: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2341: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.808743169398905%"),
    backgroundColor: "rgba(253, 184, 7, 1)"
  },
  View_397_2342: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.092896174863391%"),
    justifyContent: "flex-start"
  },
  Text_397_2342: {
    color: "rgba(244, 244, 244, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2343: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.4535519125683%")
  },
  View_397_2344: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2345: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2346: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_397_2347: {
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
  View_397_2348: {
    width: wp("100%"),
    height: hp("4.700770143602715%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_397_2349: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_397_2350: {
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
  View_397_2351: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_397_2352: {
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("4.918032786885263%"),
    justifyContent: "flex-start"
  },
  Text_397_2352: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2353: {
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
  ImageBackground_397_2354: {
    width: wp("5.866666666666666%"),
    height: hp("3.3181909654961252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2359: {
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
  View_397_2360: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_397_2361: {
    width: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("4.918032786885263%"),
    justifyContent: "flex-start"
  },
  Text_397_2361: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2362: {
    width: wp("6.4%"),
    height: hp("3.3181907049293726%"),
    top: hp("1.6590889685792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    resizeMode: "cover"
  },
  View_397_2363: {
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
  View_397_2364: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_397_2365: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600000000000001%"),
    top: hp("4.918032786885263%"),
    justifyContent: "flex-start"
  },
  Text_397_2365: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2366: {
    width: wp("6.933333333333333%"),
    height: hp("3.5947064884373403%"),
    top: hp("1.382596375512307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%"),
    resizeMode: "cover"
  },
  View_397_2367: {
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
  View_397_2368: {
    width: wp("20%"),
    height: hp("6.774639692462858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_397_2369: {
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("5.054644808743191%"),
    justifyContent: "flex-start"
  },
  Text_397_2369: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2370: {
    width: wp("5.333333333333334%"),
    height: hp("2.765159137913438%"),
    top: hp("2.073861210724047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%")
  },
  ImageBackground_397_2371: {
    width: wp("6.4%"),
    height: hp("3.3181907049293726%"),
    top: hp("1.382596375512307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_397_2373: {
    width: wp("8%"),
    top: hp("4.977266905737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    justifyContent: "flex-start"
  },
  Text_397_2373: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
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
