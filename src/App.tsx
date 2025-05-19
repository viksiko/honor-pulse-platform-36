
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Map from "./pages/Map";
import Representatives from "./pages/Representatives";
import RepresentativeProfile from "./pages/RepresentativeProfile";
import TaskCreate from "./pages/TaskCreate";
import Balance from "./pages/Balance";
import NotFound from "./pages/NotFound";
import Help from "./pages/Help";

// New pages
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import MessageCenter from "./pages/MessageCenter";
import RepresentativeDashboard from "./pages/RepresentativeDashboard";
import RepresentativeRegister from "./pages/RepresentativeRegister";
import GosuslugiCallback from "./pages/GosuslugiCallback";
import RepresentativeTasks from "./pages/RepresentativeTasks";
import RepresentativeStatistics from "./pages/RepresentativeStatistics";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/representative" element={<RepresentativeRegister />} />
            <Route path="/map" element={<Map />} />
            <Route path="/representatives" element={<Representatives />} />
            <Route path="/representative/profile/:id" element={<RepresentativeProfile />} />
            <Route path="/tasks/create" element={<TaskCreate />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/help" element={<Help />} />
            
            {/* New routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/messages" element={<MessageCenter />} />
            <Route path="/representative/dashboard" element={<RepresentativeDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            
            {/* Added routes for tasks management and statistics */}
            <Route path="/representative/tasks" element={<RepresentativeTasks />} />
            <Route path="/representative/statistics" element={<RepresentativeStatistics />} />
            <Route path="/tasks" element={<Tasks />} />
            
            {/* Госуслуги callback route */}
            <Route path="/gosuslugi/callback" element={<GosuslugiCallback />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
