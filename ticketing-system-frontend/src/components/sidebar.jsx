import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', path: '/' },
        { name: 'Configuration', path: '/configuration' },
        { name: 'Vendors', path: '/vendors' },
        { name: 'Customers', path: '/customers' },
    ];

    return (
        <aside
            className={cn(
                'w-64 bg-gray-800 text-white h-full flex flex-col shadow-lg min-h-[100vh]'
            )}
        >
            <Link to={'/'}>
                <h1 className="text-2xl font-bold p-4 border-b border-gray-700 text-white cursor-pointer">
                    Ticketing Management System
                </h1>
            </Link>
            <nav className="flex flex-col space-y-2 p-4">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="px-4 py-2 rounded hover:bg-gray-700 hover:text-gray-400 text-white "
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
