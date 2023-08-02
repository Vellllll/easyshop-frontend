import axios from "axios";
import { useEffect, useState } from "react";

function MegaMenuAll() {
  const [menu, setMenu] = useState({
    menuData: [],
  });

  // useEffect(function(){
  //     var accordion = document.querySelectorAll(".accordionAll");
  //     var accordionNumber = accordion.length;

  //     for(let i = 0; i < accordionNumber; i++){
  //         accordion[i].addEventListener("click", function(){
  //             this.classList.toggle("active");
  //             var panel = this.nextElementSibling;
  //             if(panel.style.maxHeight){
  //                 panel.style.maxHeight = null;
  //             } else {
  //                 panel.style.maxHeight = panel.scrollHeight + "px";
  //             }
  //         });
  //     }
  //   })

  axios.get("http://127.0.0.1:8000/api/get-category").then((response) => {
    if (response.status == 200) {
      setMenu(() => ({
        menuData: response.data,
      }));
    }
  });

  const menues = menu.menuData;

  const menuItemClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  const menuView = menues.map((menuList, index) => {
    return (
      <div key={index}>
        <button onClick={menuItemClick} className="accordionAll">
          {menuList.category_name} &nbsp;
          <img
            className="accordionMenuIconAll"
            src="https://cdn-icons-png.flaticon.com/512/10076/10076064.png"
            alt=""
          />
        </button>
        <div className="panelAll">
          <ul>
            {menuList.subcategory_name.map((subList, index) => {
              return (
                <li>
                  <a href="" className="accordionItemAll">
                    {" "}
                    {subList.subcategory_name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className="accordionMenuDivAll">
      <div className="accordionmenuDivInsideAll">{menuView}</div>
    </div>
  );
}

export default MegaMenuAll;
