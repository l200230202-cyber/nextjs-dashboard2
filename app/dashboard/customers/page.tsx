import Image from 'next/image';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function CustomersPage() {
  const customers = await fetchFilteredCustomers('');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>

      <ul className="space-y-3">
        {customers.map((customer) => (
          <li
            key={customer.id}
            className="flex items-center gap-4 rounded-md border p-4"
          >
            <Image
              src={customer.image_url}
              alt={customer.name}
              width={40}
              height={40}
              className="rounded-full"
            />

            <div>
              <p className="font-semibold">{customer.name}</p>
              <p className="text-sm text-gray-500">{customer.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
