import { lusitana } from '@/app/ui/fonts';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import CardWrapper from '@/app/ui/dashboard/cards';
import { fetchRevenue, fetchCardData, fetchLatestInvoices } from '@/app/lib/data';

export default async function DashboardPage() {
  const revenue = await fetchRevenue();
  const cardData = await fetchCardData();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main className="p-6 space-y-8">
      {/* Title */}
      <h1 className={`${lusitana.className} text-xl md:text-2xl font-semibold`}>
        Dashboard
      </h1>

      {/* Summary Cards */}
      <CardWrapper
        numberOfCustomers={cardData.numberOfCustomers}
        numberOfInvoices={cardData.numberOfInvoices}
        totalPaidInvoices={cardData.totalPaidInvoices}
        totalPendingInvoices={cardData.totalPendingInvoices}
      />

      {/* Grid: RevenueChart + Last Invoices */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Revenue Chart, lebih kecil */}
        <div className="lg:w-2/3">
          <RevenueChart revenue={revenue} />
        </div>

        {/* Latest Invoices, lebar di tengah */}
        <div className="lg:w-1/3 mx-auto">
          <LatestInvoices latestInvoices={latestInvoices} />
        </div>
      </div>
    </main>
  );
}
