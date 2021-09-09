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
      <View style={styles.View_397_2164}>
        <View style={styles.View_397_2166}>
          <View style={styles.View_I397_2166_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I397_2166_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I397_2166_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I397_2166_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I397_2166_218_141}
            />
            <View style={styles.View_I397_2166_218_146}>
              <View style={styles.View_I397_2166_218_146_218_148}>
                <Text style={styles.Text_I397_2166_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_397_2167}>
        <View style={styles.View_397_2168} />
        <View style={styles.View_397_2169}>
          <Text style={styles.Text_397_2169}>Search for City</Text>
        </View>
        <View style={styles.View_397_2170}>
          <View style={styles.View_397_2171}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d53/ac93/0a222323c4bac8cafc9d13de42fd0daf"
              }}
              style={styles.ImageBackground_397_2172}
            />
            <View style={styles.View_397_2173} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d0/44c2/3b8f33a1f532b6d032f1e1c3c74939df"
            }}
            style={styles.ImageBackground_397_2174}
          />
        </View>
      </View>
      <View style={styles.View_397_2175} />
      <View style={styles.View_397_2176}>
        <Text style={styles.Text_397_2176}>San Diego</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75e0/31e2/6beaaae22746e9d368f396187fa9613b"
        }}
        style={styles.ImageBackground_397_2177}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9628/43fe/f2deef8faffd5fd78654a65a5a04ea11"
        }}
        style={styles.ImageBackground_397_2178}
      />
      <View style={styles.View_397_2179}>
        <View style={styles.View_397_2180} />
        <View style={styles.View_397_2182}>
          <Text style={styles.Text_397_2182}>2K</Text>
        </View>
      </View>
      <View style={styles.View_397_2183}>
        <View style={styles.View_397_2184} />
        <View style={styles.View_397_2186}>
          <Text style={styles.Text_397_2186}>1K</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/004c/961a/f49d3dffc044df1aa5673f22c8151121"
        }}
        style={styles.ImageBackground_397_2187}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9ab/a699/051cf6a3a3c01ebf9c4114442b659679"
        }}
        style={styles.ImageBackground_397_2188}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51c0/e21a/ed75f7e12d79b55b356597cce7638214"
        }}
        style={styles.ImageBackground_397_2189}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8342/5307/0e6e9d7fee02ab52df93a3d3fe41cad5"
        }}
        style={styles.ImageBackground_397_2190}
      />
      <View style={styles.View_397_2191}>
        <View style={styles.View_397_2192} />
        <View style={styles.View_397_2193}>
          <View style={styles.View_397_2194} />
          <View style={styles.View_397_2195} />
          <View style={styles.View_397_2196}>
            <Text style={styles.Text_397_2196}>80 x 80</Text>
          </View>
          <View style={styles.View_397_2197}>
            <View style={styles.View_397_2198} />
            <View style={styles.View_397_2199} />
            <View style={styles.View_397_2200}>
              <Text style={styles.Text_397_2200}>80 x 80</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb43/e21f/59819ee8407740d6a9b080bf91cf9517"
              }}
              style={styles.ImageBackground_397_2201}
            />
          </View>
        </View>
        <View style={styles.View_397_2202}>
          <View style={styles.View_397_2203}>
            <Text style={styles.Text_397_2203}>July 25 2021 </Text>
          </View>
          <View source={{ uri: "null" }} style={styles.View_397_2204} />
          <View style={styles.View_397_2205}>
            <Text style={styles.Text_397_2205}>Fernando Agaro</Text>
          </View>
          <View style={styles.View_397_2206}>
            <Text style={styles.Text_397_2206}>
              Crowds gathered at National Mall to watch Blue Angels,
              Thunderbirds flyover
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_397_2207}>
        <View style={styles.View_397_2208} />
        <View style={styles.View_397_2209} />
        <View style={styles.View_397_2210}>
          <Text style={styles.Text_397_2210}>Fashion</Text>
        </View>
        <View style={styles.View_397_2211}>
          <Text style={styles.Text_397_2211}>Sports</Text>
        </View>
        <View style={styles.View_397_2212}>
          <Text style={styles.Text_397_2212}>Business</Text>
        </View>
        <View style={styles.View_397_2213}>
          <Text style={styles.Text_397_2213}>International</Text>
        </View>
        <View style={styles.View_397_2214}>
          <Text style={styles.Text_397_2214}>Local</Text>
        </View>
      </View>
      <View style={styles.View_397_2215}>
        <View style={styles.View_397_2216} />
        <View style={styles.View_397_2217}>
          <View style={styles.View_397_2218}>
            <View style={styles.View_397_2219} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff2/e7a4/0211e968080f8603710fc76a7464b8fe"
          }}
          style={styles.ImageBackground_397_2220}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f86/be69/c568ee86ad7cc5f61f0364ababf84bfd"
          }}
          style={styles.ImageBackground_397_2222}
        />
        <View style={styles.View_397_2224} />
      </View>
      <View style={styles.View_397_2225}>
        <View style={styles.View_397_2226} />
        <View style={styles.View_397_2227}>
          <View style={styles.View_397_2228}>
            <View style={styles.View_397_2229} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff2/e7a4/0211e968080f8603710fc76a7464b8fe"
          }}
          style={styles.ImageBackground_397_2230}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bfb/4ac0/e9a504de2f294bf2e65863f4d08c65bc"
          }}
          style={styles.ImageBackground_397_2232}
        />
        <View style={styles.View_397_2234} />
      </View>
      <View style={styles.View_397_2235}>
        <Text style={styles.Text_397_2235}>Account</Text>
      </View>
      <View style={styles.View_397_2236}>
        <Text style={styles.Text_397_2236}>Inbox</Text>
      </View>
      <View style={styles.View_397_2237}>
        <Text style={styles.Text_397_2237}>Create</Text>
      </View>
      <View style={styles.View_397_2238}>
        <Text style={styles.Text_397_2238}>Classifieds</Text>
      </View>
      <View style={styles.View_397_2239}>
        <Text style={styles.Text_397_2239}>Home</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bbb/7093/fdd7c0bf6a23cae405f23e19afddfb76"
        }}
        style={styles.ImageBackground_397_2240}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6b/f752/30be5854c42dada061fac112d4a71deb"
        }}
        style={styles.ImageBackground_397_2241}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5262/dbaf/f113ad47680350e4416c7f946e6f7d63"
        }}
        style={styles.ImageBackground_397_2242}
      />
      <View style={styles.View_397_2243}>
        <View style={styles.View_397_2244}>
          <View style={styles.View_397_2245} />
          <View style={styles.View_397_2247}>
            <Text style={styles.Text_397_2247}>1K</Text>
          </View>
        </View>
        <View style={styles.View_397_2248}>
          <View style={styles.View_397_2249} />
          <View style={styles.View_397_2251}>
            <Text style={styles.Text_397_2251}>2K</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9628/43fe/f2deef8faffd5fd78654a65a5a04ea11"
          }}
          style={styles.ImageBackground_397_2252}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/004c/961a/f49d3dffc044df1aa5673f22c8151121"
          }}
          style={styles.ImageBackground_397_2253}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9ab/a699/051cf6a3a3c01ebf9c4114442b659679"
          }}
          style={styles.ImageBackground_397_2254}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51c0/e21a/ed75f7e12d79b55b356597cce7638214"
          }}
          style={styles.ImageBackground_397_2255}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8342/5307/0e6e9d7fee02ab52df93a3d3fe41cad5"
          }}
          style={styles.ImageBackground_397_2256}
        />
        <View style={styles.View_397_2257}>
          <View style={styles.View_397_2258} />
          <View style={styles.View_397_2259}>
            <View style={styles.View_397_2260} />
            <View style={styles.View_397_2261} />
            <View style={styles.View_397_2262}>
              <Text style={styles.Text_397_2262}>80 x 80</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/958c/30da/443cf296e75de9b3a84c5341091447a7"
              }}
              style={styles.ImageBackground_397_2263}
            />
          </View>
          <View style={styles.View_397_2264}>
            <View style={styles.View_397_2265}>
              <Text style={styles.Text_397_2265}>July 11, 2021 </Text>
            </View>
            <View source={{ uri: "null" }} style={styles.View_397_2266} />
            <View style={styles.View_397_2267}>
              <Text style={styles.Text_397_2267}>John Smith</Text>
            </View>
            <View style={styles.View_397_2268}>
              <Text style={styles.Text_397_2268}>
                Tesla cars can stop for trafic automatically, according to
                report
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_397_2164: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2166: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I397_2166_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I397_2166_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I397_2166_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.367947270961407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I397_2166_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I397_2166_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_I397_2166_218_146: {
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
  View_I397_2166_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I397_2166_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2167: {
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2168: {
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_397_2169: {
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_397_2169: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2170: {
    width: wp("3.733362579345703%"),
    height: hp("1.9125834188826099%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%")
  },
  View_397_2171: {
    width: wp("3.733362579345703%"),
    minWidth: wp("3.733362579345703%"),
    height: hp("1.9125834188826099%"),
    minHeight: hp("1.9125834188826099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_397_2172: {
    width: wp("2.938607279459635%"),
    height: hp("1.5054340571002232%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2173: {
    width: wp("2.077909215291341%"),
    height: hp("1.064502671768105%"),
    top: hp("0.904754471909154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7660797119140623%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_397_2174: {
    width: wp("2.404315185546875%"),
    height: hp("1.2317188450547516%"),
    top: hp("0.13686216594091505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26714579264322946%")
  },
  View_397_2175: {
    width: wp("100%"),
    height: hp("13.25136612021858%"),
    top: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_397_2176: {
    width: wp("34.93333333333333%"),
    top: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    justifyContent: "flex-start"
  },
  Text_397_2176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2177: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("54.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%")
  },
  ImageBackground_397_2178: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    resizeMode: "cover"
  },
  View_397_2179: {
    width: wp("8.533333333333333%"),
    height: hp("4.2349726775956285%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%")
  },
  View_397_2180: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261635335286456%")
  },
  View_397_2182: {
    width: wp("8.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2182: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2183: {
    width: wp("7.994968668619791%"),
    height: hp("3.1420765027322406%"),
    top: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%")
  },
  View_397_2184: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.994968668619798%")
  },
  View_397_2186: {
    width: wp("6.666666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2187: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    resizeMode: "cover"
  },
  ImageBackground_397_2188: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%"),
    resizeMode: "cover"
  },
  ImageBackground_397_2189: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    resizeMode: "cover"
  },
  ImageBackground_397_2190: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.93333333333334%"),
    resizeMode: "cover"
  },
  View_397_2191: {
    width: wp("91.46666666666667%"),
    height: hp("19.672131147540984%"),
    top: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  View_397_2192: {
    width: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    top: hp("19.535519125683052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_397_2193: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("1.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2194: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_397_2195: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_397_2196: {
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2196: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2197: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2198: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_397_2199: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_397_2200: {
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2200: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2201: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2202: {
    width: wp("63.733333333333334%"),
    height: hp("15.710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.600000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2203: {
    width: wp("20.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.79999999999999%"),
    top: hp("10.245901639344261%"),
    justifyContent: "flex-start"
  },
  Text_397_2203: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2204: {
    width: wp("20.134136962890626%"),
    height: hp("13.9347357828109%"),
    top: hp("0.6827599363900276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.732531738281246%")
  },
  View_397_2205: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344261%"),
    justifyContent: "flex-start"
  },
  Text_397_2205: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2206: {
    width: wp("63.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896202%"),
    justifyContent: "flex-start"
  },
  Text_397_2206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2207: {
    width: wp("109.60000000000001%"),
    height: hp("6.0109289617486334%"),
    top: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2208: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_397_2209: {
    width: wp("11.733333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(253, 194, 42, 1)"
  },
  View_397_2210: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93333333333334%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_397_2210: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2211: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_397_2211: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2212: {
    width: wp("17.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_397_2212: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2213: {
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_397_2213: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2214: {
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_397_2214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2215: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2216: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_397_2217: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2218: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_397_2219: {
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
  ImageBackground_397_2220: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%")
  },
  ImageBackground_397_2222: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_397_2224: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2225: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2226: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_397_2227: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2228: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_397_2229: {
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
  ImageBackground_397_2230: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%")
  },
  ImageBackground_397_2232: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_397_2234: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2235: {
    width: wp("10.666666666666668%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    justifyContent: "flex-start"
  },
  Text_397_2235: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2236: {
    width: wp("7.733333333333333%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    justifyContent: "flex-start"
  },
  Text_397_2236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2237: {
    width: wp("9.066666666666666%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    justifyContent: "flex-start"
  },
  Text_397_2237: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2238: {
    width: wp("14.133333333333335%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    justifyContent: "flex-start"
  },
  Text_397_2238: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2239: {
    width: wp("8%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    justifyContent: "flex-start"
  },
  Text_397_2239: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2240: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("101.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%")
  },
  ImageBackground_397_2241: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("101.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    resizeMode: "cover"
  },
  ImageBackground_397_2242: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.666666666666664%"),
    resizeMode: "cover"
  },
  View_397_2243: {
    width: wp("93.86666666666666%"),
    height: hp("19.672131147540984%"),
    top: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_397_2244: {
    width: wp("7.994968668619791%"),
    height: hp("3.1420765027322406%"),
    top: hp("15.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%")
  },
  View_397_2245: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.994968668619791%")
  },
  View_397_2247: {
    width: wp("6.666666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2248: {
    width: wp("8.533333333333333%"),
    height: hp("4.2349726775956285%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_397_2249: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261635335286456%")
  },
  View_397_2251: {
    width: wp("8.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2252: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    resizeMode: "cover"
  },
  ImageBackground_397_2253: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_397_2254: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.800000000000004%"),
    resizeMode: "cover"
  },
  ImageBackground_397_2255: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%"),
    resizeMode: "cover"
  },
  ImageBackground_397_2256: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    resizeMode: "cover"
  },
  View_397_2257: {
    width: wp("91.46666666666667%"),
    height: hp("19.672131147540984%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_397_2258: {
    width: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    top: hp("19.535519125683066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_397_2259: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2260: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_397_2261: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_397_2262: {
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_397_2262: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_397_2263: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_397_2264: {
    width: wp("63.733333333333334%"),
    height: hp("15.710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.600000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_397_2265: {
    width: wp("23.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.79999999999998%"),
    top: hp("10.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_397_2265: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2266: {
    width: wp("20.134136962890626%"),
    height: hp("13.9347357828109%"),
    top: hp("0.6827599363900347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.732531738281242%")
  },
  View_397_2267: {
    width: wp("20.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_397_2267: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_397_2268: {
    width: wp("63.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_397_2268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
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
