import AppList from '../Application/AppList'
import AppCreate from '../Application/AppCreate'
import AppEdit from '../Application/AppEdit'
import PageNotFound from './PageNotFound'
import { FaPlusCir, FaList } from '../../components/Icon'


export default [
  { path: '/appList', component: AppList, title: "list", icon: FaList, display: true },
  { path: '/appCreate', component: AppCreate, title: "create-app", icon: FaPlusCir, display: true },
  { path: '/appEdit/:id', component: AppEdit, title: "EditApp", display: false },
  { path: '/404', component: PageNotFound, title: "NotFound", display: false }
]