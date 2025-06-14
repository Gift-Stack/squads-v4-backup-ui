import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import DashboardHeader from "@/app/dashboard/components/dashboard-header";
import Vaults from "./vaults";

export default function Dashboard() {
  return (
    <main className="flex-1 p-6 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Dashboard
          </h1>
          <p className="text-zinc-400">
            Manage your multi-signature vaults and transactions
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard/create-vault">
            <Button className="gap-2 bg-zinc-800 text-white hover:bg-zinc-700 border-none">
              Create Vault
            </Button>
          </Link>
          <Link href="/dashboard/new-transaction">
            <Button
              variant="outline"
              className="gap-2 border-zinc-700 text-white hover:bg-zinc-800"
            >
              <ArrowUpRight className="h-4 w-4" /> New Transaction
            </Button>
          </Link>
        </div>
      </div>

      {/* <HomeTabs /> */}
      <Vaults />
    </main>
  );
}
