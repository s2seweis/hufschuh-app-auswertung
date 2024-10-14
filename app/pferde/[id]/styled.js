"use client";

import styled from "styled-components";
import colors from "../../../constants/colors";
import borderRadius from "../../../constants/borderRadius";
import { spacing } from "../../../constants/spacing";
import fontSize from "../../../constants/typeScale";

export const EvaluateStyle = styled.section`
  padding: ${spacing.spaceMd} 0;

  background-color: ${colors.greys["100"]};
  min-height: 100vh;

  color: black;

  .user,
  .horse,
  .meta {
    margin: 0 ${spacing.spaceMd};
    padding: ${spacing.spaceXs};
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: ${borderRadius.small};

    h2 {
      margin: 0;
    }

    .data-row-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-template-rows: repeat(1, 1fr);
      grid-row-gap: ${spacing.space2xs};
    }

    button {
      margin-top: ${spacing.spaceSm};
      padding: ${spacing.space2xs} ${spacing.spaceXs};

      color: white;
      background-color: darkgreen;
      border-style: none;
      border-radius: ${borderRadius.small};
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: green;
        color: white;
      }
    }

    .data-row {
      display: flex;
      flex-direction: column;
      margin-top: ${spacing.spaceSm};

      label {
        //font-weight: bold;
        color: ${colors.greys["700"]};
      }

      span {
        font-weight: bold;
        //  font-size: ${fontSize.textLg};
      }
    }
  }

  .block-user-button {
    display: flex;
    flex-direction: column;

    button {
      background-color: darkred;
      color: white;

      &:hover,
      &:focus {
        background-color: red;
      }
    }
  }

  .meta-container {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)) !important;
  }

  .meta {
    .data-row {
    }

    input,
    textarea {
      width: 90%;
      padding: ${spacing.space3xs} ${spacing.space2xs};

      border-width: 1px;
      border-style: solid;
      border-color: ${colors.greys["400"]};
      border-radius: ${borderRadius.small};
    }
  }

  .horse,
  .meta {
    margin-top: ${spacing.spaceMd};

    h3 {
      margin: ${spacing.spaceLg} 0 0 0;

      color: ${colors.primary["170"]};
    }
  }

  .foto-section {
    img {
      height: 200px;
      width: 200px;
    }

    .image-container {
      display: flex;

      div + div {
        margin-left: ${spacing.spaceXs};
      }
    }
  }
`;
