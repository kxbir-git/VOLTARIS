import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Zap, ArrowLeft, Calendar, Clock, MapPin, Car, LogOut } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  type: string;
  tagline: string | null;
}

interface Booking {
  id: string;
  booking_date: string;
  booking_time: string;
  location: string;
  status: string;
  notes: string | null;
  created_at: string;
  vehicles: { name: string; type: string } | null;
}

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

const locations = [
  "Voltaris Manhattan, NY",
  "Voltaris Beverly Hills, CA",
  "Voltaris London, UK",
  "Voltaris Dubai, UAE",
  "Voltaris Tokyo, Japan",
];

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tab, setTab] = useState<"book" | "bookings">("book");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);

  const [vehicleId, setVehicleId] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    fetchVehicles();
    fetchBookings();
  }, []);

  const fetchVehicles = async () => {
    const { data } = await supabase.from("vehicles").select("id, name, type, tagline");
    if (data) setVehicles(data);
  };

  const fetchBookings = async () => {
    const { data } = await supabase
      .from("bookings")
      .select("id, booking_date, booking_time, location, status, notes, created_at, vehicles(name, type)")
      .order("created_at", { ascending: false });
    if (data) setBookings(data as unknown as Booking[]);
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);

    const { error } = await supabase.from("bookings").insert({
      user_id: user.id,
      vehicle_id: vehicleId,
      booking_date: bookingDate,
      booking_time: bookingTime,
      location,
      notes: notes || null,
    });

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Test Drive Booked!", description: "We'll confirm your booking shortly." });
      setVehicleId("");
      setBookingDate("");
      setBookingTime("");
      setLocation("");
      setNotes("");
      setTab("bookings");
      fetchBookings();
    }
    setLoading(false);
  };

  const cancelBooking = async (id: string) => {
    const { error } = await supabase
      .from("bookings")
      .update({ status: "cancelled" })
      .eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Booking cancelled" });
      fetchBookings();
    }
  };

  const statusColor: Record<string, string> = {
    pending: "bg-yellow-500/20 text-yellow-400",
    confirmed: "bg-green-500/20 text-green-400",
    completed: "bg-primary/20 text-primary",
    cancelled: "bg-destructive/20 text-destructive",
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold tracking-widest text-foreground">VOLTARIS</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={() => { signOut(); navigate("/"); }}>
              <LogOut className="w-4 h-4 mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8 relative">
        <div className="flex items-center gap-2 mb-8">
          <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">My Dashboard</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <Button variant={tab === "book" ? "neon" : "neon-outline"} size="sm" onClick={() => setTab("book")}>
            Book Test Drive
          </Button>
          <Button variant={tab === "bookings" ? "neon" : "neon-outline"} size="sm" onClick={() => setTab("bookings")}>
            My Bookings ({bookings.length})
          </Button>
        </div>

        {tab === "book" && (
          <form onSubmit={handleBooking} className="max-w-lg space-y-5">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Vehicle</label>
              <Select value={vehicleId} onValueChange={setVehicleId} required>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Select a vehicle" />
                </SelectTrigger>
                <SelectContent>
                  {vehicles.map((v) => (
                    <SelectItem key={v.id} value={v.id}>
                      <span className="flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        {v.name} ({v.type})
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Date
                </label>
                <Input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  min={today}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Time
                </label>
                <Select value={bookingTime} onValueChange={setBookingTime} required>
                  <SelectTrigger className="bg-card border-border">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Location
              </label>
              <Select value={location} onValueChange={setLocation} required>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Select showroom" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((l) => (
                    <SelectItem key={l} value={l}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Notes (optional)</label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special requests..."
                maxLength={500}
                className="bg-card border-border resize-none"
                rows={3}
              />
            </div>

            <Button variant="neon" size="lg" type="submit" className="w-full" disabled={loading}>
              {loading ? "Booking..." : "Book Test Drive"}
            </Button>
          </form>
        )}

        {tab === "bookings" && (
          <div className="space-y-4 max-w-2xl">
            {bookings.length === 0 ? (
              <div className="text-center py-16">
                <Car className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No bookings yet. Book your first test drive!</p>
              </div>
            ) : (
              bookings.map((b) => (
                <div key={b.id} className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {b.vehicles?.name ?? "Vehicle"}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {new Date(b.booking_date).toLocaleDateString("en-US", {
                          weekday: "long", year: "numeric", month: "long", day: "numeric",
                        })} at {b.booking_time}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[b.status] || ""}`}>
                      {b.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {b.location}
                  </p>
                  {b.notes && <p className="text-xs text-muted-foreground mt-2">{b.notes}</p>}
                  {b.status === "pending" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 text-destructive hover:text-destructive"
                      onClick={() => cancelBooking(b.id)}
                    >
                      Cancel Booking
                    </Button>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
