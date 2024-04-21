import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const SocialIcon = ({image}) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        resizeMode="contain"
        style={{height: heightPercentageToDP(3), width: widthPercentageToDP(6)}}
      />
    </View>
  );
};

export default SocialIcon;

const styles = StyleSheet.create({
  container: {
    borderWidth: heightPercentageToDP(0.2),
    padding: widthPercentageToDP(3),
    borderColor: '#D4DAE5',
  },
});
