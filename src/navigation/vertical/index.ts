// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Video from 'mdi-material-ui/Video'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: HomeOutline,
      path: '/dashboards/crm'
    },
    {
      title: 'Videos',
      icon: Video,
      children: [
        {
          title: 'List Videos',
          children: [
            {
              title: 'User Videos',
              path: '/videos/listvideos/uservideos'
            }
          ]
        },
      ]
    },
  ]
}

export default navigation
