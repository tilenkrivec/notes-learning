import { getProfileByUserIdAction } from "@/actions/profiles-actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function NotesPage() {
  const { userId } = auth();

  if (!userId) return redirect("/login");

  const { data: profile } = await getProfileByUserIdAction(userId);

  if (!profile) return redirect("/signup");
  if (profile.membership === "free") return redirect("/pricing");

  return (
    <div className="flex h-screen">
Notes
    </div>
  );
}