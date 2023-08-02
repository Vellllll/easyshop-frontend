import { useEffect } from "react";

function MegaMenuMobile(){

    useEffect(function(){
        var accordion = document.querySelectorAll(".accordionMobile");
        var accordionNumber = accordion.length;

        for(let i = 0; i < accordionNumber; i++){
            accordion[i].addEventListener("click", function(){
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
      })

    return (
        <div className="accordionMenuDivMobile">
            <div className="accordionmenuDivInsideMobile">
                <button className="accordionMobile">Men's Clothing &nbsp;
                    <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/10076/10076064.png" alt="" />
                </button>
                <div className="panelMobile">
                    <ul>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's T-Shirt</a>
                        </li>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's Shirt</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionmenuDivInsideMobile">
                <button className="accordionMobile">Men's Clothing &nbsp;
                    <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/10076/10076064.png" alt="" />
                </button>
                <div className="panelMobile">
                    <ul>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's T-Shirt</a>
                        </li>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's Shirt</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionmenuDivInsideMobile">
                <button className="accordionMobile">Men's Clothing &nbsp;
                    <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/10076/10076064.png" alt="" />
                </button>
                <div className="panelMobile">
                    <ul>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's T-Shirt</a>
                        </li>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's Shirt</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionmenuDivInsideMobile">
                <button className="accordionMobile">Men's Clothing &nbsp;
                    <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/10076/10076064.png" alt="" />
                </button>
                <div className="panelMobile">
                    <ul>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's T-Shirt</a>
                        </li>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's Shirt</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionmenuDivInsideMobile">
                <button className="accordionMobile">Men's Clothing &nbsp;
                    <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/10076/10076064.png" alt="" />
                </button>
                <div className="panelMobile">
                    <ul>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's T-Shirt</a>
                        </li>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's Shirt</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionmenuDivInsideMobile">
                <button className="accordionMobile">Men's Clothing &nbsp;
                    <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/10076/10076064.png" alt="" />
                </button>
                <div className="panelMobile">
                    <ul>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's T-Shirt</a>
                        </li>
                        <li>
                            <a href="" className="accordionItemMobile"> Man's Shirt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MegaMenuMobile;
