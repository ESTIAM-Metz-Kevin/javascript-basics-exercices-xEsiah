const nom_sorcier = "Esiah";
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const nom_boutique = "YoupiShop";
let stock_potion_de_soin = 50;
let prix_potion_de_soin = 5;
let statut_boutique_ouverte = true;

// if (statut_boutique_ouverte === true)
//   console.log("Bienvenue dans la boutique", nom_boutique, "Aventurier!`🎉`");
// else
//   console.log(
//     "La boutique",
//     nom_boutique,
//     "est fermée, revenez plus tard Aventurier ! `😴`"
//   );

// console.log(
//   "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir? `🤔`\n1. Le nom de la boutique\n2. Le nom du sorcier\n3. Le prix d'une potion de soin\n4. La quantité d'une potion de soin"
// );
// let choix = parseInt(prompt("Choix (1,2,3,4): "));
// switch (choix) {
//   case 1:
//     console.log("Nom de la boutique: ", nom_boutique);
//     break;
//   case 2:
//     console.log("Nom du sorcier: ", nom_sorcier);
//     break;
//   case 3:
//     console.log("Prix de la potion de soin: ", prix_potion_de_soin);
//     break;
//   case 4:
//     console.log("Quantité de potion de soin: ", stock_potion_de_soin);
//     break;
//   default:
//     console.log(
//       "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
//     );
//     break;
// }

// let nombre_potion_demandees = parseInt(
//   prompt("De combien de potion voulez-vous connaître le prix: ")
// );

// let total_commande = 0;

// function calcul_prix_potion_de_soin(cout, nombre) {
//   return (cout *= nombre);
// }

// total_commande = calcul_prix_potion_de_soin(
//   prix_potion_de_soin,
//   nombre_potion_demandees
// );

// console.log(
//   "Prix de",
//   nombre_potion_demandees,
//   "potion(s) de soins :",
//   total_commande,
//   "🪙 mon cher Aventurier. 💸"
// );

// let bourse_aventurier = 100;
// let choix_achat = prompt(
//   "Si vous voulez effectuer la transaction veuillez entrer O, N pour la refuser"
// );

// function transaction(cout, argent_disponible, stock_potion) {
//   if (choix_achat === "O") {
//     if (argent_disponible >= cout && stock_potion >= nombre_potion_demandees) {
//       stock_potion -= nombre_potion_demandees;
//       argent_disponible -= cout;
//       console.log(
//         "Fond(s) restant(s):",
//         argent_disponible,
//         "Stock restant:",
//         stock_potion
//       );
//     } else console.log("Stock et/ou fonds insuffisants");
//   } else console.log("Transaction annulée");
// }

// console.log(
//   transaction(total_commande, bourse_aventurier, stock_potion_de_soin)
// );

Array.types_potion_en_vente = [
  "Potion de soin",
  "Potion de mana",
  "Potion de force",
];
// console.log("Types de potion en vente: ", Array.types_potion_en_vente);

// console.log(Array.types_potion_en_vente[0]);

// console.log(
//   Array.types_potion_en_vente[Array.types_potion_en_vente.length - 1]
// );

// for (let i = 0; i < Array.types_potion_en_vente.length; i++) {
//   console.log(
//     "Nous avons au moins un exemplaire de",
//     Array.types_potion_en_vente[i],
//     "disponible !"
//   );
// }

Array.types_potion_en_vente.push("Potion de poison");
console.log("Types de potion en vente: ", Array.types_potion_en_vente);

Array.types_potion_en_vente.pop("Potion de poison");
console.log("Types de potion en vente: ", Array.types_potion_en_vente);

stock_potion_de_soin = {
  nom: "Potion de soin",
  prix: 10,
  stock: 50,
};
console.log(stock_potion_de_soin);
