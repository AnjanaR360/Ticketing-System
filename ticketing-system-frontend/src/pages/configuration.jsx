import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchConfiguration, saveConfiguration } from "@/services/api";

export default function Configuration() {
  const [formData, setFormData] = React.useState({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    maxTicketCapacity: "",
  });

  React.useEffect(() => {
    fetchConfiguration().then((data) => setFormData(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveConfiguration(formData);
      alert("Configuration updated successfully!");
    } catch (error) {
      console.error("Error saving configuration:", error);
    }
  };

  return (
    <div className="flex gap-2">
    <Card className="w-[350px] bg-gray-200">
      <CardHeader>
        <CardTitle>Enter Configuration</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Total Number of Tickets</Label>
              <Input
                id="totalTickets"
                type="number"
                name="totalTickets"
                value={formData.totalTickets}
                onChange={handleChange}
              />

              <Label htmlFor="name">Ticket Release Rate</Label>
              <Input
                id="ticketReleaseRate"
                type="number"
                name="ticketReleaseRate"
                value={formData.ticketReleaseRate}
                onChange={handleChange}
              />

              <Label htmlFor="name">Customer Retrieval Rate</Label>
              <Input
                id="customerRetrievalRate"
                type="number"
                name="customerRetrievalRate"
                value={formData.customerRetrievalRate}
                onChange={handleChange}
              />

              <Label htmlFor="name">Maximum Ticket Capacity</Label>
              <Input
                id="maxTicketCapacity"
                type="number"
                name="maxTicketCapacity"
                value={formData.maxTicketCapacity}
                onChange={handleChange}
              />
            </div>
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type='submit'>SUBMIT</Button>
      </CardFooter>
      </form>
    </Card>

    <Card className="w-[350px] bg-gray-200">
      <CardHeader>
        <CardTitle>Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <h3 htmlFor="name">Total Number of Tickets: {formData.totalTickets}</h3>
            <h3 htmlFor="name">Ticket Release Rate: {formData.ticketReleaseRate}</h3>
            <h3 htmlFor="name">Customer Retrieval Rate: {formData.customerRetrievalRate}</h3>
            <h3 htmlFor="name">Maximum Ticket Capacity: {formData.maxTicketCapacity}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
