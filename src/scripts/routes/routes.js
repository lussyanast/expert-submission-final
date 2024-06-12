import Detail from '../views/pages/detail';
import RestoList from '../views/pages/resto-list';
import Like from '../views/pages/like';

const routes = {
  '/': RestoList, // default page
  '/resto-list': RestoList,
  '/like': Like,
  '/detail/:id': Detail,
};

export default routes;
