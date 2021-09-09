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
      <View style={styles.View_349_3479}>
        <View style={styles.View_349_3481}>
          <View style={styles.View_I349_3481_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I349_3481_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I349_3481_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I349_3481_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I349_3481_218_141}
            />
            <View style={styles.View_I349_3481_218_146}>
              <View style={styles.View_I349_3481_218_146_218_148}>
                <Text style={styles.Text_I349_3481_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_349_3482}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10ad/ce2e/bc7e064bd4b602843b181e88896f75e5"
          }}
          style={styles.ImageBackground_349_3483}
        />
        <View style={styles.View_349_3484}>
          <Text style={styles.Text_349_3484}>Eren Turkmen</Text>
        </View>
        <View style={styles.View_349_3485}>
          <Text style={styles.Text_349_3485}>@ertuken12</Text>
        </View>
        <View style={styles.View_349_3486}>
          <Text style={styles.Text_349_3486}>ertuken@gmail.com</Text>
        </View>
        <View style={styles.View_349_3487}>
          <Text style={styles.Text_349_3487}>Write a Bio</Text>
        </View>
      </View>
      <View style={styles.View_349_3488}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c94b/3e0b/6d7c8a5270f5f74d2c5cdfc7c7c25594"
          }}
          style={styles.ImageBackground_349_3489}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0c8/1f1e/e96b348dcda18b7337c5783bf0438b5b"
          }}
          style={styles.ImageBackground_349_3490}
        />
      </View>
      <View style={styles.View_349_3495} />
      <View style={styles.View_349_3496} />
      <View style={styles.View_349_3497} />
      <View style={styles.View_349_3498} />
      <View style={styles.View_349_3499}>
        <View style={styles.View_349_3500} />
        <View style={styles.View_349_3501}>
          <View style={styles.View_349_3502} />
          <View style={styles.View_349_3503} />
        </View>
        <View style={styles.View_349_3504}>
          <View style={styles.View_349_3505} />
          <View style={styles.View_349_3506}>
            <Text style={styles.Text_349_3506}>Account</Text>
          </View>
          <View style={styles.View_349_3507}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5609/e41c/413cbb817c966309aba46e7baf3ddb70"
              }}
              style={styles.ImageBackground_349_3508}
            />
          </View>
        </View>
        <View style={styles.View_349_3513}>
          <View style={styles.View_349_3514} />
          <View style={styles.View_349_3515}>
            <Text style={styles.Text_349_3515}>Listen</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6b/f752/30be5854c42dada061fac112d4a71deb"
            }}
            style={styles.ImageBackground_349_3516}
          />
        </View>
        <View style={styles.View_349_3517}>
          <View style={styles.View_349_3518} />
          <View style={styles.View_349_3519}>
            <Text style={styles.Text_349_3519}>Create</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5262/dbaf/f113ad47680350e4416c7f946e6f7d63"
            }}
            style={styles.ImageBackground_349_3520}
          />
        </View>
        <View style={styles.View_349_3521}>
          <View style={styles.View_349_3522} />
          <View style={styles.View_349_3523}>
            <Text style={styles.Text_349_3523}>Browse</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ce/4ed7/fc1f752a1d5deaa51c4bf08bd7182a63"
            }}
            style={styles.ImageBackground_349_3524}
          />
        </View>
      </View>
      <View style={styles.View_349_3525}>
        <View style={styles.View_349_3526} />
        <View style={styles.View_349_3527}>
          <Text style={styles.Text_349_3527}>Watch</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07bd/e1dc/f68e8959816b626bde161ce0063093f3"
          }}
          style={styles.ImageBackground_349_3528}
        />
      </View>
      <View style={styles.View_349_3529}>
        <Text style={styles.Text_349_3529}>Edit Profile</Text>
      </View>
      <View style={styles.View_349_3530} />
      <View style={styles.View_349_3531}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b49/e036/0df80796d5e868bc3f005cecc4d41583"
          }}
          style={styles.ImageBackground_349_3532}
        />
        <View style={styles.View_349_3533}>
          <Text style={styles.Text_349_3533}>Following</Text>
        </View>
      </View>
      <View style={styles.View_349_3534}>
        <View style={styles.View_349_3535}>
          <Text style={styles.Text_349_3535}>Following</Text>
        </View>
        <View style={styles.View_349_3536}>
          <Text style={styles.Text_349_3536}>34K</Text>
        </View>
        <View style={styles.View_349_3537} />
      </View>
      <View style={styles.View_349_3538}>
        <View style={styles.View_349_3539}>
          <Text style={styles.Text_349_3539}>Followers</Text>
        </View>
        <View style={styles.View_349_3540}>
          <Text style={styles.Text_349_3540}>92K</Text>
        </View>
        <View style={styles.View_349_3541} />
      </View>
      <View style={styles.View_349_3542}>
        <View style={styles.View_349_3543}>
          <Text style={styles.Text_349_3543}>Posts</Text>
        </View>
        <View style={styles.View_349_3544}>
          <Text style={styles.Text_349_3544}>736</Text>
        </View>
      </View>
      <View style={styles.View_349_3545}>
        <Text style={styles.Text_349_3545}>Max 150</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_349_3479: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3481: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I349_3481_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I349_3481_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_3481_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.367897242144809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I349_3481_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I349_3481_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_I349_3481_218_146: {
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
  View_I349_3481_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I349_3481_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3482: {
    width: wp("52.53333333333333%"),
    height: hp("48.90710382513661%"),
    top: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  ImageBackground_349_3483: {
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%")
  },
  View_349_3484: {
    width: wp("34.4%"),
    top: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    justifyContent: "flex-start"
  },
  Text_349_3484: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3485: {
    width: wp("28.53333333333333%"),
    top: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    justifyContent: "flex-start"
  },
  Text_349_3485: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3486: {
    width: wp("49.6%"),
    top: hp("38.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    justifyContent: "flex-start"
  },
  Text_349_3486: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3487: {
    width: wp("27.73333333333333%"),
    top: hp("45.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_3487: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3488: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666667%")
  },
  ImageBackground_349_3489: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_349_3490: {
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    top: hp("1.229508196721314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  View_349_3495: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_349_3496: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_349_3497: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("54.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_349_3498: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("62.431693989071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_349_3499: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.59016393442623%")
  },
  View_349_3500: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_349_3501: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038246%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3502: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_349_3503: {
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
  View_349_3504: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3505: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_349_3506: {
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("4.9180327868852345%"),
    justifyContent: "flex-start"
  },
  Text_349_3506: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3507: {
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
  ImageBackground_349_3508: {
    width: wp("5.866666666666666%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_3513: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3514: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_349_3515: {
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("4.9180327868852345%"),
    justifyContent: "flex-start"
  },
  Text_349_3515: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3516: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%"),
    resizeMode: "cover"
  },
  View_349_3517: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3518: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_349_3519: {
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("4.9180327868852345%"),
    justifyContent: "flex-start"
  },
  Text_349_3519: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3520: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    resizeMode: "cover"
  },
  View_349_3521: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3522: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_349_3523: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("4.9180327868852345%"),
    justifyContent: "flex-start"
  },
  Text_349_3523: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3524: {
    width: wp("4.8000340779622395%"),
    height: hp("2.7355097682098224%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_349_3525: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("101.91256830601093%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3526: {
    width: wp("20%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_349_3527: {
    width: wp("7.466666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000002%"),
    top: hp("4.234972677595621%"),
    justifyContent: "flex-start"
  },
  Text_349_3527: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_3528: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%")
  },
  View_349_3529: {
    width: wp("37.06666666666666%"),
    top: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    justifyContent: "flex-start"
  },
  Text_349_3529: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3530: {
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    top: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_349_3531: {
    width: wp("19.733333333333334%"),
    height: hp("3.9617486338797816%"),
    top: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_349_3532: {
    flexGrow: 1,
    width: wp("19.733333333333334%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_349_3533: {
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("0.6830601092896167%"),
    justifyContent: "flex-start"
  },
  Text_349_3533: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3534: {
    width: wp("20%"),
    height: hp("5.191256830601093%"),
    top: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.400000000000006%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3535: {
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333324%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "flex-start"
  },
  Text_349_3535: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3536: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333324%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_3536: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3537: {
    width: wp("0.26666666666666666%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_349_3538: {
    width: wp("20%"),
    height: hp("5.191256830601093%"),
    top: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3539: {
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "flex-start"
  },
  Text_349_3539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3540: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_3540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3541: {
    width: wp("0.26666666666666666%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_349_3542: {
    width: wp("9.066666666666666%"),
    height: hp("5.191256830601093%"),
    top: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_349_3543: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "flex-start"
  },
  Text_349_3543: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3544: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_3544: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3545: {
    width: wp("16%"),
    top: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_349_3545: {
    color: "rgba(124, 130, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
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
