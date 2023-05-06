import Home from '~/pages/Home/Index';
import Profile from '~/pages/Profile/Index';
import Following from '~/pages/Profile/Index';
import Upload from '~/pages/Upload/UploadIndex';
import Search from '~/pages/Search/SearchIndex';

//Layout
import Header from '~/components/Layout/HeaderLayout/HeaderLayout.js';

const publicRoutes = [
    {path : '/', component : Home },
    {path : '/following', component : Following },
    {path : '/profile', component : Profile },
    {path : '/upload', component : Upload , layout : Header},
    {path : '/Search', component : Search , layout : null}
]

const  privateRoutes = [
];

export { publicRoutes, privateRoutes }