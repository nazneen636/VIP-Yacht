"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function YachtSearch() {
  return (
    <div className="flex justify-between p-4 rounded-lg text-white relative">
      {["Destination", "Type of Yacht", "Yacht Length", "Number of Guests"].map(
        (label, index) => (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="bg-[#0000007b]  backdrop-blur-[200px]  rounded-xl overflow-hidden"
            key={index}
          >
            <Select>
              <SelectTrigger
                className="w-[233px] h-[90px] text-white py-4 rounded-lg focus:outline-none border-none relative bg-gradient-to-r "
                placeholder="Please Choose"
              >
                <div
                  className="select-trigger-placeholder austin font-medium"
                  data-placeholder={label}
                >
                  <SelectValue className="text-white austin uppercase focus:outline-none border-none" />
                </div>
                {/* <MdOutlineKeyboardArrowDown className="text-white absolute right-4 top-[30%] transform -translate-y-1/2 text-2xl" /> */}
              </SelectTrigger>
              <SelectContent className="backdrop-blur-sm">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        )
      )}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <button className="bg-primary cursor-pointer text-white px-[42px] h-[90px] rounded-lg flex items-center gap-2 austin uppercase font-medium">
          <HiMagnifyingGlass className="text-white text-xl" /> SEARCH
        </button>
      </motion.div>
    </div>
  );
}
