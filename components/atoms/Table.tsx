import React from "react";
import clsx from "clsx";

export function Table () {
    return (
        <div className="rounded-md border border-[rgba(89,2,2,0.5)] overflow-hidden shadow-lg">
            <table className="w-full border-collapse table-auto rounded-md text-sm text-left dark:text-gray-400 border border-[rgba(89,2,2,0.5)] overflow-hidden">
                <thead className="bg-[#F5E4C4] text-black">
                    <tr>
                        <th className="p-1 border border-[rgba(89,2,2,0.5)]">CUPS</th>
                        <th className="p-1 border border-[rgba(89,2,2,0.5)]">Descripcion</th>
                        <th className="p-1 border border-[rgba(89,2,2,0.5)]">Valor</th>
                    </tr>
                </thead>
                <tbody className="bg-[#F2EDE4] text-gray-700">
                    <tr>
                        <td className="p-1 border border-[rgba(89,2,2,0.5)]">902210</td>
                        <td className="p-1 border border-[rgba(89,2,2,0.5)]">Hemograma</td>
                        <td className="p-1 border border-[rgba(89,2,2,0.5)]">25.000</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-[rgba(89,2,2,0.5)]">903876</td>
                        <td className="p-1 border border-[rgba(89,2,2,0.5)]">Creatinina</td>
                        <td className="p-1 border border-[rgba(89,2,2,0.5)]">30.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}