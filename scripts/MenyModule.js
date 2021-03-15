const MenyModule = (function(){
  const menyArray=[
    {type:"Lunch", image:"lunch.jpg"},
    {type:"Dinner", image:"dinner.jpg"},
    {type:"Wine & Drinks",image:"drinks.jpg"}
  ];

  const getMeny = () => menyArray;

  return{getMeny};

}());

export default MenyModule;
