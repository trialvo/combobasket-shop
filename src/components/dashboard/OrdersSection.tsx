import { useState } from "react";
import { dummyOrders, Order } from "@/data/dummyUser";
import { Package, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrdersSection = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredOrders = filter === "all" 
    ? dummyOrders 
    : dummyOrders.filter(o => o.status === filter);

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

  const filters = [
    { key: "all", label: "সব" },
    { key: "pending", label: "অপেক্ষমাণ" },
    { key: "processing", label: "প্রক্রিয়াধীন" },
    { key: "shipped", label: "শিপড" },
    { key: "delivered", label: "ডেলিভারড" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">আমার অর্ডার সমূহ</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f.key}
            variant={filter === f.key ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            {/* Order Header */}
            <div
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">{order.orderNumber}</h3>
                    {getStatusBadge(order.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {order.date} • {order.items.length} টি আইটেম
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-semibold text-foreground">৳{order.total}</p>
                {expandedOrder === order.id ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </div>

            {/* Order Details */}
            {expandedOrder === order.id && (
              <div className="border-t border-border p-4 bg-muted/30">
                {/* Items */}
                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          পরিমাণ: {item.quantity} × ৳{item.price}
                        </p>
                      </div>
                      <p className="font-medium text-foreground">
                        ৳{item.quantity * item.price}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Delivery Address */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">ডেলিভারি ঠিকানা:</p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {order.deliveryAddress}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm">
                    ইনভয়েস দেখুন
                  </Button>
                  {order.status === "delivered" && (
                    <Button variant="outline" size="sm">
                      পুনরায় অর্ডার করুন
                    </Button>
                  )}
                  {["pending", "processing"].includes(order.status) && (
                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                      অর্ডার বাতিল
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {filteredOrders.length === 0 && (
          <div className="text-center py-12 bg-card rounded-xl border border-border">
            <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">কোনো অর্ডার নেই</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersSection;
