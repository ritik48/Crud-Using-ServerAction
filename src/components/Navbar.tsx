import { AddItem } from "./AddItem";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <h1 className="text-sm">CRUD</h1>
          <AddItem config={{ edit: false }} />
        </div>
      </div>
    </div>
  );
}
