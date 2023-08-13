'use client'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: {
    adLine1: string,
    adLine2: string,
    countryCode: string,
    postalCode: string,
    adminArea1: string,
    adminArea2: string
  }
}

function PayPalPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userString = localStorage.getItem('user');

    if (userString) {
      try {
        const parsedUser: User = JSON.parse(userString);
        setUser(parsedUser);
        console.log(parsedUser);
      } catch (error) {
        console.error('Error parsing user object:', error);
      }
    }
  }, []);

  const router = useRouter();

  return (
    <PayPalScriptProvider options={{ clientId: "AcWBf7rfdpxHDwOdDmAHnUt0vhSh8vozvgXiOeERCZGtjTnpwrkXpKWBY7FrKZMXCDd85MB0SgkLqkD3" }}>
      <div id="paypal-button-container">
        <PayPalButtons className="w-4/5 md:w-3/5 mx-auto mt-3"
          createOrder={async (data, actions) => {
            const totalPrice = localStorage.getItem("totalPrice") || "0";
            
            const orderID = await actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: totalPrice,
                  },
                },
              ],
            });
            return orderID;
          }}
          onApprove={async (data, actions) => {
            if (actions.order) {
              try {
                const captureResult = await actions.order.capture();
                const captureId = captureResult.id
                localStorage.setItem("purchaseId", captureId)
                console.log(localStorage.getItem("purchaseId"))
                router.push('/thanks')
              } catch (error) {
                console.error("Capture Error:", error);
                alert("Payment could not be processed. Please try again later.");
              }
            }
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}

export default PayPalPage;
