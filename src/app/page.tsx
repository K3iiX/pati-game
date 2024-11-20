'use client'

import { useState } from 'react';

const WordHighlighter: React.FC = () => {
  const [input, setInput] = useState("");
  const [points, setPoints] = useState(0);

  const keywords = [
    "basura",
    "suciedad",
    "inmundicia",
    "mugre",
    "porquería",
    "residuos",
    "desperdicios",
    "desechos",
    "restos",
    "sobras",
    "despojos",
    "bazofia",
    "escombro",
    "barreduras",
    "rata",
    "roedor",
    "ratona",
    "indeseable",
    "miserable",
    "gusano",
    "cochinada",
    "guarrería",
    "guarrada",
    "chanchada",
    "faena",
    "jugarreta",
    "cerdada",
    "escoria",
    "desperdicio",
    "esperpento",
    "adefesio",
    "espantajo",
    "mamarracho",
    "nefasto",
    "fatídico",
    "desdichado",
    "desgraciado",
    "vulgar",
    "inculto",
    "maleducado",
    "desagradable",
    "molesto",
    "fastidioso",
    "enfadoso",
    "enojoso",
    "incómodo",
    "irritante",
    "asqueroso",
    "repugnante",
    "repulsivo",
    "inmundo",
    "sucio",
    "puerco",
    "impuro",
    "imbécil",
    "tonto",
    "estúpido",
    "cretino",
    "idiota",
    "bobo",
    "necio",
    "mentecato",
    "retrasado",
    "friki",
    "gordo",
    "grueso",
    "rollizo",
    "obeso",
    "hinchado",
    "rechoncho",
    "regordete",
    "abultado",
    "voluminoso",
    "hobby",
    "malparido",
    "ñordo",
    "mojón",
    "mierda",
    "truño",
    "plasta",
    "ensuciar",
    "parásito",
    "aprovechado",
    "abusón",
    "vividor",
    "piojo",
    "pipi",
    "pusilánime",
    "miedoso",
    "cobarde",
    "encogido",
    "descarado",
    "sinvergüenza",
    "desvergonzado",
    "deslenguado",
    "deslavado",
    "impertinente",
    "insolente",
    "atrevido",
    "procaz",
    "cínico",
    "desconsiderado",
    "carilimpio",
    "cachafaz",
    "relambido",
    "rallado",
    "rídiculo",
    "irrisorio",
    "grotesco",
    "absurdo",
    "anómalo",
    "extravagante",
    "estrafalario",
    "pequeño",
    "minúsculo",
    "escaso",
    "insignificante",
    "mezquino",
    "insuficiente",
    "mediocre",
    "mediano",
    "común",
    "regular",
    "corriente",
    "anodino",
    "mantenido",
    "canalla",
    "ruin",
    "despreciable",
    "perverso",
    "abyecto",
    "vil",
    "tacaño",
    "mísero",
    "avaricioso",
    "avariento",
    "avaro",
    "cicatero",
    "roñoso",
    "melindroso",
    "infeliz",
    "desvalido",
    "malaventurado",
    "desventurado",
    "aciago",
    "funesto",
    "calamitoso",
    "catastrófico",
    "desastroso",
    "trágico",
    "fatal",
    "malhadado",
    "lamentable",
    "cesante",
    "desocupado",
    "paro",
    "desempleo",
    "despido",
    "ocioso",
    "desocupada",
    "desocupación",
    "parado"
];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value;
    setInput(newInput);

    const words = newInput.split(" ");
    const uniqueWords = new Set(words);
    const matchedWords = Array.from(uniqueWords).filter((word) =>
      keywords.includes(word.toLowerCase())
    );

    setPoints(matchedWords.length);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-full h-96 mb-2 bg-indigo-200 text-black placeholder:text-slate-500 text-lg border-4 border-black pl-3 pb-72"
        placeholder="Type Text..."
      />
      <p className="text-black">Points: {points}</p>
      <button
        className="rounded bg-slate-800 py-1 px-3 border border-transparent text-center text-sm text-white
        transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none
        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        SEND
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <header>
        <div className="flex justify-center py-5">
          <img src="/patigame3.png" />
        </div>
      </header>

      <section className="flex bg-white rounded">
        {/* LEFT DIV */}
        <div className="w-1/4 flex justify-center">
          <img src="zhiyenpart.png" />
        </div>

        {/* CENTER DIV */}
        <div className="w-1/2 mx-auto pt-5">
          <WordHighlighter />
        </div>

        {/* RIGHT DIV */}
        <div className="w-1/4 flex justify-center">
          <img src="/enanopart.png" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex justify-center pt-12">
        <img src="/maradino.png" />
      </footer>
    </div>
  );
}
