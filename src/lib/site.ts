// Informações editáveis da barbearia — altere aqui para atualizar o site inteiro.
export const SITE = {
  name: "D'PRAXE BARBEARIA",
  phoneDisplay: "(11) 99941-9768",
  whatsappBase: "https://wa.me/5511994179768",
  whatsappMessage: "Olá! Gostaria de agendar um horário na D'PRAXE BARBEARIA.",
  instagramHandle: "@dpraxebarbaria",
  instagramUrl: "https://instagram.com/dpraxebarbaria",
  address: {
    line1: "Av. Giovanni Gronchi, 5930 – Vila Andrade",
    line2: "Shopping Morumbi Town – Piso Térreo",
    line3: "São Paulo – SP",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Giovanni+Gronchi,+5930+-+Vila+Andrade,+S%C3%A3o+Paulo+-+SP",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Giovanni+Gronchi,+5930+-+Vila+Andrade,+S%C3%A3o+Paulo+-+SP&output=embed",
};

export function whatsappLink(service?: string) {
  const text = service
    ? `Olá! Gostaria de agendar um horário na D'PRAXE BARBEARIA. Serviço: ${service}.`
    : SITE.whatsappMessage;
  return `${SITE.whatsappBase}?text=${encodeURIComponent(text)}`;
}

// Preços configuráveis: preencha o campo `price` quando os valores forem definidos.
export const SERVICES: { name: string; description: string; price: string; icon: string }[] = [
  {
    name: "Corte Masculino",
    description: "Corte personalizado, finalizado com acabamento preciso.",
    price: "Consulte valores",
    icon: "scissors",
  },
  {
    name: "Corte + Barba",
    description: "O combo completo para renovar o visual de ponta a ponta.",
    price: "Consulte valores",
    icon: "combo",
  },
  {
    name: "Barba",
    description: "Modelagem, toalha quente e navalha para um desenho impecável.",
    price: "Consulte valores",
    icon: "razor",
  },
  {
    name: "Acabamento",
    description: "Retoque rápido em pescoço, costeletas e contornos.",
    price: "Consulte valores",
    icon: "spark",
  },
  {
    name: "Sobrancelha",
    description: "Alinhamento discreto que valoriza o olhar.",
    price: "Consulte valores",
    icon: "brow",
  },
  {
    name: "Pacotes",
    description: "Combinações de serviços pensadas para quem vem sempre.",
    price: "Consulte valores",
    icon: "crown",
  },
];

export const DIFERENCIAIS = [
  { title: "Atendimento Premium", text: "Uma experiência pensada para cada cliente." },
  { title: "Profissionais Especializados", text: "Qualidade e atenção em cada detalhe." },
  { title: "Ambiente Moderno", text: "Um espaço confortável para você cuidar do seu estilo." },
  { title: "Localização Privilegiada", text: "Dentro do Shopping Morumbi Town." },
];
