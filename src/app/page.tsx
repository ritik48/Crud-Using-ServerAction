import { Todo } from "@/components/Todo";
import { getTodos } from "@/lib/getTodos";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-semibold">TODO</h1>
          <div className="flex flex-col items-start mt-4">
            {todos.map((todo: any) => (
              <Todo todo={todo} key={todo._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
