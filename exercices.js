const nom_sorcier = "Esiah";
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const nom_boutique = "YoupiShop";
let potion_de_soin = 3;
let prix_potion_de_soin = 5;
let statut_boutique_ouverte = true;

if (statut_boutique_ouverte === true)
  console.log("Bienvenue dans la boutique", nom_boutique, "Aventurier!`🎉`");
else
  console.log(
    "La boutique",
    nom_boutique,
    "est fermée, revenez plus tard Aventurier ! `😴`"
  );

console.log(
  "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir? `🤔`\n1. Le nom de la boutique\n2. Le nom du sorcier\n3. Le prix d'une potion de soin\n4. La quantité d'une potion de soin"
);
let choix = parseInt(prompt("Choix (1,2,3,4): "));
switch (choix) {
  case 1:
    console.log("Nom de la boutique: ", nom_boutique);
    break;
  case 2:
    console.log("Nom du sorcier: ", nom_sorcier);
    break;
  case 3:
    console.log("Prix de la potion de soin: ", prix_potion_de_soin);
    break;
  case 4:
    console.log("Quantité de potion de soin: ", potion_de_soin);
    break;
  default:
    console.log(
      `Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`
    );
    break;
}
