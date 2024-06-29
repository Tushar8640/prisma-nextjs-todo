"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { Todo } from "@prisma/client";

export async function createTodo(payload: Todo) {
  try {
    const todo = await prisma?.todo.create({
      data: payload,
    });
    revalidatePath("/");
    return todo;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id: number) {
  try {
    const todo = await prisma?.todo.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
    return todo;
  } catch (error) {
    console.log(error);
  }
}
