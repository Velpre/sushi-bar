const SushiModule = (function(){
  const menyArray=[
    {type:"Lunch", image:"pic3.jpg"},
    {type:"Dinner", image:"dinner.jpg"},
    {type:"Wine & Drinks",image:"drinks.jpg"}
  ];

  const getMeny = () => menyArray;

  return{getMeny};

}());

export default SushiModule;
