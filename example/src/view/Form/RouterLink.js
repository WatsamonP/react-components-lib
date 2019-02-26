import React from 'react'
import AppList from '../Application/AppList'
import AppCreate from '../Application/AppCreate'
import AppEdit from '../Application/AppEdit'
import PageNotFound from './PageNotFound'

const FaPlusCir = <i className="fa fa-plus-circle" aria-hidden="true"></i>
const FaList = <i className="fa fa-list" aria-hidden="true"></i>

export default [
  // App
  // { path: '/info', component: Infomation, title: "ex. Infomation", display: false },
  { path: '/appList', component: AppList, title: "list", icon: FaList, display: true },
  { path: '/appCreate', component: AppCreate, title: "create-app", icon: FaPlusCir, display: true },
  { path: '/appEdit/:id', component: AppEdit, title: "Edit App", display: false },
  { path: '/404', component: PageNotFound, title: "Edit App", display: false }

]