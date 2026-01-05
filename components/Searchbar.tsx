import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

const Searchbar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 px-5 py-4 rounded-full'>
      <Image
        source={icons.search}
        tintColor='#AB8BFF'
        resizeMode='contain'
        className='size-5'
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor='#A8B5DB'
        className='flex-1 ml-2 text-white'
      />
    </View>
  );
};

export default Searchbar;
