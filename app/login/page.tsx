import Link from "next/link"
import { LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { login } from "@/lib/auth/actions"

type LoginPageProps = {
    searchParams?: Promise<{
        error?: string
        message?: string
    }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const params = searchParams ? await searchParams : undefined
    const error = params?.error
    const message = params?.message

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto flex min-h-screen max-w-md items-center px-4 py-10">
                <div className="w-full rounded-[2rem] border border-border bg-card p-6 shadow-sm md:p-8">
                    <div className="mb-6">
                        <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <LogIn className="h-5 w-5" />
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Accedi
                            </h1>
                        </div>
                    </div>

                    <form action={login} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary/40"
                                placeholder="nome@email.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary/40"
                                placeholder="••••••••"
                            />
                        </div>

                        {message ? (
                            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                                {message}
                            </div>
                        ) : null}

                        {error ? (
                            <div className="rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                                {error}
                            </div>
                        ) : null}

                        <Button type="submit" className="h-12 w-full rounded-full">
                            Accedi
                        </Button>
                    </form>

                    <p className="mt-5 text-center text-sm text-muted-foreground">
                        Non hai ancora un account?{" "}
                        <Link
                            href="/signup"
                            className="font-medium text-foreground underline underline-offset-4"
                        >
                            Registrati
                        </Link>
                    </p>
                </div>
            </div>

            <BottomNav />
        </main>
    )
}