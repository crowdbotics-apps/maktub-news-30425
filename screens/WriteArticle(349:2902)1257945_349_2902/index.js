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
      <View style={styles.View_349_2903}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00f8/bf4e/055ff0f30cce99d88ed71223b09fd3a5"
          }}
          style={styles.ImageBackground_349_2904}
        />
        <View style={styles.View_349_2906}>
          <Text style={styles.Text_349_2906}>Write article</Text>
        </View>
      </View>
      <View style={styles.View_349_2907}>
        <View style={styles.View_349_2908}>
          <Text style={styles.Text_349_2908}>Select category</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/442f/d29b/d599e1877044b95820e47e3bb9be562f"
          }}
          style={styles.ImageBackground_349_2909}
        />
        <View style={styles.View_349_2910}>
          <Text style={styles.Text_349_2910}>Select Category</Text>
        </View>
      </View>
      <View style={styles.View_349_2911}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1560/adcc/e4e8f08f90bcc2f4ceb5beb36d279e03"
          }}
          style={styles.ImageBackground_349_2912}
        />
        <View style={styles.View_349_2913}>
          <Text style={styles.Text_349_2913}>Publish now</Text>
        </View>
      </View>
      <View style={styles.View_349_2914}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecba/6d01/4e537ce110218abf8d5294e8717b0ad9"
          }}
          style={styles.ImageBackground_349_2915}
        />
        <View style={styles.View_349_2918}>
          <View style={styles.View_349_2920}>
            <View style={styles.View_I349_2920_218_131}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I349_2920_218_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
                }}
                style={styles.ImageBackground_I349_2920_218_133}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
                }}
                style={styles.ImageBackground_I349_2920_218_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
                }}
                style={styles.ImageBackground_I349_2920_218_141}
              />
              <View style={styles.View_I349_2920_218_146}>
                <View style={styles.View_I349_2920_218_146_218_148}>
                  <Text style={styles.Text_I349_2920_218_146_218_148}>
                    9:41
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_349_2921}>
          <Text style={styles.Text_349_2921}>Write article</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/6989/2587d6407370401871aef1d6a1e4f934"
          }}
          style={styles.ImageBackground_349_2922}
        />
        <View style={styles.View_349_2924}>
          <Text style={styles.Text_349_2924}>Draft</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61c/1e6d/d564473cd29dc485a90bf5a05549c8b7"
        }}
        style={styles.ImageBackground_349_2925}
      />
      <View style={styles.View_349_2927}>
        <View style={styles.View_349_2928} />
        <View style={styles.View_349_2929}>
          <Text style={styles.Text_349_2929}>Add Image</Text>
        </View>
        <View style={styles.View_349_2930}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9450/a99b/52fc6ba966f77e3870cb35227d61ef83"
            }}
            style={styles.ImageBackground_349_2931}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef4/ea3e/02359cb5fa9d61668a565adb0aff8528"
            }}
            style={styles.ImageBackground_349_2932}
          />
        </View>
      </View>
      <View style={styles.View_349_2935}>
        <Text style={styles.Text_349_2935}>Add Featured Image</Text>
      </View>
      <View style={styles.View_349_2936}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/599a/20d7/be696dbe6db1a716d7b27915d9893be9"
          }}
          style={styles.ImageBackground_349_2937}
        />
        <View style={styles.View_349_2938}>
          <Text style={styles.Text_349_2938}>Write a Title</Text>
        </View>
      </View>
      <View style={styles.View_349_2939}>
        <Text style={styles.Text_349_2939}>
          Who can resist the mouth-watering pictures in a cookbook? Who doesn’t
          have childhood memories of the fragrances that wafted from the kitchen
          on holidays, and even on regular, ordinary days? Spices, bread baking,
          cookies fresh out of the oven – all these trigger{" "}
        </Text>
      </View>
      <View style={styles.View_349_2940}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6584/9ba8/e853f5c0ed4bf4b78bb1559f8dba812a"
          }}
          style={styles.ImageBackground_349_2941}
        />
        <View style={styles.View_349_2942}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffc8/0e41/69a9cf3eea74928f2b77bc2369526e44"
            }}
            style={styles.ImageBackground_349_2943}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e456/c4b7/b3607d1ae0e0c0b43c72739060a1e729"
            }}
            style={styles.ImageBackground_349_2944}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a693/4b9d/5bdadc34ba4c249d33ba1765c6122cd9"
            }}
            style={styles.ImageBackground_349_2947}
          />
        </View>
        <View style={styles.View_349_2950}>
          <View style={styles.View_349_2951}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ff1/823b/a1db1dc6e62bcf160bdefdf601676010"
              }}
              style={styles.ImageBackground_349_2952}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b31/7182/e91f478fe77a51580cc824004db2d020"
              }}
              style={styles.ImageBackground_349_2953}
            />
          </View>
          <View style={styles.View_349_2954}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e67/0265/157c5297fcb9f86f8a98db494be63441"
              }}
              style={styles.ImageBackground_349_2955}
            />
            <View style={styles.View_349_2956}>
              <Text style={styles.Text_349_2956}>Image</Text>
            </View>
          </View>
          <View style={styles.View_349_2957}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a12d/e5b2/a8ca9f0dc8469b14a1c78b1aa5341eaa"
              }}
              style={styles.ImageBackground_349_2958}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b88b/b654/012dce784bd11d01ce08f19fe8a2b586"
              }}
              style={styles.ImageBackground_349_2959}
            />
            <View style={styles.View_349_2960}>
              <Text style={styles.Text_349_2960}>Bold</Text>
            </View>
          </View>
          <View style={styles.View_349_2961}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b88b/b654/012dce784bd11d01ce08f19fe8a2b586"
              }}
              style={styles.ImageBackground_349_2963}
            />
            <View style={styles.View_349_2964}>
              <Text style={styles.Text_349_2964}>Copy</Text>
            </View>
          </View>
          <View style={styles.View_349_2965}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b88b/b654/012dce784bd11d01ce08f19fe8a2b586"
              }}
              style={styles.ImageBackground_349_2967}
            />
            <View style={styles.View_349_2968}>
              <Text style={styles.Text_349_2968}>Cut</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_349_2969}>
        <Text style={styles.Text_349_2969}>Title</Text>
      </View>
      <View style={styles.View_349_2970}>
        <View style={styles.View_349_2971}>
          <View style={styles.View_349_2972}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/644b/1eb8/e98feae7dceccbe7220013108050cb4c"
              }}
              style={styles.ImageBackground_I349_2972_274_1431}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e140/e6ae/0824d77dceed0c48335e2fe133fef66f"
              }}
              style={styles.ImageBackground_I349_2972_274_1432}
            />
            <View style={styles.View_I349_2972_274_1433}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
                }}
                style={styles.ImageBackground_I349_2972_274_1434}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be1c/a5b3/b1119cf1ff8a2719e9285327d05857c6"
                }}
                style={styles.ImageBackground_I349_2972_274_1440}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51e2/1053/f5e894cadf91e9ccf68b455df9768136"
                }}
                style={styles.ImageBackground_I349_2972_274_1441}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
              }}
              style={styles.ImageBackground_I349_2972_274_1442}
            />
            <View style={styles.View_I349_2972_274_1449}>
              <View style={styles.View_I349_2972_274_1450}>
                <View style={styles.View_I349_2972_274_1451}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4967/bdb5/5585bbd64533c814691be2c8f104ffea"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1451_274_1554}
                  />
                  <View style={styles.View_I349_2972_274_1451_274_1555}>
                    <Text style={styles.Text_I349_2972_274_1451_274_1555}>
                      return
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1452}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa9/2f12/a26efece5953478ce43f1c753589cc96"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1453}
                  />
                  <View style={styles.View_I349_2972_274_1454}>
                    <Text style={styles.Text_I349_2972_274_1454}>space</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1455}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8770/4a04/87baf0c0fd418e42bbdee12eea180581"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1456}
                  />
                  <View style={styles.View_I349_2972_274_1457}>
                    <Text style={styles.Text_I349_2972_274_1457}>123</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I349_2972_274_1458}>
                <View style={styles.View_I349_2972_274_1459}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d67/885a/30fe8ebeda160cb4ca5536311721f840"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1460}
                  />
                  <View style={styles.View_I349_2972_274_1461}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca22/d931/08b8ac744b597b30498c87fb86d40be7"
                      }}
                      style={styles.ImageBackground_I349_2972_274_1462}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c38/9600/47deafae1606cb712bcc0bd2277bd968"
                      }}
                      style={styles.ImageBackground_I349_2972_274_1465}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4caa/e7b8/7666a27967ecc898e1d4defd13db7c65"
                      }}
                      style={styles.ImageBackground_I349_2972_274_1466}
                    />
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1467}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1468}
                  />
                  <View style={styles.View_I349_2972_274_1469}>
                    <Text style={styles.Text_I349_2972_274_1469}>M</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1470}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1471}
                  />
                  <View style={styles.View_I349_2972_274_1472}>
                    <Text style={styles.Text_I349_2972_274_1472}>N</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1473}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1474}
                  />
                  <View style={styles.View_I349_2972_274_1475}>
                    <Text style={styles.Text_I349_2972_274_1475}>B</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1476}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1477}
                  />
                  <View style={styles.View_I349_2972_274_1478}>
                    <Text style={styles.Text_I349_2972_274_1478}>V</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1479}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1480}
                  />
                  <View style={styles.View_I349_2972_274_1481}>
                    <Text style={styles.Text_I349_2972_274_1481}>C</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1482}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1483}
                  />
                  <View style={styles.View_I349_2972_274_1484}>
                    <Text style={styles.Text_I349_2972_274_1484}>X</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1485}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1486}
                  />
                  <View style={styles.View_I349_2972_274_1487}>
                    <Text style={styles.Text_I349_2972_274_1487}>Z</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1488}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe7/2b71/f1f1cef80d081d904f751d21a77e6bea"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1489}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae0c/2413/2bfa0d8378e8c3401c2b3fb14ed7f74b"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1490}
                  />
                </View>
              </View>
              <View style={styles.View_I349_2972_274_1491}>
                <View style={styles.View_I349_2972_274_1492}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1493}
                  />
                  <View style={styles.View_I349_2972_274_1494}>
                    <Text style={styles.Text_I349_2972_274_1494}>L</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1495}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1496}
                  />
                  <View style={styles.View_I349_2972_274_1497}>
                    <Text style={styles.Text_I349_2972_274_1497}>K</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1498}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1499}
                  />
                  <View style={styles.View_I349_2972_274_1500}>
                    <Text style={styles.Text_I349_2972_274_1500}>J</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1501}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1502}
                  />
                  <View style={styles.View_I349_2972_274_1503}>
                    <Text style={styles.Text_I349_2972_274_1503}>H</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1504}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1505}
                  />
                  <View style={styles.View_I349_2972_274_1506}>
                    <Text style={styles.Text_I349_2972_274_1506}>G</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1507}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1508}
                  />
                  <View style={styles.View_I349_2972_274_1509}>
                    <Text style={styles.Text_I349_2972_274_1509}>F</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1510}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1511}
                  />
                  <View style={styles.View_I349_2972_274_1512}>
                    <Text style={styles.Text_I349_2972_274_1512}>D</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1513}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1514}
                  />
                  <View style={styles.View_I349_2972_274_1515}>
                    <Text style={styles.Text_I349_2972_274_1515}>S</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1516}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1517}
                  />
                  <View style={styles.View_I349_2972_274_1518}>
                    <Text style={styles.Text_I349_2972_274_1518}>A</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I349_2972_274_1519}>
                <View style={styles.View_I349_2972_274_1520}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1521}
                  />
                  <View style={styles.View_I349_2972_274_1522}>
                    <Text style={styles.Text_I349_2972_274_1522}>P</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1523}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1524}
                  />
                  <View style={styles.View_I349_2972_274_1525}>
                    <Text style={styles.Text_I349_2972_274_1525}>O</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1526}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1527}
                  />
                  <View style={styles.View_I349_2972_274_1528}>
                    <Text style={styles.Text_I349_2972_274_1528}>I</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1529}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1530}
                  />
                  <View style={styles.View_I349_2972_274_1531}>
                    <Text style={styles.Text_I349_2972_274_1531}>U</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1532}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1533}
                  />
                  <View style={styles.View_I349_2972_274_1534}>
                    <Text style={styles.Text_I349_2972_274_1534}>Y</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1535}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1536}
                  />
                  <View style={styles.View_I349_2972_274_1537}>
                    <Text style={styles.Text_I349_2972_274_1537}>T</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1538}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1539}
                  />
                  <View style={styles.View_I349_2972_274_1540}>
                    <Text style={styles.Text_I349_2972_274_1540}>R</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1541}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1542}
                  />
                  <View style={styles.View_I349_2972_274_1543}>
                    <Text style={styles.Text_I349_2972_274_1543}>E</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1544}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1545}
                  />
                  <View style={styles.View_I349_2972_274_1546}>
                    <Text style={styles.Text_I349_2972_274_1546}>W</Text>
                  </View>
                </View>
                <View style={styles.View_I349_2972_274_1547}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd5/ec0e/9781325f3edcdf9d81fa01c3274ffbbe"
                    }}
                    style={styles.ImageBackground_I349_2972_274_1548}
                  />
                  <View style={styles.View_I349_2972_274_1549}>
                    <Text style={styles.Text_I349_2972_274_1549}>Q</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I349_2972_274_1550}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b24/9212/5d280c4129743f1a25dd4cb4031ecf36"
                }}
                style={styles.ImageBackground_I349_2972_274_1550_274_1557}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a754/fc0e/8b0ea687831eee456c9961a84d6df7ac"
                }}
                style={styles.ImageBackground_I349_2972_274_1550_274_1558}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a754/fc0e/8b0ea687831eee456c9961a84d6df7ac"
                }}
                style={styles.ImageBackground_I349_2972_274_1550_274_1559}
              />
            </View>
          </View>
          <View style={styles.View_349_2973}>
            <Text style={styles.Text_349_2973}>Image</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb94/0935/e9ce0403238eb228bb505da884076d1d"
          }}
          style={styles.ImageBackground_349_2974}
        />
        <View style={styles.View_349_2980}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9450/a99b/52fc6ba966f77e3870cb35227d61ef83"
            }}
            style={styles.ImageBackground_349_2981}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef4/ea3e/02359cb5fa9d61668a565adb0aff8528"
            }}
            style={styles.ImageBackground_349_2982}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("115.30054644808743%") },
  View_349_2903: {
    width: wp("91.46666666666667%"),
    height: hp("33.7431693989071%"),
    top: hp("55.32786885245902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_349_2904: {
    width: wp("91.46666666666667%"),
    height: hp("29.23497267759563%"),
    top: hp("4.508196721311471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2906: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_2906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_349_2907: {
    width: wp("91.46666666666667%"),
    height: hp("10.10928961748634%"),
    top: hp("90.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_349_2908: {
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_2908: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_349_2909: {
    width: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    top: hp("4.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2910: {
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.284153005464489%"),
    justifyContent: "flex-start"
  },
  Text_349_2910: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_349_2911: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("102.86885245901641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_349_2912: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2913: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("2.322404371584682%"),
    justifyContent: "flex-start"
  },
  Text_349_2913: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_349_2914: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_349_2915: {
    width: wp("100%"),
    height: hp("15.027322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2918: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2920: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I349_2920_218_131: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I349_2920_218_132: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2920_218_133: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679639472336067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_I349_2920_218_137: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_I349_2920_218_141: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_I349_2920_218_146: {
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
  View_I349_2920_218_146_218_148: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I349_2920_218_146_218_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_2921: {
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("8.743169398907105%"),
    justifyContent: "flex-start"
  },
  Text_349_2921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_2922: {
    width: wp("3.2%"),
    height: hp("2.8688524590163933%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_349_2924: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("9.426229508196721%"),
    justifyContent: "flex-start"
  },
  Text_349_2924: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588234782218933,
    textTransform: "none"
  },
  ImageBackground_349_2925: {
    width: wp("5.6000015258789055%"),
    height: hp("1.6393446531452118%"),
    top: hp("97.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%")
  },
  View_349_2927: {
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
  View_349_2928: {
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
  View_349_2929: {
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6.147540983606554%"),
    justifyContent: "flex-start"
  },
  Text_349_2929: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_2930: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%")
  },
  ImageBackground_349_2931: {
    width: wp("1%"),
    height: hp("0.5122950819672131%"),
    top: hp("0.7172131147540952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  ImageBackground_349_2932: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2935: {
    width: wp("38.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("16.939890710382514%"),
    justifyContent: "flex-start"
  },
  Text_349_2935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_2936: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%")
  },
  ImageBackground_349_2937: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2938: {
    width: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_349_2938: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_2939: {
    width: wp("89.27000325520834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("62.158469945355186%"),
    justifyContent: "flex-start"
  },
  Text_349_2939: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38588228821754456,
    textTransform: "none"
  },
  View_349_2940: {
    width: wp("83.90250651041666%"),
    height: hp("12.727768694768187%"),
    top: hp("63.661202185792355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_349_2941: {
    width: wp("0.5650000254313151%"),
    height: hp("2.694219318243975%"),
    top: hp("7.002566811816926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.50250651041667%")
  },
  View_349_2942: {
    width: wp("18.92750447591146%"),
    height: hp("7.745880898230714%"),
    top: hp("4.981869556864744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.0875%")
  },
  ImageBackground_349_2943: {
    width: wp("15.255001831054688%"),
    height: hp("3.872940188548604%"),
    top: hp("1.8523336108265056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.977508544921875%")
  },
  ImageBackground_349_2944: {
    width: wp("3.390000152587891%"),
    height: hp("5.725144037132054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_349_2947: {
    width: wp("3.390000152587891%"),
    height: hp("5.893683303249339%"),
    top: hp("1.852200200648909%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.537504069010417%")
  },
  View_349_2950: {
    width: wp("83.90250651041666%"),
    height: hp("7.240792571521196%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2951: {
    width: wp("83.90250651041666%"),
    height: hp("7.240792571521196%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_349_2952: {
    width: wp("3.955000305175781%"),
    height: hp("1.1787208703046288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.267496744791664%"),
    top: hp("6.062091764856554%")
  },
  ImageBackground_349_2953: {
    width: wp("83.90250651041666%"),
    height: hp("6.061993270623879%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.086263019649095e-7%")
  },
  View_349_2954: {
    width: wp("23.730000813802082%"),
    height: hp("6.061993270623879%"),
    top: hp("0.00013341017758961016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.17250569661458%")
  },
  ImageBackground_349_2955: {
    width: wp("23.730000813802082%"),
    height: hp("6.061993270623879%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2956: {
    width: wp("23.730000813802082%"),
    top: hp("1.6839032616120164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000012207031247157829%"),
    justifyContent: "flex-start"
  },
  Text_349_2956: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15399999916553497,
    textTransform: "none"
  },
  View_349_2957: {
    width: wp("25.001247151692706%"),
    height: hp("6.062013594830622%"),
    top: hp("0.00006670508879835779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.31250813802083%")
  },
  ImageBackground_349_2958: {
    width: wp("24.860001627604166%"),
    height: hp("6.061993270623879%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000002034505207859638%")
  },
  ImageBackground_349_2959: {
    width: wp("0.28250001271565756%"),
    minWidth: wp("0.28250001271565756%"),
    height: hp("6.061993270623879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.71875%"),
    top: hp("0%")
  },
  View_349_2960: {
    width: wp("24.860001627604166%"),
    top: hp("1.6839699667008077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000002034505207859638%"),
    justifyContent: "flex-start"
  },
  Text_349_2960: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15399999916553497,
    textTransform: "none"
  },
  View_349_2961: {
    width: wp("16.526251220703124%"),
    height: hp("6.061993270623879%"),
    top: hp("0.00013341017758961016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.927510579427086%")
  },
  ImageBackground_349_2963: {
    width: wp("0.28250001271565756%"),
    minWidth: wp("0.28250001271565756%"),
    height: hp("6.061993270623879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.24374999999999%"),
    top: hp("0%")
  },
  View_349_2964: {
    width: wp("13.560000610351564%"),
    top: hp("1.683836556523218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_2964: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15399999916553497,
    textTransform: "none"
  },
  View_349_2965: {
    width: wp("15.113751220703126%"),
    height: hp("6.061993270623879%"),
    top: hp("0.00013341017758961016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1299992879231766%")
  },
  ImageBackground_349_2967: {
    width: wp("0.28250001271565756%"),
    minWidth: wp("0.28250001271565756%"),
    height: hp("6.061993270623879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.831247456868489%"),
    top: hp("0%")
  },
  View_349_2968: {
    width: wp("13.560000610351564%"),
    top: hp("1.683836556523218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_349_2968: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15399999916553497,
    textTransform: "none"
  },
  View_349_2969: {
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("36.33879781420765%"),
    justifyContent: "flex-start"
  },
  Text_349_2969: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_349_2970: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("45.49180327868852%"),
    minHeight: hp("45.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("80.73770491803278%")
  },
  View_349_2971: {
    width: wp("100%"),
    height: hp("45.49180327868852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_349_2972: {
    width: wp("100%"),
    height: hp("45.49180327868852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I349_2972_274_1431: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032804%")
  },
  ImageBackground_I349_2972_274_1432: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.84699453551913%")
  },
  View_I349_2972_274_1433: {
    flexGrow: 1,
    width: wp("4.000001525878906%"),
    height: hp("3.4149446122633305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("38.661202185792376%")
  },
  ImageBackground_I349_2972_274_1434: {
    width: wp("4.000001525878906%"),
    height: hp("2.0036429003939604%"),
    top: hp("1.411279563695345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2972_274_1440: {
    width: wp("2.40197270711263%"),
    height: hp("2.45819925610485%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999837239583343%")
  },
  ImageBackground_I349_2972_274_1441: {
    width: wp("1.5129168192545572%"),
    height: hp("2.0036448546446084%"),
    top: hp("0.22779787824451603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2443033854166572%")
  },
  ImageBackground_I349_2972_274_1442: {
    flexGrow: 1,
    width: wp("7.066666666666667%"),
    height: hp("3.6202185792349724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999995%"),
    top: hp("38.52459016393445%")
  },
  View_I349_2972_274_1449: {
    flexGrow: 1,
    width: wp("98.66666666666667%"),
    height: hp("27.86885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("7.103825136612031%")
  },
  View_I349_2972_274_1450: {
    width: wp("98.66666666666667%"),
    height: hp("6.0109289617486334%"),
    top: hp("21.857923497267763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1451: {
    width: wp("23.733333333333334%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I349_2972_274_1451_274_1554: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333332575%"),
    top: hp("0%")
  },
  View_I349_2972_274_1451_274_1555: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.200000000000003%"),
    top: hp("1.4344262295082046%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1451_274_1555: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I349_2972_274_1452: {
    width: wp("49.06666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%")
  },
  ImageBackground_I349_2972_274_1453: {
    width: wp("49.06666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1454: {
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333338%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1454: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1455: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2972_274_1456: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1457: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1457: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I349_2972_274_1458: {
    width: wp("98.4%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1459: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  ImageBackground_I349_2972_274_1460: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1461: {
    width: wp("6.100981648763021%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.565686035156247%"),
    top: hp("1.707650273224047%")
  },
  ImageBackground_I349_2972_274_1462: {
    width: wp("6.100981648763021%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2972_274_1465: {
    width: wp("2.3570226033528643%"),
    height: hp("1.2074910877832297%"),
    top: hp("0.5543859929986326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5443400065104242%")
  },
  ImageBackground_I349_2972_274_1466: {
    width: wp("2.3570226033528643%"),
    height: hp("1.2074910877832297%"),
    top: hp("0.5543859929986326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5443400065104242%")
  },
  View_I349_2972_274_1467: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.06666666666666%")
  },
  ImageBackground_I349_2972_274_1468: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1469: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.066666666666663%"),
    top: hp("0.990437158469959%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1469: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1470: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666668%")
  },
  ImageBackground_I349_2972_274_1471: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1472: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4666666666666544%"),
    top: hp("0.990437158469959%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1472: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1473: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.06666666666668%")
  },
  ImageBackground_I349_2972_274_1474: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1475: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0.990437158469959%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1475: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1476: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%")
  },
  ImageBackground_I349_2972_274_1477: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1478: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7333333333333343%"),
    top: hp("0.990437158469959%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1478: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1479: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%")
  },
  ImageBackground_I349_2972_274_1480: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1481: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5999999999999943%"),
    top: hp("0.990437158469959%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1481: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1482: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.93333333333333%")
  },
  ImageBackground_I349_2972_274_1483: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1484: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("0.990437158469959%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1484: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1485: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%")
  },
  ImageBackground_I349_2972_274_1486: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1487: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.990437158469959%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1487: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1488: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2972_274_1489: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2972_274_1490: {
    width: wp("5.085188293457031%"),
    height: hp("2.1977382930901532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0575927734375%"),
    top: hp("1.7640160732582046%")
  },
  View_I349_2972_274_1491: {
    width: wp("88.53333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.933333333333334%")
  },
  View_I349_2972_274_1492: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.13333333333333%")
  },
  ImageBackground_I349_2972_274_1493: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1494: {
    width: wp("2.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1494: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1495: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333333%")
  },
  ImageBackground_I349_2972_274_1496: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1497: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5333333333333314%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1497: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1498: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.13333333333334%")
  },
  ImageBackground_I349_2972_274_1499: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1500: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.73333333333332%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1500: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1501: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333334%")
  },
  ImageBackground_I349_2972_274_1502: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1503: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4666666666666544%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1503: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1504: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.13333333333333%")
  },
  ImageBackground_I349_2972_274_1505: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1506: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5333333333333314%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1506: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1507: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I349_2972_274_1508: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1509: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1509: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1510: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_I349_2972_274_1511: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1512: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6000000000000014%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1512: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1513: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_I349_2972_274_1514: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1515: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5999999999999996%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1515: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1516: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2972_274_1517: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1518: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7333333333333343%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1518: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1519: {
    width: wp("98.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1520: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_I349_2972_274_1521: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1522: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6000000000000085%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1522: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1523: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_I349_2972_274_1524: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1525: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4666666666666686%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1525: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1526: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_I349_2972_274_1527: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1528: {
    width: wp("1.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1528: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1529: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_I349_2972_274_1530: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1531: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1531: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1532: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_I349_2972_274_1533: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1534: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8000000000000043%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1534: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1535: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_I349_2972_274_1536: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1537: {
    width: wp("2.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8000000000000043%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1537: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1538: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I349_2972_274_1539: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1540: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.599999999999998%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1540: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1541: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_I349_2972_274_1542: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1543: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.466666666666665%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1543: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1544: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_I349_2972_274_1545: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1546: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333325%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1546: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1547: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I349_2972_274_1548: {
    width: wp("8.4%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I349_2972_274_1549: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.466666666666667%"),
    top: hp("0.9904371584699447%"),
    justifyContent: "flex-start"
  },
  Text_I349_2972_274_1549: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I349_2972_274_1550: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I349_2972_274_1550_274_1557: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I349_2972_274_1550_274_1558: {
    flexGrow: 1,
    width: wp("0.26666666666666666%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666667%"),
    top: hp("0%")
  },
  ImageBackground_I349_2972_274_1550_274_1559: {
    flexGrow: 1,
    width: wp("0.26666666666666666%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666667%"),
    top: hp("0%")
  },
  View_349_2973: {
    width: wp("28.000000000000004%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_349_2973: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  ImageBackground_349_2974: {
    width: wp("5.066666666666666%"),
    height: hp("1.912568306010929%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333333%")
  },
  View_349_2980: {
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%")
  },
  ImageBackground_349_2981: {
    width: wp("1%"),
    height: hp("0.5122950819672131%"),
    top: hp("0.7172131147541023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000012%")
  },
  ImageBackground_349_2982: {
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
