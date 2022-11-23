import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/components';

const PrivateLayout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;
