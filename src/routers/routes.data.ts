import Chat from "components/screens/chat/Chat";
import Coder from "components/screens/coder/Coder";
import SignIn from "components/screens/signIn/SignIn";
import SignUp from "components/screens/signUp/SignUp";





export const routes = [
  {
    path: '/',
    component: Chat,
    isAuth: true
  },
  {
    path: '/coder',
    component: Coder,
    isAuth: true
  },
  {
    path: '/signin',
    component: SignIn,
    isAuth: false
  },
  {
    path: '/signup',
    component: SignUp,
    isAuth: false
  },
]