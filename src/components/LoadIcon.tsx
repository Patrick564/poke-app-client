import { View, ActivityIndicator } from 'react-native'

const LoadIcon = () => {
  return (
    <View>
      <ActivityIndicator animating size={'large'} color={'black'} style={{ marginVertical: 50 }} />
    </View>
  )
}

export default LoadIcon
