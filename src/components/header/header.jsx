import React from "react";


const Header = ({jeu, regles}) => {
    return (
        <div className="text-white bg-[#20242c] justify-between flex">
            <div className={`m-4 ml-5 py-3 px-5 bg-gray-900 hover:bg-black ${jeu ? 'bg-green' : ''} rounded-md cursor-pointer`}>
                Règles
            </div>

            <div className="m-4 py-3 font-serif font-bold">
                Bazar Bizarre - Entraînement
            </div>

            <div className="m-4 mr-5 py-3 px-5 bg-gray-900 hover:bg-black rounded-md cursor-pointer">
                Bouton
            </div>


        </div>
    );
};

export default Header;