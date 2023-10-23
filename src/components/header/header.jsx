import React from "react";


const Header = ({jeu, regles, switchToJeu, switchToRegles}) => {
    return (
        <div className="text-white bg-[#20242c] justify-between flex">
            <div 
            className={`m-4 ml-5 py-3 px-5 rounded-md cursor-pointer hover:bg-green-700
            ${jeu ? 'bg-green-700' : 'bg-gray-900'}`}
            onClick={switchToJeu}
            >
                Jeu
            </div>

            <div className="m-4 py-3 font-serif font-bold">
                Bazar Bizarre - Entraînement
            </div>

            <div 
            className={`m-4 mr-5 py-3 px-5 rounded-md cursor-pointer hover:bg-green-700 
            ${regles ? 'bg-green-700' : 'bg-gray-900'}`}
            onClick={switchToRegles}
            >
                Règles
            </div>


        </div>
    );
};

export default Header;