import { Package, MapPin, Heart, Clock } from "lucide-react";
import { dummyUser, dummyOrders, dummyAddresses } from "@/data/dummyUser";
import { Link } from "react-router-dom";

const DashboardOverview = () => {
  const stats = [
    { 
      icon: Package, 
      label: "মোট অর্ডার", 
      value: dummyOrders.length,
      color: "bg-blue-500/10 text-blue-600"
    },
    { 
      icon: Clock, 
      label: "চলমান অর্ডার", 
      value: dummyOrders.filter(o => ["pending", "processing", "shipped"].includes(o.status)).length,
      color: "bg-orange-500/10 text-orange-600"
    },
    { 
      icon: MapPin, 
      label: "সংরক্ষিত ঠিকানা", 
      value: dummyAddresses.length,
      color: "bg-green-500/10 text-green-600"
    },
    { 
      icon: Heart, 
      label: "উইশলিস্ট", 
      value: 5,
      color: "bg-pink-500/10 text-pink-600"
    },
  ];

  const recentOrders = dummyOrders.slice(0, 3);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      processing: "bg-blue-100 text-blue-800",
      shipped: "bg-purple-100 text-purple-800",
      delivered: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    const labels: Record<string, string> = {
      pending: "অপেক্ষমাণ",
      processing: "প্রক্রিয়াধীন",
      shipped: "শিপড",
      delivered: "ডেলিভারড",
      cancelled: "বাতিল",
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          স্বাগতম, {dummyUser.name}! 👋
        </h1>
        <p className="text-muted-foreground">
          আপনার অ্যাকাউন্ট ড্যাশবোর্ড থেকে সব কিছু পরিচালনা করুন
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl p-4 border border-border">
            <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-card rounded-xl border border-border">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-semibold text-foreground">সাম্প্রতিক অর্ডার</h2>
          <Link to="/dashboard/orders" className="text-sm text-primary hover:underline">
            সব দেখুন
          </Link>
        </div>
        <div className="divide-y divide-border">
          {recentOrders.map((order) => (
            <div key={order.id} className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{order.orderNumber}</p>
                <p className="text-sm text-muted-foreground">{order.date}</p>
              </div>
              <div className="text-right">
                {getStatusBadge(order.status)}
                <p className="text-sm font-medium text-foreground mt-1">৳{order.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          to="/dashboard/profile"
          className="bg-card rounded-xl p-4 border border-border hover:border-primary transition-colors text-center"
        >
          <span className="text-2xl mb-2 block">👤</span>
          <span className="text-sm font-medium text-foreground">প্রোফাইল আপডেট</span>
        </Link>
        <Link
          to="/dashboard/addresses"
          className="bg-card rounded-xl p-4 border border-border hover:border-primary transition-colors text-center"
        >
          <span className="text-2xl mb-2 block">📍</span>
          <span className="text-sm font-medium text-foreground">নতুন ঠিকানা</span>
        </Link>
        <Link
          to="/products"
          className="bg-card rounded-xl p-4 border border-border hover:border-primary transition-colors text-center"
        >
          <span className="text-2xl mb-2 block">🎁</span>
          <span className="text-sm font-medium text-foreground">কেনাকাটা করুন</span>
        </Link>
        <Link
          to="/contact"
          className="bg-card rounded-xl p-4 border border-border hover:border-primary transition-colors text-center"
        >
          <span className="text-2xl mb-2 block">💬</span>
          <span className="text-sm font-medium text-foreground">সাপোর্ট</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardOverview;
