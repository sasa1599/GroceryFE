import Services2 from "@/services/profile/services2";
import { MapPin } from "lucide-react";
import React from "react";

export default function AddressClient() {
  const { load, addressData } = Services2();
  return (
    <div className="w-full p-4 rounded shadow bg-gray-600 my-2">
      <h5 className="text-white font-bold">Received Address</h5>
      <div className="mt-2 flex gap-2 items-center">
        <div>
          <div className="flex gap-2">
            <MapPin className="w-6 text-blue-400" />
            <p className="text-white">Rumah</p>
          </div>
          <p className="text-white mt-2 px-2">
            {addressData?.find((v: any) => v?.is_primary == true)?.address},{" "}
            {addressData?.find((v: any) => v?.is_primary == true)?.subdistrict},{" "}
            {addressData?.find((v: any) => v?.is_primary == true)?.city},{" "}
            {addressData?.find((v: any) => v?.is_primary == true)?.province},{" "}
            {addressData?.find((v: any) => v?.is_primary == true)?.postcode}
          </p>
        </div>
        <div className="lg:w-1/4 w-full">
          <button className="text-white border border-white rounded p-2 hover:border-blue-500 duration-200 transition-all hover:text-blue-500">
            Change Address
          </button>
        </div>
      </div>
    </div>
  );
}
