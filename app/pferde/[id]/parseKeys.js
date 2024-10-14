export function parseKey(key) {
  switch (key) {
    case "terrain":
      return "Terrain";
    case "yearOfBirth":
      return "Geburtsjahr";
    case "height":
      return "Größe";
    case "weight":
      return "Gewicht";
    case "lastHoofTrimming":
      return "Letzte Hufbearbeitung";
    case "lastHoofBoots":
      return "Letzte Hufschuhe";
    case "hoofShape":
      return "Hufform";
    case "terrainOther":
      return "Terrain Andere";
    case "confirmedHoofTrimmingNote":
      return "Hufbearbeitung Gelesen";
    // fact file particularities
    case "equineType":
      return "Pferdeart";
    case "race":
      return "Rasse";
    case "raceOthers":
      return "Rasse Andere";
    case "ridingStyle":
      return "Reitstil";
    case "weeklyRidingTime":
      return "Wöchentliche Reitzeit";
    case "hasHorseShoe":
      return "hat bereits Hufschuhe";
    case "hoofPreconditions":
      return "Hufvorerkrankungen";
    case "hoofPreconditionsOther":
        return "Hufvorerkrankungen Andere";
    case "positionalAnomalies":
        return "Stellungsfehler";
    case "positionalAnomaliesOther":
        return "Stellungsfehler Andere";
    case "preconditions":
        return "Vorerkrankungen";
    case "preconditionsOther":
        return "Vorerkrankungen Andere";

    default:
      return key.replace("_", " ");
  }
}
