"use client";

import { EvaluateStyle } from "./styled";
import React, { useEffect, useState } from "react";
import { parseKey } from "./parseKeys";
import {
  useHorseQuery,
  useUpdateHorseMutation,
} from "../../../core/redux/api/horseApi";
import { BeatLoader } from "react-spinners";
import colors from "../../../constants/colors";
import ZoomImage from "./ZoomImage";

export default function DetailsPage({ params }: any) {
  const [state, setState] = useState({
    editor: "",
    difficulty: undefined,
    state: "",
    note: "",
  });

  const { id: horseId } = params;

  const { data: horseData, isLoading } = useHorseQuery(horseId, {
    refetchOnMountOrArgChange: true,
    skip: !horseId,
  });

  const [updateHorse] = useUpdateHorseMutation({});

  useEffect(() => {
    if (horseData) {
      const { editor, difficulty, state, note } = horseData.meta;
      setState({ editor, difficulty, state, note });
    }
  }, [horseData]);

  // on submit of the horse comment form (editor, note, difficulty etc.)
  function onSubmit(event: any) {
    event.preventDefault();

    updateHorse({
      horseId,
      data: {
        meta: state,
      },
    });
  }

  if (isLoading || !horseData) {
    return (
      <BeatLoader color={colors.primary["170"]} loading={true} size={30} />
    );
  }

  function onChange(event: React.SyntheticEvent) {
    // @ts-ignore
    setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  return (
    <EvaluateStyle>
      {/* USER */}
      <div className={"user"}>
        <h2>Benutzer</h2>
        <div className={"data-row-container"}>
          {/*user fields */}
          <div className={"data-row"}>
            <label>ID</label>
            <span>{horseData.owner.id}</span>
          </div>

          <div className={"data-row"}>
            <label>E-Mail</label>
            <span>{horseData.owner.email}</span>
          </div>

          <div className={"data-row"}>
            <label>Registriert am</label>
            <span>
              {new Date(horseData.owner.createdAt).toLocaleDateString()}
            </span>
          </div>

          <div className={"data-row"}>
            <label>Vorname</label>
            <span>{horseData.owner.firstName}</span>
          </div>

          <div className={"data-row"}>
            <label>Nachname</label>
            <span>{horseData.owner.lastName}</span>
          </div>

          <div className={"data-row"}>
            <label>Telefon</label>
            <span>{horseData.owner.phone}</span>
          </div>

          <div className={"data-row"}>
            <label>Straße</label>
            <span>{horseData.owner.street}</span>
          </div>

          <div className={"data-row"}>
            <label>PLZ</label>
            <span>{horseData.owner.postcode}</span>
          </div>

          <div className={"data-row"}>
            <label>Ort</label>
            <span>{horseData.owner.city}</span>
          </div>

          <div className={"data-row"}>
            <label>Land</label>
            <span>{horseData.owner.country}</span>
          </div>

          <div className={"data-row"}>
            <label>Newsletter</label>
            <span>
              {horseData.owner.subscribedToNewsletter ? "Ja" : "Nein"}
            </span>
          </div>

          <div className={"data-row"}>
            <label>Hat Bildrechte gewährt</label>
            <span>{horseData.owner.grantedImageRights ? "Ja" : "Nein"}</span>
          </div>

          <div className={"data-row"}>
            <label>E-Mail bestätigt</label>
            <span>{horseData.owner.emailConfirmed ? "Ja" : "Nein"}</span>
          </div>

          {/*<div className={"data-row"}>*/}
          {/*  <label>Zuletzt aktiv am</label>*/}
          {/*  <span>*/}
          {/*    {new Date(horseData.owner.last_active_at).toLocaleDateString()}*/}
          {/*  </span>*/}
          {/*</div>*/}
        </div>
      </div>

      {/* META */}
      <div className={"meta"}>
        <h2>Meta</h2>
        <form onSubmit={onSubmit}>
          <div className={"data-row-container meta-container"}>
            {/*user fields */}
            <div className={"data-row"}>
              <label>Bearbeitet von</label>
              <input
                type={"text"}
                name={"editor"}
                value={state.editor}
                onChange={onChange}
              />
            </div>

            <div className={"data-row"}>
              <label>Schwierigkeit</label>
              <input
                type={"number"}
                name={"difficulty"}
                value={state.difficulty}
                onChange={onChange}
              />
            </div>

            <div className={"data-row"}>
              <label>Status</label>
              <input
                type={"text"}
                name={"state"}
                value={state.state}
                onChange={onChange}
              />
            </div>

            {/*<div className={"data-row"}>*/}
            {/*  <label>Angebot Am</label>*/}
            {/*  <input*/}
            {/*    type={"date"}*/}
            {/*    name={"Angebot_Am"}*/}
            {/*    value={state.Angebot_Am}*/}
            {/*    onChange={onChange}*/}
            {/*  />*/}
            {/*</div>*/}

            <div className={"data-row"}>
              <label>Notiz</label>
              <textarea
                rows={10}
                // cols={40}
                name={"note"}
                value={state.note}
                onChange={onChange}
              />
            </div>
          </div>

          <button type={"submit"}>Speichern</button>
        </form>
      </div>

      {/* HORSE */}
      <div className={"horse"}>
        <h2>Pferd</h2>
        <div className={"data-row"}>
          <label>Name</label>
          <span>{horseData.name}</span>
        </div>

        <h3>Steckbrief Allgemeines</h3>
        <div className={"data-row-container"}>
          {horseData.factFileGeneral &&
            Object.keys(horseData.factFileGeneral).map((key, index) => {
              // const factFileGeneral = {
              //   yearOfBirth: factFileGeneral.Geburtsjahr,
              //       height: factFileGeneral.Groesse,
              //       weight: factFileGeneral.Gewicht,
              //       lastHoofBoots: factFileGeneral.Letzte_Hufschuhe,
              //       hoofShape: factFileGeneral.Hufform,
              //       lastHoofTrimming: factFileGeneral.Letzte_Hufbearbeitung.value,
              //       confirmedHoofTrimmingNote: factFileGeneral.Hufbearbeitung_Gelesen,
              //       terrain: factFileGeneral.Terrain.value,
              //       terrainOther: factFileGeneral.Terrain_Andere,
              // },

              // exclude fields
              // strapi does not set the database scheme to strict.. so we have deprecated keys
              // in old horses / users
              const excluded = [
                "id",
                "HufschuheFuer",
                "LetzteHufschuhe",
                "LetzteHufbearbeitung",
                "Bewertung_Letzte_Hufschuhe",
              ];
              if (excluded.includes(key)) return;

              // parse values to present
              let value = horseData.factFileGeneral[key];
              if (value && typeof value === "number") {
                value = value.toString();
              } else if (value !== null && typeof value === "boolean") {
                value = value ? "ja" : "nein";
              }

              if (key === "lastHoofBoots") {
                console.log("VAL", value);
                value =
                  value &&
                  Object.keys(value).map((key, shoeIndex) => {
                    const shoe = value[key];
                    return (
                      <div key={"shoe-" + shoeIndex + "-" + index}>
                        <label>{shoe.name}</label>
                        <span>{": " + shoe.rating.toString() + "/5 ⭐"}</span>
                      </div>
                    );
                  });
              }

              return (
                <div className={"data-row"} key={"factfile-general" + index}>
                  <label>{parseKey(key)}</label>
                  <span>{value ? value : "-"}</span>
                </div>
              );
            })}
        </div>

        <h3>Steckbrief Besonderheiten</h3>
        <div className={"data-row-container"}>
          {horseData.factFileParticularities &&
            Object.keys(horseData.factFileParticularities).map((key, index) => {
              const excluded = [
                "id",
                "Reitweise_Erweitert",
                "Woechentliche_Nutzungszeit",
                "Stellungsanomalien_Erweitert",
                "Vorerkrankungen_Erweitert",
                "Hufvorerkrankungen_Erweitert",
                "Stellungsanomalien_Fotos",
              ];
              if (excluded.includes(key)) return;

              // parse values to present
              let value = horseData.factFileParticularities[key];
              if (value && typeof value === "number") {
                value = value.toString();
              } else if (value !== null && typeof value === "boolean") {
                value = value ? "ja" : "nein";
              }

              return (
                <div
                  className={"data-row"}
                  key={"factfile-particularities" + index}
                >
                  <label>{parseKey(key)}</label>
                  <span>
                    {value && typeof value === "string" ? value : "-"}
                  </span>
                </div>
              );
            })}
        </div>

        <h3>Fotos</h3>
        <section className={"foto-section"}>
          {horseData.images &&
            Object.keys(horseData.images).map((key) => {
              if (key.startsWith("leg")) {
                const posOptions = ["fetlock", "hoofWidth", "hoofLength"];
                return (
                  <div key={"horse-pic-div-" + key}>
                    <h4>{key}</h4>
                    <div className={"image-container"}>
                      {Object.keys(horseData.images[key]).map(
                        (legKey, legIndex) => {
                          const pic =
                            horseData.images[key][posOptions[legIndex]];
                          console.log("PIC", pic);
                          return (
                            <ZoomImage
                              src={pic}
                              alt={"text"}
                              key={"horse-pic-" + key + legIndex}
                            />
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              } else if (key === "torso") {
                // torso
                const pic = horseData.images.torso;
                return (
                  <div key={"horse-pic-div" + key}>
                    <h4>Torso</h4>
                    <ZoomImage src={pic} alt={"alt text"} />
                  </div>
                );
              }
            })}
        </section>
      </div>
    </EvaluateStyle>
  );
}
