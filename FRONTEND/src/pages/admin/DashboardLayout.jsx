// components/DashboardLayout.tsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/ui/AdminSidebar';
import Header from '@/components/ui/AdminHeader';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar for larger screens and toggle button for smaller screens */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex-1 min-h-screen">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-6 bg-gray-50 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;



// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '@/components/ui/AdminSidebar';
// import Header from '@/components/ui/AdminHeader';

// const DashboardLayout = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 ml-64">
//         <Header />
//         <main className="p-6 bg-gray-50 min-h-screen">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;