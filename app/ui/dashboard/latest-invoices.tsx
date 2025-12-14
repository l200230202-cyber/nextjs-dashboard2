// app/ui/dashboard/latest-invoices.tsx
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';

export default function LatestInvoices({
  latestInvoices = [],
}: {
  latestInvoices?: LatestInvoice[];
}) {
  return (
    <div className="flex w-full flex-col">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>

      <div className="overflow-x-auto rounded-xl bg-gray-50 p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">Customer</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Total Spent</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {latestInvoices.map((invoice) => (
              <tr key={invoice.id} className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2 flex items-center gap-2">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="rounded-full"
                    width={32}
                    height={32}
                  />
                  <span className="truncate">{invoice.name}</span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">{invoice.email}</td>
                <td className={`${lusitana.className} px-4 py-2 text-sm font-medium`}>
                  {invoice.amount}
                </td>
                <td className={`${lusitana.className} px-4 py-2 text-sm font-medium`}>
                  {invoice.total_spent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center pt-4 text-gray-500 text-sm">
          <ArrowPathIcon className="h-5 w-5 mr-2" />
          Updated just now
        </div>
      </div>
    </div>
  );
}
