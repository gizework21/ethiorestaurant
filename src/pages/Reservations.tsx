
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Reservations = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    toast.success("Reservation request submitted! We'll confirm your booking within 24 hours.");
    console.log("Reservation data:", formData);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-bold">Reservations</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Secure your table for an unforgettable dining experience
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Make a Reservation</CardTitle>
                  <p className="text-muted-foreground">
                    Please fill out the form below and we'll confirm your reservation within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Select onValueChange={(value) => handleInputChange("time", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="guests">Guests</Label>
                        <Select onValueChange={(value) => handleInputChange("guests", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="# of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1,2,3,4,5,6,7,8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Dietary restrictions, allergies, special occasions, etc."
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
                    >
                      Submit Reservation Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-8">
              {/* Hours & Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="text-primary" size={24} />
                    Hours & Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Dinner Service</h4>
                    <div className="text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>5:00 PM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday - Saturday</span>
                        <span>5:00 PM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>5:00 PM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <hr />
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="text-primary" size={18} />
                      <span>(717) 291-1542</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={18} />
                      <span>reservations@gourmetgateway.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary" size={18} />
                      <span>1027 Dillerville Rd, Lancaster, PA 17603</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reservation Policies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="text-primary" size={24} />
                    Reservation Policies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Confirmation</h4>
                    <p>All reservations will be confirmed within 24 hours via email or phone.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cancellation</h4>
                    <p>Please provide at least 24 hours notice for cancellations.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Large Parties</h4>
                    <p>Parties of 8 or more require a phone call to arrange seating.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Special Occasions</h4>
                    <p>Let us know about birthdays, anniversaries, or special celebrations!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Private Events */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservations;
