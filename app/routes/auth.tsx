import React, {useEffect, useState} from "react";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";

export const meta = () => [
    { title: "Resumind | Auth" },
    { name: "description", content: "Log into your account" }
];

function Auth() {
    // const [isLoading , setIsLoading ] = useState();
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    // const next = location.search.split('next')[1];
    // const next = new URLSearchParams(location.search).get("next") || "/";
    const searchParams = new URLSearchParams(location.search);
    const next = searchParams.get("next") || "/";

    const isOnAuthPage = location.pathname === "/auth";

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (auth.isAuthenticated) navigate(next);
    // }, [auth.isAuthenticated, next]); // <-- missing bracket fixed
    // useEffect(() => {
    //     if (auth.isAuthenticated && !isOnAuthPage) {
    //         navigate(next);
    //     }
    // }, [auth.isAuthenticated, next, isOnAuthPage]);

    // useEffect(() => {
    //     if (auth.isAuthenticated) {
    //         if (location.search.includes("next")) {
    //             navigate(next);  // redirect ONLY if next exists
    //         }
    //     }
    // }, [auth.isAuthenticated, next, location.search]);

    useEffect(() => {
        // Only redirect after login if user is NOT on /auth
        if (auth.isAuthenticated && location.pathname === "/auth") {
            navigate(next);
        }
    }, [auth.isAuthenticated, next, location.pathname]);


    return(   // <-- previously outside function, now fixed
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>Log In to Continue Your Job Journey</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing You In...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Auth;
