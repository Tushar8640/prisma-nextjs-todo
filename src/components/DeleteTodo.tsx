"use client"

import { deleteTodo } from "@/actions/todo";
import { Button } from "./ui/button";

export default function DeleteTodo({ id }: { id: number }) {
  const handleDelete = async () => {
    const res = deleteTodo(id);
    console.log(res);
  };

  return (
    <div>
      <Button onClick={handleDelete}>x</Button>
    </div>
  );
}
