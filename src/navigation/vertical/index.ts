// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

// ** Icon imports
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AlarmOnIcon from '@mui/icons-material/AlarmOn'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark'
import CampaignIcon from '@mui/icons-material/Campaign'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import FestivalIcon from '@mui/icons-material/Festival'
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PaidIcon from '@mui/icons-material/Paid'
import PeopleIcon from '@mui/icons-material/People'
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock'
import TagRoundedIcon from '@mui/icons-material/TagRounded'
import VideocamIcon from '@mui/icons-material/Videocam'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: AlarmOnIcon,
      path: '/home'
    },
    {
      title: 'videos',
      icon: VideocamIcon,
      path: '/second-page'
    },
    {
      title: 'Ad Centre',
      icon: CampaignIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Analytics',
      icon: AnalyticsIcon,
      path: '/acl',
      action: 'hover',
      subject: 'acl-page'
    },
    {
      title: 'content & Contests',
      icon: ContentPasteIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Manage All Brand',
      icon: BrandingWatermarkIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Shopping Centre',
      icon: LocalMallIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Collaboration & Events',
      icon: FestivalIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Video Tags & Catagory',
      icon: TagRoundedIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Fanfare Music',
      icon: LibraryMusicRoundedIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Users',
      icon: PeopleIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Notification',
      icon: NotificationsIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Transaction',
      icon: PaidIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Access Manager',
      icon: PhonelinkLockIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Manage Your Profile',
      icon: AccountCircleIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Privacy & Policy',
      icon: PhonelinkLockIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    }
  ]
}

export default navigation
