import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from '../views/AuthScreen';
import Login from '../views/Login';
import Signup from '../views/Signup';
import SavingList from '../views/SavingList';
import TransferScreen from '../views/TransferScreen';
import HomeScreen from '../views/HomeScreen';
import CareSection from '../views/CareSection';
import CareDetails from '../views/CareDetails';

// Authentication stack
const AuthStack =  createStackNavigator({
    AuthScreen: {
        screen: AuthScreen,
        navigationOptions: () =>  ({
            title: 'Care for Her'
        })
    },
    Login: { 
        screen: Login
    },
    Signup: { 
        screen: Signup
    },
    SavingList: {
        screen: SavingList,
        navigationOptions:  () =>  ({
            title: 'My Savings'
        })
    },
    TransferScreen: {
        screen: TransferScreen,
        navigationOptions:  () =>  ({
            title: 'Transfer'
        })
    }
},{
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
        backgroundColor: '#F633E3F7'
        }
    },     
    initialRouteName: 'AuthScreen'
});

const HomeStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions:  () =>  ({
            title: 'Care For Her',
            headerLeft: () => null
        })
    },
    CareSection: {
        screen: CareSection,
        navigationOptions:  () =>  ({
            title: 'Care For Her'
        })
    },
    CareDetails: {
        screen: CareDetails,
        navigationOptions: () => ({
            title: 'Care For Her'
        })
    }
    },
    {
        defaultNavigationOptions: {
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#F633E3F7'
          }
        },
        initialRouteName: 'HomeScreen'
      })
// Main application stack
// const MainStack = createStackNavigator({
//     Main: {
//       screen: Main,
//       navigationOptions: () =>  ({
//         title: 'HealthApp',
//         headerLeft: () => null
//       })
//     },
//     ChatRoute: {
//       screen: ChatRoute
//     },
//     SectionInfo: {
//       screen: SectionInfo,
//       navigationOptions: ({navigation}) => ({
//         title: `${navigation.state.params.title}`
//       })
//     },
//     AddInfo: {
//       screen: AddInfo,
//       navigationOptions: () => ({
//         title: 'Information'
//       })
//     },
//     BlogRoute: {
//       screen: BlogRoute
//     },
//     Game: {
//       screen: Game
//     },
//     ApproveDoctor: {
//       screen: ApproveDoctor,
//       navigationOptions: () => ({
//          title: 'Doctor List'
//       })
//     },
//     DetailedBlog: {
//       screen: DetailedBlog,
//       navigationOptions: () =>  ({
//         title: 'Full Blog',
//         headerStyle: {
//           backgroundColor: '#7D2EA3', 
//           height: 150
//         }
//         // safeAreaInsets: { top: 0 }
//       })
//     },
//     AddBlog: {
//       screen: AddBlog,
//       navigationOptions: () =>  ({
//         title: 'Add Blog'
//       })
//     },
//     UserChat: {
//       screen: UserChat,
//       navigationOptions: ({navigation})=> ({
//         title: `${navigation.state.params.firstName}'s Chatroom`
//       })
//     }
//   },
//   {
//     defaultNavigationOptions: {
//       headerTintColor: '#fff',
//       headerStyle: {
//         backgroundColor: '#7D2EA3'
//       }
//     },
//     initialRouteName: 'Main'
//   });

// Wrapper for both stacks
const AppStack = createAppContainer(
  createSwitchNavigator({
    Home: HomeStack,
    Auth: AuthStack
  }, {
      initialRouteName: 'Home'
    }
  )
);
export default AppStack;