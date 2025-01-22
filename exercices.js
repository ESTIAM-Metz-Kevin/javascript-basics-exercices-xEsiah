// const nom_sorcier = "Esiah";
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

// const nom_boutique = "YoupiShop";
// let stock_potion_de_soin = 50;
// let prix_potion_de_soin = 5;
// let statut_boutique_ouverte = true;

// // if (statut_boutique_ouverte === true)
// //   console.log("Bienvenue dans la boutique", nom_boutique, "Aventurier!`🎉`");
// // else
// //   console.log(
// //     "La boutique",
// //     nom_boutique,
// //     "est fermée, revenez plus tard Aventurier ! `😴`"
// //   );

// // console.log(
// //   "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir? `🤔`\n1. Le nom de la boutique\n2. Le nom du sorcier\n3. Le prix d'une potion de soin\n4. La quantité d'une potion de soin"
// // );
// // let choix = parseInt(prompt("Choix (1,2,3,4): "));
// // switch (choix) {
// //   case 1:
// //     console.log("Nom de la boutique: ", nom_boutique);
// //     break;
// //   case 2:
// //     console.log("Nom du sorcier: ", nom_sorcier);
// //     break;
// //   case 3:
// //     console.log("Prix de la potion de soin: ", prix_potion_de_soin);
// //     break;
// //   case 4:
// //     console.log("Quantité de potion de soin: ", stock_potion_de_soin);
// //     break;
// //   default:
// //     console.log(
// //       "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
// //     );
// //     break;
// // }

// // let nombre_potion_demandees = parseInt(
// //   prompt("De combien de potion voulez-vous connaître le prix: ")
// // );

// // let total_commande = 0;

// // function calcul_prix_potion_de_soin(cout, nombre) {
// //   return (cout *= nombre);
// // }

// // total_commande = calcul_prix_potion_de_soin(
// //   prix_potion_de_soin,
// //   nombre_potion_demandees
// // );

// // console.log(
// //   "Prix de",
// //   nombre_potion_demandees,
// //   "potion(s) de soins :",
// //   total_commande,
// //   "🪙 mon cher Aventurier. 💸"
// // );

// // let bourse_aventurier = 100;
// // let choix_achat = prompt(
// //   "Si vous voulez effectuer la transaction veuillez entrer O, N pour la refuser"
// // );

// // function transaction(cout, argent_disponible, stock_potion) {
// //   if (choix_achat === "O") {
// //     if (argent_disponible >= cout && stock_potion >= nombre_potion_demandees) {
// //       stock_potion -= nombre_potion_demandees;
// //       argent_disponible -= cout;
// //       console.log(
// //         "Fond(s) restant(s):",
// //         argent_disponible,
// //         "Stock restant:",
// //         stock_potion
// //       );
// //     } else console.log("Stock et/ou fonds insuffisants");
// //   } else console.log("Transaction annulée");
// // }

// // console.log(
// //   transaction(total_commande, bourse_aventurier, stock_potion_de_soin)
// // );

// Array.types_potion_en_vente = [
//   "Potion de soin",
//   "Potion de mana",
//   "Potion de force",
// ];
// // console.log("Types de potion en vente: ", Array.types_potion_en_vente);

// // console.log(Array.types_potion_en_vente[0]);

// // console.log(
// //   Array.types_potion_en_vente[Array.types_potion_en_vente.length - 1]
// // );

// // for (let i = 0; i < Array.types_potion_en_vente.length; i++) {
// //   console.log(
// //     "Nous avons au moins un exemplaire de",
// //     Array.types_potion_en_vente[i],
// //     "disponible !"
// //   );
// // }

// Array.types_potion_en_vente.push("Potion de poison");
// console.log("Types de potion en vente: ", Array.types_potion_en_vente);

// Array.types_potion_en_vente.pop("Potion de poison");
// console.log("Types de potion en vente: ", Array.types_potion_en_vente);

// stock_potion_de_soin = {
//   nom: "Potion de soin",
//   prix: 10,
//   stock: 50,
// };
// console.log(stock_potion_de_soin);

// console.log(stock_potion_de_soin.nom);
// console.log(stock_potion_de_soin["prix"]);

// /* types_potion_en_vente reste un tableau mais désormais il contient des objets! */
// Array.inventaire = [
//   { Nom: "Potion de soin", Prix: 10, Stock: 50 },
//   { Nom: "Potion de force", Prix: 15, Stock: 25 },
//   { Nom: "Potion de mana", Prix: 20, Stock: 10 },
// ];

// for (let i = 0; i < Array.inventaire.length; i++) {
//   console.log(
//     "Nom: ",
//     Array.inventaire[i].Nom,
//     "\nPrix: ",
//     Array.inventaire[i].Prix,
//     "\nStock: ",
//     Array.inventaire[i].Stock
//   );
// }

// console.log("\n\n");

// for (let potion of Array.inventaire) {
//   for (let [key, value] of Object.entries(potion)) {
//     console.log(`${key}: ${value}`);
//   }
//   console.log("");
// }

/* PRE REQUIS */
let nom = "Esiah";
let ArgentAventurier = 100;
let ArgentCommercant = 0;
let InventaireCommercant = [
  { Nom: "Potion de soin", Prix: 40, Stock: 1 },
  { Nom: "Potion d'endurance", Prix: 20, Stock: 1 },
  { Nom: "Potion de mana", Prix: 20, Stock: 2 },
];
let InventaireAventurier = [];

