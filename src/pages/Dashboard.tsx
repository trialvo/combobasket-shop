import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import ProfileSection from "@/components/dashboard/ProfileSection";
import AddressSection from "@/components/dashboard/AddressSection";
import OrdersSection from "@/components/dashboard/OrdersSection";
import ChangePasswordSection from "@/components/dashboard/ChangePasswordSection";
import WishlistSection from "@/components/dashboard/WishlistSection";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>My Account - UpoharShop | Dashboard</title>
        <meta name="description" content="Manage your UpoharShop account. View orders, update profile, manage addresses, and track your wishlist." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <DashboardSidebar />
            
            {/* Content */}
            <div className="flex-1">
              <Routes>
                <Route index element={<DashboardOverview />} />
                <Route path="profile" element={<ProfileSection />} />
                <Route path="addresses" element={<AddressSection />} />
                <Route path="orders" element={<OrdersSection />} />
                <Route path="wishlist" element={<WishlistSection />} />
                <Route path="change-password" element={<ChangePasswordSection />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default Dashboard;
