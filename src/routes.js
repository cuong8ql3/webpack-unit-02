import React from 'react'

import HomePage from './Page/HomePage/HomePage';
import NotFoundPage from './Page/NotFoundPage/NotFoundPage';
import ProductListPage from './Page/ProductListPage/ProductListPage';
// import ProductActionPage from './Page/ProductActionPage/ProductActionPage';
import ProductAction from './Page/ProductActionPage/ProductAction';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/Product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/Product/add',
        exact: false,
        main: ({history}) => <ProductAction history={history} />
    },
    {
        path: '/Product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductAction match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
]

export default routes;