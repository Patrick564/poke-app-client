import { ActivityIndicator } from 'react-native'

const LoadingIcon = () => {
  return (
    <ActivityIndicator
      animating size={'large'}
      color={'black'}
      style={{ marginVertical: 50 }}
    />
  )
}

export default LoadingIcon
