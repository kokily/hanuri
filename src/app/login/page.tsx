import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Login from "@/components/login/login";

export default async function LoginPage() {
  const session = await auth();

  if (!!session?.user) {
    redirect("/write");
  }

  return <Login />;
}
