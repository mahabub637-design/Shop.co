"use client";
import { newArrivalData } from "@/data/newArrivals";
import React from "react";


const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.terget.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const street = e.target.street.value;
    const paymentMethod = e.target.paymentMethod.value;
    console.log({ name, email, phone, address, street });
  };

  const handleConfirmOrder = () => {
    alert("Order confirmed!");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl lg:text-5xl font-anton">Checkout</h2>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-5">
        <div className="flex-2">
          <fieldset className="fieldset mt-5">
            <legend className="fieldset-legend text-base">
              Enter Your Full Name
            </legend>
            <input
              type="text"
              name="name"
              className="input w-full input-lg"
              placeholder="Jhon Doe"
            />
          </fieldset>
          <fieldset className="fieldset mt-5">
            <legend className="fieldset-legend text-base">
              Enter Your Email
            </legend>
            <input
              type="text"
              email="email"
              className="input w-full input-lg"
              placeholder="email@example.com"
            />
          </fieldset>
          <fieldset className="fieldset mt-5">
            <legend className="fieldset-legend text-base">
              Enter Your Phone
            </legend>
            <input
              type="text"
              phone="phone"
              className="input w-full input-lg"
              placeholder="+88017********"
            />
          </fieldset>
          <fieldset className="fieldset mt-5">
            <legend className="fieldset-legend text-base">
              Enter Your Address
            </legend>
            <input
              type="text"
              address="address"
              className="input w-full input-lg"
              placeholder="Panthopoth , Dhaka , Bangladesh"
            />
          </fieldset>
          <fieldset className="fieldset mt-5">
            <legend className="fieldset-legend text-base">
              Apartment , Road , Street Address
            </legend>
            <input
              type="text"
              street
              address="apartment, road, street address"
              className="input w-full input-lg"
              placeholder="24/2 Panthopoth signal"
            />
          </fieldset>
        </div>

        <div className="flex-1 mt-14">
          {newArrivalData?.map((item, idx) => (
            <div className="flex items-center gap-3 lg:gap-5" key={idx}>
              <img className="w-16 h-16" src={item.imageUrl} alt="" />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>quantity : 1</p>
              </div>
              <h3>${item.price}</h3>
            </div>
          ))}
          <hr className="mt-5" />

          <div className="flex justify-between">
            <h3 className="font-semibold">SubTotal : </h3>
            <p>$600</p>
          </div>
          <div className="flex justify-between mt-5 text-lg">
            <h3 className="font-semibold">Discount : </h3>
            <p>- $20</p>
          </div>
          <div className="flex justify-between mt-5 text-lg">
            <h3 className="font-semibold">DeliveryCharge : </h3>
            <p>+ $10</p>
          </div>

          <hr className="mt-5" />

          <div className="flex items-center justify-between mt-5 text-lg">
            <h3 className="font-semibold">Total : </h3>
            <p>$590</p>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold">Select Payment Method</h2>

            <div className="flex gap-2 items-center mt-4">
              <input
                type="radio"
                name="paymentMethod"
                id="cod"
                className="radio"
                defaultChecked
              />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>

            <div className="flex gap-2 items-center mt-4">
              <input
                type="radio"
                name="paymentMethod"
                id="ssl"
                className="radio"
                defaultChecked
              />
              <label htmlFor="ssl">Pay With SSL Commersz</label>
            </div>

            <div className="flex gap-2 items-center mt-4">
              <input
                type="radio"
                name="paymentMethod"
                id="stripe"
                className="radio"
                defaultChecked
              />
              <label htmlFor="stripe">Pay With Stripe</label>
            </div>

            <button
              type="button"
              onClick={handleConfirmOrder}
              className="btn btn-neutral mt-5 w-full lg:w-auto"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
