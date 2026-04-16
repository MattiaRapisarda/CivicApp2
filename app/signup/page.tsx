import Link from "next/link"

import { Button } from "@/components/ui/button"
import { signup } from "@/lib/auth/actions"
import { BottomNav } from "@/components/ui/bottom-nav"
import { LogIn } from "lucide-react"

type SignupPageProps = {
    searchParams?: Promise<{
        error?: string
        message?: string
    }>
}

export default async function SignupPage({ searchParams }: SignupPageProps) {
    const params = searchParams ? await searchParams : undefined
    const error = params?.error
    const message = params?.message

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto flex min-h-screen max-w-md items-center px-4 py-10">
                <div className="w-full rounded-[2rem] border border-border bg-card p-6 shadow-sm md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <LogIn className="h-5 w-5" />
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Crea account
                        </h1>
                    </div>

                    <form action={signup} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium">
                                    Nome
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    autoComplete="given-name"
                                    className="h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary/40"
                                    placeholder="Mario"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium">
                                    Cognome
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    autoComplete="family-name"
                                    className="h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary/40"
                                    placeholder="Rossi"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="city" className="text-sm font-medium">
                                Città
                            </label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                autoComplete="address-level2"
                                className="h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary/40"
                                placeholder="Taormina"
                            />
                        </div>

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
                                minLength={8}
                                autoComplete="new-password"
                                className="h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary/40"
                                placeholder="Almeno 8 caratteri"
                            />
                        </div>

                        <div className="rounded-2xl border border-border bg-background/60 p-4">
                            <div className="flex items-start gap-3">
                                <input
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    type="checkbox"
                                    value="accepted"
                                    required
                                    className="mt-1 h-4 w-4 rounded border cursor-pointer"
                                />

                                <label
                                    htmlFor="acceptTerms"
                                    className="text-sm leading-6 text-muted-foreground"
                                >
                                    Accetto la{" "}
                                    <Link
                                        href="/privacy.pdf"
                                        className="font-medium text-foreground underline underline-offset-4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Privacy Policy
                                    </Link>{" "}
                                    e i{" "}
                                    <Link
                                        href="/termini.pdf"
                                        className="font-medium text-foreground underline underline-offset-4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Termini e Condizioni
                                    </Link>
                                    .
                                </label>
                            </div>
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

                        <Button type="submit" className="h-12 w-full rounded-full cursor-pointer">
                            Registrati
                        </Button>
                    </form>

                    <p className="mt-5 text-center text-sm text-muted-foreground">
                        Hai già un account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-foreground underline underline-offset-4"
                        >
                            Accedi
                        </Link>
                    </p>
                </div>
            </div>
            <BottomNav />
        </main>
    )
}