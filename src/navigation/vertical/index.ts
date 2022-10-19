// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: HomeOutline,
      path: '/dashboards/crm'
    },
  ]
}

export default navigation
