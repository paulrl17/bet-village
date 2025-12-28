"use client";

import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState<"auth" | "profile" | "home">("auth");

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      {step === "auth" && (
        <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border">
          <h1 className="text-3xl font-extrabold mb-2 text-center">
            Bet Village
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Site privé de paris entre amis
          </p>

          <button
            onClick={() => setStep("profile")}
            className="w-full mb-3 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
          >
            Continuer avec Google
          </button>

          <div className="text-center text-sm text-gray-400 my-4">ou</div>

          <input
            placeholder="Email"
            className="w-full mb-3 px-4 py-3 border rounded-xl"
          />
          <input
            placeholder="Mot de passe"
            type="password"
            className="w-full mb-4 px-4 py-3 border rounded-xl"
          />

          <button
            onClick={() => setStep("profile")}
            className="w-full border py-3 rounded-xl font-semibold"
          >
            Connexion / Inscription
          </button>
        </div>
      )}

      {step === "profile" && (
        <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border">
          <h2 className="text-2xl font-extrabold mb-4">
            Crée ton profil
          </h2>

          <input type="file" className="mb-4" />
          <input
            placeholder="Pseudo"
            className="w-full mb-6 px-4 py-3 border rounded-xl"
          />

          <button
            onClick={() => setStep("home")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
          >
            Entrer dans le village
          </button>
        </div>
      )}

      {step === "home" && (
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Bienvenue dans Bet Village 🏆
          </h2>
          <p className="text-gray-500">
            Les matchs, paris, battles et classements arrivent ici.
          </p>
        </div>
      )}
    </div>
  );
}
