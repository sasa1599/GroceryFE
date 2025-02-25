"use client";
import AddressClient from "@/components/checkout/AddressClient";
import ItemOrder from "@/components/checkout/ItemOrder";
import PaymentOrder from "@/components/checkout/PaymentOrder";
import ToastContainerElement from "@/components/ToastContainerElement";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login-user-customer");
    }
  }, [router]);

  return (
    <div className="w-full bg-gray-900 py-20">
      <div className="container mx-auto">
        <div className="mx-auto container flex items-center max-w-5xl">
          <h1 className="text-white text-left font-bold text-2xl w-full mt-4">
            Checkout
          </h1>
        </div>
        <main className="h-auto flex lg:flex-row flex-col max-w-5xl w-full justify-center mx-auto container">
          <div className="w-full">
            {/* Alamat User */}
            <AddressClient />

            {/* Item Dibeli + Pilih Kurir */}
            <ItemOrder />
          </div>
          <div className="lg:w-1/4 w-full">
            {/* Payment */}
            <PaymentOrder />
          </div>
        </main>
        <ToastContainerElement />
      </div>
    </div>
  );
}
