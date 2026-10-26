/**
 * Links e contatos. Deixe uma string vazia ("") para esconder o item do site.
 * - cv: coloque o PDF em public/ (ex.: public/curriculo-pedro-lucas.pdf) e informe o caminho.
 */
export const profile = {
  name: "Pedro Lucas",
  email: "py.pedropinheir@gmail.com",
  whatsapp: "5527997597655",
  whatsappLabel: "+55 27 99759-7655",
  github: "https://github.com/PedroPolis-br",
  linkedin: "",
  cv: "",
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`;
