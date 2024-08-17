import { Link, Outlet } from "react-router-dom";

const allRoutes = [
  {
    id: 'contact',
    name: 'Contact',
    href: '/'
  },
  {
    id: 'chartsAndMaps',
    name: 'Charts and Maps',
    href: '/chartsAndMaps'
  }
]


const Root = () => {
  return (
    <div className="w-screen h-screen flex">
      <div id="sidebar" className="w-60 p-3 flex flex-col gap-3 bg-gray-100 border border-r-gray-200 h-full">
        <h1 className="text-3xl font-bold text-customRed">Logo</h1>
        <nav>
          <ul>
            {allRoutes.map((route) => (
              <li key={route.id} className="py-2 px-4 hover:bg-gray-200 rounded-md cursor-pointer">
                <Link to={route.href}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Root