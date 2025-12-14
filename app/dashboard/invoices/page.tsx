import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesPage() {
  const invoices = await fetchFilteredInvoices('', 1);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>

      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Customer</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Amount</th>
            <th className="border px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="border px-4 py-2">{invoice.name}</td>
              <td className="border px-4 py-2">{invoice.email}</td>
              <td className="border px-4 py-2">{invoice.amount}</td>
              <td className="border px-4 py-2">{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
