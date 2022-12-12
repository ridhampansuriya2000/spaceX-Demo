// component
import Iconify from 'components/Iconify';

/*---------------------------Icons-------------------------------*/
import DashboardIcon from "../../components/Icon/SideBar/DashboardIcon";
import FinanceIcon from "../../components/Icon/SideBar/FinanceIcon";
import HRMangagmentIcon from "../../components/Icon/SideBar/HRMangagmentIcon";
import OperationManagementIcon from "../../components/Icon/SideBar/OperationManagementIcon";
import MarketingCommunicationIcon from "../../components/Icon/SideBar/MarketingCommunicationIcon";
import BusinessIntelligenceIcon from "../../components/Icon/SideBar/BusinessIntelligenceIcon";
import ChatIcon from "../../components/Icon/SideBar/ChatIcon";
import {lazy} from "react";
import {useTranslation} from "react-i18next";

// ----------------------------------------------------------------------
const Dashboard = lazy(() => import("screen/Pages/Dashboard"));
const FinanceAccounting = lazy(() => import("screen/Pages/FinanceAccounting"));
const HRManagement = lazy(() => import("screen/Pages/HRManagement"));
const OperationManagement = lazy(() => import("screen/Pages/OperationManagement"));
const MarketingCommunication = lazy(() => import("screen/Pages/MarketingCommunication"));
const BusinessIntelligence = lazy(() => import("screen/Pages/BusinessIntelligence"));
const ChatWithUs = lazy(() => import("screen/Pages/ChatWithUs"));

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;


const navConfig = [
  {
    title: "Dashboard",
    path: '/',
    icon: <DashboardIcon/>,
    component: <Dashboard />,
  },
  {
    title: "Finance_Accounting",
    // title: "Finance_Accounting",
    path: '/finance-accounting',
    icon: <FinanceIcon/>,
    component: <FinanceAccounting />,
  },
  {
    // title: 'HR Management',
    title: "HR_Management",
    path: '/hr-management',
    icon: <HRMangagmentIcon/>,
    component: <HRManagement />,
  },
  {
    // title: 'Operation management',
    title: "Operation_Management",
    path: '/operation-management',
    icon: <OperationManagementIcon/>,
    component: <OperationManagement />,
  },
  {
    // title: 'Marketing & Communication',
    title: "Marketing_Communication",
    path: '/marketing-communication',
    icon: <MarketingCommunicationIcon/>,
    component: <MarketingCommunication />,
  },
  {
    // title: 'Business Intelligence',
    title: "Finance_Accounting",
    path: '/business-intelligence',
    icon: <BusinessIntelligenceIcon/>,
    component: <BusinessIntelligence />,
  },
  {
    // title: 'Chat with us',
    title: "Chat_With_Us",
    path: '/chat-with-us',
    icon: <ChatIcon/>,
    component: <ChatWithUs />,
  },
];

export default navConfig;
