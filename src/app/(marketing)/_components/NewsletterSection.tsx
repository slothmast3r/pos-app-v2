"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useFormStatus } from "react-dom";

function NewsletterSection() {
  const handleSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="w-full flex items-center justify-center">
      <Card className=" max-w-4xl ">
        <CardHeader>
          <h2 className=" text-2xl font-bold">Register to our newsletter</h2>
        </CardHeader>
        <CardBody>
          <p className="text-lg">
            EzytraPOS is a point of sale system that helps you manage your
            business with ease.
          </p>
        </CardBody>
        <CardFooter>
          <form action={handleSubmit} className="w-full items-center flex">
            <Input name="email"></Input>
            <SubmitButton />
          </form>
        </CardFooter>
      </Card>
    </section>
  );
}

export default NewsletterSection;

function SubmitButton() {
  const data = useFormStatus();
  const loading = data.pending;
  return (
    <Button type="submit" disabled={loading}>
      {loading ? "" : "Subscribe"}
    </Button>
  );
}
