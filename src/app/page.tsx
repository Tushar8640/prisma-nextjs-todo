import { CreateTodoForm } from "@/components/Forms/CreateTodo";
import Image from "next/image";
import { Todo } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import DeleteTodo from "@/components/DeleteTodo";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy:{
      id:"desc"
    }
  });

  return (
    <div className="max-w-sm mx-auto my-20">
      <CreateTodoForm />
      <div className="mt-8 flex flex-col space-y-5">
        {todos.map((todo) => (
          <div key={todo?.id} className="shadow space-y-4 p-3">
            <h4 className="text-blue-700 font-bold">{todo?.title}</h4>
            <p className="text-gray-600 text-sm">{todo?.content}</p>
            <DeleteTodo id={todo?.id}/>
          </div>
        ))}
      </div>
    </div>
  );
}
