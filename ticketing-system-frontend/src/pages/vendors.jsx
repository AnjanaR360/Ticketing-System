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
import { addVendor, fetchVendors, removeVendor, startVendors, stopVendors } from "@/services/api";
import React from "react";

export default function Vendor() {
  const [vendors, setVendors] = React.useState([]);
  const [formData, setFormData] = React.useState();

  React.useEffect(() => {
    fetchVendors().then((data) => setVendors(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await removeVendor(id);
      alert("Vendor deleted successfully!");
      await fetchVendors().then((data) => setVendors(data));
    } catch (error) {
      console.error("Error deleting vendor:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addVendor({name: formData.name});
      alert("Vendor added successfully!");
      await fetchVendors().then((data) => setVendors(data));
    } catch (error) {
      console.error("Error adding vendor:", error);
    }
  };


  const handleStart = async () => {
    try {
      await startVendors();
      alert("Vendors started successfully!");
    } catch (error) {
      console.error("Error starting vendors:", error);
    }
  };


  const handleStop = async () => {
    try {
      await stopVendors();
      alert("Vendors stopped successfully!");
    } catch (error) {
      console.error("Error stopping vendors:", error);
    }
  };


  return (
    <div className="space-y-8">
      {/* vendor Management Dialogs */}
      <Dialog>
        {/* Add vendor */}
        <div className="flex gap-2">
          <Button variant="secondary" onClick={handleStart}>Start</Button>
          <Button variant="destructive" onClick={handleStop}>Stop</Button>
          <DialogTrigger asChild className="ml-4">
            <Button variant="outline">Add Vendor</Button>
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Vendor</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new Vendor.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Vendor Name"
                name="name"
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

      {/* Vendor Table */}
      <Table>
        <TableCaption>Vendor Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendors.map((vendor, index) => (
            <TableRow key={index + 1}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{vendor.name}</TableCell>
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
                      <AlertDialogAction onClick={() => {handleDelete(vendor.id)}}>Delete</AlertDialogAction>
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
