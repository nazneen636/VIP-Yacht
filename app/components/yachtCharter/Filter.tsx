"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Filters() {
  return (
    <motion.div
      className="border rounded-lg shadow-md w-full  bg-[#F6F6F6] border-dotted border-primary "
      initial={{ opacity: 0, x: -100 }} // Start from left
      animate={{ opacity: 1, x: 0 }} // Move to normal position
      exit={{ opacity: 0, x: 100 }}
      transition={{
        opacity: { duration: 0.5 }, // Fade in/out duration
        x: { type: "spring", stiffness: 100, damping: 25 }, // Smooth movement from left to right
      }}
    >
      <h2 className="text-xl font-semibold mb-4 border-b-2 border-b-primary austin text-[40px] py-2 px-6">
        Filters
      </h2>
      <div className=" px-6 py-4 grid  gap-4">
        {/* Destination */}
        <div className="mb-4 flex flex-col justify-between gap-2">
          <label className="austin text-lg font-medium">Destination*</label>
          <Select>
            <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Please choose" />
            </SelectTrigger>
            <SelectContent className="bg-[#F6F6F6] border-primary">
              <SelectItem value="greece">Greece</SelectItem>
              <SelectItem value="italy">Italy</SelectItem>
              <SelectItem value="spain">Spain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type of Yacht */}
        <div className="mb-4 flex flex-col justify-between gap-2">
          <label className="austin text-lg font-medium">Type of Yacht*</label>
          <Select>
            <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Please choose" />
            </SelectTrigger>
            <SelectContent className="bg-[#F6F6F6] border-primary">
              <SelectItem value="motor">Motor Yacht</SelectItem>
              <SelectItem value="sailing">Sailing Yacht</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Length (M) */}
        <div className="mb-4 flex flex-col gap-2 ">
          <label className="austin text-lg font-medium">Length (M)</label>
          <Slider
            defaultValue={[24, 99]}
            min={10}
            max={150}
            step={1}
            className="py-2 "
          />
          <div className="flex justify-between items-center gap-2 mb-2 ">
            <Input
              placeholder="24"
              className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
            />
            <span className="text-sm">—</span>
            <Input
              placeholder="99"
              className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Number of Guests */}
        <div className="mb-4 flex flex-col justify-between gap-2">
          <label className="austin text-lg font-medium">
            Number of Guests*
          </label>
          <Select>
            <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent className="bg-[#F6F6F6] border-primary">
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="6">6</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Charter Rate (€) */}
        <div className="mb-4 flex flex-col gap-2 ">
          <label className="austin text-lg font-medium">Charter Rate (€)</label>
          <Slider
            defaultValue={[28000, 1400000]}
            min={10000}
            max={2000000}
            step={1000}
            className="py-2"
          />
          <div className="flex justify-between items-center gap-2">
            <Input
              placeholder="28,000"
              className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
            />
            <span className="text-sm">—</span>
            <Input
              placeholder="1,400,000"
              className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Search Button */}
        <Button className="w-full mt-4 text-white py-6 flex items-center justify-center cursor-pointer">
          <Search className="w-6 h-8 mr-2" /> Search
        </Button>
      </div>
    </motion.div>
  );
}
