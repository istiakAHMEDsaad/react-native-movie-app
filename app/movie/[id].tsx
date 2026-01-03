import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

const Details = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  return (
    <View>
      <Text>Movie id: {id}</Text>
    </View>
  )
}

export default Details