//The only keys can be Titre or Contenu

export const data: Record<
  string,
  Record<
    string,
    Record<
      string,
      | {
          Titre: string;
          Contenu: string;
        }
      | string
    >
  >
> = {
  messe: {
    "Accueil et ouverture de la célébration": {
      "Entrée et mise en place des invités":
        "Entrée et mise en place des invités",
      "Entrée des futurs époux et leur cortège":
        "Entrée des futurs époux et leur cortège",
      "Parole d’accueil du prêtre": "Parole d’accueil du prêtre",
      "Chant d’entrée": {
        Titre: "La bonté de Dieu / Ny Hatsaragnanao",
        Contenu:
          "Version française : La bonté de Dieu\nJe t'aime Seigneur, ton amour ne faillit jamais\nTous les jours, tu me tiens dans tes mains\nDès que je me réveille jusqu'à mon coucher\nJ’ ai vécu dans la bonté de Dieu\nRefrain :\nToute ma vie, tu as été bon\nToute ma vie, tu as été fidèle\nAvec le souffle qui est en moi\nJe chanterai la bonté de Dieu\nJ'aime ta voix, tu me conduis à travers le feu\nDans les nuits noires, tu restes auprès de moi\nJe te connais comme un père et comme un ami\nJe chanterai la bonté de Dieu\nRefrain :\nToute ma vie, tu as été bon\nToute ma vie, tu as été fidèle\nAvec le souffle qui est en moi\nJe chanterai la bonté de Dieu\nVersion malgache : Ny Hatsaragnanao\nTiako Anao tompo oh\nTsy mba nagnary zah ny famindraponao\nTagnana nao nihazogna fiaignako\nMandraigna vao mifoha zaho\nAlohany hoandriako\nHihira zaho , hihira ny hatsaragnanao\nRefrain :\nMatoky Anao zaho tamin’ny fiainako\nNaboakanao zaho fa tsara loatra Anao\nIsaky ny miaigna zaho\nJesosy oh\nHiraiko ny hatsaragnanao\nTiako maharegny feonao\nMitondra zaho agnaty ny ady\nNa agnaty aligny eh\nTsy miala marikitry zaho anao\nAiko anao io fa Babako eh\nNdrekindreky Anao Namako eh\nHihira zaho , hihira ny hatsaragnanao\nRefrain :\nMatoky Anao zaho tamin’ny fiainako\nNaboakanao zaho fa tsara loatra Anao\nIsaky ny miaigna zaho\nHihira zaho , hihira ny hatsaragnanao",
      },
      Gloria: {
        Titre: "Gloria",
        Contenu:
          "Gloria, gloria\nIn excelsis Deo !\nGloria, gloria\nIn excelsis Deo !\nEt paix sur la terre aux hommes qu’il aime.\nNous te louons, nous te bénissons,\nNous t’adorons,\nNous te glorifions, nous te rendons grâce\nPour ton immense gloire,\nSeigneur Dieu, Roi du Ciel,\nDieu le Père tout-puissant.\nSeigneur, Fils unique, Jésus Christ,\nSeigneur Dieu, Agneau de Dieu\nLe Fils du Père,\nToi qui enlèves les péchés du monde,\nPrends pitié de nous ;\nToi qui enlèves les péchés du monde,\nReçois notre prière,\nToi qui es assis à la droite du Père,\nPrends pitié de nous.\nCar toi seul es Saint,\nToi seul es Seigneur,\nToi seul es le Très-Haut, Jésus Christ,\nAvec le Saint Esprit,\nDans la gloire de Dieu le Père.\nAmen.",
      },
      "Prière du prêtre": "Prière du prètre",
    },
    "Liturgie de la Parole": {
      "1ère lecture": {
        Titre: "1ère Lettre aux Corinthiens 12,31-13,8a",
        Contenu:
          "Frères, recherchez donc avec ardeur les dons les plus grands. Et maintenant, je vais vous indiquer le chemin par excellence. J’aurais beau parler toutes les langues des hommes et des anges, si je n’ai pas la charité, s’il me manque l’amour, je ne suis qu’un cuivre qui résonne, une cymbale retentissante.\nJ’aurais beau être prophète, avoir toute la science des mystères et toute la connaissance de Dieu, j’aurais beau avoir toute la foi jusqu’à transporter les montagnes, s’il me manque l’amour, je ne suis rien.\nJ’aurais beau distribuer toute ma fortune aux affamés, j’aurais beau me faire brûler vif, s’il me manque l’amour, cela ne me sert à rien.\nL’amour prend patience ; l’amour rend service ; l’amour ne jalouse pas ; il ne se vante pas, ne se gonfle pas d’orgueil ; il ne fait rien d’inconvenant ; il ne cherche pas son intérêt ; il ne s’emporte pas ; il n’entretient pas de rancune ; il ne se réjouit pas de ce qui est injuste, mais il trouve sa joie dans ce qui est vrai ; il supporte tout, il fait confiance en tout, il espère tout, il endure tout. L’amour ne passera jamais.",
      },
      Psaume: {
        Titre: "Psaume 144 (145),8-9. 10. 15. 17-18",
        Contenu:
          "Le Seigneur est tendresse et pitié,\nlent à la colère et plein d'amour ;\nla bonté du Seigneur est pour tous,\nsa tendresse, pour toutes ses œuvres.\nRefrain : Béni soit le Seigneur : son amour a fait pour nous des merveilles.\nQue tes œuvres, Seigneur, te rendent grâce\net que tes fidèles te bénissent !\nRefrain\nLes yeux sur toi, tous, ils espèrent :\ntu leur donnes la nourriture au temps voulu ;\nRefrain\nLe Seigneur est juste en toutes ses voies,\nfidèle en tout ce qu'il fait.\nIl est proche de ceux qui l'invoquent,\nde tous ceux qui l'invoquent en vérité.\nRefrain",
      },
      Alléluia: {
        Titre: "Alléluia",
        Contenu: "Alléluia, Alléluia,\nAlléluia, Alléluia !",
      },
      Évangile: {
        Titre: "Évangile selon saint Luc 6,31-38",
        Contenu:
          "En ce temps là, Jésus déclarait à ses disciples : « Ce que vous voulez que les hommes fassent pour vous, faites-le aussi pour eux. Si vous aimez ceux qui vous aiment, quelle reconnaissance méritez-vous ? Même les pécheurs aiment ceux qui les aiment. Si vous faites du bien à ceux qui vous en font autant, quelle reconnaissance méritez-vous ? Même les pécheurs en font autant. Si vous prêtez à ceux dont vous espérez recevoir en retour, quelle reconnaissance méritez-vous ? Même les pécheurs prêtent aux pécheurs pour qu’on leur rende l'équivalent. Au contraire aimez vos ennemis, faites du bien et prêtez sans rien espérer en retour. Alors votre récompense sera grande, et vous serez fils du Très-Haut, car lui, il est bon pour les ingrats et les méchants.\nSoyez miséricordieux comme votre Père est miséricordieux. Ne jugez pas, et vous ne serez pas jugés ; ne condamnez pas, et vous ne serez pas condamnés. Pardonnez, et vous serez pardonnés. Donnez, et l’on vous donnera : c’est une mesure bien pleine, tassée, secouée, débordante, qui sera versée dans le pan de votre vêtement ; car la mesure dont vous vous servez pour les autres servira de mesure aussi pour vous.",
      },
      Homélie: "Homélie",
      "Morceau de musique au Violoncelle":
        "Morceau de musique au Violoncelle joué par Maïwenn",
    },
    "Liturgie du mariage": {
      "Profession de foi": "Profession de foi",
      "Appel des témoins": "Appel des témoins (Corentin, Julien, et Oliva)",
      "Dialogue initial": "Dialogue initial",
      "Échange des consentements": "Échange des consentements",
      "Réception du consentement": "Réception du consentement",
      "Bénédiction et remise des alliances":
        "Bénédiction et remise des alliances",
      "Chant de louange": {
        Titre: "La Bénédiction",
        Contenu:
          "Dieu te bénit et te garde\nIl rayonne sur toi\nIl t'accorde sa grâce\nTon Dieu se tourne vers toi\nTe donne la paix\nRefrain :\nAmen Amen Amen\n4x\nQue sa faveur reste sur toi\nPour plus de mille générations\nSur ta famille et tes enfants\nEt les enfants de leurs enfants\nQue sa présence t'environne\nLà avec toi à tes côtés\nQu'elle t'inonde et t'entoure\nIl est pour toi Il est pour toi\nDès le matin jusqu'au coucher\nÀ chaque pas veillant sur toi\nDans les larmes et dans la joie\nIl est pour toi il est pour toi\nRefrain :\nAmen Amen Amen\nQue sa faveur reste sur toi\nPour plus de mille générations\nSur ta famille et tes enfants\nEt les enfants de leurs enfants\nQue sa présence t'environne\nLà avec toi à tes côtés\nQu'elle t'inonde et t'entoure\nIl est pour toi Il est pour toi\nDès le matin jusqu'au coucher\nÀ chaque pas veillant sur toi\nDans les larmes et dans la joie\nIl est pour toi il est pour toi\nRefrain :\nAmen Amen Amen",
      },
      "Prière des époux": {
        Titre: "Prière des époux",
        Contenu:
          "Dieu, Père de toute alliance, nous te prions :\n- nous te rendons grâce pour notre rencontre, donnée gratuitement, et pour ce chemin d'amour parcouru sous ton regard de tendresse ;\n- nous te rendons grâce pour nos parents, nos familles, nos témoins, nos amis et tous ceux qui ont été sur notre route des signes de vie et des témoins de l'amour.\nSeigneur Jésus, nous te prions :\n- aujourd'hui nous offrons par toi ce qui nous a été donné et ce qui nous sera donné encore : nos vies, notre foyer [les enfants que nous espérons] ;\n- tu connais nos limites et nos faiblesses : qu'elles soient le lieu de ta grâce et de ton pardon.\nEsprit du Père et du Fils, Esprit d'amour, nous te prions :\n- rends-nous attentifs à ton action dans le monde, et donne-nous d'être un soutien l'un pour l'autre ;\n-renouvelle en nous le goût d'être fidèles au Christ Jésus, et de marcher à sa suite.\nQue la Vierge Marie, Mère de Dieu et notre Mère, femme bénie entre toutes les femmes, intercède pour nous auprès de son Fils bien-aimé, et que par lui notre prière soit pleinement exaucée.\nAmen.",
      },
      "Prière universelle": {
        Titre: "Prière universelle",
        Contenu:
          "Refrain : Seigneur, écoute nous, Seigneur, exauce-nous.\n1. Pour ces nouveaux époux et pour le bonheur de leur foyer, prions le Seigneur.\nRefrain/\n2. Pour leurs proches et leurs amis et pour tous ceux qui les ont aidés, prions le Seigneur.\nRefrain/\n3. Pour les jeunes qui se préparent au mariage, et pour tous ceux que le Seigneur appelle à une autre vocation, prions le Seigneur.\nRefrain/\n4. Pour toutes les familles dans le monde, et pour que s’affermisse la paix entre les nations, prions le Seigneur.\nRefrain/\n5. Pour les membres de nos familles qui ont quitté cette vie, et pour tous les défunts, prions le Seigneur.\nRefrain/\n6. Pour l’Église, Peuple saint de Dieu, et pour l’unité de tous les chrétiens, prions le Seigneur.\nRefrain/",
      },
    },
    "Liturgie Eucharistique": {
      Offertoire: "Offertoire",
      "Chant pour l’offertoire": {
        Titre: "Langues de feu",
        Contenu:
          "Et que ta gloire remplit ce lieu ;\nQue ton esprit se déverse comme un feu ;\nToute la maison se remplit de fumée ;\nDes langues de feu sur nous sont déposées.",
      },
      "Prière sur les offrandes": "Prière sur les offrandes",
      Préface: "Préface",
      Sanctus: {
        Titre: "Sanctus",
        Contenu:
          "Sanctus, Sanctus, Sanctus\nDominus Deus Sabaoth !\nSanctus, Sanctus, Sanctus\nDominus Deus Sabaoth !\nPleni sunt caeli et terra gloria tua.\nHosanna ! Hosanna !\nHosanna, in excelsis !\nHosanna ! Hosanna !\nHosanna, in excelsis !\nBenedictus qui venit in nomini Domini !\nHosanna ! Hosanna !\nHosanna, in excelsis !\nHosanna ! Hosanna !\nHosanna, in excelsis !",
      },
      Anamnèse: {
        Titre: "Anamnèse",
        Contenu:
          "Nous rappelons ta mort, Seigneur ressuscité,\nEt nous attendons que tu viennes !",
      },
      "Notre père": {
        Titre: "Notre père",
        Contenu:
          "Notre Père, qui es aux cieux,\nque ton nom soit sanctifié,\nque ton règne vienne,\nque ta volonté soit faite sur la terre comme au ciel.\nDonne-nous aujourd’hui notre pain de ce jour.\nPardonne-nous nos offenses,\ncomme nous pardonnons aussi à ceux qui nous ont offensés.\nEt ne nous laisse pas entrer en tentation\nmais délivre-nous du Mal.\nAmen",
      },
      "Bénédiction nuptiale": {
        Titre: "Bénédiction nuptiale",
        Contenu:
          "Seigneur notre Dieu,\nCréateur de l'univers et de tout ce qui vit,\nTu as fait l'homme et la femme à ta ressemblance ;\nEt pour qu'ils soient associés à ton œuvre d'amour,\nTu leur as donné un cœur capable d'aimer.\nTu as voulu qu'aujourd'hui, dans cette église\nThomas et Anissah unissent leur vie.\nTu veux maintenant qu'ils construisent leur foyer,\nQu'ils cherchent à s'aimer chaque jour davantage,\net suivent l'exemple du Christ, lui qui a aimé les hommes jusqu'à mourir sur une croix.\nBénis, protège et fortifie l'amour de ces nouveaux époux :\nQue leur amour soutienne leur fidélité ;\nQu'il les rende heureux et leur fasse découvrir dans le Christ\nla joie du don total à celui que l'on aime.\nQue leur amour, semblable à ton amour, Seigneur,\nDevienne une source de vie ;\nQu'il les garde attentifs aux appels de leurs frères,\net que leur foyer soit ouvert aux autres.\nEn s'appuyant sur leur amour et sur l'amour du Christ,\nQu'ils prennent une part active\nÀ la construction d'un monde plus juste et plus fraternel,\nEt soient ainsi fidèles à leur vocation humaine et de chrétienne.\nPar Jésus, le Christ, notre seigneur\nAmen.",
      },
      Agnus: {
        Titre: "Agnus",
        Contenu:
          "1. Agnus Dei,\nQui tollis peccata mundi,\nMiserere nobis.\n2. Agnus Dei,\nQui tollis peccata mundi,\nMiserere nobis.\n3. Agnus Dei,\nQui tollis peccata mundi,\nDona nobis pacem !",
      },
      "Distribution de la Communion": "Distribution de la Communion",
      "Chant de communion": {
        Titre: "Hatramin’ ny farany",
        Contenu:
          "Tiako Ianao e,\nTena mamiko e,\nTena tiako indrindra, Malalan'ny foko Ianao Jesosy o!\nTsy hatakaloko an'iza n'iza\nTsy ho soloiko n'inona n'inona e\nFa hatramin'ny farany, ny antsika sy Ianao\nHatramin'ny farany\nAfoiko izay mamin'ny foko ety\ndia omeko Anao\nNa handao ahy aza izao tontolo izao\nIzaho tsy hiala Aminao\nNa faly aho, nalahelo aho teo foana Ianao\nNarary aho, nania aho tsy nilaozanao\nKa inty aho mivoady fa Anao, Anao hatramin'ny farany\nRefrain :\nTiako Ianao e,\nTena mamiko e,\nTena tiako indrindra, malalan'ny foko Ianao Jesosy o!\nTsy hatakaloko an'iza n'iza\nTsy ho soloiko n'inona n'inona e\nFa hatramin'ny farany, ny antsika sy Ianao\nHatramin'ny farany\nAfoiko izay mamin'ny foko ety\ndia omeko Anao\nNa handao ahy aza izao tontolo izao\nIzaho tsy hiala Aminao\nNa faly aho, nalahelo aho teo foana Ianao\nNarary aho, nania aho tsy nolaozanao\nKa inty aho mivoady fa Anao, Anao hatramin'ny farany\nRefrain :\nTiako Ianao e,\nTena mamiko e,\nTena tiako indrindra, malalan'ny foko Ianao Jesosy o!\nTsy hatakaloko an'iza n'iza\nTsy ho soloiko n'inona n'inona e\nFa hatramin'ny farany, ny antsika sy Ianao\nHatramin'ny farany\nTiako Ianao e,\nTena mamiko e,\nTena tiako indrindra, malalan'ny foko Ianao Jesosy o!\nTsy hatakaloko an'iza n'iza\nTsy ho soloiko n'inona n'inona e\nFa hatramin'ny farany, ny antsika sy Ianao\nHatramin'ny farany\nTsy hatakaloko an'iza n'iza\nTsy ho soloiko n'inona n'inona e\nFa hatramin'ny farany, ny antsika sy Ianao\nHatramin'ny farany\nFa hatramin'ny farany, ny antsika sy Ianao\nHatramin'ny farany\nFa hatramin'ny farany, ny antsika sy Ianao\nHatramin'ny farany",
      },
      "Prière après la communion": "Prière après la communion",
    },
    "Conclusion de la célébration": {
      Remerciements: {
        Titre: "Remerciements",
        Contenu:
          "C’est avec le cœur rempli d’amour qu’on vous remercie d’avoir partagé ce moment de joie avec nous.\nMerci d'être venus comme témoins de notre engagement, que vous partagiez notre foi ou que votre présence soit simplement un signe d'amitié.\nNotre amour nous comble d’espoir en l’avenir, on espère qu’à la fin de cette messe le vôtre sera aussi comblé que le nôtre.\nA&T",
      },
      "Bénédiction finale et Envoi": {
        Titre: "Bénédiction finale et Envoi",
        Contenu:
          "Que Dieu le Père tout-puissant vous donne sa joie et vous bénisse (dans vos enfants)\nAmen.\nQue le Fils unique de Dieu veille sur vous et vous assiste dans le bonheur et dans l’épreuve.\nAmen.\nQue l’Esprit de Dieu ne cesse de répandre son amour dans vos cœurs.\nAmen\nEt vous tous qui êtes ici réunis autour de ces nouveaux époux, que Dieu tout-puissant vous bénisse, le Père, le Fils et le Saint-Esprit.\nAmen.",
      },
      "Signature des registres": "Signature des registres",
      Quête: "Quête",
      "Chant final": {
        Titre: "Kalon Sakret Jezus",
        Contenu:
          "Jézus, a holl viskoah,\nEnnein e huès chonjet ;\nJézus, a holl viskoah,\nHui e huès me haret.\nRefrain :\nKalon Sakret Jézus,\nKalon Sakret men Doué,\nIntanet me halon\nGet tan ho karanté.\nJézus, ar er halvar,\nPé liamm ho talhé\nAriet doh er goès ?\nAtaù ho karanté.\nRefrain :\nKalon Sakret Jézus,\nKalon Sakret men Doué,\nIntanet me halon\nGet tan ho karanté.",
      },
      "Sortie musicale": "Sortie musicale sur un air de violoncelle",
    },
  },
};
