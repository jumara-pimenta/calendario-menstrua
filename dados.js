/* =====================================================================
   📌 ARQUIVO DE DADOS DO CALENDÁRIO MENSTRUA
   ---------------------------------------------------------------------
   É AQUI que você adiciona ou edita as atividades.
   Você NÃO precisa mexer em mais nenhum arquivo. 🙂

   Como adicionar uma nova atividade:
   1. Copie um bloco { ... } inteiro (de uma chave a outra).
   2. Cole logo abaixo, dentro dos colchetes [ ].
   3. Mude os valores entre aspas.
   4. Não esqueça a vírgula no final de cada bloco }.
   5. Salve o arquivo e publique (veja o COMO-USAR.md).

   Campos:
   - data:        "AAAA-MM-DD"  (ex: "2026-06-07"). Deixe "" se for "a confirmar".
   - cidade:      cidade/local da ação (ex: "Manaus")
   - local:       detalhe do lugar (ex: "Rua", "UFAM"). Pode deixar "".
   - tipo:        "rua" | "universidade" | "indigena" | "centropop" | "outro"
   - responsavel: nome da voluntária responsável (ex: "Drica"). Pode deixar "".
   - status:      "confirmada" | "aconfirmar" | "realizada"
   ===================================================================== */

const PROJETO = {
  nome: "MENSTRUA",
  subtitulo: "Calendário de Ações e Atividades",
  // Aparece no rodapé. Atualize a data quando fizer mudanças, se quiser.
};

const ATIVIDADES = [

  {
    data: "2026-06-07",
    cidade: "Manaus",
    local: "Rua",
    tipo: "rua",
    responsavel: "",
    status: "confirmada"
  },

  {
    data: "2026-06-19",
    cidade: "Parintins",
    local: "UFAM",
    tipo: "universidade",
    responsavel: "Drica",
    status: "confirmada"
  },

  {
    data: "2026-06-20",
    cidade: "Manaquiri",
    local: "Comunidade Indígena",
    tipo: "indigena",
    responsavel: "Quezia",
    status: "confirmada"
  },

  {
    data: "2026-07-06",
    cidade: "Ceará",
    local: "Comunidade Indígena",
    tipo: "indigena",
    responsavel: "Angélica",
    status: "confirmada"
  },

  // ---- Ações a confirmar (sem data definida ainda) ----

  {
    data: "",
    cidade: "Centro POP",
    local: "",
    tipo: "centropop",
    responsavel: "Luana",
    status: "aconfirmar"
  },

  {
    data: "",
    cidade: "São Gabriel da Cachoeira",
    local: "",
    tipo: "indigena",
    responsavel: "Alice",
    status: "aconfirmar"
  },

  {
    data: "",
    cidade: "Brasília",
    local: "",
    tipo: "outro",
    responsavel: "Isadora",
    status: "aconfirmar"
  }

];
