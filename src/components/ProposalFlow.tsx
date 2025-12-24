"use client";

import { useState, useEffect, useRef } from "react";
import DodgingButton from "./DodgingButton";

export default function ProposalFlow() {
    const [step, setStep] = useState(0);

    const messages = [
        "Biliyorum henüz tanşıalı çok olmadı ama bu kadarcık kısa sürede bile beni her anında etkiledin ve saatlik olarak sana olan duygularım kat ve kat arttı...😣😣 Bu gerçekten tahminimin ötesinde hızlı oldu ama hayat da böyle değil midir zaten🤠​ en beklenmedik insanlarla en beklemediğimiz zamanlarda karşılaşırız. Gece gece edebiyat bile yaptırdın bana, yuh yani.🤠 Evet bu bir çıkma teklifi ama bir yandan da korkuyorum hızlı olup hızlı bitmesinden, hiç bitmesin istiyorum o yüzden şimdi bir hevesle sana bunu kabul ettirmeye zorlamak da istemiyorum o yüzden hayır seçeneği de ekledim. ​🙈                                           Kız arkadaşım olur musun Ceren? 🥺", // Step 0
        "Nedenmiskine ? 🥺", // Step 1
        "Emin misin? Bir daha düşünsen 🥺🥺", // Step 2 (Orbit)
        "Bak çok üzülürüm ama...", // Step 3 (Bounce)
        "Hala mı hayır? İnatçı mıyız biraz? ​​​🤔​🧐​", // Step 4 (Shake)
        "Valla yoruyorsun beni ama pes etmem! 😤", // Step 5 (Invisible)
        "Kabul etmezsen ağlarım bak 🥺🥺", // Step 6 (Offset - Runs away to corner)
        "Evet dersen sana şeker de alırım hem 🤡​", // Step 7 (Spin)
        "Yiyosa hayır desene 😎​😎​" // Step 8 (Transformer - Final)
    ];

    const handleNoClick = () => {
        setStep((prev) => Math.min(prev + 1, messages.length - 1));
    };

    const handleYesClick = () => {
        setStep(999); // Success state
    };

    if (step === 999) {
        return (
            <div className="glass-card" style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '3rem',
                margin: 'auto',
                textAlign: 'center'
            }}>
                <h1 className="text-gold" style={{ fontSize: '3rem', marginBottom: '1rem' }}>EVET! ❤️</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Merak etme bunu seni hiçbirşeye zorlamak için yapmadım dün senin için gerçekten zor bir gündü ve iyi ki bunu benimle paylaştın, <br />
                    o konuda elimden gelen birşey olmasa bile en azından belki birazcık olsun seni neşelendirebilirim diye böyle birşey yapmak istedim.<br />
                    Şu ana kadar nasılsak öyle devam edelim olur mu benim tontiş yanaklı kuzum. <br />
                    Seni çok seviyorum. 🥰<br />
                </p>
            </div>
        );
    }

    return (
        <div className="glass-card" style={{
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3rem',
            position: 'relative',
            zIndex: 10,
            margin: 'auto'
        }}>
            {step === 0 ? (
                <p style={{
                    marginBottom: '2.5rem',
                    maxWidth: '650px',
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    whiteSpace: 'pre-wrap',
                    textAlign: 'center'
                }}>
                    {messages[step]}
                </p>
            ) : (
                <h1 style={{ marginBottom: '2rem', maxWidth: '600px' }}>{messages[step]}</h1>
            )}

            {/* Step 0: Standard Dodging */}
            {step === 0 && (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                    <button className="btn btn-primary" onClick={handleYesClick}>EVET</button>
                    <DodgingButton className="btn btn-secondary" onClick={handleNoClick} style={{ fontSize: '1.2rem', padding: '1rem 2.4rem' }}>Hayır</DodgingButton>
                </div>
            )}

            {/* Step 1: Tiny Button */}
            {step === 1 && (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                    <button className="btn btn-primary" onClick={handleYesClick} style={{ transform: 'scale(1.5)' }}>Tamam ya, Evet</button>
                    <DodgingButton
                        className="btn btn-secondary"
                        onClick={handleNoClick}
                        disabled={true}
                        style={{ fontSize: '0.4rem', padding: '0.15rem 0.4rem', minWidth: 'auto' }}
                    >
                        Hala Hayır
                    </DodgingButton>
                </div>
            )}

            {/* Step 2: Orbiting Button */}
            {step === 2 && (
                <div style={{ position: 'relative', height: '200px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button className="btn btn-primary" onClick={handleYesClick}>Evet</button>
                    <div style={{ position: 'absolute', animation: 'orbit 4s linear infinite' }}>
                        <button className="btn btn-secondary" onClick={handleNoClick} style={{ fontSize: '0.64rem', padding: '0.4rem 0.8rem', minWidth: '80px' }}>Hayır</button>
                    </div>
                </div>
            )}

            {/* Step 3: Bouncing Button */}
            {step === 3 && (
                <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <button className="btn btn-primary" onClick={handleYesClick}>Evet</button>
                    </div>
                    <BouncingButton onClick={handleNoClick}>Yine Hayır</BouncingButton>
                </div>
            )}

            {/* Step 4: Shaking Button */}
            {step === 4 && (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                    <button className="btn btn-primary" onClick={handleYesClick} style={{ transform: 'scale(1.2)' }}>Evet Lütfen</button>
                    <button
                        className="btn btn-secondary"
                        onClick={handleNoClick}
                        style={{
                            fontSize: '1.2rem',
                            padding: '1rem 2.4rem',
                            animation: 'shake 0.2s cubic-bezier(.36,.07,.19,.97) infinite',
                            transform: 'translate3d(0, 0, 0)',
                            backfaceVisibility: 'hidden',
                            perspective: '1000px'
                        }}
                    >
                        Hayır
                    </button>
                </div>
            )}

            {/* Step 5: Invisible Button */}
            {step === 5 && (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                    <button className="btn btn-primary" onClick={handleYesClick} style={{ transform: 'scale(1.3)' }}>Artık Evet De</button>
                    <button
                        className="btn btn-secondary"
                        onClick={handleNoClick}
                        style={{
                            fontSize: '1.2rem',
                            padding: '1rem 2.4rem',
                            opacity: 0.1, // Almost invisible
                            transition: 'opacity 0.3s'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0')} // Disappears completely on hover
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.1')}
                    >
                        Hayır
                    </button>
                </div>
            )}

            {/* Step 6: Offset (Runaway) Button */}
            {step === 6 && (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', height: '300px', position: 'relative' }}>
                    <button className="btn btn-primary" onClick={handleYesClick} style={{ transform: 'scale(1.4)' }}>EVET</button>
                    <button
                        className="btn btn-secondary"
                        onClick={handleNoClick}
                        style={{
                            fontSize: '1.2rem',
                            padding: '1rem 2.4rem',
                            position: 'absolute',
                            right: '20px',
                            bottom: '20px'
                        }}
                    >
                        Hayır
                    </button>
                </div>
            )}

            {/* Step 7: Spinning Button */}
            {step === 7 && (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                    <button className="btn btn-primary" onClick={handleYesClick} style={{ transform: 'scale(1.4)' }}>Lütfen Evet</button>
                    <div style={{ animation: 'spin 0.5s linear infinite' }}>
                        <button
                            className="btn btn-secondary"
                            onClick={handleNoClick}
                            style={{
                                fontSize: '1.2rem',
                                padding: '1rem 2.4rem',
                            }}
                        >
                            Hayır
                        </button>
                    </div>
                </div>
            )}

            {/* Step 8: Transformer Buttons (Final) */}
            {step === 8 && (
                <div style={{ position: 'relative', height: '300px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <button className="btn btn-primary" onClick={handleYesClick} style={{ padding: '2rem 4rem', fontSize: '2.5rem', zIndex: 100 }}>EVET!</button>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <TransformerButton key={i} onClick={handleYesClick} />
                    ))}
                </div>
            )}
        </div>
    );
}

function BouncingButton({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const maxX = 200;
        const maxY = 200;
        let velocityX = 2;
        let velocityY = 2;
        let posX = 0;
        let posY = 0;
        let animationFrameId: number;

        const animate = () => {
            posX += velocityX;
            posY += velocityY;

            if (posX > maxX || posX < -maxX) velocityX = -velocityX;
            if (posY > maxY || posY < -maxY) velocityY = -velocityY;

            setPosition({ x: posX, y: posY });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <button
            className="btn btn-secondary"
            onClick={onClick}
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                zIndex: 10,
                fontSize: '1.2rem',
                padding: '1rem 2.4rem'
            }}
        >
            {children}
        </button>
    );
}

function TransformerButton({ onClick }: { onClick: () => void }) {
    const [isYes, setIsYes] = useState(false);

    return (
        <button
            className={`btn ${isYes ? 'btn-primary' : 'btn-secondary'}`}
            onMouseEnter={() => setIsYes(true)}
            onClick={isYes ? onClick : undefined}
            style={{
                fontSize: isYes ? '1.5rem' : '0.65rem',
                padding: isYes ? '1.2rem 3rem' : '0.4rem 0.8rem',
                minWidth: isYes ? '180px' : '80px',
                transition: 'all 0.2s ease'
            }}
        >
            {isYes ? 'Evet😎​' : 'Hayır'}
        </button>
    );
}
