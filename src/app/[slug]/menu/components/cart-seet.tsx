import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart";
import CartProductItem from "./cart-product-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/helpers/format-currency";
import FinishOrderDialog from "./finish-order-Dialog";

const CartSeet = () => {
    const [finishOrderDialog, setFinishOrderDialog] = useState(false)
    const { isOpen, toggleCart, products, total } = useContext(CartContext)
    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-[80%]">
                <SheetHeader>
                    <SheetTitle className="text-left">Sacola</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full py-5">
                    <div className="flex-auto">
                        {products.map(product => (
                            <CartProductItem key={product.id} product={product} />
                        ))}
                    </div>
                    <Card className="mb-6">
                        <CardContent className="p-5">
                            <div className="flex justify-between">
                                <p className="text-sm text-muted-foreground">Total</p>
                                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Button className="w-full rounded-full" onClick={() => setFinishOrderDialog(true)}>Finalizar pedido</Button>
                    <FinishOrderDialog open={finishOrderDialog} onOpenChange={setFinishOrderDialog} />
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default CartSeet;