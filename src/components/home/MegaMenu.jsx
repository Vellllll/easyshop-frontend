import React, { useEffect } from "react";

function MegaMenu(props) {
  //   useEffect(function () {
  //     var accordions = document.querySelectorAll(".accordion");
  //     var accordionNumber = accordions.length;

  //     for (let i = 0; i < accordionNumber; i++) {
  //       accordions[i].addEventListener("click", function () {
  //         this.classList.toggle("active");
  //         var panel = this.nextElementSibling;
  //         if (panel.style.maxHeight) {
  //           panel.style.maxHeight = null;
  //         } else {
  //           panel.style.maxHeight = panel.scrollHeight + "px";
  //         }
  //       });
  //     }
  //   });

  const categoryList = props.data;

  const menuItemClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  const categoryView = categoryList.map((categoryList, index) => {
    return (
      <div key={index.toString()}>
        <button onClick={menuItemClick} className="accordion">
          {categoryList.category_name} &nbsp;
          <img
            className="accordionMenuIcon"
            src={categoryList.category_image}
            alt=""
          />
        </button>
        <div className="panel">
          <ul>
            {categoryList.subcategory_name.map((subList, index) => {
              return (
                <li>
                  <a href="" className="accordionItem">
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
    <div className="accordionMenuDiv">
      <div className="accordionmenuDivInside mt-3">{categoryView}</div>
    </div>
  );
}

export default MegaMenu;
