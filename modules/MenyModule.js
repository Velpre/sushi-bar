const MenyModule = (function(){
  const lunchArray = [
    {navn:"TEMPURASALAT", beskrivelse:"Fritert scampi med spicy majones, teriyaki, agurk og avokado", alergi:"SK, H, SO, SE, E", pris:"kr 180"},
    {navn:"TONKATSU", beskrivelse:"Fritert indrefilé av okse, kimchi med stekt sopp, tonkatsusaus, gressløk, revet eggeplomme", alergi:"H, E, BL, SO", pris:"kr 175"},
    {navn:"KATSU SANDO", beskrivelse:"Fritert indrefilé av okse, japansk majones, tonkatsu saus, gressløk og revet eggeplomme servert i grillet brød", alergi:"SO, H, SE", pris:"kr 80"},
    {navn:"BLOMKÅL TEMPURASALAT", beskrivelse:"Fritert blomkål med spicy majones, teriyaki, agurk og avokado", alergi:"SO, H, SE", pris:"kr 140"},
    {navn:"VÅRRULLER", beskrivelse:"Friterte vårruller laget med grønnsaker", alergi:"H, E, SO", pris:"kr 160"},
    {navn:"EDAMAME & PADRON", beskrivelse:"Dampede edamamebønner og grillede Pimientos de Padrón", alergi:"H, SE", pris:"kr 120"}
  ];

  const getLunch = () =>  lunchArray;

  const dinnerArray = [
    {navn:"NIGIRI & MAKI", beskrivelse:"Kokkens valg av 6 nigiri og 6 Tempura Maki", alergi:"F, SK, BL, H, SO, SE, E", pris:"kr 230"},
    {navn:"NIGIRI HOVEDRETT", beskrivelse:"Kokkens valg av 13 nigiri", alergi:"F, SK, BL", pris:"kr 250"},
    {navn:"NIGIRI & MAKI VEGETAR", beskrivelse:"Kokkens valg av 6 vegetar nigiri og 6 vegetar maki ", alergi:"SO, H, SE", pris:"kr 230"}
  ];

  const getDinner= ()=>  dinnerArray;

  const drinkArray=[
    {navn:"Takashi Tonic", beskrivelse:"Roku gin, Franklin tonic, sitrongress og sencha pepper", pris:"kr 165"},
    {navn:"Takashi Pink", beskrivelse:"Harahorn pink gin, Franklin pink grape soda og rabarbra", pris:"kr 165"},
    {navn:"Jinzu Tonic", beskrivelse:"Jinzu gin, Franklin tonic og eple", pris:"kr 165"},
    {navn:"Yuzu Tonic", beskrivelse:"Arctic gin og yuzu tonic", pris:"kr 175"},
  ];

  const getDrink= ()=>  drinkArray;


  const desertArray=[
    {navn:"FRITERT BAO MED SNICKERS ISKREM", pris:"kr 129"},
    {navn:"TAKASHI ICE CREAM", pris:"kr 129"},
    {navn:"ØSGODT-  FISKER OG KROKODILLER", pris:" kr 89"}
  ];

  const getDesert= ()=>  desertArray;

  return{getLunch,getDrink,getDinner, getDesert};

}());

export default MenyModule;
