import Chat from "pages/Chat";
import Coder from "pages/Coder";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";




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