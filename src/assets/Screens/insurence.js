import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import Login from './login';
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

const {height, width} = Dimensions.get('window');
const Dashboard = ({navigation}) => {
  const Flat = [
    {
      src: require('../Images/dr.png'),
      name: 'Take care of Your Health ',
      name1: 'During pendemic',
      name2: 'Book Appointment',
    },
    {
      src: require('../Images/dr.png'),
      name: 'Take care of Your Health ',
      name1: 'During pendemic',
      name2: 'Book Appointment',
    },
    {
      src: require('../Images/dr.png'),
      name: 'Take care of Your Health ',
      name1: 'During pendemic',
      name2: 'Book Appointment',
    },
    {
      src: require('../Images/dr.png'),
      name: 'Take care of Your Health ',
      name1: 'During pendemic',
      name2: 'Book Appointment',
    },
  ];
  const Flat2 = [
    {
      src: require('../Images/1.png'),
      name: 'DR.Sumit',
    },
    {
      src: require('../Images/2.png'),
      name: 'DR.Sumit',
    },
    {
      src: require('../Images/3.png'),
      name: 'DR.Sumit',
    },
    {
      src: require('../Images/4.png'),
      name: 'DR.Sumit',
    },
    {
      src: require('../Images/5.png'),
      name: 'DR.Sumit',
    },
    {
      src: require('../Images/6.png'),
      name: 'DR.Sumit',
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{left: -40}}>
              <Image source={require('../Images/drlogo.png')} />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                style={{height: 25, width: 20, left: -70}}
                source={require('../Images/ll.png')}
              />
              <View style={{left: -65, justifyContent: 'center'}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: '#313FA0',
                    }}>
                    Home{' '}
                  </Text>
                </View>

                <Text style={{color: 'black'}}> ab-Sarita Vihar </Text>
              </View>
            </View>
            <View>
              <Icon name="bell" size={30} color={'black'} style={{left: 40}} />
            </View>
          </View>
          <View style={{width: width * 0.6}}>
            <Text style={{color: '#313FA0', fontSize: 24}}>
              Find Your Medical Solution!
            </Text>
          </View>
          <View
            style={{
              top: 5,
              // backgroundColor: 'yellow',
              height: height * 0.2,
              width: width / 1,
              alignSelf: 'center',
            }}>
            <FlatList
              horizontal={true}
              // numColumns={4}
              showsHorizontalScrollIndicator={false}
              data={Flat}
              renderItem={({item}) => {
                return (
                  <View style={{margin: 10}}>
                    <View style={styles.cont}>
                      <View style={{justifyContent: 'center'}}>
                        <Image source={item.src} style={styles.img} />
                      </View>
                      <View style={styles.container2}>
                        <View style={styles.container1}>
                          <Text style={styles.txt}>{item.name}</Text>
                          <View style={{height: height * 0.01}}></View>
                          <Text style={styles.txt}>{item.name1}</Text>
                          <View style={{height: height * 0.027}}></View>
                          <TouchableOpacity
                            style={{
                              backgroundColor: 'skyblue',
                              width: width * 0.3,
                              alignItems: 'center',
                              height: height * 0.04,
                              borderRadius: 8,
                            }}>
                            <Text style={styles.txt2}>{item.name2}</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={{height: height * 0.02}}></View>
                  </View>
                );
              }}
            />
          </View>
          <View style={{height: height * 0.06}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 26, color: '#313FA0'}}>Specialties</Text>
              <TouchableOpacity>
                <Text style={{color: '#313FA0'}}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: height * 0.3}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // top: 10,
              }}>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 7,
                  }}>
                  <Image
                    source={require('../Images/1.png')}
                    style={{height: 50, width: 50}}
                  />
                  <Text style={{textAlign: 'center', top: 5}}>Kidney</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 7,
                  }}>
                  <Image
                    source={require('../Images/2.png')}
                    style={{height: 50, width: 50}}
                  />
                  <Text style={{textAlign: 'center', top: 5}}>Kidney</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 7,
                  }}>
                  <Image
                    source={require('../Images/3.png')}
                    style={{height: 50, width: 50}}
                  />
                  <Text style={{textAlign: 'center', top: 5}}>Kidney</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: 10,
              }}>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 7,
                  }}>
                  <Image
                    source={require('../Images/4.png')}
                    style={{height: 50, width: 50}}
                  />
                  <Text style={{textAlign: 'center', top: 5}}>Kidney</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 7,
                  }}>
                  <Image
                    source={require('../Images/5.png')}
                    style={{height: 50, width: 50}}
                  />
                  <Text style={{textAlign: 'center', top: 5}}>Kidney</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 7,
                  }}>
                  <Image
                    source={require('../Images/6.png')}
                    style={{height: 50, width: 50}}
                  />
                  <Text style={{textAlign: 'center', top: 5}}>Kidney</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#313FA0'}}>
              Top Doctors
            </Text>
          </View>
          <View
            style={{
              height: height * 0.2,

              justifyContent: 'space-evenly',
            }}>
            <ScrollView horizontal={true}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  style={{height: 130, width: 100, borderRadius: 7}}
                  source={require('../Images/drr.jpg')}
                />
                <Text style={{color: '#313FA0'}}>Dr.Smith</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  style={{height: 130, width: 100, borderRadius: 7}}
                  source={require('../Images/drr.jpg')}
                />
                <Text style={{color: '#313FA0'}}>Dr.Smith</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  style={{height: 130, width: 100, borderRadius: 7}}
                  source={require('../Images/drr.jpg')}
                />
                <Text style={{color: '#313FA0'}}>Dr.Smith</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  style={{height: 130, width: 100, borderRadius: 7}}
                  source={require('../Images/drr.jpg')}
                />
                <Text style={{color: '#313FA0'}}>Dr.Smith</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  style={{height: 130, width: 100, borderRadius: 7}}
                  source={require('../Images/drr.jpg')}
                />
                <Text style={{color: '#313FA0'}}>Dr.Smith</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  style={{height: 130, width: 100, borderRadius: 7}}
                  source={require('../Images/drr.jpg')}
                />
                <Text style={{color: '#313FA0'}}>Dr.Smith</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  style={{height: 130, width: 100, borderRadius: 7}}
                  source={require('../Images/drr.jpg')}
                />
                <Text style={{color: '#313FA0'}}>Dr.Smith</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  style={{height: 130, width: 100, borderRadius: 7}}
                  source={require('../Images/drr.jpg')}
                />
                <Text style={{color: '#313FA0'}}>Dr.Smith</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            height: height * 0.1,
            backgroundColor: 'white',
            // bottom: 20,
            alignItems:'center',
            flexDirection: 'row',
            justifyContent:'space-around',
            
          }}>
          <TouchableOpacity>
            <Image source={require('../Images/home1.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../Images/se.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../Images/ca.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../Images/cal.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../Images/us.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
  
    height: height / 1,
    width: width * 0.9,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    height: height * 0.12,
    // backgroundColor: 'red',
    width: width * 0.9, // alignSelf:'center'
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  img: {
    height: height * 0.15,
    width: 100,
    // borderRadius:20
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
  },
  container2: {
    // backgroundColor:'#313FA0',
    height: height * 0.12,
    width: width * 0.75,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container1: {
    // backgroundColor:'#313FA0',
    height: height * 0.11,
    width: width * 0.78,
    // right:24,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  txt1: {
    color: 'grey',
    fontSize: 10,
    fontWeight: '600',
    backgroundColor: '#313FA0',
  },
  txt2: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    top: 10,
  },
  main: {
    backgroundColor: '#313FA0',
    height: height * 1,
    width: width * 1,
  },

  vie2: {
    backgroundColor: 'rgb(113,222,207)',
    height: height * 0.06,
    width: width * 0.13,

    justifyContent: 'center',
    borderRadius: 10,
  },
  txt5: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  vie3: {
    justifyContent: 'center',
    // backgroundColor:'green',
    width: width / 1.4,
    alignSelf: 'center',
  },
  txt4: {
    textAlign: 'center',
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  inv: {
    width: width / 1.1,
    alignSelf: 'center',
    // height:height*1
  },
  cont: {
    flexDirection: 'row',
    backgroundColor: '#313FA0',
    width: width * 0.89,
    alignSelf: 'center',
    height: height * 0.154,
    borderWidth: 10,
    borderColor: '#313FA0',
    borderRadius: 20,

    //overflow: 'hidden',
  },
});
