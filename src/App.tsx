
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Map from "./pages/Map";
import Representatives from "./pages/Representatives";
import RepresentativeProfile from "./pages/RepresentativeProfile";
import TaskCreate from "./pages/TaskCreate";
import Balance from "./pages/Balance";
import NotFound from "./pages/NotFound";

// New pages
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import MessageCenter from "./pages/MessageCenter";
import RepresentativeDashboard from "./pages/RepresentativeDashboard";
import RepresentativeRegister from "./pages/RepresentativeRegister";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
          
          {/* New routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/messages" element={<MessageCenter />} />
          <Route path="/representative/dashboard" element={<RepresentativeDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
