const SushiModule = (function(){
  const menyArray=[
    {type:"Lunch", image:"lunch.jpg", href:"#section-lunch"},
    {type:"Dinner", image:"dinner.jpg", href:"#section-dinner"},
    {type:"Wine & Drinks",image:"drinks.jpg", href:"#section-drink"}
  ];

  const getMeny = () => menyArray;

  return{getMeny};

}());

export default SushiModule;
