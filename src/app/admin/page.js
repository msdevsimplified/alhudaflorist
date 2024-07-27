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
            <body className="">
                <main className="">
                    <AdminLayout>
                        <Flowers/>
                    </AdminLayout>
                </main>
            </body>
        </html>
    )
}