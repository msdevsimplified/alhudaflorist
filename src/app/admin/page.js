"use client"

import { useSession } from "next-auth/react";
import AdminLayout from "../components/layout/adminLayout";
import Flowers from "./flowers/page";
import { useRouter } from "next/navigation";

export default function Adming() {
    const router = useRouter()
    const {status} = useSession()
    // if(status !== 'unauthenticated'){
    //     router.push('/auth/login')
    // }
    return (
        <html>
            <body className="m-0 p-0 bg-white bg-none">
                <main className=" bg-white m-0 p-0">
                    <AdminLayout>
                        <Flowers/>
                    </AdminLayout>
                </main>
            </body>
        </html>
    )
}