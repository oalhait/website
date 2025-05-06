"use server";

import { redirect } from "next/navigation";

export default async function ResumePage() {
  redirect("/resume.pdf");
}
