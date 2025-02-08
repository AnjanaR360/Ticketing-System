import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { addCustomer, fetchCustomers, removeCustomer, startCustomers, stopCustomers } from "@/services/api";
import React from "react";

export default function Customer() {
  const [customers, setCustomers] = React.useState([]);
  const [formData, setFormData] = React.useState();

  React.useEffect(() => {
    fetchCustomers().then((data) => setCustomers(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await removeCustomer(id);
      alert("Customer deleted successfully!");
      await fetchCustomers().then((data) => setCustomers(data));
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCustomer({name: formData.name, priority: 1});
      alert("Customer added successfully!");
      await fetchCustomers().then((data) => setCustomers(data));
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };


  const handleStart = async () => {
    try {
      await startCustomers();
      alert("Customers started successfully!");
    } catch (error) {
      console.error("Error starting customers:", error);
    }
  };


  const handleStop = async () => {
    try {
      await stopCustomers();
      alert("Customers stopped successfully!");
    } catch (error) {
      console.error("Error stopping customers:", error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Customer Management Dialogs */}
      
      <Dialog>
        {/* Add Customer */}
        <div className="flex gap-2">
          <Button variant="secondary" onClick={handleStart}>Start</Button>
          <Button variant="destructive" onClick={handleStop}>Stop</Button>
          <DialogTrigger asChild className="ml-4">
            <Button variant="outline">Add Customer</Button>
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Customer</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new customer.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Customer Name"
                className="col-span-3"
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Customer Table */}
      <Table>
        <TableCaption>Customer Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index + 1}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">DELETE</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure ?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                      This action cannot be undone. This will permanently
                      delete your data.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => {handleDelete(customer.id)}}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
