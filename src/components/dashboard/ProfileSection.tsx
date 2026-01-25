import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dummyUser } from "@/data/dummyUser";
import { Camera, Save } from "lucide-react";
import { toast } from "sonner";

const ProfileSection = () => {
  const [formData, setFormData] = useState({
    name: dummyUser.name,
    email: dummyUser.email,
    phone: dummyUser.phone,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Simulate save
    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">আমার প্রোফাইল</h1>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} variant="outline">
            সম্পাদনা করুন
          </Button>
        )}
      </div>

      <div className="bg-card rounded-xl border border-border p-6">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary">
              {dummyUser.name.charAt(0)}
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            সদস্য হয়েছেন: {new Date(dummyUser.joinedDate).toLocaleDateString('bn-BD')}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 max-w-md mx-auto">
          <div>
            <Label htmlFor="name">পুরো নাম</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={!isEditing}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="email">ইমেইল</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={!isEditing}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="phone">ফোন নম্বর</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={!isEditing}
              className="mt-1.5"
            />
          </div>

          {isEditing && (
            <div className="flex gap-3 pt-4">
              <Button onClick={handleSave} className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                সংরক্ষণ করুন
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(false)}
                className="flex-1"
              >
                বাতিল
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
