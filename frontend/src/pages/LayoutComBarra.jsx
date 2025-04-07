import ResponsiveAppBar from './ResponsiveAppBar';
import { Outlet } from 'react-router-dom';

const LayoutComBarra = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ padding: '5px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default LayoutComBarra;
