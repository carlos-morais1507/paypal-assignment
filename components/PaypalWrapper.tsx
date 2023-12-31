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

function PaypalWrapper() {
  const router = useRouter()
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

  return (
    <PayPalScriptProvider options={{ clientId: "AcWBf7rfdpxHDwOdDmAHnUt0vhSh8vozvgXiOeERCZGtjTnpwrkXpKWBY7FrKZMXCDd85MB0SgkLqkD3" }}>
      <div id="paypal-button-container p-3">
        <PayPalButtons className="w-full mx-auto mt-3 relative z-10 p-3"
          createOrder={async (data, actions) => {
            const totalPrice = localStorage.getItem("totalPrice") || "0";
            
            const orderID = await actions.order.create({
              intent: "CAPTURE",
              application_context: {
                brand_name: 'Carlos Morais',
                shipping_preference: "SET_PROVIDED_ADDRESS",
              },
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: totalPrice,
                  },
                  custom_id: user?.email,
                  description: "Your purchase description here",
                  shipping: {
                    type: "SHIPPING",
                    name: {
                      full_name: `${user?.firstName} ${user?.lastName}`,
                    },
                    address: {
                      address_line_1: user?.address.adLine1!,
                      address_line_2: user?.address.adLine2!,
                      admin_area_1: user?.address.adminArea2!,
                      admin_area_2: user?.address.adminArea1!,
                      postal_code: user?.address.postalCode!,
                      country_code: user?.address.countryCode!,
                    },
                    phone_number: {
                      national_number: user?.phoneNumber!,
                    },
                    email_address: user?.email!
                  },
                },
              ],
              payer: {
                email_address: user?.email!,
                name: {
                  given_name: user?.firstName!,
                  surname: user?.lastName!
                },
                payer_id: "QYR5Z8XDVJNXQ",
                address: {
                  address_line_1: user?.address.adLine1!,
                  address_line_2: user?.address.adLine2!,
                  admin_area_1: user?.address.adminArea2!,
                  admin_area_2: user?.address.adminArea1!,
                  postal_code: user?.address.postalCode!,
                  country_code: user?.address.countryCode!,
                },
                phone: {
                  phone_number: {national_number: user?.phoneNumber!},
                  phone_type: "MOBILE"
                },
                birth_date: "2002-07-15",
                tax_info: {
                  tax_id: "11001019776",
                  tax_id_type: "BR_CPF"
                },
                tenant: "string"
              },
              

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

export default PaypalWrapper;
