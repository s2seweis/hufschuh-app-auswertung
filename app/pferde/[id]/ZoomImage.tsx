"use client";

import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Style = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  .container img {
    //margin: 100px;
    transition: all 0.25s ease;
    cursor: zoom-in;
  }

  input[type="checkbox"]:checked ~ label > img {
    transform: scale(4);
    cursor: zoom-out;
    margin-left: 300px;
  }
`;

// @ts-ignore: Ignore the TypeScript error here
export default function ZoomImage({ src, alt = "" }) {
  const uid = nanoid();

  return (
    // @ts-ignore: Ignore TypeScript error for the next line
    <Style key={nanoid()}>
      <div className={"container"}>
        <input
          type="checkbox"
          id={uid}
        />
        <label htmlFor={uid}>
          <img src={src} alt={alt} />
        </label>
      </div>
    </Style>
  );
}
