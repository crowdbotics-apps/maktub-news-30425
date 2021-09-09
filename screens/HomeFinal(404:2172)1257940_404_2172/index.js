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
      <View style={styles.View_404_2173}>
        <View style={styles.View_404_2175}>
          <View style={styles.View_I404_2175_218_131}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I404_2175_218_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I404_2175_218_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I404_2175_218_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I404_2175_218_141}
            />
            <View style={styles.View_I404_2175_218_146}>
              <View style={styles.View_I404_2175_218_146_218_148}>
                <Text style={styles.Text_I404_2175_218_146_218_148}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_404_2176}>
        <View style={styles.View_404_2177} />
        <View style={styles.View_404_2178}>
          <Text style={styles.Text_404_2178}>Search for City</Text>
        </View>
        <View style={styles.View_404_2179}>
          <View style={styles.View_404_2180}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d53/ac93/0a222323c4bac8cafc9d13de42fd0daf"
              }}
              style={styles.ImageBackground_404_2181}
            />
            <View style={styles.View_404_2182} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d0/44c2/3b8f33a1f532b6d032f1e1c3c74939df"
            }}
            style={styles.ImageBackground_404_2183}
          />
        </View>
      </View>
      <View style={styles.View_404_2184} />
      <View style={styles.View_404_2185}>
        <Text style={styles.Text_404_2185}>San Diego</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75e0/31e2/6beaaae22746e9d368f396187fa9613b"
        }}
        style={styles.ImageBackground_404_2186}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9628/43fe/f2deef8faffd5fd78654a65a5a04ea11"
        }}
        style={styles.ImageBackground_404_2187}
      />
      <View style={styles.View_404_2188}>
        <View style={styles.View_404_2189} />
        <View style={styles.View_404_2191}>
          <Text style={styles.Text_404_2191}>2K</Text>
        </View>
      </View>
      <View style={styles.View_404_2192}>
        <View style={styles.View_404_2193} />
        <View style={styles.View_404_2195}>
          <Text style={styles.Text_404_2195}>1K</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/004c/961a/f49d3dffc044df1aa5673f22c8151121"
        }}
        style={styles.ImageBackground_404_2196}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9ab/a699/051cf6a3a3c01ebf9c4114442b659679"
        }}
        style={styles.ImageBackground_404_2197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51c0/e21a/ed75f7e12d79b55b356597cce7638214"
        }}
        style={styles.ImageBackground_404_2198}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8342/5307/0e6e9d7fee02ab52df93a3d3fe41cad5"
        }}
        style={styles.ImageBackground_404_2199}
      />
      <View style={styles.View_404_2200}>
        <View style={styles.View_404_2201} />
        <View style={styles.View_404_2202}>
          <View style={styles.View_404_2203} />
          <View style={styles.View_404_2204} />
          <View style={styles.View_404_2205}>
            <Text style={styles.Text_404_2205}>80 x 80</Text>
          </View>
          <View style={styles.View_404_2206}>
            <View style={styles.View_404_2207} />
            <View style={styles.View_404_2208} />
            <View style={styles.View_404_2209}>
              <Text style={styles.Text_404_2209}>80 x 80</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb43/e21f/59819ee8407740d6a9b080bf91cf9517"
              }}
              style={styles.ImageBackground_404_2210}
            />
          </View>
        </View>
        <View style={styles.View_404_2211}>
          <View style={styles.View_404_2212}>
            <Text style={styles.Text_404_2212}>July 25 2021 </Text>
          </View>
          <View source={{ uri: "null" }} style={styles.View_404_2213} />
          <View style={styles.View_404_2214}>
            <Text style={styles.Text_404_2214}>Fernando Agaro</Text>
          </View>
          <View style={styles.View_404_2215}>
            <Text style={styles.Text_404_2215}>
              Crowds gathered at National Mall to watch Blue Angels,
              Thunderbirds flyover
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_404_2216}>
        <View style={styles.View_404_2217} />
        <View style={styles.View_404_2218} />
        <View style={styles.View_404_2219}>
          <Text style={styles.Text_404_2219}>Fashion</Text>
        </View>
        <View style={styles.View_404_2220}>
          <Text style={styles.Text_404_2220}>Sports</Text>
        </View>
        <View style={styles.View_404_2221}>
          <Text style={styles.Text_404_2221}>Business</Text>
        </View>
        <View style={styles.View_404_2222}>
          <Text style={styles.Text_404_2222}>International</Text>
        </View>
        <View style={styles.View_404_2223}>
          <Text style={styles.Text_404_2223}>Local</Text>
        </View>
      </View>
      <View style={styles.View_404_2224}>
        <View style={styles.View_404_2225} />
        <View style={styles.View_404_2226}>
          <View style={styles.View_404_2227}>
            <View style={styles.View_404_2228} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff2/e7a4/0211e968080f8603710fc76a7464b8fe"
          }}
          style={styles.ImageBackground_404_2229}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f86/be69/c568ee86ad7cc5f61f0364ababf84bfd"
          }}
          style={styles.ImageBackground_404_2231}
        />
        <View style={styles.View_404_2233} />
      </View>
      <View style={styles.View_404_2234}>
        <View style={styles.View_404_2235} />
        <View style={styles.View_404_2236}>
          <View style={styles.View_404_2237}>
            <View style={styles.View_404_2238} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff2/e7a4/0211e968080f8603710fc76a7464b8fe"
          }}
          style={styles.ImageBackground_404_2239}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bfb/4ac0/e9a504de2f294bf2e65863f4d08c65bc"
          }}
          style={styles.ImageBackground_404_2241}
        />
        <View style={styles.View_404_2243} />
      </View>
      <View style={styles.View_404_2244}>
        <Text style={styles.Text_404_2244}>Account</Text>
      </View>
      <View style={styles.View_404_2245}>
        <Text style={styles.Text_404_2245}>Inbox</Text>
      </View>
      <View style={styles.View_404_2246}>
        <Text style={styles.Text_404_2246}>Create</Text>
      </View>
      <View style={styles.View_404_2247}>
        <Text style={styles.Text_404_2247}>Classifieds</Text>
      </View>
      <View style={styles.View_404_2248}>
        <Text style={styles.Text_404_2248}>Home</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bbb/7093/fdd7c0bf6a23cae405f23e19afddfb76"
        }}
        style={styles.ImageBackground_404_2249}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6b/f752/30be5854c42dada061fac112d4a71deb"
        }}
        style={styles.ImageBackground_404_2250}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5262/dbaf/f113ad47680350e4416c7f946e6f7d63"
        }}
        style={styles.ImageBackground_404_2251}
      />
      <View style={styles.View_404_2252}>
        <View style={styles.View_404_2253}>
          <View style={styles.View_404_2254} />
          <View style={styles.View_404_2256}>
            <Text style={styles.Text_404_2256}>1K</Text>
          </View>
        </View>
        <View style={styles.View_404_2257}>
          <View style={styles.View_404_2258} />
          <View style={styles.View_404_2260}>
            <Text style={styles.Text_404_2260}>2K</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9628/43fe/f2deef8faffd5fd78654a65a5a04ea11"
          }}
          style={styles.ImageBackground_404_2261}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/004c/961a/f49d3dffc044df1aa5673f22c8151121"
          }}
          style={styles.ImageBackground_404_2262}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9ab/a699/051cf6a3a3c01ebf9c4114442b659679"
          }}
          style={styles.ImageBackground_404_2263}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51c0/e21a/ed75f7e12d79b55b356597cce7638214"
          }}
          style={styles.ImageBackground_404_2264}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8342/5307/0e6e9d7fee02ab52df93a3d3fe41cad5"
          }}
          style={styles.ImageBackground_404_2265}
        />
        <View style={styles.View_404_2266}>
          <View style={styles.View_404_2267} />
          <View style={styles.View_404_2268}>
            <View style={styles.View_404_2269} />
            <View style={styles.View_404_2270} />
            <View style={styles.View_404_2271}>
              <Text style={styles.Text_404_2271}>80 x 80</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/958c/30da/443cf296e75de9b3a84c5341091447a7"
              }}
              style={styles.ImageBackground_404_2272}
            />
          </View>
          <View style={styles.View_404_2273}>
            <View style={styles.View_404_2274}>
              <Text style={styles.Text_404_2274}>July 11, 2021 </Text>
            </View>
            <View source={{ uri: "null" }} style={styles.View_404_2275} />
            <View style={styles.View_404_2276}>
              <Text style={styles.Text_404_2276}>John Smith</Text>
            </View>
            <View style={styles.View_404_2277}>
              <Text style={styles.Text_404_2277}>
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
  View_404_2173: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_2175: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I404_2175_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I404_2175_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I404_2175_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.367947270961407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I404_2175_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I404_2175_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_I404_2175_218_146: {
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
  View_I404_2175_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I404_2175_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2176: {
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
  View_404_2177: {
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_404_2178: {
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_404_2178: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2179: {
    width: wp("3.733362579345703%"),
    height: hp("1.9125834188826099%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%")
  },
  View_404_2180: {
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
  ImageBackground_404_2181: {
    width: wp("2.938607279459635%"),
    height: hp("1.5054340571002232%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_2182: {
    width: wp("2.077909215291341%"),
    height: hp("1.064502671768105%"),
    top: hp("0.904754471909154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7660807291666663%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_404_2183: {
    width: wp("2.404315185546875%"),
    height: hp("1.2317188450547516%"),
    top: hp("0.13686216594091505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2671468098958334%")
  },
  View_404_2184: {
    width: wp("100%"),
    height: hp("13.25136612021858%"),
    top: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_404_2185: {
    width: wp("34.93333333333333%"),
    top: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    justifyContent: "flex-start"
  },
  Text_404_2185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_2186: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("54.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%")
  },
  ImageBackground_404_2187: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    resizeMode: "cover"
  },
  View_404_2188: {
    width: wp("8.533333333333333%"),
    height: hp("4.2349726775956285%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%")
  },
  View_404_2189: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261637369791668%")
  },
  View_404_2191: {
    width: wp("8.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_2191: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2192: {
    width: wp("7.994968668619791%"),
    height: hp("3.1420765027322406%"),
    top: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%")
  },
  View_404_2193: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.994970703125006%")
  },
  View_404_2195: {
    width: wp("6.666666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_2195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_2196: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    resizeMode: "cover"
  },
  ImageBackground_404_2197: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%"),
    resizeMode: "cover"
  },
  ImageBackground_404_2198: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    resizeMode: "cover"
  },
  ImageBackground_404_2199: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.93333333333334%"),
    resizeMode: "cover"
  },
  View_404_2200: {
    width: wp("91.46666666666667%"),
    height: hp("19.672131147540984%"),
    top: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  View_404_2201: {
    width: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    top: hp("19.535519125683052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_404_2202: {
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
  View_404_2203: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_404_2204: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_404_2205: {
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_2205: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2206: {
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
  View_404_2207: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_404_2208: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_404_2209: {
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_2209: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_2210: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_2211: {
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
  View_404_2212: {
    width: wp("20.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.79999999999999%"),
    top: hp("10.245901639344261%"),
    justifyContent: "flex-start"
  },
  Text_404_2212: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2213: {
    width: wp("20.134136962890626%"),
    height: hp("13.9347357828109%"),
    top: hp("0.6827599363900276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73253580729166%")
  },
  View_404_2214: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344261%"),
    justifyContent: "flex-start"
  },
  Text_404_2214: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2215: {
    width: wp("63.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896202%"),
    justifyContent: "flex-start"
  },
  Text_404_2215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2216: {
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
  View_404_2217: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_404_2218: {
    width: wp("11.733333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(253, 194, 42, 1)"
  },
  View_404_2219: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93333333333334%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_404_2219: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2220: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_404_2220: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2221: {
    width: wp("17.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_404_2221: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2222: {
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_404_2222: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2223: {
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.6393442622950793%"),
    justifyContent: "flex-start"
  },
  Text_404_2223: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2224: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_2225: {
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
  View_404_2226: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_2227: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_404_2228: {
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
  ImageBackground_404_2229: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%")
  },
  ImageBackground_404_2231: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_404_2233: {
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
  View_404_2234: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_2235: {
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
  View_404_2236: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_2237: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_404_2238: {
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
  ImageBackground_404_2239: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%")
  },
  ImageBackground_404_2241: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_404_2243: {
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
  View_404_2244: {
    width: wp("10.666666666666668%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    justifyContent: "flex-start"
  },
  Text_404_2244: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2245: {
    width: wp("7.733333333333333%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    justifyContent: "flex-start"
  },
  Text_404_2245: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2246: {
    width: wp("9.066666666666666%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    justifyContent: "flex-start"
  },
  Text_404_2246: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2247: {
    width: wp("14.133333333333335%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    justifyContent: "flex-start"
  },
  Text_404_2247: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2248: {
    width: wp("8%"),
    top: hp("104.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    justifyContent: "flex-start"
  },
  Text_404_2248: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_2249: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("101.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%")
  },
  ImageBackground_404_2250: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("101.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    resizeMode: "cover"
  },
  ImageBackground_404_2251: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.666666666666664%"),
    resizeMode: "cover"
  },
  View_404_2252: {
    width: wp("93.86666666666666%"),
    height: hp("19.672131147540984%"),
    top: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_404_2253: {
    width: wp("7.994968668619791%"),
    height: hp("3.1420765027322406%"),
    top: hp("15.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%")
  },
  View_404_2254: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.994970703125006%")
  },
  View_404_2256: {
    width: wp("6.666666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_2256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2257: {
    width: wp("8.533333333333333%"),
    height: hp("4.2349726775956285%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  View_404_2258: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261637369791668%")
  },
  View_404_2260: {
    width: wp("8.533333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_2260: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_2261: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    resizeMode: "cover"
  },
  ImageBackground_404_2262: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_404_2263: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.800000000000004%"),
    resizeMode: "cover"
  },
  ImageBackground_404_2264: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%"),
    resizeMode: "cover"
  },
  ImageBackground_404_2265: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("15.163934426229517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    resizeMode: "cover"
  },
  View_404_2266: {
    width: wp("91.46666666666667%"),
    height: hp("19.672131147540984%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_2267: {
    width: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    top: hp("19.535519125683066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 239, 244, 1)"
  },
  View_404_2268: {
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
  View_404_2269: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_404_2270: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 199, 204, 1)"
  },
  View_404_2271: {
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_404_2271: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_404_2272: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_404_2273: {
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
  View_404_2274: {
    width: wp("23.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.79999999999998%"),
    top: hp("10.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_404_2274: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2275: {
    width: wp("20.134136962890626%"),
    height: hp("13.9347357828109%"),
    top: hp("0.6827599363900347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.732535807291665%")
  },
  View_404_2276: {
    width: wp("20.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344254%"),
    justifyContent: "flex-start"
  },
  Text_404_2276: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_2277: {
    width: wp("63.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_404_2277: {
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
