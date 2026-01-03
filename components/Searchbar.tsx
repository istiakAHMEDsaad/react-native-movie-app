import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const Searchbar = ({ placeholder, onPress }: Props) => {
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
        value=''
        onChange={() => {}}
        placeholderTextColor='#A8B5DB'
        className='flex-1 ml-2 text-white'
      />
    </View>
  );
};

export default Searchbar;
