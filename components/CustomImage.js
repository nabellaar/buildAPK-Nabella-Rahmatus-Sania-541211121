import React from 'react';
import { Image } from 'react-native';

const CustomImage = (props) => {
  const { source, style } = props;
  return <Image source={source} style={style} />;
};

export default CustomImage;
