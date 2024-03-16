import NavigationDock from '@/components/Navigation/NavigationDock';

import HomePage from '@/pages/HomePage';

const Layout = () => {
  return (
    <>
      <div className="mt-10 w-screen flex flex-col items-center justify-center">
        <NavigationDock />
      </div>

      <div className="mt-20 flex flex-col items-center justify-center">
        <HomePage />
      </div>
    </>
  );
};

export default Layout;
