import { Link, useLocation } from "react-router-dom";
import { 
  User, 
  MapPin, 
  Package, 
  Lock, 
  Heart, 
  LogOut,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "ড্যাশবোর্ড", path: "/dashboard" },
  { icon: User, label: "প্রোফাইল", path: "/dashboard/profile" },
  { icon: MapPin, label: "ঠিকানা", path: "/dashboard/addresses" },
  { icon: Package, label: "অর্ডার সমূহ", path: "/dashboard/orders" },
  { icon: Heart, label: "উইশলিস্ট", path: "/dashboard/wishlist" },
  { icon: Lock, label: "পাসওয়ার্ড পরিবর্তন", path: "/dashboard/change-password" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-full lg:w-64 bg-card rounded-xl shadow-sm border border-border p-4">
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === "/dashboard" && location.pathname === "/dashboard");
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
        
        <div className="pt-4 border-t border-border mt-4">
          <Link
            to="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            লগ আউট
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
