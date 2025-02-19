import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">Products Page</h1>
      <Button>Marcha</Button>
      <Input placeholder="Bora fechar esse conteúdo ?"></Input>
    </div>
  );
};

export default ProductsPage;
