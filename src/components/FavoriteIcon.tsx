import { Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Params = {
  favoriteStatus: boolean
  changeFavoriteStatus: any
}

const FavoriteIcon = ({ favoriteStatus, changeFavoriteStatus }: Params) => {
  return (
    <Pressable onPress={changeFavoriteStatus}>
      {favoriteStatus ?
        <MaterialIcons name='favorite' size={32} color='red' /> :
        <MaterialIcons name='favorite-outline' size={32} color='red' />
      }
    </Pressable>
  )
}

const FavoriteIconOutline = () => {
  return (
    <Pressable>
      <MaterialIcons name='favorite-outline' size={32} color='red' />
    </Pressable>
  )
}

export {
  FavoriteIcon,
  FavoriteIconOutline
}
