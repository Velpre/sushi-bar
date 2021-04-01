const MenyModule = (function(){
  const lunchArray = [
    {navn:"VÅRRULLER", beskrivelse:"Friterte vårruller laget med grønnsaker", alergi:"H, E, SO", pris:"160"},
    {navn:"TEMPURASALAT", beskrivelse:"Fritert scampi med spicy majones, teriyaki, agurk og avokado", alergi:"SK, H, SO, SE, E", pris:"180"},
    {navn:"KATSU SANDO", beskrivelse:"Fritert indrefilé av okse, japansk majones, tonkatsu saus, gressløk og revet eggeplomme servert i grillet brød", alergi:"SO, H, SE", pris:"80"},
    {navn:"TONKATSU", beskrivelse:"Fritert indrefilé av okse, kimchi med stekt sopp, tonkatsusaus, gressløk, revet eggeplomme", alergi:"H, E, BL, SO", pris:"175"},
    {navn:"BLOMKÅL TEMPURASALAT", beskrivelse:"Fritert blomkål med spicy majones, teriyaki, agurk og avokado", alergi:"SO, H, SE", pris:"140"},
    {navn:"EDAMAME & PADRON", beskrivelse:"Dampede edamamebønner og grillede Pimientos de Padrón", alergi:"H, SE", pris:"120"}
  ];


  const getLunch = () =>  lunchArray;

  const dinnerArray = [
    {navn:"NIGIRI HOVEDRETT", beskrivelse:"Kokkens valg av 13 nigiri", alergi:"F, SK, BL", pris:"250"},
    {navn:"NIGIRI & MAKI", beskrivelse:"Kokkens valg av 6 nigiri og 6 Tempura Maki", alergi:"F, SK, BL, H, SO, SE, E", pris:"230"},
    {navn:"NIGIRI & MAKI VEGETAR", beskrivelse:"Kokkens valg av 6 vegetar nigiri og 6 vegetar maki ", alergi:"SO, H, SE", pris:"230"}

  ];

  const getDinner= ()=>  dinnerArray;

  const drinkArray=[

    {navn:"Yuzu Tonic", beskrivelse:"Arctic gin og yuzu tonic", pris:"175"},
    {navn:"Jinzu Tonic", beskrivelse:"Jinzu gin, Franklin tonic og eple", pris:"165"},
    {navn:"Takashi Tonic", beskrivelse:"Roku gin, Franklin tonic, sitrongress og sencha pepper", pris:"165"},
    {navn:"Takashi Pink", beskrivelse:"Harahorn pink gin, Franklin pink grape soda og rabarbra", pris:"165"}

  ];

  const getDrink= ()=>  drinkArray;


  const desertArray=[
    {navn:"FRITERT BAO MED SNICKERS ISKREM", pris:"129"},
    {navn:"TAKASHI ICE CREAM", pris:"129"},
    {navn:"ØSGODT-  FISKER OG KROKODILLER", pris:"89"}
  ];

  const getDesert= ()=>  desertArray;

  return{getLunch,getDrink,getDinner, getDesert};

}());

export default MenyModule;
