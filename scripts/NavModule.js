const NavModule = (function(){
  const nav = [
    {link:"food.html", text:"Meny"},
    {link:"search.html", text:"Søk"},
    {link:"locations.html", text:"Lokasjoner"},
  ];

  const getNav = () => nav;
  return{getNav};
} ());


export default NavModule;
