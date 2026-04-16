import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")

    if (code) {
        const supabase = await createSupabaseServerClient()
        const { data, error } = await supabase.auth.exchangeCodeForSession(code)

        if (error) {
            return NextResponse.redirect(
                new URL(
                    `/login?error=${encodeURIComponent("Errore nella conferma dell’email")}`,
                    request.url
                )
            )
        }

        const user = data.user

        if (user) {
            const firstName = typeof user.user_metadata.first_name === "string"
                ? user.user_metadata.first_name
                : null

            const lastName = typeof user.user_metadata.last_name === "string"
                ? user.user_metadata.last_name
                : null

            const city = typeof user.user_metadata.city === "string"
                ? user.user_metadata.city
                : null

            const avatarUrl = typeof user.user_metadata.avatar_url === "string"
                ? user.user_metadata.avatar_url
                : null

            await supabase.from("profiles").upsert({
                id: user.id,
                first_name: firstName,
                last_name: lastName,
                city,
                avatar_url: avatarUrl,
            })
        }
    }

    return NextResponse.redirect(
        new URL(
            "/login?message=" +
            encodeURIComponent("Email confermata con successo. Ora puoi accedere."),
            request.url
        )
    )
}