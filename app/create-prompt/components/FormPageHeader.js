import React from "react";
import { Button } from "@nextui-org/button";
import Form from "@components/Form";

export default function FormPageHeader() {
  return (
    <div className="EmptyPage_Flex">
      <h3 className="EmptyPage_head">My Prompts</h3>
      <Button className="bg-red-50 text-red-700">Back</Button>
      <Form />
    </div>
  );
}
