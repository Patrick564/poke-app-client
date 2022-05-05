import { Pressable } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

type Params = {
  userStatus: boolean
  favoriteStatus: boolean
  changeFavoriteStatus: () => void
}

const FavoriteIcon = ({ favoriteStatus, changeFavoriteStatus, userStatus }: Params) => {
  if (!userStatus) {
    return (
      <Ionicons name='heart-dislike-outline' size={32} color='gray' />
    )
  }

  // <FontAwesome name="heart/outline" size={24} color="black" /> in Ionicons
  return (
    <Pressable onPress={changeFavoriteStatus}>
      {
        favoriteStatus
          ? <MaterialIcons name='favorite' size={32} color='red' />
          : <MaterialIcons name='favorite-outline' size={32} color='red' />
      }
    </Pressable>
  )
}

export default FavoriteIcon
