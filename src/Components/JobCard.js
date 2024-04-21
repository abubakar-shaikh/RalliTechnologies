import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import applyIcon from '../Assets/Images/apply.png';
import saveIcon from '../Assets/Images/save.png';
import starIcon from '../Assets/Images/star.png';

const JobCard = ({title, address}) => {
  return (
    <View
      style={{
        width: widthPercentageToDP(90),
        alignSelf: 'center',
        marginVertical: heightPercentageToDP(2),
        paddingHorizontal: widthPercentageToDP(3),
        paddingVertical: heightPercentageToDP(1.5),
        borderRadius: widthPercentageToDP(2),
        backgroundColor: '#fff',
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{
            color: '#111111',
            fontWeight: '500',
            fontSize: widthPercentageToDP(4),
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: '#333333',
            fontWeight: '400',
            fontSize: widthPercentageToDP(4),
            marginTop: heightPercentageToDP(1),
            width: widthPercentageToDP(50),
          }}>
          {address}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: heightPercentageToDP(1.5),
          }}>
          <Image
            source={applyIcon}
            resizeMode="contain"
            style={{
              width: widthPercentageToDP(4),
              height: heightPercentageToDP(2),
            }}
          />
          <Text
            style={{
              color: '#111111',
              fontWeight: '500',
              fontSize: widthPercentageToDP(4.3),
              paddingHorizontal: widthPercentageToDP(2),
            }}>
            Easy Apply
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: heightPercentageToDP(1.5),
          }}>
          <Text
            style={{
              color: '#111111',
              fontWeight: '500',
              fontSize: widthPercentageToDP(4),
            }}>
            Posted:
          </Text>
          <Text
            style={{
              color: '#111111',
              fontWeight: '400',
              fontSize: widthPercentageToDP(4),
              paddingHorizontal: widthPercentageToDP(2),
            }}>
            9/17/2020
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={saveIcon}
          resizeMode="contain"
          style={{
            height: heightPercentageToDP(2.5),
            width: widthPercentageToDP(5),
          }}
        />
        <Image
          source={starIcon}
          resizeMode="contain"
          style={{
            height: heightPercentageToDP(2.5),
            width: widthPercentageToDP(5),
            marginTop: heightPercentageToDP(1),
          }}
        />
      </View>
    </View>
  );
};

export default JobCard;
