import { VerticalNavItemsType } from "src/@core/layouts/types";

// ** Icon imports
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CampaignIcon from "@mui/icons-material/Campaign";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import FestivalIcon from "@mui/icons-material/Festival";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleIcon from "@mui/icons-material/People";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import VideocamIcon from "@mui/icons-material/Videocam";

const navigation = (): VerticalNavItemsType => {
    return [
        {
            title: "Dashboard",
            icon: AlarmOnIcon,
            path: "/dashboard",
        },
        {
            title: "Videos",
            icon: VideocamIcon,
            children: [
                {
                    title: "Video Analytics",
                    path: "/videos/analytics",
                },
                {
                    title: "List Videos",
                    children: [
                        {
                            title: "User Videos",
                            path: "/videos",
                        },
                        {
                            title: "Brand Videos",
                            path: "/videos/list-videos/brand-videos",
                        },
                        {
                            title: "Tutorial",
                            path: "/videos/list-videos/tutorial",
                        },
                        {
                            title: "Youtube Crawler",
                            path: "/videos/youtube-crawler",
                        },
                    ],
                },
                {
                    title: "Upload a Video",
                    path: "/videos/upload-videos",
                },
                {
                    title: "Download Code",
                    path: "/videos/download-code",
                },
                {
                    title: "Content Restriction",
                    path: "/videos/content-restrictions",
                },
            ],
        },
        {
            title: "Analytics",
            icon: AnalyticsIcon,
            children: [
                {
                    title: "Overall Review",
                    path: "/dashboard",
                },
            ]
        },
        {
            title: "Ad Centre",
            icon: CampaignIcon,
            children: [
                {
                    title: "Performance Overview",
                    path: "/adcenter/performanceoverview",
                },
                {
                    title: "Campaign Manager",
                    children: [
                        {
                            title: "Create Campaign",
                            path: "/adcenter/campaignmanager/createcampaign",
                        },
                        {
                            title: "Manage Campaign",
                            path: "/adcenter/campaignmanager/managecampaign",
                        },
                    ],
                },
                {
                    title: "In app Offers",
                    path: "/adcenter/inappoffers",
                },
            ],
        },
        {
            title: "content & Contests",
            icon: ContentPasteIcon,
            children: [
                {
                    title: "Contests Overview",
                    path: "/contest/contestoverview",
                },
                {
                    title: "Video Contest",
                    children: [
                        {
                            title: "Place a New Video Contest",
                            path: "/contest/video-contest",
                        },
                        {
                            title: "Manage Contest",
                            path: "/contest/video-contest",
                        },
                        {
                            title: "Contest Result",
                            path: "/contest/contest-result/contestResult/",
                        },
                    ],
                },
                {
                    title: "Quiz /Polls",
                    children: [
                        {
                            title: "Place a New Quiz /Polls",
                            path: "/contest/quizePull",
                        },
                        {
                            title: "Manage Quiz /Polls",
                            path: "/contest/quiz-polls/manage-quiz",
                        },
                        {
                            title: "Quiz /Polls Result",
                            path: "/contest/quiz-polls/manage-quiz",
                        },
                    ],
                },
                {
                    title: "Judge Panel",
                    path: "/",
                },
                {
                    title: "Gift Disbursement Tracking",
                    path: "/",
                },
                {
                    title: "Selling of Existing Content Rights",
                    path: "/",
                },
            ],
        }, 
        {
            title: "Manage All Brand",
            icon: BrandingWatermarkIcon,
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Brands Overview",
                    path: "/dashboard",
                },
                {
                    title: "List of All Brands",
                    path: "/dashboard",
                },
                {
                    title: "Pending Approval List of Brands",
                    path: "/dashboard",
                },
                {
                    title: "Expired Request",
                    path: "/dashboard",
                },
                {
                    title: "Brand Representative",
                    path: "/dashboard",
                },
                {
                    title: "Brand Media Files",
                    path: "/dashboard",
                },
                {
                    title: "Add New Brand",
                    path: "/dashboard",
                },
            ]
        }, 
        {
            title: "Shopping Centre",
            icon: LocalMallIcon,
            path: "/acl",
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Shopping Dashboard",
                    path: "/dashboard",
                },
            ]
        },
        {
            title: "Collaboration & Events",
            icon: FestivalIcon,
            path: "/acl",
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Overview",
                    path: "/dashboard",
                },
            ]
        },
        {
            title: "Video Tags & Catagory",
            icon: TagRoundedIcon,
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Performance Overview",
                    path: "/dashboard",
                },
                {
                    title: "Manage Tags",
                    path: "/dashboard",
                },
                {
                    title: "Manage Categories",
                    path: "/dashboard",
                },
            ]
        },
        {
            title: "Fanfare Music",
            icon: LibraryMusicRoundedIcon,
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Upload Music",
                    path: "/dashboard",
                },
                {
                    title: "Manage Music",
                    path: "/dashboard",
                },
               
            ],
        },
        {
            title: "Users",
            icon: PeopleIcon,
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "User Summary",
                    path: "/user/user-summary",
                },
                {
                    title: "User List",
                    path: "/dashboard",
                },
                {
                    title: "Professional Contentent",
                    path: "/dashboard",
                },
                {
                    title: "Users Dox",
                    path: "/dashboard",
                },
                {
                    title: "Sponsored Channel",
                    path: "/dashboard",
                },
                {
                    title: "Level & Badges",
                    path: "/dashboard",
                },
            ]
        }, 
        {
            title: "Notification",
            icon: NotificationsIcon,
            path: "/acl",
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Graphical Analytics",
                    path: "/dashboard",
                },
            ]
        }, 
        {
            title: "Transaction",
            icon: PaidIcon,
            path: "/acl",
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Transectional Chart",
                    path: "/dashboard",
                },
            ]
        },
        {
            title: "Access Manager",
            icon: PhonelinkLockIcon,
            path: "/acl",
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Roll Assign",
                    path: "/dashboard",
                },
            ]

        },
        {
            title: "Manage Your Profile",
            icon: AccountCircleIcon,
            path: "/acl",
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Video Analytics",
                    path: "/dashboard",
                },
            ]
        },
        {
            title: "Privacy & Policy",
            icon: PhonelinkLockIcon,
            path: "/acl",
            action: "read",
            subject: "acl-page",
            children: [
                {
                    title: "Genaral Terms and Condition",
                    path: "/dashboard",
                },
            ]
        }


    ];
};

export default navigation;
