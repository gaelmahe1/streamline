import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Crown, Menu, X, LayoutDashboard, Server, BarChart3, Palette } from 'lucide-react';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Tableau de Bord', icon: <LayoutDashboard className="w-5 h-5" /> },
    { path: '/createur-serveur', label: 'Créateur Serveur', icon: <Server className="w-5 h-5" /> },
    { path: '/statistiques', label: 'Statistiques', icon: <BarChart3 className="w-5 h-5" /> },
    { path: '/editeur-overlay', label: 'Éditeur Overlay', icon: <Palette className="w-5 h-5" /> }
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleSidebar} 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center">
              <Crown className="w-8 h-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">Streamline Agency</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
              S
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75\" onClick={toggleSidebar}></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  onClick={toggleSidebar}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Crown className="h-8 w-8 text-yellow-400" />
                  <span className="ml-2 text-xl font-bold">Streamline Agency</span>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.path);
                        setSidebarOpen(false);
                      }}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                        location.pathname === item.path
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'text-gray-600 hover:bg-yellow-50 hover:text-yellow-700'
                      }`}
                    >
                      {React.cloneElement(item.icon, {
                        className: `mr-4 h-6 w-6 ${
                          location.pathname === item.path
                            ? 'text-yellow-500'
                            : 'text-gray-400 group-hover:text-yellow-400'
                        }`
                      })}
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <nav className="mt-5 flex-1 px-2 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.path);
                      }}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer ${
                        location.pathname === item.path
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'text-gray-600 hover:bg-yellow-50 hover:text-yellow-700'
                      }`}
                    >
                      {React.cloneElement(item.icon, {
                        className: `mr-3 h-6 w-6 ${
                          location.pathname === item.path
                            ? 'text-yellow-500'
                            : 'text-gray-400 group-hover:text-yellow-400'
                        }`
                      })}
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;