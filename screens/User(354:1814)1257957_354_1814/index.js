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
      <View style={styles.View_354_1815}>
        <View style={styles.View_354_1817}>
          <View style={styles.View_I354_1817_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I354_1817_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I354_1817_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I354_1817_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I354_1817_218_141}
            />
            <View style={styles.View_I354_1817_218_146}>
              <View style={styles.View_I354_1817_218_146_218_148}>
                <Text style={styles.Text_I354_1817_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_349_3460}>
        <Text style={styles.Text_349_3460}>Profile</Text>
      </View>
      <View style={styles.View_349_3421}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10ad/ce2e/bc7e064bd4b602843b181e88896f75e5"
          }}
          style={styles.ImageBackground_349_3422}
        />
        <View style={styles.View_349_3423}>
          <Text style={styles.Text_349_3423}>Eren Turkmen</Text>
        </View>
        <View style={styles.View_349_3424}>
          <Text style={styles.Text_349_3424}>ertuken@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_349_3425}>
        <View style={styles.View_349_3426} />
        <View style={styles.View_349_3427}>
          <Text style={styles.Text_349_3427}>Profile</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43b/8e98/6cfffcc25082871f373112c858a1a221"
          }}
          style={styles.ImageBackground_349_3428}
        />
      </View>
      <View style={styles.View_349_3430}>
        <View style={styles.View_349_3431} />
        <View style={styles.View_349_3432}>
          <Text style={styles.Text_349_3432}>Posts</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43b/8e98/6cfffcc25082871f373112c858a1a221"
          }}
          style={styles.ImageBackground_349_3433}
        />
      </View>
      <View style={styles.View_349_3435}>
        <View style={styles.View_349_3436} />
        <View style={styles.View_349_3437}>
          <Text style={styles.Text_349_3437}>Saved</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43b/8e98/6cfffcc25082871f373112c858a1a221"
          }}
          style={styles.ImageBackground_349_3438}
        />
      </View>
      <View style={styles.View_349_3440}>
        <View style={styles.View_349_3441} />
        <View style={styles.View_349_3442}>
          <Text style={styles.Text_349_3442}>Monetization</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43b/8e98/6cfffcc25082871f373112c858a1a221"
          }}
          style={styles.ImageBackground_349_3443}
        />
      </View>
      <View style={styles.View_349_3445}>
        <View style={styles.View_349_3446} />
        <View style={styles.View_349_3447}>
          <Text style={styles.Text_349_3447}>Language</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43b/8e98/6cfffcc25082871f373112c858a1a221"
          }}
          style={styles.ImageBackground_349_3448}
        />
      </View>
      <View style={styles.View_349_3450}>
        <View style={styles.View_349_3451} />
        <View style={styles.View_349_3452}>
          <Text style={styles.Text_349_3452}>About</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43b/8e98/6cfffcc25082871f373112c858a1a221"
          }}
          style={styles.ImageBackground_349_3453}
        />
      </View>
      <View style={styles.View_349_3455}>
        <View style={styles.View_349_3456} />
        <View style={styles.View_349_3457}>
          <Text style={styles.Text_349_3457}>Sign Out</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43b/8e98/6cfffcc25082871f373112c858a1a221"
          }}
          style={styles.ImageBackground_349_3458}
        />
      </View>
      <View style={styles.View_354_1835}>
        <View style={styles.View_354_1836} />
        <View style={styles.View_354_1837}>
          <View style={styles.View_354_1838} />
          <View style={styles.View_354_1839} />
        </View>
        <View style={styles.View_354_1840}>
          <View style={styles.View_354_1841} />
          <View style={styles.View_354_1842}>
            <Text style={styles.Text_354_1842}>Account</Text>
          </View>
          <View style={styles.View_354_1843}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5609/e41c/413cbb817c966309aba46e7baf3ddb70"
              }}
              style={styles.ImageBackground_354_1844}
            />
          </View>
        </View>
        <View style={styles.View_354_1849}>
          <View style={styles.View_354_1850} />
          <View style={styles.View_354_1851}>
            <Text style={styles.Text_354_1851}>Listen</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6b/f752/30be5854c42dada061fac112d4a71deb"
            }}
            style={styles.ImageBackground_354_1852}
          />
        </View>
        <View style={styles.View_354_1853}>
          <View style={styles.View_354_1854} />
          <View style={styles.View_354_1855}>
            <Text style={styles.Text_354_1855}>Create</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5262/dbaf/f113ad47680350e4416c7f946e6f7d63"
            }}
            style={styles.ImageBackground_354_1856}
          />
        </View>
        <View style={styles.View_354_1857}>
          <View style={styles.View_354_1858} />
          <View style={styles.View_354_1859}>
            <Text style={styles.Text_354_1859}>Browse</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ce/4ed7/fc1f752a1d5deaa51c4bf08bd7182a63"
            }}
            style={styles.ImageBackground_354_1860}
          />
        </View>
      </View>
      <View style={styles.View_354_1861}>
        <View style={styles.View_354_1862} />
        <View style={styles.View_354_1863}>
          <Text style={styles.Text_354_1863}>Watch</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07bd/e1dc/f68e8959816b626bde161ce0063093f3"
          }}
          style={styles.ImageBackground_354_1864}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_354_1815: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_354_1817: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I354_1817_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I354_1817_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I354_1817_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.367897242144809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I354_1817_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I354_1817_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_I354_1817_218_146: {
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
  View_I354_1817_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I354_1817_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3460: {
    width: wp("20.266666666666666%"),
    top: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_349_3460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3421: {
    width: wp("64.26666666666667%"),
    height: hp("9.836065573770492%"),
    top: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_349_3422: {
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3423: {
    width: wp("31.466666666666665%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    justifyContent: "flex-start"
  },
  Text_349_3423: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3424: {
    width: wp("38.666666666666664%"),
    top: hp("4.918032786885247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    justifyContent: "flex-start"
  },
  Text_349_3424: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3425: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_349_3426: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_349_3427: {
    width: wp("14.666666666666666%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_349_3427: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3428: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%")
  },
  View_349_3430: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("35.79234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_349_3431: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_349_3432: {
    width: wp("12%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_349_3432: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3433: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%")
  },
  View_349_3435: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("45.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_349_3436: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_349_3437: {
    width: wp("13.333333333333334%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_349_3437: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3438: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%")
  },
  View_349_3440: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_349_3441: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_349_3442: {
    width: wp("29.06666666666667%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_349_3442: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3443: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%")
  },
  View_349_3445: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_349_3446: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_349_3447: {
    width: wp("22.400000000000002%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_349_3447: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3448: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%")
  },
  View_349_3450: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("76.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_349_3451: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_349_3452: {
    width: wp("13.600000000000001%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_349_3452: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3453: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%")
  },
  View_349_3455: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("86.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_349_3456: {
    width: wp("89.60000000000001%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 63, 70, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_349_3457: {
    width: wp("19.466666666666665%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_349_3457: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3458: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%")
  },
  View_354_1835: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("99.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_354_1836: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_354_1837: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("6.693989071038246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_354_1838: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_354_1839: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_354_1840: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_354_1841: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_354_1842: {
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("4.9180327868852345%"),
    justifyContent: "flex-start"
  },
  Text_354_1842: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_354_1843: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.200000000000003%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_354_1844: {
    width: wp("5.866666666666666%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_354_1849: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_354_1850: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_354_1851: {
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("4.9180327868852345%"),
    justifyContent: "flex-start"
  },
  Text_354_1851: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_354_1852: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%"),
    resizeMode: "cover"
  },
  View_354_1853: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_354_1854: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_354_1855: {
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("4.9180327868852345%"),
    justifyContent: "flex-start"
  },
  Text_354_1855: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_354_1856: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    resizeMode: "cover"
  },
  View_354_1857: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_354_1858: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_354_1859: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("4.9180327868852345%"),
    justifyContent: "flex-start"
  },
  Text_354_1859: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_354_1860: {
    width: wp("4.8000340779622395%"),
    height: hp("2.7355097682098224%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_354_1861: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("101.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_354_1862: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_354_1863: {
    width: wp("7.466666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("4.234972677595621%"),
    justifyContent: "flex-start"
  },
  Text_354_1863: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_354_1864: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
