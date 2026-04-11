import { Product } from "@/types/product";
import { ComponentProps } from "react";
import { StatusBadge } from "./badge";
import { EllipsisVertical, Pencil, Trash } from 'lucide-react';
import { cn } from "@/utils/cn";




interface TableProps extends ComponentProps<'table'> {
    data: Product[];
    containerClassName?: string;
}

export default function Table({ data, className, containerClassName, ...props }: TableProps) {
    return (
        <div className={cn(
            "overflow-x-auto rounded-box border border-base-content/5 bg-base-100",
            containerClassName
        )}>
            <table className={cn("table", className)} {...props}>
                {/* head */}
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Status</th>
                        <th>Unidade de medida</th>
                        <th>Quando foi comprado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.quantity}</td>
                            <td><StatusBadge status={product.status} /></td>
                            <td>{product.unit}</td>
                            <td>{product.lastUpdate}</td>
                            <td>
                                <details className="dropdown dropdown-end">
                                    <summary className="btn btn-ghost"><EllipsisVertical /></summary>
                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li>
                                            <a>
                                                <Pencil className="size-4" />
                                                Editar
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <Trash className="size-4" />
                                                Deletar
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}