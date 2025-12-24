"use client";

import { useState } from "react";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "kızgıngüllerinüstünedüşmüşdolunayımben2468") {
            setIsAuthenticated(true);
        } else {
            setError(true);
            alert("Yanlış parola!"); // Simple alert for wrong password or shake effect
        }
    };

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0f0202',
            color: '#f8f4f0',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
        }}>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center',
                padding: '3rem',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                maxWidth: '90%',
                width: '400px',
                boxShadow: '0 0 30px rgba(139, 0, 0, 0.2)'
            }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#d4af37', fontSize: '2rem' }}>Giriş Yapın</h2>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Parola..."
                    style={{
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid #d4af37',
                        background: 'rgba(0,0,0,0.3)',
                        color: 'white',
                        outline: 'none',
                        width: '100%',
                        fontSize: '1rem',
                        textAlign: 'center'
                    }}
                />
                <button
                    type="submit"
                    className="btn-primary" // Using global class if available, or inline style below
                    style={{
                        width: '100%',
                        fontSize: '1.1rem',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: 'none',
                        background: 'linear-gradient(135deg, #8b0000, #5e0000)',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)'
                    }}
                >
                    Giriş
                </button>
            </form>
        </div>
    );
}
