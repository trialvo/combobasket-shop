import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dummyAddresses, Address } from "@/data/dummyUser";
import { Plus, Edit2, Trash2, MapPin, Check } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddressSection = () => {
  const [addresses, setAddresses] = useState<Address[]>(dummyAddresses);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState({
    label: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    area: "",
  });

  const handleSave = () => {
    if (editingAddress) {
      setAddresses(addresses.map(a => 
        a.id === editingAddress.id 
          ? { ...a, ...formData }
          : a
      ));
      toast.success("ঠিকানা আপডেট হয়েছে!");
    } else {
      const newAddress: Address = {
        id: `addr-${Date.now()}`,
        ...formData,
        isDefault: addresses.length === 0,
      };
      setAddresses([...addresses, newAddress]);
      toast.success("নতুন ঠিকানা যোগ হয়েছে!");
    }
    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(a => a.id !== id));
    toast.success("ঠিকানা মুছে ফেলা হয়েছে!");
  };

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map(a => ({
      ...a,
      isDefault: a.id === id
    })));
    toast.success("ডিফল্ট ঠিকানা সেট করা হয়েছে!");
  };

  const resetForm = () => {
    setFormData({ label: "", name: "", phone: "", address: "", city: "", area: "" });
    setEditingAddress(null);
  };

  const openEditDialog = (address: Address) => {
    setEditingAddress(address);
    setFormData({
      label: address.label,
      name: address.name,
      phone: address.phone,
      address: address.address,
      city: address.city,
      area: address.area,
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">আমার ঠিকানা সমূহ</h1>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              নতুন ঠিকানা
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingAddress ? "ঠিকানা সম্পাদনা" : "নতুন ঠিকানা যোগ করুন"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="label">লেবেল (যেমন: বাসা, অফিস)</Label>
                <Input
                  id="label"
                  value={formData.label}
                  onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                  placeholder="বাসা"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="name">প্রাপকের নাম</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="phone">ফোন নম্বর</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="address">পূর্ণ ঠিকানা</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">শহর</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="area">এলাকা</Label>
                  <Input
                    id="area"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="mt-1.5"
                  />
                </div>
              </div>
              <Button onClick={handleSave} className="w-full">
                {editingAddress ? "আপডেট করুন" : "সংরক্ষণ করুন"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`bg-card rounded-xl border p-4 ${
              address.isDefault ? "border-primary" : "border-border"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{address.label}</h3>
                    {address.isDefault && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                        ডিফল্ট
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{address.name}</p>
                  <p className="text-sm text-muted-foreground">{address.phone}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {address.address}, {address.area}, {address.city}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!address.isDefault && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleSetDefault(address.id)}
                    className="text-muted-foreground"
                  >
                    <Check className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => openEditDialog(address)}
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(address.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {addresses.length === 0 && (
          <div className="text-center py-12 bg-card rounded-xl border border-border">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">কোনো ঠিকানা নেই</p>
            <Button 
              variant="link" 
              onClick={() => setIsDialogOpen(true)}
              className="mt-2"
            >
              নতুন ঠিকানা যোগ করুন
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressSection;
