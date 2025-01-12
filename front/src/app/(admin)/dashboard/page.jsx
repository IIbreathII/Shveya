'use client';
import bootstrap from "bootstrap"
import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Image from 'next/image';
import { useRouter } from "next/navigation";
import Management from "$component/dashboard/Management/Management";
import LatestActions from "$component/dashboard/LatestActions/LatestActions";

export default function AdminPage() {
  return (
    <>
      <main className="main">
        <div className="main__columns container-lg mt-5">
          <div className="main__column lead-column">
            <Management/>
          </div>
          <div className="main__column">
            <LatestActions/>
          </div>
        </div>
      </main>
    </>
  );
}