function Marchand(
  bourse_aventurier,
  bourse_commercant,
  inventaire_commercant,
  inventaire_aventurier
) {
  do {
    let choisir_une_action = parseInt(
      prompt(
        "Bienvenue dans ma boutique aventurier! Que puis-je faire pour vous?\n\n1. Acheter une potion\n2. Vendre une potion\n3. Quitter"
      )
    );

    switch (choisir_une_action) {
      case 1:
        let resultatsAchat = acheter_une_potion(
          bourse_aventurier,
          inventaire_commercant,
          inventaire_aventurier,
          bourse_commercant
        );
        bourse_aventurier = resultatsAchat.fonds_acheteur_dispo;
        inventaire_commercant = resultatsAchat.stock_du_marchand;
        inventaire_aventurier = resultatsAchat.inventaire_de_lacheteur;
        bourse_commercant = resultatsAchat.fonds_commercant;
        break;
      case 2:
        let resultatsVente = vendre_une_potion(
          bourse_aventurier,
          inventaire_commercant,
          inventaire_aventurier,
          bourse_commercant
        );
        bourse_aventurier = resultatsVente.fonds_acheteur_dispo;
        inventaire_commercant = resultatsVente.stock_du_marchand;
        inventaire_aventurier = resultatsVente.inventaire_de_lacheteur;
        bourse_commercant = resultatsVente.fonds_commercant;
        break;
      case 3:
        console.log("😈😈😈😈\n");
      default:
        console.log("Choix invalide, essayez de nouveau.");
        break;
    }
  } while (bourse_aventurier !== 0);
}

function acheter_une_potion(
  fonds_acheteur_dispo,
  stock_du_marchand,
  inventaire_de_lacheteur,
  fonds_commercant
) {
  for (let i = 0; i < stock_du_marchand.length; i++) {
    if (stock_du_marchand[i].Stock > 0) {
      let exemplaire = prompt(
        "Voulez-vous acheter une " + stock_du_marchand[i].Nom + " ? (Oui/Non)"
      );

      switch (exemplaire) {
        case "Oui":
          let quantite = parseInt(
            prompt("Combien de " + stock_du_marchand[i].Nom + " voulez-vous?")
          );

          if (quantite > stock_du_marchand[i].Stock) {
            console.log(
              "Désolé, il ne me reste que " +
                stock_du_marchand[i].Stock +
                " exemplaire(s) de " +
                stock_du_marchand[i].Nom
            );
          } else if (
            fonds_acheteur_dispo <
            quantite * stock_du_marchand[i].Prix
          ) {
            console.log("Désolé, vous n'avez pas assez de fonds.");
          } else {
            fonds_acheteur_dispo -= quantite * stock_du_marchand[i].Prix;
            stock_du_marchand[i].Stock -= quantite;
            inventaire_de_lacheteur.push({
              Nom: stock_du_marchand[i].Nom,
              Quantite: quantite,
            });
            fonds_commercant += quantite * stock_du_marchand[i].Prix;
            console.log(
              "Très bien, voici " +
                quantite +
                " exemplaire(s) de " +
                stock_du_marchand[i].Nom +
                " pour vous !"
            );
          }
          break;

        case "Non":
          console.log("Pas de soucis !");
          break;

        default:
          console.log("Je n'ai pas bien compris votre réponse ^^'");
          break;
      }
    }
  }

  return {
    fonds_acheteur_dispo,
    stock_du_marchand,
    inventaire_de_lacheteur,
    fonds_commercant,
  };
}

function vendre_une_potion(
  fonds_acheteur_dispo,
  stock_du_marchand,
  inventaire_de_lacheteur,
  fonds_commercant
) {
  if (inventaire_de_lacheteur.length === 0) {
    console.log("Vous n'avez pas de potions à vendre.");
    return {
      fonds_acheteur_dispo,
      stock_du_marchand,
      inventaire_de_lacheteur,
      fonds_commercant,
    };
  }

  let chiffre_aleatoire = Math.floor(Math.random() * 5) + 1;
  console.log(chiffre_aleatoire);

  let deviner_nombre = parseInt(prompt("Devinez un chiffre (de 1 à 5)"));

  if (deviner_nombre === chiffre_aleatoire) {
    let potionARevendre = prompt(
      "Quelle potion voulez-vous vendre ? (Entrez le nom exact)"
    );
    let potionTrouvee = inventaire_de_lacheteur.find(
      (potion) => potion.Nom === potionARevendre
    );

    if (potionTrouvee) {
      let quantite = parseInt(prompt("Combien voulez-vous vendre ?"));

      if (quantite <= potionTrouvee.Quantite) {
        fonds_acheteur_dispo += quantite * 20; // Prix fixe pour la vente
        fonds_commercant -= quantite * 20;
        potionTrouvee.Quantite -= quantite;
        if (potionTrouvee.Quantite === 0) {
          inventaire_de_lacheteur = inventaire_de_lacheteur.filter(
            (potion) => potion !== potionTrouvee
          );
        }
        stock_du_marchand.push({
          Nom: potionARevendre,
          Prix: 20,
          Stock: quantite,
        });
        console.log(
          "Vous avez vendu " + quantite + " potion(s) de " + potionARevendre
        );
      } else {
        console.log("Vous n'avez pas cette quantité.");
      }
    } else {
      console.log("Potion non trouvée dans votre inventaire.");
    }
  } else {
    console.log("Retentez votre chance!");
  }

  return {
    fonds_acheteur_dispo,
    stock_du_marchand,
    inventaire_de_lacheteur,
    fonds_commercant,
  };
}

Marchand(
  ArgentAventurier,
  ArgentCommercant,
  InventaireCommercant,
  InventaireAventurier
);
